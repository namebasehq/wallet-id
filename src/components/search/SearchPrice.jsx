import Skeleton from 'react-loading-skeleton';
import { domainDetails } from '../../types';

export const SearchPrice = ({ details }) => {
  if (!details) {
    return <Skeleton className="w-24 h-7" />;
  }

  if (!details.isAvailable || details.priceInWei === 0n) {
    return null;
  }

  return (
    <div className="flex h-5 items-center gap-1">
      <span className="text-neutral-900 text-sm font-bold leading-normal">
        ${details.priceInDollars}
      </span>
      <span className="text-neutral-400 text-xs font-bold leading-none">
        / year
      </span>
    </div>
  );
};

SearchPrice.propTypes = {
  details: domainDetails,
};
