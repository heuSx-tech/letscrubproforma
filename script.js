let urunler = [];
let manuelFiyatGirildi = false;

// Ürünlerin GTIN numaralarına göre fiyatları
const urunFiyatlari = {
  "8684378716026": { "1000-5000": 3.60, "5000-10000": 3.40, "10000+": 3.20 },
"8684378716033": { "1000-5000": 3.60, "5000-10000": 3.40, "10000+": 3.20 },
"8684378716040": { "1000-5000": 3.60, "5000-10000": 3.40, "10000+": 3.20 },
"8684378716057": { "1000-5000": 3.60, "5000-10000": 3.40, "10000+": 3.20 },
"8684378716071": { "1000-5000": 3.60, "5000-10000": 3.40, "10000+": 3.20 },
"8684378716378": { "1000-5000": 3.60, "5000-10000": 3.40, "10000+": 3.20 },
"8684378716385": { "1000-5000": 3.60, "5000-10000": 3.40, "10000+": 3.20 },
"8684378716095": { "1000-5000": 2.40, "5000-10000": 2.20, "10000+": 1.90 },
"8684378716132": { "1000-5000": 6.50, "5000-10000": 6.40, "10000+": 6.20 },
"8684378716309": { "1000-5000": 6.50, "5000-10000": 6.40, "10000+": 6.20 },
"8684378716323": { "1000-5000": 6.00, "5000-10000": 5.80, "10000+": 5.60 },
"8684378716149": { "1000-5000": 3.00, "5000-10000": 2.80, "10000+": 2.60 },
"8684378716156": { "1000-5000": 3.00, "5000-10000": 2.80, "10000+": 2.60 },
"8684378716163": { "1000-5000": 3.00, "5000-10000": 2.80, "10000+": 2.60 },
"8684378716170": { "1000-5000": 3.00, "5000-10000": 2.80, "10000+": 2.60 },
"8684378716224": { "1000-5000": 1.90, "5000-10000": 1.80, "10000+": 1.70 },
"8684378716231": { "1000-5000": 1.90, "5000-10000": 1.80, "10000+": 1.70 },
"8684378716248": { "1000-5000": 1.90, "5000-10000": 1.80, "10000+": 1.70 },
"8684378716255": { "1000-5000": 1.90, "5000-10000": 1.80, "10000+": 1.70 },
"8684378716262": { "1000-5000": 1.90, "5000-10000": 1.80, "10000+": 1.70 },
"8684378716279": { "1000-5000": 1.90, "5000-10000": 1.80, "10000+": 1.70 },
"8684378716392": { "1000-5000": 1.70, "5000-10000": 1.60, "10000+": 1.50 },
"8684378716408": { "1000-5000": 1.70, "5000-10000": 1.60, "10000+": 1.50 },
"8684378716415": { "1000-5000": 1.70, "5000-10000": 1.60, "10000+": 1.50 },
"8684378716422": { "1000-5000": 1.70, "5000-10000": 1.60, "10000+": 1.50 },
"8684378716286": { "1000-5000": 4.30, "5000-10000": 4.10, "10000+": 3.90 },
"8684378716293": { "1000-5000": 4.00, "5000-10000": 3.80, "10000+": 3.60 },
"8684378716330": { "1000-5000": 3.20, "5000-10000": 3.10, "10000+": 3.00 },
"8684378716347": { "1000-5000": 4.00, "5000-10000": 3.80, "10000+": 3.60 },
"8684378716354": { "1000-5000": 4.00, "5000-10000": 3.80, "10000+": 3.60 },
"8684378716361": { "1000-5000": 4.40, "5000-10000": 4.20, "10000+": 4.00 },
"8684378716439": { "1000-5000": 0.70, "5000-10000": 0.55, "10000+": 0.40 },
	

  // Diğer ürünler eklenmeli
};

