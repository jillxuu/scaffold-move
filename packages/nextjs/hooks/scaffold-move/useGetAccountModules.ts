import { ResponseError, withResponseError } from "../client";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useTargetNetwork } from "./useTargetNetwork";
import { AptosClient, Types } from "aptos";

function getAccountModules(
  requestParameters: { address: string; ledgerVersion?: number },
  nodeUrl: string,
): Promise<Types.MoveModuleBytecode[]> {
  const client = new AptosClient(nodeUrl);
  const { address, ledgerVersion } = requestParameters;
  let ledgerVersionBig;
  if (ledgerVersion !== undefined) {
    ledgerVersionBig = BigInt(ledgerVersion);
  }
  return withResponseError(client.getAccountModules(address, { ledgerVersion: ledgerVersionBig }));
}

export function useGetAccountModules(address: string): UseQueryResult<Types.MoveModuleBytecode[], ResponseError> {

  const network = useTargetNetwork();
  let state = {network_value: ""};
  // if (network.targetNetwork.network === Network.CUSTOM) {
  state.network_value = network.targetNetwork.fullnode ? network.targetNetwork.fullnode : "" ;
  // } else {

  // }

  return useQuery<Array<Types.MoveModuleBytecode>, ResponseError>({
    queryKey: ["accountModules", { address }, state.network_value],
    queryFn: () => getAccountModules({ address }, state.network_value),
  });
}

