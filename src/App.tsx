import React from "react";
import "./App.css";
import ConnectMetaMask from "./components/ConnectMetaMask";
import WEthBalance from "./components/WEthBalance";
import { Address } from "./types/types";
import { providers } from "ethers";

function App() {
  const [provider, setProvider] = React.useState<providers.Web3Provider|undefined>(undefined);
  const [currentAccount, setCurrentAccount] = React.useState<Address>("0x");

  return (
    <div className="App">
      <header className="App-header">
        {ConnectMetaMask(
          provider,
          setProvider,
          currentAccount,
          setCurrentAccount
        )}
        {WEthBalance(
          provider,
          currentAccount
        )}
      </header>
    </div>
  );
}

export default App;
