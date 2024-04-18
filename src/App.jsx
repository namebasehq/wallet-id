import walletLogo from './assets/wallet.id.png';
import searchIcon from './assets/search.png';
import hnsLogo from './assets/hns.id.png';

function App() {
  return (
    <div className="bg-neutral-50 h-screen flex">
      <div className="flex-col justify-between items-center flex max-w-7xl mx-auto flex-1">
        <div className="flex-col justify-center items-center gap-10 flex w-full">
          <div className="h-20 p-4 justify-between items-center inline-flex w-full ">
            <img className="w-36" src={walletLogo} />
            <div className="justify-start items-center gap-6 flex ">
              <div className="px-4 py-2 bg-blue-600 rounded-2xl justify-center items-center gap-2 flex">
                <div className="text-white text-sm font-medium leading-normal">
                  Connect Wallet
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-center gap-16 flex px-4 lg:px-0">
            <div className="flex-col justify-start items-center gap-4 fle">
              <div className="self-stretch flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch text-center text-neutral-950 text-5xl font-bold leading-relaxed">
                  Own your .wallet
                </div>
                <div className="self-stretch h-10 text-center text-neutral-500 text-2xl font-bold leading-normal">
                  Decentralized domains for websites, wallets and web3
                </div>
              </div>
            </div>
            <div className="w-full bg-white rounded-2xl shadow border border-zinc-300 justify-between items-center inline-flex relative">
              <input
                className="grow shrink basis-0 text-neutral-400 text-base font-medium leading-tight tracking-tight p-5 rounded-2xl "
                placeholder="Find your .wallet"
              />
              <div className="w-5 h-5 absolute right-3">
                <img src={searchIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 border-t border-gray-200 flex-col justify-start items-center gap-6 flex w-full">
          <div className="self-stretch justify-between items-left lg:items-center inline-flex flex-col lg:flex-row gap-4">
            <div className="justify-start items-center gap-6 flex">
              <a
                className="text-neutral-700 text-sm font-medium uppercase"
                href="https://twitter.com/walletdomain"
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
                href="https://opensea.io/collection/handshake-slds?search[stringTraits][0][name]=TLD&search[stringTraits][0][values][0]=wallet"
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
