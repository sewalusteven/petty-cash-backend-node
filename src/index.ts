const express = require('express');
import { BackendAction, Platform, PlatformInterceptorBuilder, Result } from "@uniscale-sdk/ActorCharacter-PettyCashManagementSystem"
import { PettyCashService } from "./petty-cash";
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const initialize = async () => {
    const sessionBuilder = Platform.builder();
    const service = new PettyCashService();

    return await sessionBuilder
        .withInterceptors((i:PlatformInterceptorBuilder) => {
        service.setup(i);
        })
        .build();
}

app.use("/api/:featureId", async (req:any, res:any) => {
    const session = await initialize();
    let reqBody = req.body as BackendAction<undefined, undefined>;

    session.acceptGatewayRequest(JSON.stringify(reqBody)).then((response) => {
        res.send(response).status(200);
    }).catch((err:Result) => {
        res.send(err).status(500);
    })
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});