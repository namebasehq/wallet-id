import cn from 'classnames';
import PropTypes from 'prop-types';
import icon from '../assets/loading.png';

export const Button = ({ children, onClick, loading }) => (
  <button
    className={cn(
      'px-3 py-2 rounded-full justify-center flex',
      'text-white text-sm font-semibold leading-none w-24 text-center',
      loading ? 'bg-blue-400' : 'bg-blue-600'
    )}
    onClick={onClick}
    disabled={loading}
  >
    {loading ? (
      <img src={icon} alt="Loading" className="animate-spin w-4" />
    ) : (
      children
    )}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};
