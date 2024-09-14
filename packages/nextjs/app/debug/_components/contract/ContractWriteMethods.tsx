import { Types } from "aptos";
import { WriteFunctionForm } from "~~/app/debug/_components/contract";
import { Contract, ContractName } from "~~/utils/scaffold-move/module";

export const ContractWriteMethods = ({ deployedContractData }: { deployedContractData: Contract<ContractName> }) => {
  if (!deployedContractData || deployedContractData.abi === undefined) {
    return null;
  }

  const functionsToDisplay = deployedContractData.abi.exposed_functions.filter((fn: Types.MoveFunction) => fn.is_entry);

  if (!functionsToDisplay.length) {
    return <>No write functions</>;
  }

  return (
    <>
      {functionsToDisplay.map((fn: Types.MoveFunction, index: number) => (
        <div key={index}>
          <WriteFunctionForm key={index} module={deployedContractData.abi!} fn={fn} write={true} />
        </div>
      ))}
    </>
  );
};
