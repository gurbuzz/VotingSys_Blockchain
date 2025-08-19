Voting System – Blockchain Uygulaması

Bu proje, Ethereum tabanlı akıllı kontratlarla çalışan basit bir oylama sistemidir.
Frontend (React) + Backend (Hardhat) + Ganache (lokal blockchain) kombinasyonu kullanır.

Gereksinimler

Node.js (>=16)

npm veya yarn

Ganache
 (lokal blockchain için)

MetaMask (tarayıcı cüzdanı)

Kurulum Adımları

Repoyu klonla ve bağımlılıkları yükle

git clone <repo-link>
cd VotingSys_Blockchain
npm install


Ganache’i başlat

Ganache Desktop veya CLI çalıştır.

Varsayılan RPC: http://127.0.0.1:7545

Chain ID: 1337 (bazı sürümlerde 5777)

.env dosyasını ayarla
Proje kök dizininde .env oluştur:

API_URL=http://127.0.0.1:7545
PRIVATE_KEY=<Ganache hesabının private keyi>
REACT_APP_CONTRACT_ADDRESS=<deploy sonrası çıkan adres>


⚠️ PRIVATE_KEY sadece deploy için, frontend’e sızdırma.

Akıllı kontratı deploy et

npx hardhat clean
npx hardhat compile
npx hardhat run --network VotingSys scripts/deploy.js


Deploy sonrası terminalde kontrat adresini göreceksin.
Bu adresi .env içindeki REACT_APP_CONTRACT_ADDRESS değişkenine yaz.

Frontend’i başlat

npm start


Uygulama http://localhost:3000 üzerinde açılır.

MetaMask ayarları

Ağa “Custom RPC” ekle:
RPC URL: http://127.0.0.1:7545
Chain ID: 1337

Ganache’deki hesaplardan birini MetaMask’a import et (private key ile).

Hata Notları

Eğer could not decode result data (value="0x") hatası alırsan:

Kontratın doğru ağa deploy edildiğinden emin ol (Ganache açık olmalı).

.env içindeki adres deploy çıktısıyla aynı olmalı.

ABI güncel olmalı (artifacts/contracts/Voting.sol/Voting.json → frontend’e kopyalanır).

Komut Özeti
# Derleme
npx hardhat compile

# Deploy
npx hardhat run --network VotingSys scripts/deploy.js

# Frontend
npm start
