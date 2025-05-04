let urunler = [];
let manuelFiyatGirildi = false;

// Ürünlerin GTIN numaralarına göre fiyatları
const urunFiyatlari = {
"8684378716026 - DEEP EXFOLIATING MITT - ECRU": { "1000-5000": 3.20, "5000-10000": 3.10, "10000+": 3.00 },
"8684378716033 - DEEP EXFOLIATING MITT - BLACK": { "1000-5000": 3.20, "5000-10000": 3.10, "10000+": 3.00 },
"8684378716040 - DEEP EXFOLIATING MITT - TRİANGLE BLACK": { "1000-5000": 3.20, "5000-10000": 3.10, "10000+": 3.00 },
"8684378716057 - DEEP EXFOLIATING MITT - SALMON - FOR SENSITIVE SKIN": { "1000-5000": 3.20, "5000-10000": 3.10, "10000+": 3.00 },
"8684378716071 - DEEP EXFOLIATING MITT - BEIGE - FOR SENSITIVE SKIN": { "1000-5000": 3.20, "5000-10000": 3.10, "10000+": 3.00 },
"8684378716378 - PREMIUM DEEP EXFOLIATING MITT - ORANGE ": { "1000-5000": 3.20, "5000-10000": 3.10, "10000+": 3.00 },
"8684378716385 - PREMIUM DEEP EXFOLIATING MITT - GREY ": { "1000-5000": 3.20, "5000-10000": 3.10, "10000+": 3.00 },
"8684378716095 - DEEP EXFOLIATING FACE MITT - SALMON - FOR ALL SKIN": { "1000-5000": 2.40, "5000-10000": 2.30, "10000+": 2.20 },
"8684378716132 - DEEP EXFOLIATING BACK MITT - WHITE ": { "1000-5000": 6.50, "5000-10000": 6.40, "10000+": 6.30 },
"8684378716309 - DEEP EXFOLIATING BACK MITT - BLACK ": { "1000-5000": 6.50, "5000-10000": 6.40, "10000+": 6.30 },
"8684378716323 - NATURAL HORSE HAIR ANTI- CELLULITE BRUSH": { "1000-5000": 5.30, "5000-10000": 5.20, "10000+": 5.10 },
"8684378716149 - EXFOLIATING WASHCLOTH - ORANGE": { "1000-5000": 2.80, "5000-10000": 2.70, "10000+": 2.60 },
"8684378716156 - EXFOLIATING WASHCLOTH - GREEN": { "1000-5000": 2.80, "5000-10000": 2.70, "10000+": 2.60 },
"8684378716163 - EXFOLIATING WASHCLOTH - BLUE": { "1000-5000": 2.80, "5000-10000": 2.70, "10000+": 2.60 },
"8684378716170 - EXFOLIATING WASHCLOTH - YELLOW": { "1000-5000": 2.80, "5000-10000": 2.70, "10000+": 2.60 },
"8684378716224 - NATURAL LOOFAH SOAP BAR - ALOE VERA - 130 GR": { "1000-5000": 2.00, "5000-10000": 1.90, "10000+": 1.80 },
"8684378716231 - NATURAL LOOFAH SOAP BAR - RICE - 130 GR": { "1000-5000": 2.00, "5000-10000": 1.90, "10000+": 1.80 },
"8684378716248 - NATURAL LOOFAH SOAP BAR - COLLAGEN - 130 GR": { "1000-5000": 2.00, "5000-10000": 1.90, "10000+": 1.80 },
"8684378716255 - NATURAL LOOFAH SOAP BAR - TEA TREE - 130 GR": { "1000-5000": 2.00, "5000-10000": 1.90, "10000+": 1.80 },
"8684378716262 - NATURAL LOOFAH SOAP BAR - GOAT MILK - 130 GR": { "1000-5000": 2.00, "5000-10000": 1.90, "10000+": 1.80 },
"8684378716279 - NATURAL LOOFAH SOAP BAR - HONEY AND MILK - 130 GR": { "1000-5000": 2.00, "5000-10000": 1.90, "10000+": 1.80 },
"8684378716392 - NATURAL OLIVE OIL SOAP - ROSE OIL - 100 GR": { "1000-5000": 1.85, "5000-10000": 1.75, "10000+": 1.65 },
"8684378716408 - NATURAL OLIVE OIL SOAP - LAVENDER OIL - 100 GR": { "1000-5000": 1.85, "5000-10000": 1.75, "10000+": 1.65 },
"8684378716415 - NATURAL OLIVE OIL SOAP - SNAIL EXTRACT - 100 GR": { "1000-5000": 1.85, "5000-10000": 1.75, "10000+": 1.65 },
"8684378716422 - NATURAL OLIVE OIL SOAP - SULFUR JUNIPER TAR - 100 GR": { "1000-5000": 1.85, "5000-10000": 1.75, "10000+": 1.65 },
"8684378716286 - EXFOLIATING BODY SCRUB - ANTIOXIDANT - 280 GR": { "1000-5000": 4.10, "5000-10000": 4.00, "10000+": 3.90 },
"8684378716293 - EXFOLIATING BODY SCRUB - COLD EFFECT - 280 GR": { "1000-5000": 4.00, "5000-10000": 3.90, "10000+": 3.80 },
"8684378716330 - MOISTURIZING LIP EXFOLIATOR 30 GR": { "1000-5000": 3.20, "5000-10000": 3.10, "10000+": 3.00 },
"8684378716347 - ENZYM POWDER PEELING - 75 GR": { "1000-5000": 4.00, "5000-10000": 3.90, "10000+": 3.80 },
"8684378716354 - 24H SILKY BODY YOGURT - 250 ML": { "1000-5000": 4.00, "5000-10000": 3.90, "10000+": 3.80 },
"8684378716361 - BAKUCHIOL SKINCARE OIL Retinol Alternative - 100 ML": { "1000-5000": 4.40, "5000-10000": 4.30, "10000+": 4.20 },
"8684378716439 - NATURAL PUMICE STONE - 1PCS": { "1000-5000": 0.60, "5000-10000": 0.50, "10000+": 0.40 },

"8684378716026 - PRIV DEEP EXFOLIATING MITT - ECRU": { "1000-5000": 2.85, "5000-10000": 2.75, "10000+": 2.65 },
"8684378716033 - PRIV DEEP EXFOLIATING MITT - BLACK": { "1000-5000": 2.85, "5000-10000": 2.75, "10000+": 2.65 },
"8684378716040 - PRIV DEEP EXFOLIATING MITT - TRİANGLE BLACK": { "1000-5000": 2.85, "5000-10000": 2.75, "10000+": 2.65 },
"8684378716057 - PRIV DEEP EXFOLIATING MITT - SALMON - FOR SENSITIVE SKIN": { "1000-5000": 2.85, "5000-10000": 2.75, "10000+": 2.65 },
"8684378716071 - PRIV DEEP EXFOLIATING MITT - BEIGE - FOR SENSITIVE SKIN": { "1000-5000": 2.85, "5000-10000": 2.75, "10000+": 2.65 },
"8684378716378 - PRIV PREMIUM DEEP EXFOLIATING MITT - ORANGE ": { "1000-5000": 2.85, "5000-10000": 2.75, "10000+": 2.65 },
"8684378716385 - PRIV PREMIUM DEEP EXFOLIATING MITT - GREY ": { "1000-5000": 2.85, "5000-10000": 2.75, "10000+": 2.65 },
"8684378716095 - PRIV DEEP EXFOLIATING FACE MITT - SALMON - FOR ALL SKIN": { "1000-5000": 2.10, "5000-10000": 2.00, "10000+": 1.90 },
"8684378716132 - PRIV DEEP EXFOLIATING BACK MITT - WHITE ": { "1000-5000": 6.10, "5000-10000": 6.00, "10000+": 5.90 },
"8684378716309 - PRIV DEEP EXFOLIATING BACK MITT - BLACK ": { "1000-5000": 6.10, "5000-10000": 6.00, "10000+": 5.90 },
"8684378716323 - PRIV NATURAL HORSE HAIR ANTI- CELLULITE BRUSH": { "1000-5000": 5.00, "5000-10000": 4.90, "10000+": 4.80 },
"8684378716149 - PRIV EXFOLIATING WASHCLOTH - ORANGE": { "1000-5000": 2.55, "5000-10000": 2.45, "10000+": 2.35 },
"8684378716156 - PRIV EXFOLIATING WASHCLOTH - GREEN": { "1000-5000": 2.55, "5000-10000": 2.45, "10000+": 2.35 },
"8684378716163 - PRIV EXFOLIATING WASHCLOTH - BLUE": { "1000-5000": 2.55, "5000-10000": 2.45, "10000+": 2.35 },
"8684378716170 - PRIV EXFOLIATING WASHCLOTH - YELLOW": { "1000-5000": 2.55, "5000-10000": 2.45, "10000+": 2.35 },
"8684378716224 - PRIV NATURAL LOOFAH SOAP BAR - ALOE VERA - 130 GR": { "1000-5000": 1.90, "5000-10000": 1.80, "10000+": 1.70 },
"8684378716231 - PRIV NATURAL LOOFAH SOAP BAR - RICE - 130 GR": { "1000-5000": 1.90, "5000-10000": 1.80, "10000+": 1.70 },
"8684378716248 - PRIV NATURAL LOOFAH SOAP BAR - COLLAGEN - 130 GR": { "1000-5000": 1.90, "5000-10000": 1.80, "10000+": 1.70 },
"8684378716255 - PRIV NATURAL LOOFAH SOAP BAR - TEA TREE - 130 GR": { "1000-5000": 1.90, "5000-10000": 1.80, "10000+": 1.70 },
"8684378716262 - PRIV NATURAL LOOFAH SOAP BAR - GOAT MILK - 130 GR": { "1000-5000": 1.90, "5000-10000": 1.80, "10000+": 1.70 },
"8684378716279 - PRIV NATURAL LOOFAH SOAP BAR - HONEY AND MILK - 130 GR": { "1000-5000": 1.90, "5000-10000": 1.80, "10000+": 1.70 },
"8684378716392 - PRIV NATURAL OLIVE OIL SOAP - ROSE OIL - 100 GR": { "1000-5000": 1.75, "5000-10000": 1.65, "10000+": 1.55 },
"8684378716408 - PRIV NATURAL OLIVE OIL SOAP - LAVENDER OIL - 100 GR": { "1000-5000": 1.75, "5000-10000": 1.65, "10000+": 1.55 },
"8684378716415 - PRIV NATURAL OLIVE OIL SOAP - SNAIL EXTRACT - 100 GR": { "1000-5000": 1.75, "5000-10000": 1.65, "10000+": 1.55 },
"8684378716422 - PRIV NATURAL OLIVE OIL SOAP - SULFUR JUNIPER TAR - 100 GR": { "1000-5000": 1.75, "5000-10000": 1.65, "10000+": 1.55 },
"8684378716286 - PRIV EXFOLIATING BODY SCRUB - ANTIOXIDANT - 280 GR": { "1000-5000": 4.10, "5000-10000": 4.00, "10000+": 3.90 },
"8684378716293 - PRIV EXFOLIATING BODY SCRUB - COLD EFFECT - 280 GR": { "1000-5000": 4.00, "5000-10000": 3.90, "10000+": 3.80 },
"8684378716330 - PRIV MOISTURIZING LIP EXFOLIATOR 30 GR": { "1000-5000": 3.20, "5000-10000": 3.10, "10000+": 3.00 },
"8684378716347 - PRIV ENZYM POWDER PEELING - 75 GR": { "1000-5000": 4.00, "5000-10000": 3.90, "10000+": 3.80 },
"8684378716354 - PRIV 24H SILKY BODY YOGURT - 250 ML": { "1000-5000": 4.00, "5000-10000": 3.90, "10000+": 3.80 },
"8684378716361 - PRIV BAKUCHIOL SKINCARE OIL Retinol Alternative - 100 ML": { "1000-5000": 4.40, "5000-10000": 4.30, "10000+": 4.20 },
"8684378716439 - PRIV NATURAL PUMICE STONE - 1PCS": { "1000-5000": 0.60, "5000-10000": 0.50, "10000+": 0.40 },


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
        th, td { border: 1px solid #ccc; padding: 1px; text-align: center; }
        th { background-color: #f0f0f0; }
        h2 { color: #f38379; }
      </style>
    </head>
    <body>
     <div style="position: absolute; top: 10px; left: -10px;">
      <img src="chimicos logo-02.png" alt="CHIMICOS Logo" style="width: 300px;"/>
      </div>
      <div style="position: relative; top: 55px; right: -5px;">
      <h2>PROFORMA FATURA</h2>
      </div>
     <div style="position: relative; top: -50px; right: -600px;">
  <p><strong>Tarih:</strong> ${bugun}</p>
</div>

      <p>
       <strong>_________________________________________________________________________________</strong><br>
       <br> <strong> UĞURLU GRUP İNTERNET MAĞAZACILIK<br>
 SANAYİ VE TİCARET LİMİTED ŞİRKETİ</strong> <br>
 <p class="footer">
        Adres: ALAADDİNBEY MH.626.SK-SAM-1 PLAZA B BLOK  <br>
         Bina
 No:22 Kapı No:12 Nilüfer/ BURSA <br>
 VKN: 8861004082
 <br>Vergi Dairesi: ÇEKİRGE V.D
 <p>
       <strong>_________________________________________________________________________________</strong><br>
      </p>
      
        <strong>Firma:</strong> ${firmaAdi}<br>
        <strong>Adres:</strong> ${adres}<br>
        <strong>Vergi No:</strong> ${vergino}<br>
        <strong>E-posta:</strong> ${eposta}<br>
        <strong>Telefon:</strong> ${telefon}<br>

        <strong>_________________________________________________________________________________</strong><br>
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
            <td>${item.birimFiyat} USD</td>
            <td>${item.birimFiyatIndirimli} USD</td>
            <td>${(item.adet * item.birimFiyatIndirimli).toFixed(2)} USD</td>
          </tr>
        `).join('')}
        <tr>
  <td colspan="4" style="text-align: right;"><strong>Genel Toplam</strong></td>
  <td><strong>${urunler.reduce((acc, item) => acc + (item.adet * item.birimFiyatIndirimli), 0).toFixed(2)} USD</strong></td>
</tr>

      </table>

      <p><strong>Dolar Kuru:</strong> ${euroKuru} ₺</p>
      <p><strong>Kdv / Tax: </strong>${kdvDurumu} </p>

  <p class="footer">
        <strong>LET'SCRUB</strong> - İletişim: letscrub.com / info@letscrub.com.tr
      </p>
       <p class="footer">
            <strong> Açıklama: </strong> Ürün ödemesi sipariş itibari ile %50 peşin, kalan miktar ürün teslimi esnasında yapılacaktır.  </p>
            <p class="footer">
            Proforma 20 iş günü geçerlidir.  Döviz kuru fatura tarihindeki TCMB Efektif Satış Kuru olacaktır.
            <p class="footer">
             <strong>Ürün teslimat adresi:</strong> UĞURLU GRUP İNTERNET MAĞAZACILIK SANAYİ VE TİCARET LİMİTED ŞİRKETİ  dir.  
            <p class="footer">
<strong>Banka Bilgileri:</strong>
 UĞURLU GRUP İNTERNET MAĞAZACILIK SANAYİ VE TİCARET LİMİTED ŞİRKETİ
 <p class="footer">
 <strong>IBAN :</strong> TR11 0004 6011 7988 8000 0890 14
 <p class="footer">
 <strong>Akbank USD:</strong>
 TR49 0004 6011 7900 1000 0897 76 
<p class="footer">
<strong>Akbank EUR:</strong>
TR80 0004 6011 7903 6000 0897 74
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
