import { useAccount, useSimulateContract, useWriteContract } from 'wagmi';
import { useQuery } from '@tanstack/react-query';
import { namehash } from 'viem';
import { DEV_MODE, REGISTER_CONTRACT_ADDR, TLD } from '../constants';
import { abi } from '../abi';

const HashZero =
  '0x0000000000000000000000000000000000000000000000000000000000000000';

const fetchSignature = async (buyer, subdomainHash, nonce) => {
  const params = new URLSearchParams({
    buyer,
    subdomainHash,
    nonce: nonce.toString(),
  });

  const host = DEV_MODE ? 'hnst.id' : 'hns.id';

  return fetch(
    `https://${host}/api/gateway/registration?${params.toString()}`,
    {
      headers: {
        origin: window.location.origin,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.signature);
};

export const useRegister = ({
  label,
  priceInWei,
  years = 1,
  nonce = 0,
} = {}) => {
  const tldHash = namehash(TLD);
  const nameHash = namehash(`${label}.${TLD}`);
  const registrationDays = BigInt(years * 365);

  const { address, isConnected } = useAccount();

  const { data: signature } = useQuery({
    queryKey: ['signature', address, nameHash, nonce.toString()],
    queryFn: () => fetchSignature(address, nameHash, nonce),
    enabled: isConnected,
  });

  const { data, failureReason } = useSimulateContract({
    abi,
    address: REGISTER_CONTRACT_ADDR,
    functionName: 'registerWithSignature',
    account: address,
    value: priceInWei,
    enabled: !!signature && !!priceInWei && !!address,
    args: [
      label,
      registrationDays,
      tldHash,
      address,
      signature?.v ?? 0,
      signature?.r ?? HashZero,
      signature?.s ?? HashZero,
    ],
  });

  const { writeContractAsync } = useWriteContract();
  return () => {
    if (failureReason && !data?.request) {
      return Promise.reject(failureReason);
    }

    return writeContractAsync(data?.request);
  };
};
