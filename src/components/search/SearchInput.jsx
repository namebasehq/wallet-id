import PropTypes from 'prop-types';
import cn from 'classnames';
import searchIcon from '../../assets/search.png';
import { SEARCH_PLACEHOLDER } from '../../constants';

export const SearchInput = ({ expand, onChange }) => {
  const handleChange = (e) => onChange(e.target.value);

  return (
    <div
      className={cn(
        'w-full justify-between items-center inline-flex relative',
        expand ? 'rounded-t-2xl' : 'rounded-2xl'
      )}
    >
      <input
        className={cn(
          'grow shrink basis-0 rounded-t-2xl text-neutral-600 text-base font-medium leading-tight tracking-tight p-4 border-zinc-300 focus:outline-none',
          expand ? 'rounded-t-2xl border-b' : 'rounded-2xl'
        )}
        onChange={handleChange}
        placeholder={SEARCH_PLACEHOLDER}
      />
      <div className="w-5 h-5 absolute right-4">
        <img src={searchIcon} />
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  expand: PropTypes.bool,
  onChange: PropTypes.func,
};
