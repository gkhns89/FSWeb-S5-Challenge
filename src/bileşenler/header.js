const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const header = document.createElement("div");
  const date = document.createElement("span");
  const h1 = document.createElement("h1");
  const tempature = document.createElement("span");

  date.classList.add("date");
  tempature.classList.add("temp");
  header.classList.add("header");

  date.textContent = tarih;
  h1.textContent = baslik;
  tempature.textContent = yazi;

  header.appendChild(date);
  header.appendChild(h1);
  header.appendChild(tempature);

  return header;
};

const headerEkleyici = (secici) => {
  const headerItem = Header("Teknoloji Zamanı", "11.11.2023", "11°C");
  const headerContainer = document.querySelector(secici);
  headerContainer.appendChild(headerItem);

  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
};

export { Header, headerEkleyici };
