"use client";
import ProductCard from "@/components/ProductCard";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import useNetworkSwitcher from '../components/useNetworkSwitcher';
import { listProduct } from "@/redux/Slices/ProductSlice";
import { Spinner } from 'react-bootstrap';

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

const Home: React.FC = () => {
  const { switchNetwork } = useNetworkSwitcher(); // Sử dụng hook
  const [selectedChainId, setSelectedChainId] = useState<number>(1);
  const handleNetworkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newChainId = Number(event.target.value);
    setSelectedChainId(newChainId);
    switchNetwork(newChainId);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch])

  const { items, search, loading, error } = useSelector((state) => state.products);

  const filteredProducts = items;

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <p>{error}</p>;
  }
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
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} chainId={selectedChainId} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;