# Wallet.id

This is a white label template for [hns.id](https://hns.id). You can fork and modify to be used with any staked TLD

## Customization

Basic customization are in the [`constants.js`](./src/constants.js) file and the [`src/assets`](./src/assets/) folder, more specifically `avatar.png` and `brand.png`, as well as `public/favicon.svg`.

For more advanced customization, any component can be updated.

## Contracts

The contracts addresses are also in the [constants.js](/src/constants.js#L17-L23) file. First is the testnet (Optimism Sepolia), and second the mainnet (Optimism).

## Data

This project can be deployed as static website. All the data needed comes from smart contracts.

Handling the communication with the contracts can be done with a few [React hooks](https://react.dev/reference/react/hooks):

### useDomainStatus()

```jsx
const { data } = useDomainStatus({ label: 'my-sld' });

/* Returns:
{
  "isAvailable": true,
  "labelValid": true,
  "publicRegistrationOpen": false,
  "isPremium": false,
  "priceInDollars": "5.00",
  "priceInWei": "2500000000000000",
  "label": "my-sld"
}
/*
```

### useRegister()

```jsx
const register = useRegister({
  label: 'my-sld',
  priceInWei: '2500000000000000',
});

<button onClick={register}>🤝</button>;
```

`register` is an async function that will invoke Metamask (or any other wallet the user choose) and will be resolved once the user signs the transaction.

Tip: you can connect both hooks:

```jsx
const { data } = useDomainStatus({ label: 'my-sld' });
const register = useRegister(data);
```

### usePrimaryName()

```jsx
const { name, avatar } = usePrimaryName();
```

Both can be empty/null if the user hasn't defined a primary name a name yet.

## Running locally

It uses yarn, so...

```
yarn install
yarn dev
```

... should do the magic.

## GitHub Pages

As mentioned about, this project can be deployed as a static webpage, with no need for a backend like NodeJS or even Vercel, making it a great fit for GitHub pages.

After forking the project, enable **Pages** in the repository settings and update the [`CNAME`](./CNAME) file.
