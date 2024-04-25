import { ConnectButton } from './components/button/ConnectButton';
import brandLogo from './assets/brand.png';
import hnsLogo from './assets/hns.id.png';
import { Search } from './components/search/Search';
import {
  HERO_TEXT,
  PAGE_TITLE,
  SUB_TEXT,
  TLD,
  TWITTER_HANDLE,
} from './constants';
import { useDocumentTitle } from '@uidotdev/usehooks';
import { useAccount } from 'wagmi';

function App() {
  useDocumentTitle(PAGE_TITLE);
  const { address } = useAccount();

  return (
    <div className="h-screen flex">
      <div className="flex-col justify-between items-center flex max-w-7xl mx-auto gap-10 w-full pt-3">
        <nav className="w-full flex justify-between gap-2 px-4 sm:px-8 py-2 items-center">
          <img className="w-36" src={brandLogo} />
          <div className="flex items-center gap-8">
            {address && (
              <a
                href={`https://hns.id/account/${address}`}
                className="text-neutral-500 text-sm font-semibold uppercase tracking-wide hidden md:block hover:text-neutral-600"
              >
                My Domains
              </a>
            )}
            <ConnectButton />
          </div>
        </nav>
        <section className="flex-grow w-full flex flex-col items-center p-4 gap-4 text-center">
          <div className="text-neutral-950 text-4xl lg:text-5xl font-extrabold leading-none tracking-tight mt-2">
            {HERO_TEXT}
          </div>
          <div className="text-neutral-500 text-xl lg:text-2xl font-medium leading-normal tracking-tight">
            {SUB_TEXT}
          </div>
          <div className="w-full flex-1 pt-10 max-w-xl text-left">
            <Search />
          </div>
        </section>
        <footer className="w-full mx-auto px-4 sm:px-8 mb-4">
          <div className="border-t w-full px-3 border-neutral-300 flex flex-col sm:flex-row sm:justify-between gap-4 pt-5 pb-6">
          <ul className="flex items-center gap-8 text-neutral-500 text-[13px] font-medium uppercase">
            <li>
              <a
                className="hover:text-neutral-700"
                href={`https://twitter.com/${TWITTER_HANDLE}`}
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="hover:text-neutral-700"
                href="https://github.com/namebasehq/wallet-id"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="hover:text-neutral-700"
                href={`https://opensea.io/collection/handshake-slds?search[stringTraits][0][name]=TLD&search[stringTraits][0][values][0]=${TLD}`}
                target="_blank"
              >
                OpenSea
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div className="text-neutral-500 text-[11px] font-semibold opacity-50 uppercase">
              powered by
            </div>
            <a href="https://hns.id" target="_blank">
              <img src={hnsLogo} className="w-24" />
            </a>
          </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
