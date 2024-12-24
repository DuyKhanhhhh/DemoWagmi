import { useCallback } from 'react';

const useNetworkSwitcher = () => {
    const switchNetwork = useCallback(async (chainId: number) => {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: `0x${chainId.toString(16)}` }],
            });
        } catch (error) {
            if (error.code === 4902) {
                console.error("Network not available in MetaMask, please add it.");
            } else {
                console.error("Failed to switch network:", error);
            }
        }
    }, []);

    return { switchNetwork };
};

export default useNetworkSwitcher;