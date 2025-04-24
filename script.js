function hesapla() {
  const adet = parseFloat(document.getElementById("adet").value);
  const birimFiyat = parseFloat(document.getElementById("birimFiyatInput").value);
  const manuelIndirim = parseFloat(document.getElementById("indirimInput").value);
  const kdvEkle = document.getElementById("kdvToggle").value === "evet";
  const kdvOrani = 20;

  // Otomatik indirim oranı
  let otomatikIndirim = 0;
  if (adet >= 5000) {
    otomatikIndirim = 10;
  } else if (adet >= 2000) {
    otomatikIndirim = 8;
  } else if (adet >= 1000) {
    otomatikIndirim = 4;
  }

  const toplamIndirimOrani = manuelIndirim + otomatikIndirim;

  const birimFiyatIndirimli = birimFiyat * (1 - toplamIndirimOrani / 100);
  let toplam = adet * birimFiyatIndirimli;
  if (kdvEkle) {
    toplam *= (1 + kdvOrani / 100);
  }

  document.getElementById("birim").textContent = birimFiyatIndirimli.toFixed(2) + " TL";
  document.getElementById("toplam").textContent = toplam.toFixed(2) + " TL";
  document.getElementById("otomatikIndirim").textContent = otomatikIndirim.toFixed(0) + " %";
  document.getElementById("toplamIndirim").textContent = toplamIndirimOrani.toFixed(0) + " %";
  
}

function proformaOlustur() {
  hesapla();

  const urun = document.getElementById("urunSecimi").value;
  const adet = document.getElementById("adet").value;
  const birimFiyat = parseFloat(document.getElementById("birimFiyatInput").value).toFixed(2);
  const toplam = document.getElementById("toplam").textContent;
  const birimFiyatIndirimli = document.getElementById("birim").textContent;

  const firmaAdi = document.getElementById("firmaAdi").value;
  const vergino = document.getElementById("vergino").value;
  const vergidairesi = document.getElementById("vergidairesi").value;
  const adres = document.getElementById("adres").value;
  const yetkili = document.getElementById("yetkili").value;
  const eposta = document.getElementById("eposta").value;
  const telefon = document.getElementById("telefon").value;
  const kdvEkle = document.getElementById("kdvToggle").value === "evet";
  const kdvDurumu = kdvEkle ? "KDV DAHİL" : "KDV HARİÇ";

  const bugun = new Date().toLocaleDateString('tr-TR');

  const proformaHTML = `
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        table { border-collapse: collapse; width: 100%; margin-top: 20px; }
        th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
        th { background-color: #f0f0f0; }
        h2 { color: #8b1f46; }
        .logo { width: 300px; }
        .footer { margin-top: 30px; }
      </style>
    </head>
    <body>
      <img src="chimicos logo-02.png" alt="CHIMICOS Logo" class="logo"/>
      <h2>PROFORMA FATURA</h2>
      <p><strong>Tarih:</strong> ${bugun}</p>
      <p>
        <strong>Firma:</strong> ${firmaAdi}<br>
        <strong>Vergi No:</strong> ${vergino}<br>
        <strong>Vergi Dairesi:</strong> ${vergidairesi}<br>
        <strong>Adres:</strong> ${adres}<br>
        <strong>Yetkili:</strong> ${yetkili}<br>
        <strong>E-posta:</strong> ${eposta}<br>
        <strong>Telefon:</strong> ${telefon}
      </p>

      <table>
        <tr>
          <th>Ürün</th>
          <th>Adet</th>
          <th>Birim Fiyat</th>
          <th>İndirimli Fiyat</th>
          <th>Toplam Satış</th>
        </tr>
        <tr>
          <td>${urun}</td>
          <td>${adet}</td>
          <td>${birimFiyat} TL</td>
          <td>${birimFiyatIndirimli}</td>
          <td>${toplam}</td>
        </tr>
      </table>

      <p><strong>${kdvDurumu}</strong></p>

      <p class="footer">
        <strong>CHIMICOS</strong> - İletişim: rifathakanguleser.co@gmail.com | 0501 119 2004
      </p>
    </body>
    </html>
  `;

  const win = window.open("", "", "width=800,height=600");
  win.document.write(proformaHTML);
  win.document.close();
}

window.onload = hesapla;
