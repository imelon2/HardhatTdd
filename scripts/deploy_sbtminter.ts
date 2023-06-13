import { ethers } from "hardhat";

async function main() {
    const rules = new Array(5).fill(0).map((_,i) => {return {
        tier: i,
        requirement: i*5,
        uri: `tier ${i} Carrier SBT NFT Real reRe`
    }})

    // const SBT = (await ethers.getContractFactory('SBTMinter')).interface
    // const a = SBT.encodeFunctionData('upgradeBulkCarrierRules',[rules])

    // const contract = new ethers.Contract("0x","ABI",ethers.provider)

    // const a = contract.connect(ethers.provider.getSigner()).upgradeBulkCarrierRules(rules)

    let a = "0xbdf168230000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001e0000000000000000000000000000000000000000000000000000000000000028000000000000000000000000000000000000000000000000000000000000003200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020746965722030204361727269657220534254204e4654205265616c20726552650000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020746965722031204361727269657220534254204e4654205265616c20726552650000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020746965722032204361727269657220534254204e4654205265616c20726552650000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000f00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020746965722033204361727269657220534254204e4654205265616c20726552650000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020746965722034204361727269657220534254204e4654205265616c2072655265"
    let b = "0xbdf168230000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001e0000000000000000000000000000000000000000000000000000000000000028000000000000000000000000000000000000000000000000000000000000003200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020746965722030204361727269657220534254204e4654205265616c20726552650000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020746965722031204361727269657220534254204e4654205265616c20726552650000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020746965722032204361727269657220534254204e4654205265616c20726552650000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000f00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020746965722033204361727269657220534254204e4654205265616c20726552650000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000020746965722034204361727269657220534254204e4654205265616c2072655265"
    
    console.log(a === b);
    
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
//   [[0,0,"tier 0 Carrier SBT NFT Real reRe"],[1,5,"tier 1 Carrier SBT NFT Real reRe"],[2,10,"tier 2 Carrier SBT NFT Real reRe"],[3,15,"tier 3 Carrier SBT NFT Real reRe"],[4,20,"tier 4 Carrier SBT NFT Real reRe"]]