let urunler = [];

function hesapla() {
  const adet = parseFloat(document.getElementById("adet").value);
  const birimFiyat = parseFloat(document.getElementById("birimFiyatInput").value);
  const manuelIndirim = parseFloat(document.getElementById("indirimInput").value);
  const kdvEkle = document.getElementById("kdvToggle").value === "evet";
  const kdvOrani = 20;

  let otomatikIndirim = 0;
  if (adet >= 5000) {
    otomatikIndirim = 10;
  } else if (adet >= 2000) {
    otomatikIndirim = 8;
  } else if (adet >= 1000) {
    otomatikIndirim = 4;
  }

  const toplamIndirimOrani = manuelIndirim;
  const birimFiyatIndirimli = birimFiyat * (1 - toplamIndirimOrani / 100);
  let toplam = adet * birimFiyatIndirimli;
  if (kdvEkle) {
    toplam *= (1 + kdvOrani / 100);
  }

  document.getElementById("birim").textContent = birimFiyatIndirimli.toFixed(2);
  document.getElementById("toplam").textContent = toplam.toFixed(2);
  document.getElementById("toplamIndirim").textContent = toplamIndirimOrani.toFixed(0) + " %";
}

function urunEkle() {
  const urun = document.getElementById("urunSecimi").value;
  const adet = parseInt(document.getElementById("adet").value);
  const birimFiyat = parseFloat(document.getElementById("birimFiyatInput").value).toFixed(2);
  const birimFiyatIndirimli = parseFloat(document.getElementById("birim").textContent).toFixed(2);

  if (!urun || isNaN(adet) || isNaN(birimFiyat)) {
    alert("Lütfen geçerli ürün, adet ve fiyat bilgileri girin.");
    return;
  }

  urunler.push({
    urun,
    adet,
    birimFiyat,
    birimFiyatIndirimli
  });

  alert(`Ürün eklendi: ${urun} (${adet} adet)`);
}

function proformaOlustur() {
  hesapla();

  const firmaAdi = document.getElementById("firmaAdi").value;
  const vergino = document.getElementById("vergino").value;
  const adres = document.getElementById("adres").value;
  const eposta = document.getElementById("eposta").value;
  const telefon = document.getElementById("telefon").value;
  const bugun = new Date().toLocaleDateString('tr-TR');
  const kdvEkle = document.getElementById("kdvToggle").value === "evet";
  const kdvDurumu = kdvEkle ? "KDV DAHİL" : "KDV HARİÇ";
  const euroKuru = parseFloat(document.getElementById("kurInput").value).toFixed(2);

  const proformaHTML = `
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        table { border-collapse: collapse; width: 100%; margin-top: 20px; }
        th, td { border: 1px solid #ccc; padding: 10px; text-align: center; }
        th { background-color: #f0f0f0; }
        h2 { color: #f38379; }
      </style>
    </head>
    <body>
      <img src="chimicos logo-02.png" alt="CHIMICOS Logo" style="width: 300px;"/>
      <h2>PROFORMA FATURA</h2>
      <p><strong>Tarih:</strong> ${bugun}</p>
      <p>
        <strong>Firma:</strong> ${firmaAdi}<br>
        <strong>Vergi No:</strong> ${vergino}<br>
        <strong>Adres:</strong> ${adres}<br>
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
        ${urunler.map(item => `
          <tr>
            <td>${item.urun}</td>
            <td>${item.adet}</td>
            <td>${item.birimFiyat} EUR</td>
            <td>${item.birimFiyatIndirimli} EUR</td>
            <td>${(item.adet * item.birimFiyatIndirimli).toFixed(2)} EUR</td>
          </tr>
        `).join('')}
      </table>

      <p><strong>Euro Kuru: ${euroKuru} ₺</strong></p>

      <p class="footer">
        <strong>Let'Scrub</strong> - İletişim: letscrub.com
      </p>
       <p class="footer">
            <strong> Açıklama: </strong> Ürün ödemesi sipariş itibari ile %50 peşin, kalan miktar ürün teslimi esnasında yapılacaktır.  </p>
            <p class="footer">
            Proforma 20 iş günü geçerlidir.  Döviz kuru fatura tarihindeki TCMB Efektif Satış Kuru olacaktır.
            <p class="footer">
             Ürün teslimat adresi: UĞURLU GRUP İNTERNET MAĞAZACILIK SANAYİ VE TİCARET LİMİTED ŞİRKETİ  dir.  
            <p class="footer">
Banka Bilgileri:
 UĞURLU GRUP İNTERNET MAĞAZACILIK SANAYİ VE TİCARET LİMİTED ŞİRKETİ
 IBAN : 
            </p>
    </body>
    </html>
  `;

  const win = window.open("", "", "width=800,height=600");
  win.document.write(proformaHTML);
  win.document.close();

  // Proforma oluşturulunca ürün listesi sıfırlansın
  urunler = [];
}

window.onload = hesapla;


