import { useDebounce } from '@uidotdev/usehooks';
import { useState } from 'react';
import { SearchInput } from './SearchInput';
import { SearchStatus } from './SearchStatus';

import { TLD } from '../../constants';
import { useDomainStatus } from '../../hooks/useDomainStatus';
import { Debug } from '../Debug';
import { SearchCTA } from './SearchCTA';
import { SearchPrice } from './SearchPrice';

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
  const onChange = (term = '') => setTerm(term.toLowerCase().split('.').at(0));

  // ensure the current data is related to the final search term
  const safeData = term === data?.label ? data : undefined;

  return (
    <>
      <div className="flex-1 bg-white rounded-2xl border border-zinc-300 shadow">
        <SearchInput expand={show} onChange={onChange} />
        {show && (
          <div className="w-full p-3 bg-white rounded-b-2xl inline-flex flex-col lg:flex-row gap-2 flex-1 lg:overflow-scroll">
            <div className="flex-1 lg:w-full lg:overflow-scroll items-center gap-2 flex">
              <div
                className="text-xl font-medium leading-loose lg:w-fit overflow-scroll"
                style={{ scrollbarWidth: 'none' }}
              >
                <span className="text-neutral-950">{label}</span>
                <span className="text-neutral-400">.{TLD}</span>
              </div>

              <SearchStatus details={safeData} />
            </div>
            <div className="shrink-0 flex items-center gap-4 justify-between lg:justify-end ">
              <SearchPrice details={safeData} />
              <SearchCTA details={safeData} />
            </div>
          </div>
        )}
      </div>

      <Debug {...{ error, data }} />
    </>
  );
};
