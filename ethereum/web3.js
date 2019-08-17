import Web3 from 'web3';

let web3 ;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //we are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  //we are on the browser or the user is not running metamask
  //creating our own currentProvider

  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/963d6bbb38594b9a97690be6e5891dcc'
  );

  web3 = new Web3(provider);

}

//export instance
export default web3;
