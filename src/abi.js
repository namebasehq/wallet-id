export const abi = [
  {
    type: 'function',
    name: 'getDomainDetails',
    inputs: [
      {
        name: '_buyer',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_registrationDays',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_parentHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '_label',
        type: 'string',
        internalType: 'string',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct DomainDetails',
        components: [
          {
            name: 'isAvailable',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'labelValid',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'publicRegistrationOpen',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'owner',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'expiry',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'isPremium',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'reservedAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'priceInDollars',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'priceInWei',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: '_label', internalType: 'string', type: 'string' },
      { name: '_registrationLength', internalType: 'uint256', type: 'uint256' },
      { name: '_parentNamehash', internalType: 'bytes32', type: 'bytes32' },
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'registerWithSignature',
    outputs: [],
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_addr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_coinType',
        type: 'uint256',
      },
    ],
    name: 'getName',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_addr',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_key',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_coinType',
        type: 'uint256',
      },
    ],
    name: 'getText',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
