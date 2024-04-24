import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { WagmiProvider } from 'wagmi';
import { optimism, optimismSepolia } from 'wagmi/chains';

import App from './App.jsx';
import {
  DEV_MODE,
  WALLET_CONNECT_APP_NAME,
  WALLET_CONNECT_PROJECT_ID,
} from './constants.js';
import { CustomAvatar } from './components/CustomAvatar.jsx';

import '@rainbow-me/rainbowkit/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: WALLET_CONNECT_APP_NAME,
  projectId: WALLET_CONNECT_PROJECT_ID,
  chains: [DEV_MODE ? optimismSepolia : optimism],
});

BigInt.prototype.toJSON = function () {
  return this.toString();
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider avatar={CustomAvatar}>
          <App />
          <ToastContainer />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
