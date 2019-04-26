const HDWalletProvider = require('truffle-hdwallet-provider');

const Web3 = require('web3');

//get the compiled version of CampaignFactory
const compiledFactory = require('./build/CampaignFactory.json');

//getting contract's interface
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  //my mnemonic of my account
  'fix during road boost orient leaf myth cancel flower awful address chair',
  //url of the newtork that we want to connect
  'https://rinkeby.infura.io/v3/963d6bbb38594b9a97690be6e5891dcc'
);

const web3 = new Web3(provider);


//create a deploy function to allow async/await operations
const deploy = async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from a account 0: ', accounts[0]);

  //deploying the contract to the rinkeby network
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
      .deploy({ data: compiledFactory.bytecode})
      .send({ gas: '1000000', from: accounts[0] });


//show the address in Rinkeby where the contract was deployed
  console.log('Contract deployed to the address: ',result.options.address);

};

deploy();
