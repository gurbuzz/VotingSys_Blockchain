.env dosyasını düzenle adres ve şifreleri gir 
npm install 
npx hardhat clean 
npx hardhat compile
npx hardhat run --network VotingSys scripts/deploy.js
bu kodlar çalıştıktan sonra akıllı kontrat adresini .env ve constant.js dosyasına yapıştır
npm start