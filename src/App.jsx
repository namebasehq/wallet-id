import { ConnectButton } from '@rainbow-me/rainbowkit';
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

function App() {
  useDocumentTitle(PAGE_TITLE);
  return (
    <div className="bg-neutral-50 h-screen flex">
      <div className="flex-col justify-between items-center flex max-w-7xl mx-auto gap-10 w-full">
        <nav className="w-full flex justify-between gap-2 px-4 py-2">
          <img className="w-36" src={brandLogo} />
          <ConnectButton />
        </nav>
        <section className="flex-grow w-full flex flex-col items-center p-4 gap-6 text-center">
          <div className="text-neutral-950 text-4xl lg:text-5xl font-bold leading-none">
            {HERO_TEXT}
          </div>
          <div className="text-neutral-500 text-lg lg:text-2xl font-bold leading-normal">
            {SUB_TEXT}
          </div>
          <div className="w-full flex-1 pt-6  max-w-xl text-left">
            <Search />
          </div>
        </section>
        <footer className="w-full border-t px-4 py-6 flex flex-col gap-4">
          <ul className="flex gap-8 text-neutral-700 text-sm font-medium uppercase">
            <li>
              <a href={`https://twitter.com/${TWITTER_HANDLE}`}>Twitter</a>
            </li>
            <li>
              <a href="https://github.com/namebasehq/wallet-id">GitHub</a>
            </li>
            <li>
              <a
                href={`https://opensea.io/collection/handshake-slds?search[stringTraits][0][name]=TLD&search[stringTraits][0][values][0]=${TLD}`}
              >
                OpenSea
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div className="text-neutral-400 text-xs font-normal uppercase">
              powered by
            </div>
            <a href="https://hns.id">
              <img src={hnsLogo} className="w-24" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
