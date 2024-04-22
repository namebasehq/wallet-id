import { useState } from 'react';
import { useDebounce } from '@uidotdev/usehooks';
import { SearchInput } from './SearchInput';
import { SearchStatus } from './SearchStatus';

import { SearchCTA } from './SearchCTA';
import { SearchPrice } from './SearchPrice';
import { DEV_MODE, TLD } from '../../constants';
import { useDomainStatus } from '../../hooks/useDomainStatus';

export const Search = () => {
  // "term" is the value from the input (first part if it contains a ".")
  const [term, setTerm] = useState('');

  // label is the same as term, but delayed 300ms (while the user is typing)
  const label = useDebounce(term, 300);

  // data contains all the info about the domain
  const { data, failureReason } = useDomainStatus({ label });
  const error = failureReason?.cause?.shortMessage;

  // only _show_ the second line if we have a label
  const show = !!label;

  // if there's a "." (like "foo.bar"), we only use the first part (foo)
  const onChange = (term) => setTerm(term.split('.').at(0));

  // ensure the current data is related to the final search term
  const safeData = term === data?.label ? data : undefined;

  return (
    <>
      <div className="w-full bg-white rounded-2xl border border-zinc-300 shadow">
        <SearchInput expand={show} onChange={onChange} />
        {show && (
          <div className="w-full px-5 pt-3 pb-4 bg-white flex-col justify-start items-start gap-4 inline-flex rounded-b-2xl">
            <div className="self-stretch py-1 justify-between items-center inline-flex">
              <div className="rounded justify-start items-center gap-2 flex">
                <div>
                  <span className="text-neutral-950 text-xl font-medium leading-loose">
                    {label}
                  </span>
                  <span className="text-neutral-400 text-xl font-medium leading-loose">
                    .{TLD}
                  </span>
                </div>

                <SearchStatus details={safeData} />
              </div>
              <div className="justify-start items-center gap-4 flex">
                <SearchPrice details={safeData} />
                <SearchCTA details={safeData} />
              </div>
            </div>
          </div>
        )}
      </div>

      {DEV_MODE && (
        <div className="flex flex-col gap-2">
          <span className="text-red-600 font-semibold bg-yellow-300 px-4 py-2 rounded-md">
            TESTNET
          </span>
          {error && (
            <div className="p-2 text-red-600 bg-red-100 rounded-md">
              {error}
            </div>
          )}
          {data && (
            <pre className="p-2 text-gray-500 bg-gray-100 border border-gray-500 rounded-lg">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </div>
      )}
    </>
  );
};
