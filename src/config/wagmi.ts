import { http, createConfig } from "wagmi";
// import { bscTestnet } from "wagmi/chains";
import { injected, walletConnect, metaMask } from "wagmi/connectors";
import { defineChain } from "viem";

const trustkey = defineChain({
    id: 11968,
    name: "Trustkey",
    nativeCurrency: { name: "TRUSTKEYS TestNet", symbol: "TRUSTK", decimals: 18 },
    rpcUrls: {
        default: { http: ["https://l1testnet.trustkeys.network"] },
    },
    blockExplorers: {
        default: {
            name: "Trustkeyscan",
            url: "https://l1testnetscan.trustkeys.network",
        },
    },
});

const tBNB = defineChain({
    id: 97,
    name: "tBNB",
    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
    rpcUrls: {
        default: { http: ["https://bsc-testnet.blockpi.network/v1/rpc/public"] },
    },
    blockExplorers: {
        default: {
            name: "BSCscan",
            url: "https://testnet.bscscan.com/",
        },
    },
});

export const config = createConfig({
    chains: [trustkey, tBNB],
    connectors: [
        injected(),
        walletConnect({
            projectId: "baa8d3e9e0e8f4be5344df1462aefcf5",
        }),
        metaMask(),
    ],
    transports: {
        [trustkey.id]: http(),
        [tBNB.id]: http(),
    },
});