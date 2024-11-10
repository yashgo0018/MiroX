import { bscTestnet } from "viem/chains";
import type { PrivyClientConfig } from "privy";

export const supportedChains = [bscTestnet];

export const privyAppId = "cm3a4lqf70csu31g1l485vuci";

export const privyConfig: PrivyClientConfig = {
  appearance: {
    theme: "dark",
    accentColor: "#676FFF",
    logo: "/logo.svg",
  },
  supportedChains: supportedChains,
  loginMethods: [
    "email",
    "wallet",
    "google",
    "github",
    "discord",
    "twitter",
  ],
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
  },
};
