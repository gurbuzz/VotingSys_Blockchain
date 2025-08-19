import 'dotenv/config';
import "@nomicfoundation/hardhat-toolbox";

const { API_URL, PRIVATE_KEY } = process.env;

export default {
   solidity: "0.8.24",
   networks: {
      hardhat: {},
      VotingSystem: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }  
   },
}