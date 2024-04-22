import { useAccount } from 'wagmi';
import Skeleton from 'react-loading-skeleton';
import { Badge } from '../Badge';
import { domainDetails } from '../../types';

import checkMark from '../../assets/check-mark.png';

export const SearchStatus = ({ details }) => {
  const { address, isConnected } = useAccount();

  if (!details) {
    return <Skeleton className="w-20 h-7" />;
  }

  if (isConnected && details.owner === address) {
    return <img src={checkMark} className="w-6" />;
  }

  if (!details.isAvailable) {
    return <Badge variant="taken">Taken</Badge>;
  }

  if (!details.labelValid) {
    return <Badge variant="taken">Invalid Domain</Badge>;
  }

  if (!details.publicRegistrationOpen) {
    return <Badge variant="taken">Coming Soon</Badge>;
  }

  if (details.reservedAddress && details.reservedAddress !== address) {
    return (
      <Badge
        variant="premium"
        title={`Reserved for: ${details.reservedAddress}`}
      >
        Reserved
      </Badge>
    );
  }

  if (details.isPremium) {
    return <Badge variant="premium">Premium</Badge>;
  }

  return <Badge variant="success">Available</Badge>;
};

SearchStatus.propTypes = {
  details: domainDetails,
};
