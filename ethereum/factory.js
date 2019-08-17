//import web3 instance created inside the project
import web3 from './web3';

//import compiled version of the factory
import CampaignFactory from './build/CampaignFactory.json'

//create the contract factory instance from the address where is
//stored
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x5513b42d25Ba068bBD59D63bAe3c69d641323E0a'
);

export default instance;
