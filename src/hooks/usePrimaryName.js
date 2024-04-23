import { useAccount, useReadContracts } from 'wagmi';
import { abi } from '../abi';
import { PRIMARY_NAME_CONTRACT_ADDR } from '../constants';

export const usePrimaryName = () => {
  const { address } = useAccount();

  const res = useReadContracts({
    contracts: [
      {
        address: PRIMARY_NAME_CONTRACT_ADDR,
        abi: abi,
        functionName: 'getName',
        args: [address, 614n],
      },
      {
        address: PRIMARY_NAME_CONTRACT_ADDR,
        abi: abi,
        functionName: 'getText',
        args: [address, 'avatar', 614n],
      },
    ],
  });

  const name = res.data?.[0]?.result;
  const avatar = res.data?.[1]?.result;

  return { name, avatar, ...res };
};
