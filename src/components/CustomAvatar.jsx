import PropTypes from 'prop-types';
import defaultAvatar from '../assets/avatar.svg';
import { usePrimaryName } from '../hooks/usePrimaryName';

export const CustomAvatar = ({ size }) => {
  const { avatar } = usePrimaryName();

  return <img src={avatar || defaultAvatar} width={size} height={size} />;
};

CustomAvatar.propTypes = {
  size: PropTypes.number,
};
