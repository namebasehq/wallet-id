import PropTypes from 'prop-types';
import { ConnectButton as RainbowBtn } from '@rainbow-me/rainbowkit';
import { Button } from './Button';
import defaultAvatar from '../../assets/avatar.svg';
import { usePrimaryName } from '../../hooks/usePrimaryName';

const Custom = ({
  account,
  chain,
  openAccountModal,
  openChainModal,
  openConnectModal,
}) => {
  const { name, avatar } = usePrimaryName();
  const connected = account && chain;

  if (!connected) {
    return <Button onClick={openConnectModal}>Connect Wallet</Button>;
  }

  if (chain.unsupported) {
    return (
      <Button
        onClick={openChainModal}
        type="button"
        className="bg-red-600 whitespace-nowrap"
      >
        Wrong network
      </Button>
    );
  }

  return (
    <button
      className="p-1 bg-white rounded-lg shadow justify-start items-center inline-flex gap-1 cursor-pointer hover:scale-105 transition duration-200"
      onClick={openAccountModal}
    >
      <div className="text-sky-950 font-semibold hidden md:block pl-1">
        {account.displayBalance}
      </div>
      <div className="px-1.5 py-1 bg-neutral-100 rounded-lg justify-end items-center gap-1.5 flex">
        <img
          alt={name}
          src={avatar || account.ensAvatar || defaultAvatar}
          className="w-6 h-6  rounded-full overflow-hidden"
        />

        <div className="text-neutral-900 font-semibold">
          {name || account.ensName || account.displayName}
        </div>
      </div>
    </button>
  );
};

Custom.propTypes = {
  account: PropTypes.object,
  chain: PropTypes.object,
  openAccountModal: PropTypes.func,
  openChainModal: PropTypes.func,
  openConnectModal: PropTypes.func,
};

export const ConnectButton = () => {
  return <RainbowBtn.Custom>{Custom}</RainbowBtn.Custom>;
};
