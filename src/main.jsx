import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiProvider } from 'wagmi';
import { optimism } from 'wagmi/chains';
import App from './App.jsx';

import '@rainbow-me/rainbowkit/styles.css';
import './index.css';
import { CustomAvatar } from './CustomAvatar.jsx';

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'Wallet.id',
  projectId: 'YOUR_PROJECT_ID',
  chains: [optimism],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider avatar={CustomAvatar}>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
