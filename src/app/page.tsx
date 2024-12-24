"use client";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import useNetworkSwitcher from '../components/useNetworkSwitcher';

interface Product {
  id: number;
  product: string;
  price: number;
  image: string;
}

const networks = [
  { name: 'Ethereum Mainnet', chainId: 1 },
  { name: 'Ropsten Testnet', chainId: 3 },
  { name: 'Sepolia Testnet', chainId: 11155111 },
  { name: 'Binance Smart Chain', chainId: 56 },
  { name: 'Polygon', chainId: 137 },
  { name: 'tBNB', chainId: 97 },
  { name: 'Trustkey', chainId: 11968 },
];

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { switchNetwork } = useNetworkSwitcher(); // Sử dụng hook

  const getProducts = async () => {
    const response = await fetch(`https://67566b3811ce847c992cbbfc.mockapi.io/product`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: Product[] = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [selectedChainId, setSelectedChainId] = useState<number>(1); // Mặc định là Ethereum Mainnet

  const handleNetworkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newChainId = Number(event.target.value);
    setSelectedChainId(newChainId);
    switchNetwork(newChainId); // Gọi switchNetwork khi thay đổi mạng
  };

  return (
    <>
      <Header />
      <h1 className="text-center mt-2 mb-3">Product List</h1>
      <label>
        Chọn Mạng:
        <select onChange={handleNetworkChange} value={selectedChainId}>
          {networks.map(network => (
            <option key={network.chainId} value={network.chainId}>
              {network.name}
            </option>
          ))}
        </select>
      </label>
      <div className="container">
        <div className="row mt-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} chainId={selectedChainId} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;