import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

export type Chain = {
  id: string;
  name: string;
  network: Network;
  fullnode?: string;
  indexer?: string;
  faucet?: string;
};

type Chains = {
  [key: string]: Chain;
};

export const defaultChains: Chains = {
  m1_devnet: {
    id: "m1_devnet",
    name: "M1 Devnet",
    network: Network.CUSTOM,
    fullnode: "https://aptos.devnet.m1.movementlabs.xyz",
    indexer: "https://indexer.devnet.m1.movementlabs.xyz/",
    faucet: "https://faucet2.movementlabs.xyz",
  },
  m1_testnet: {
    id: "m1_testnet",
    name: "M1 Testnet",
    network: Network.CUSTOM,
    fullnode: "https://aptos.testnet.suzuka.movementlabs.xyz/v1",
    indexer: "https://indexer.testnet.m1.movementlabs.xyz/",
    faucet: "https://faucet.testnet.suzuka.movementlabs.xyz/",
  },
  aptos_testnet: {
    id: "testnet",
    name: "Aptos Testnet",
    network: Network.TESTNET,
  },
};
