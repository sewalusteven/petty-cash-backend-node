import { Patterns } from '@uniscale-sdk/ActorCharacter-PettyCashManagementSystem/sdk/ProductTeamUniscale/PettyCashService/Patterns'
import { PlatformInterceptorBuilder, FeatureContext, Result } from '@uniscale-sdk/ActorCharacter-PettyCashManagementSystem';
import { ForwardingSession } from '@uniscale-sdk/ActorCharacter-PettyCashManagementSystem/utilisation/level/forwarding-session';
import { Patterns as ProductTeamUniscalePettyCashServicePatterns } from '@uniscale-sdk/ActorCharacter-PettyCashManagementSystem/sdk/ProductTeamUniscale/PettyCashService/Patterns'
import { NewTransactionInput as ProductTeamUniscalePettyCashServicePettyCashServiceNewTransactionInput } from '@uniscale-sdk/ActorCharacter-PettyCashManagementSystem/sdk/ProductTeamUniscale/PettyCashService/PettyCashService/NewTransactionInput'
import { TransactionFull as ProductTeamUniscalePettyCashServicePettyCashServiceTransactionFull } from '@uniscale-sdk/ActorCharacter-PettyCashManagementSystem/sdk/ProductTeamUniscale/PettyCashService/PettyCashService/TransactionFull'
import { DateRange as ProductTeamUniscalePettyCashServicePettyCashServiceDateRange } from '@uniscale-sdk/ActorCharacter-PettyCashManagementSystem/sdk/ProductTeamUniscale/PettyCashService/PettyCashService/DateRange'
import { GetTransactions } from '@uniscale-sdk/ActorCharacter-PettyCashManagementSystem/sdk/ProductTeamUniscale/PettyCashService_1_0/ServiceToModule/PettyCashService/ViewStatementWithSummary';
import { NewTransaction } from '@uniscale-sdk/ActorCharacter-PettyCashManagementSystem/sdk/ProductTeamUniscale/PettyCashService_1_0/ServiceToModule/PettyCashService/CaptureTransaction';

export class PettyCashService {
setup(builder: PlatformInterceptorBuilder): void {
  builder.interceptRequest(GetTransactions.featureId,GetTransactions.handleAsync(this.getTransactionsHandler))
  builder.interceptMessage(NewTransaction.featureId,NewTransaction.handleAsync(this.newTransactionHandler))
}

getTransactionsHandler(input?: ProductTeamUniscalePettyCashServicePettyCashServiceDateRange,ctx?: FeatureContext): Promise<Result<ProductTeamUniscalePettyCashServicePettyCashServiceTransactionFull[]>> {
  /** 
   * Using the Uniscale SDK to implement a request interceptor handler In Uniscale the Result object is
   * used to return responses. For a successful response the Ok method is used. For validation errors
   * the Result.badRequest method is used and for other errors the Result.internalServerError method is
   * used
   * 
   * The endpoint functionality to implement
   * View Statement with Summary
   *   
   *   The following existing class is used for input:
   *     DateRange from import { DateRange } from '@uniscale-sdk/ActorCharacter-PettyCashService/sdk/ProductTeamUniscale/PettyCashService/PettyCashService/DateRange'
   *       startDate: string
   *       endDate: string
   *   
   *   The following existing class is used for output:
   *     TransactionFull from import { TransactionFull } from '@uniscale-sdk/ActorCharacter-PettyCashManagementSystem/sdk/ProductTeamUniscale/PettyCashService/PettyCashService/TransactionFull'
   *       # The type property is a Terminology (id: 8373ca36-1d00-493f-ae23-af182bf452e5) with the following codes:
   *       #   Credit - Credit
   *       #   Debit - Debit
   *       type: string
   *       transactionIdentifier: string
   *       createdAt: Date
   *       item: string
   *       amount: number
   */
  const resultValue = [ProductTeamUniscalePettyCashServicePettyCashServiceTransactionFull.samples().defaultSample()]
  return Promise.resolve(Result.ok(resultValue))
}

newTransactionHandler(input?: ProductTeamUniscalePettyCashServicePettyCashServiceNewTransactionInput,ctx?: FeatureContext): Promise<Result> {
  /** 
   * Using the Uniscale SDK to implement a request interceptor handler In Uniscale the Result object is
   * used to return responses. For a successful response the Ok method is used. For validation errors
   * the Result.badRequest method is used and for other errors the Result.internalServerError method is
   * used
   * 
   * To validate terminologies one of the following overloads can be used (all async):
   *   validateTerminologyCode(terminology: string, codeToValidate: string): Promise<Result>
   *   validateTerminology(terminology: string, codesToValidate: string[]): Promise<Result>
   *   validateTerminologyCodes(codesToValidate: CodeInTerminology[]): Promise<Result>
   * 
   * The endpoint functionality to implement
   * Capture Transaction
   *   
   *   The following existing class is used for input:
   *     NewTransactionInput from import { NewTransactionInput } from '@uniscale-sdk/ActorCharacter-PettyCashService/sdk/ProductTeamUniscale/PettyCashService/PettyCashService/NewTransactionInput'
   *       amount: number
   *       createdAt: Date
   *       # The type property is a Terminology (id: 8373ca36-1d00-493f-ae23-af182bf452e5) with the following codes:
   *       #   Credit - Credit
   *       #   Debit - Debit
   *       type: string
   *       item: string
   */
  return Promise.resolve(Result.ok(undefined))
}
}