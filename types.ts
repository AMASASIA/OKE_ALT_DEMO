import { BrowserProvider, Signer } from "ethers";

export interface Item {
  id: string;
  image: string;
  name: string;
  description: string;
  transcript: string;
  tokenId: number;
  contractAddress: string;
  isSbt: boolean;
  external_url: string;
}

export interface Web3State {
    address: string | null;
    chainId: number | null;
    provider: BrowserProvider | null;
    signer: Signer | null;
}

// This type defines the full state of the creator component
// that needs to be persisted to survive a page reload.
export interface CreatorState {
    file: File;
    transcript: string;
    optionsChecked: boolean;
}