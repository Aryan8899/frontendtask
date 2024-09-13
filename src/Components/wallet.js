import React, { useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import axios from "axios";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const providerOptions = {};

const ConnectWalletButton = () => {
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);

  // Covalent API key (Get your own API key from Covalent)
  const COVALENT_API_KEY = "cqt_rQpmjYW4RjDK6R67JG4TFdG9WxXR";

  // Function to connect wallet
  async function connectWallet() {
    try {
      setLoading(true);

      // Initialize Web3Modal
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      // Connect wallet and get provider
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.BrowserProvider(web3ModalInstance);

      // Get wallet accounts (addresses)
      const signer = await web3ModalProvider.getSigner();
      const address = await signer.getAddress();

      // Fetch token balances and send data to backend
      const balances = await fetchTokenBalances(address);

      // Send wallet data to backend
      await saveWalletData(address, balances);

      // Update connection status
      setConnected(true);

      console.log("Wallet connected:", address);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    } finally {
      setLoading(false);
    }
  }

  // Function to fetch token balances using Covalent API
  async function fetchTokenBalances(address) {
    try {
      const chainId = 1; // For Ethereum mainnet
      const response = await axios.get(
        `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?key=${COVALENT_API_KEY}`
      );

      const balances = response.data.data.items;
      console.log("Token Balances:", balances);
      return balances;
    } catch (error) {
      console.error("Error fetching token balances:", error);
      return [];
    }
  }

  // Function to send wallet data to backend
  async function saveWalletData(address, balances) {
    try {
      // Construct balance data (modify as needed)
      const balance = balances.length > 0 ? balances[0].balance : "0";

      const response = await axios.post("http://localhost:5001/api/wallet", {
        address,
        balance,
      });

      if (response.status === 200) {
        console.log("Wallet data saved to backend.");
      } else {
        console.error("Unexpected response from backend:", response);
      }
    } catch (error) {
      console.error("Error saving wallet data to backend:", error);
    }
  }

  return (
    <button
      onClick={connectWallet}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 w-50 py-1/3 px-3 rounded-full shadow-lg transition duration-300 text-sm flex flex-item-left ${
        connected ? "bg-green-600 hover:bg-green-700" : ""
      }`}
      disabled={loading}
    >
      <FontAwesomeIcon
        icon={faWallet}
        className={`mr-1 py-3 ${loading ? "animate-spin" : ""} text-lg`}
      />
      <span className="hidden sm:inline py-2.5">
        {loading ? "Connecting..." : connected ? "Connected" : "Connect Wallet"}
      </span>
    </button>
  );
};

export default ConnectWalletButton;
