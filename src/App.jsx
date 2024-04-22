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
      <div className="flex-col justify-between items-center flex max-w-7xl mx-auto flex-1">
        <div className="flex-col justify-center items-center gap-10 flex w-full">
          <div className="h-20 p-4 justify-between items-center inline-flex w-full ">
            <img className="w-36" src={brandLogo} />
            <div className="justify-start items-center gap-6 flex ">
              <ConnectButton />
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-16 flex px-4 lg:px-0">
            <div className="flex-col justify-start items-center gap-4 fle">
              <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch text-center text-neutral-950 text-5xl font-bold leading-relaxed">
                  {HERO_TEXT}
                </div>
                <div className="self-stretch h-10 text-center text-neutral-500 text-2xl font-bold leading-normal">
                  {SUB_TEXT}
                </div>
              </div>
            </div>
            <Search />
          </div>
        </div>
        <div className="px-4 py-6 border-t border-gray-200 flex-col justify-start items-center gap-6 flex w-full">
          <div className="self-stretch justify-between items-left lg:items-center inline-flex flex-col lg:flex-row gap-4">
            <div className="justify-start items-center gap-6 flex">
              <a
                className="text-neutral-700 text-sm font-medium uppercase"
                href={`https://twitter.com/${TWITTER_HANDLE}`}
              >
                Twitter
              </a>
              <a
                className="text-neutral-700 text-sm font-medium uppercase"
                href="https://github.com/namebasehq/wallet-id"
              >
                GitHub
              </a>
              <a
                className="text-neutral-700 text-sm font-medium uppercase"
                href={`https://opensea.io/collection/handshake-slds?search[stringTraits][0][name]=TLD&search[stringTraits][0][values][0]=${TLD}`}
              >
                Opensea
              </a>
            </div>
            <div className="justify-start items-center gap-4 flex">
              <div className="justify-start items-center gap-4 flex">
                <div className="text-neutral-400 text-xs font-normal uppercase">
                  powered by
                </div>
                <a href="https://hns.id">
                  <img src={hnsLogo} className="w-24" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
