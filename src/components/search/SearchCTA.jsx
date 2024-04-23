import { ConnectButton } from '../button/ConnectButton';
import Skeleton from 'react-loading-skeleton';
import { useAccount } from 'wagmi';
import { TLD } from '../../constants';
import { domainDetails } from '../../types';
import { RegisterButton } from '../button/RegisterButton';

export const SearchCTA = ({ details }) => {
  const { address, isConnected } = useAccount();

  if (!details) {
    return <Skeleton className="w-24 h-7" />;
  }

  if (isConnected && details.owner === address) {
    const url = `https://hns.id/domain/${details.label}.${TLD}`;
    return (
      <a
        className=" px-3 py-2 bg-white rounded-full border border-blue-600 justify-center items-center gap-2.5 inline-flex w-full lg:w-auto"
        href={url}
      >
        <div className="text-blue-600 text-sm font-semibold leading-none">
          Manage Domain
        </div>
      </a>
    );
  }

  const canRegister =
    details.publicRegistrationOpen &&
    details.priceInWei > 0n &&
    details.labelValid &&
    details.isAvailable &&
    (!details.reservedAddress || details.reservedAddress === address);

  if (!canRegister) {
    return null;
  }

  if (!isConnected) {
    return <ConnectButton />;
  }

  return <RegisterButton details={details} />;
};

SearchCTA.propTypes = {
  details: domainDetails,
};
