"use client";

import { useConnect, useAccount, useWriteContract, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { useState } from 'react';
import { sepolia } from 'viem/chains';

export const PayButton = ({ price, chainId }: { price: number; chainId: number }) => {

    const { connectAsync } = useConnect()
    const { address } = useAccount()
    const { writeContractAsync } = useWriteContract()
    const [started, setStarted] = useState(false)
    const [errors, setErrors] = useState()
    const [completed, setCompleted] = useState(false)
    const handlePayment = async () => {

        try {
            setErrors('')
            setStarted(true)
            if (!address) {
                await connectAsync({ chainId: chainId, connector: injected() })
            }

            const data = await writeContractAsync({
                chainId: chainId,
                address: '0x49fA659D746DA137388618670F54A7Ee8a5173B2',
                functionName: 'transfer',
                abi: [{
                    "inputs": [
                        { "internalType": "address", "name": "recipient", "type": "address" },
                        { "internalType": "uint256", "name": "amount", "type": "uint256" }
                    ],
                    "name": "transfer",
                    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }],
                args: [
                    '0x0e890800061A283Ca1359fA251824DA1f6581dDf',
                    price * 1000000,
                ],
            })
            setCompleted(true)
            console.log(data)
        } catch (err) {
            console.log(err)
            setStarted(false)
            setErrors("Payment failed. Please try again.")
        }
    }

    return (
        <>

            {!completed && (

                <button
                    disabled={started}
                    className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handlePayment}
                >

                    {started ? "Confirming..." : "Pay Now"}
                </button>
            )}
            {completed && <p className='text-stone-800 mt-2 bg-green-200 rounded-md text-sm py-2 px-4'>Thank you for your payment.</p>}
            {errors && <p className='text-stone-800 mt-2 bg-red-200 rounded-md text-sm py-2 px-4'>{errors}</p>}
        </>
    )
}