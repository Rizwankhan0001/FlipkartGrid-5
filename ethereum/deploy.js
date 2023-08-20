const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledRecord = require('./build/Record.json');

//Link to rinkeby network by using Infura and providing seed phrase of metamask wallet
const provider = new HDWalletProvider(
    'crucial alley attract dad vote noodle pig amount weird always argue offer',
    'https://polygon-mumbai.g.alchemy.com/v2/XFYOokDzI2G6RM0x1q-DoFXIEUTn1kGX',
);

const web3 = new Web3(provider);

const deploy = async () => {
    try {
        const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);
   console.log(accounts);
    //Deploy contract to rinkeby network
    const result = await new web3.eth.Contract(JSON.parse(compiledRecord.interface))
        .deploy({ data: compiledRecord.bytecode })
        .send({ gas: '10000000', from: accounts[0] });

    //Display the address of the contract 
    console.log('Contract deployed to', result.options.address);

    } catch (error) {
        console.log(error);
    }
    //Always go to record.js after updating solidity code
};

deploy();