import React, { useEffect } from "react";
import { BigNumber, ethers, providers } from "ethers";
import { Address } from "../types/types";
import { ERC20_ABI } from "../constants/ERC20ABI";
import { ERC20 } from "../types/ERC20";

function WEthBalance(provider: providers.Web3Provider|undefined, userAddress: Address) {
  const [balance, setBalance] = React.useState<BigNumber>(BigNumber.from(0));

  async function getBalance(contract: ERC20) {
    console.log("k",userAddress,await contract.balanceOf(userAddress))
    setBalance(await contract.balanceOf(userAddress));
  }
  useEffect(() => {
    if (provider && userAddress!=="0x") {
      // DAI Address
      // let contractAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
      // WETH Address
      let contractAddress = "0xc778417E063141139Fce010982780140Aa0cD5Ab"


      // We connect to the Contract using a Provider, so we will only
      // have read-only access to the Contract
      let contract: ERC20 = new ethers.Contract(
        contractAddress,
        ERC20_ABI,
        provider
      ) as ERC20;
      getBalance(contract);
    }
  }, [provider,userAddress]);
  return (<div>{`Balance : ${Number(balance)/10**18} WETH`}</div>);
}

export default WEthBalance;
