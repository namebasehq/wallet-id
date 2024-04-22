import PropTypes from 'prop-types';

export const domainDetails = PropTypes.shape({
  label: PropTypes.string.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  labelValid: PropTypes.bool.isRequired,
  publicRegistrationOpen: PropTypes.bool.isRequired,
  owner: PropTypes.string,
  expiry: PropTypes.instanceOf(Date),
  isPremium: PropTypes.bool.isRequired,
  reservedAddress: PropTypes.string,
  priceInDollars: PropTypes.string.isRequired,
  priceInWei: PropTypes.bigint.isRequired,
});
