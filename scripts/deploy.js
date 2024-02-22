async function main() {
  // "Voting" adlı akıllı kontrat iletisimi
  const Voting = await ethers.getContractFactory("Voting");

  // "Voting" kontratını  adayları ve 90 gün oy süresi ile dağıt
  const Voting_ = await Voting.deploy(["Erdinç AVAROĞLU", "Hamza EROL", "Volkan YAMAÇLI", "Ramazan AKKURT"], 90);
  
  // Dağıtılan kontratın adresini konsola yazdır
  console.log("Kontrat adresi:", Voting_.address);
}
  
// main fonksiyonunu çalıştır ve başarı durumunda çıkış kodunu 0 olarak ayarla
main()
  .then(() => process.exit(0))
  // Hata durumunda hatayı konsola yazdır ve çıkış kodunu 1 olarak ayarla
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