function hesapla() {
  const adet = parseFloat(document.getElementById("adet").value);
  const urunSecimi = document.getElementById("urunSecimi").value;
  const birimFiyatInput = document.getElementById("birimFiyatInput");
  const manuelIndirim = parseFloat(document.getElementById("indirimInput").value);
  const kdvEkle = document.getElementById("kdvToggle").value === "evet";
  const kdvOrani = 20;

  // Seçilen ürüne ait fiyat aralıklarını al
  const fiyatlar = urunFiyatlari[urunSecimi];
  let birimFiyat = fiyatlar["1000-5000"]; // Varsayılan fiyat
  
  

  // Adet sayısına göre fiyatı seç
  if (adet >= 10000) {
    birimFiyat = fiyatlar["10000+"];
  } else if (adet >= 5000) {
    birimFiyat = fiyatlar["5000-10000"];
  }

  let otomatikIndirim = 0;
  if (adet >= 5000) {
    otomatikIndirim = 0;
  } else if (adet >= 2000) {
    otomatikIndirim = 0;
  } else if (adet >= 1000) {
    otomatikIndirim = 0;
  }

  const toplamIndirimOrani = manuelIndirim + otomatikIndirim; // Hem manuel hem otomatik indirim hesapla
  const birimFiyatIndirimli = birimFiyat * (1 - toplamIndirimOrani / 100);
  let toplam = adet * birimFiyatIndirimli;
  if (kdvEkle) {
    toplam *= (1 + kdvOrani / 100);
  }

  // Fiyatları güncelle
  document.getElementById("birim").textContent = birimFiyatIndirimli.toFixed(2);
  document.getElementById("toplam").textContent = toplam.toFixed(2);
  document.getElementById("birimFiyatInput").value = birimFiyatIndirimli.toFixed(2); // Birim fiyat inputu da güncelle
}

function urunEkle() {
  const urunSecimi = document.getElementById("urunSecimi").value;
  const adet = parseInt(document.getElementById("adet").value);
  const birimFiyat = parseFloat(document.getElementById("birimFiyatInput").value).toFixed(2);
  const birimFiyatIndirimli = parseFloat(document.getElementById("birim").textContent).toFixed(2);

  if (!urunSecimi || isNaN(adet) || isNaN(birimFiyat)) {
    alert("Lütfen geçerli ürün, adet ve fiyat bilgileri girin.");
    return;
  }

  urunler.push({
    urun: urunSecimi,
    adet,
    birimFiyat,
    birimFiyatIndirimli
  });

  alert(`Ürün eklendi: ${urunSecimi} (${adet} adet)`);
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

  let proformaHTML = `
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
        <strong>Açıklama:</strong> Ürün ödemesi sipariş itibari ile %50 peşin, kalan miktar ürün teslimi esnasında yapılacaktır. Proforma 20 iş günü geçerlidir. Döviz kuru fatura tarihindeki TCMB Efektif Satış Kuru olacaktır.
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
document.getElementById("birimFiyatInput").addEventListener("input", function () {
  manuelFiyatGirildi = true;

  const adet = parseFloat(document.getElementById("adet").value);
  const kdvEkle = document.getElementById("kdvToggle").value === "evet";
  const kdvOrani = 20;
  const manuelIndirim = parseFloat(document.getElementById("indirimInput").value);

  const girilenFiyat = parseFloat(this.value);
  if (!isNaN(girilenFiyat)) {
    const birimFiyatIndirimli = girilenFiyat * (1 - (manuelIndirim / 100));
    let toplam = adet * birimFiyatIndirimli;
    if (kdvEkle) toplam *= (1 + kdvOrani / 100);

    document.getElementById("birim").textContent = birimFiyatIndirimli.toFixed(2);
    document.getElementById("toplam").textContent = toplam.toFixed(2);
  }
});


document.getElementById("birimFiyatInput").addEventListener("input", function () {
  manuelFiyatGirildi = true;
});
