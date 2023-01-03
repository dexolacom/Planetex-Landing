import { AbiItem } from 'web3-utils';
import saleContractAbi from '../constants/saleContractAbi.json'
import Web3 from 'web3';

export const checkRPC = async(chainId: number | undefined) => {
  let setNumber = 1
  let httpProvider: string = "0"
  let rpc: object | boolean = false

  while (setNumber < 6) {
    if (rpc) {
      break;
    }
    try {
      httpProvider = await getProviders(chainId, setNumber)
      rpc = await fetch(httpProvider)
    } catch (error) {
      setNumber = setNumber + 1
    }
  }

  return httpProvider
}

export const getProviders = async (chainId: number | undefined, setNumber: number) => {
  const providers = {
        5: 'https://eth-goerli.nodereal.io/v1/8a4432e42df94dcca2814fde8aea2a2e',
        97: 'https://bsc-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
        56: 'https://bsc-dataseed1.binance.org',
        1: 'https://api.mycryptoapi.com/eth'
      }
  const RPCset = {
    1:  {
          5: 'https://eth-goerli.nodereal.io/v1/8a4432e42df94dcca2814fde8aea2a2e',
          97: 'https://bsc-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
          56: 'https://bsc-dataseed1.binance.org',
          1: 'https://api.mycryptoapi.com/eth'
        },
    2: {
          5: 'https://eth-goerli.g.alchemy.com/v2/demo',
          97: 'https://bsc-testnet.public.blastapi.io',
          56: 'https://bsc-mainnet.public.blastapi.io',
          1: 'https://eth-mainnet.public.blastapi.io'
        },
    3:  {
          5: 'https://eth-goerli.public.blastapi.io',
          97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
          56: 'https://bsc-mainnet.public.blastapi.io',
          1: 'https://eth-rpc.gateway.pokt.network'
        },
    4:  {
          5: 'https://eth-goerli.public.blastapi.io',
          97: 'https://data-seed-prebsc-2-s1.binance.org:8545/',
          56: 'https://bsc-mainnet.public.blastapi.io',
          1: 'https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79'
        },
    5:  {
          5: 'https://eth-goerli.public.blastapi.io',
          97: 'http://data-seed-prebsc-1-s2.binance.org:8545/',
          56: 'https://bsc-mainnet.public.blastapi.io',
          1: 'https://eth-mainnet.g.alchemy.com/v2/demo'
        }
  }
  return RPCset[setNumber as keyof typeof RPCset][chainId as keyof typeof providers] ?? console.error('chainId is undefined')
}

export const getTokenSaleContractAddress = (chainId: number | undefined) => {
  const addresses = {
    //1: '0xbcd9482dE62E7705cC4C70F8314eDA251127C699',
    // 1: '0x13b161bCDCfD9850c8DddfFCB90185e4F714A47B',
    1: '0x003b3012ea7DEC7A539fD1617D7BF3138928dF19',
    5: '0x20f5072712D12C4d3c0f796c34dceCd1f1C59d4B',
    //56: '0xbcd9482dE62E7705cC4C70F8314eDA251127C699',
    // 56: '0xC4F3b78036b92AFaC1684b719d8184655978c098',
    56: '0xAF69c3f90EF58c47d43B645b20c8625Ae9426fd7',
    97: '0x42D2278483A4794200F207251d4204879A3412dd',
  }
  return addresses[chainId as keyof typeof addresses] ?? console.error('chainId is undefined')
};

export const getTokenSaleContract = async(chainId: number | undefined) => {
  const httpProvider: string = await checkRPC(chainId)
  
  const web3 = new Web3(new Web3.providers.HttpProvider(httpProvider))
  return new web3.eth.Contract(saleContractAbi as AbiItem[], getTokenSaleContractAddress(chainId))
}