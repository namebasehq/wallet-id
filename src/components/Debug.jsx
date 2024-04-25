import { DEV_MODE } from '../constants';
import PropTypes from 'prop-types';

export const Debug = ({ error, data }) => {
  if (!DEV_MODE) return;

  return (
    <div className="flex flex-col gap-2 mt-10 text-left">
      <span className="text-black font-semibold bg-yellow-300 px-4 py-2 rounded-md">
        TESTNET
      </span>
      {error && (
        <div className="p-2 text-red-600 bg-red-100 rounded-md">{error}</div>
      )}
      {data && (
        <pre className="p-2 text-gray-500 bg-gray-100 ring-1 ring-gray-400 rounded-md overflow-y-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

Debug.propTypes = {
  error: PropTypes.any,
  data: PropTypes.any,
};
