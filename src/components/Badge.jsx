import cn from 'classnames';
import PropTypes from 'prop-types';

export const Badge = ({ children, variant, title }) => (
  <div
    title={title}
    className={cn(
      'px-3 py-2 bg-opacity-10 rounded-2xl justify-center items-center gap-2 flex text-xs font-semibold leading-none',
      {
        'bg-emerald-500 text-emerald-500': variant === 'success',
        'bg-amber-500 text-amber-500': variant === 'premium',
        'bg-neutral-500 text-neutral-500': variant === 'taken',
      }
    )}
  >
    {children}
  </div>
);

Badge.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['success', 'premium', 'taken']),
  title: PropTypes.string,
};
