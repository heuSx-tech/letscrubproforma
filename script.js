let urunler = [];
let manuelFiyatGirildi = false;

// Ürünlerin GTIN numaralarına göre fiyatları
const urunFiyatlari = {
  "8684378716026 - DEEP EXFOLIATING MITT - ECRU": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716033 - DEEP EXFOLIATING MITT - BLACK": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716040 - DEEP EXFOLIATING MITT - TRİANGLE BLACK": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716057 - DEEP EXFOLIATING MITT - SALMON - FOR SENSITIVE SKIN": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716071 - DEEP EXFOLIATING MITT - BEIGE - FOR SENSITIVE SKIN": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716378 - PREMIUM DEEP EXFOLIATING MITT - ORANGE ": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716385 - PREMIUM DEEP EXFOLIATING MITT - GREY ": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716095 - DEEP EXFOLIATING FACE MITT - SALMON - FOR ALL SKIN": { "500-2000": 1.90, "2001-5000": 1.70 },
  "8684378716095 - DEEP EXFOLIATING FACE MITT - BEIGE - FOR ALL SKIN": { "500-2000": 1.90, "2001-5000": 1.70 },
  "8684378716132 - DEEP EXFOLIATING BACK MITT - WHITE ": { "500-2000": 4.00, "2001-5000": 3.80 },
  "8684378716309 - DEEP EXFOLIATING BACK MITT - BLACK ": { "500-2000": 4.00, "2001-5000": 3.80 },
  "8684378716323 - NATURAL HORSE HAIR ANTI- CELLULITE BRUSH": { "500-2000": 5.30, "2001-5000": 5.10 },
  "8684378716149 - EXFOLIATING WASHCLOTH - ORANGE": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716149 - EXFOLIATING WASHCLOTH - PINK": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716149 - EXFOLIATING WASHCLOTH - ANTHRACITE": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716156 - EXFOLIATING WASHCLOTH - GREEN": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716163 - EXFOLIATING WASHCLOTH - BLUE": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716170 - EXFOLIATING WASHCLOTH - YELLOW": { "500-2000": 2.70, "2001-5000": 2.50 },
  "8684378716224 - NATURAL LOOFAH SOAP BAR - ALOE VERA - 130 GR": { "500-2000": 2.00, "2001-5000": 1.90 },
  "8684378716231 - NATURAL LOOFAH SOAP BAR - RICE - 130 GR": { "500-2000": 2.00, "2001-5000": 1.90 },
  "8684378716248 - NATURAL LOOFAH SOAP BAR - COLLAGEN - 130 GR": { "500-2000": 2.00, "2001-5000": 1.90 },
  "8684378716255 - NATURAL LOOFAH SOAP BAR - TEA TREE - 130 GR": { "500-2000": 2.00, "2001-5000": 1.90 },
  "8684378716262 - NATURAL LOOFAH SOAP BAR - GOAT MILK - 130 GR": { "500-2000": 2.00, "2001-5000": 1.90 },
  "8684378716279 - NATURAL LOOFAH SOAP BAR - HONEY AND MILK - 130 GR": { "500-2000": 2.00, "2001-5000": 1.90 },
  "8684378716392 - NATURAL OLIVE OIL SOAP - ROSE OIL - 100 GR": { "500-2000": 1.90, "2001-5000": 1.80 },
  "8684378716392 - NATURAL OLIVE OIL SOAP - BABY SOAP - 100 GR": { "500-2000": 1.90, "2001-5000": 1.80 },
  "8684378716392 - NATURAL OLIVE OIL SOAP - CLEANSING SOAP - 100 GR": { "500-2000": 1.90, "2001-5000": 1.80 },
  "8684378716408 - NATURAL OLIVE OIL SOAP - LAVENDER OIL - 100 GR": { "500-2000": 1.90, "2001-5000": 1.80 },
  "8684378716415 - NATURAL OLIVE OIL SOAP - SNAIL EXTRACT - 100 GR": { "500-2000": 1.90, "2001-5000": 1.80 },
  "8684378716422 - NATURAL OLIVE OIL SOAP - SULFUR JUNIPER TAR - 100 GR": { "500-2000": 1.90, "2001-5000": 1.80 },
  "8684378716286 - EXFOLIATING BODY SCRUB - ANTIOXIDANT - 280 GR": { "500-2000": 4.10, "2001-5000": 3.90 },
  "8684378716293 - EXFOLIATING BODY SCRUB - COLD EFFECT - 280 GR": { "500-2000": 4.00, "2001-5000": 3.80 },
  "8684378716330 - MOISTURIZING LIP EXFOLIATOR 30 GR": { "500-2000": 3.20, "2001-5000": 3.00 },
  "8684378716347 - ENZYM POWDER PEELING - 75 GR": { "500-2000": 4.00, "2001-5000": 3.80 },
  "8684378716354 - 24H SILKY BODY YOGURT - 250 ML": { "500-2000": 4.00, "2001-5000": 3.80 },
  "8684378716361 - BAKUCHIOL SKINCARE OIL Retinol Alternative - 100 ML": { "500-2000": 4.50, "2001-5000": 4.30 },
  "8684378716439 - NATURAL PUMICE STONE - 1PCS": { "500-2000": 0.45, "2001-5000": 0.40 },
  "8684378716354 - ANTI-HAIR LOSS & STRENGTHENING HAIR CARE SHAMPOO – 400 ML": { "500-2000": 5.20, "2001-5000": 5.00 },
  "8684378716354 - ANTI-DANDRUFF HAIR CARE SHAMPOO – 400 ML ": { "500-2000": 5.20, "2001-5000": 5.00 },
  "8684378716354 - HAIR AND BODY MIST GIRL IN LOVE – 100 ML ": { "500-2000": 4.00, "2001-5000": 3.80 },
  "8684378716354 - BODY SCRUB GIRL IN LOVE – 280 GR ": { "500-2000": 5.10, "2001-5000": 4.90 },
  "8684378716354 - SH0WER GEL GIRL IN LOVE – 400 ML ": { "500-2000": 4.00, "2001-5000": 3.80 },
  "8684378716354 - MAKEUP BRUSH CLEANER SOAP – 150 GR ": { "500-2000": 4.00, "2001-5000": 3.80 },
  "8684378716354 - SOLID SHAMPOO BARS - ANTI HAIR LOSS- 100 GR": { "500-2000": 4.50, "2001-5000": 4.30 },
  "8684378716354 - SOLID SHAMPOO BARS - OIL BALANCING & PURIFYING- 100 GR": { "500-2000": 4.50, "2001-5000": 4.30 },
  "8684378716354 - SOLID SHAMPOO BARS -HDYRATE & COLOR PROJECT- 100 GR": { "500-2000": 4.50, "2001-5000": 4.30 },
  "8684378716354 - SOLID SHAMPOO BARS - ANTI DANDRUFF- 100 GR": { "500-2000": 4.50, "2001-5000": 4.30 },

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
  "8684378716439 - PRIV NATURAL PUMICE STONE - 1PCS": { "1000-5000": 0.60, "5000-10000": 0.50, "10000+": 0.40 }
};

function hesapla() {
  const adetInput = document.getElementById("adet");
  const urunSecimiInput = document.getElementById("urunSecimi");
  const indirimInput = document.getElementById("indirimInput");
  const kdvToggle = document.getElementById("kdvToggle");

  if (!adetInput || !urunSecimiInput) return;

  const adet = parseFloat(adetInput.value) || 0;
  const urunSecimi = urunSecimiInput.value;
  const kdvEkle = kdvToggle ? (kdvToggle.value === "evet") : false;
  const manuelIndirim = indirimInput ? (parseFloat(indirimInput.value) || 0) : 0;
  const kdvOrani = 20;

  if (!urunSecimi || !urunFiyatlari[urunSecimi]) return;

  const fiyatlar = urunFiyatlari[urunSecimi];
  let birimFiyat = 0;

  if (urunSecimi.includes("PRIV")) {
    if (adet >= 10000) birimFiyat = fiyatlar["10000+"] || fiyatlar["5000-10000"];
    else if (adet >= 5000) birimFiyat = fiyatlar["5000-10000"] || fiyatlar["1000-5000"];
    else birimFiyat = fiyatlar["1000-5000"];
  } else {
    if (adet >= 2001) birimFiyat = fiyatlar["2001-5000"] || fiyatlar["500-2000"];
    else birimFiyat = fiyatlar["500-2000"];
  }

  if (!birimFiyat) birimFiyat = 0;

  const toplamIndirimOrani = manuelIndirim;
  const birimFiyatIndirimli = birimFiyat * (1 - toplamIndirimOrani / 100);
  let toplam = adet * birimFiyatIndirimli;
  
  if (kdvEkle) {
    toplam *= (1 + kdvOrani / 100);
  }

  const birimEl = document.getElementById("birim");
  const toplamEl = document.getElementById("toplam");
  const birimFiyatInputEl = document.getElementById("birimFiyatInput");

  if (birimEl) birimEl.textContent = birimFiyatIndirimli.toFixed(2);
  if (toplamEl) toplamEl.textContent = toplam.toFixed(2);
  
  if (!manuelFiyatGirildi && birimFiyatInputEl) {
     birimFiyatInputEl.value = birimFiyatIndirimli.toFixed(2);
  }
}

function urunEkle() {
  const urunSecimiInput = document.getElementById("urunSecimi");
  const adetInput = document.getElementById("adet");
  const birimFiyatInputEl = document.getElementById("birimFiyatInput");
  const birimEl = document.getElementById("birim");

  const urunSecimi = urunSecimiInput ? urunSecimiInput.value : "";
  const adet = adetInput ? (parseInt(adetInput.value) || 0) : 0;
  const birimFiyat = birimFiyatInputEl ? parseFloat(birimFiyatInputEl.value).toFixed(2) : "0.00";
  const birimFiyatIndirimli = birimEl ? parseFloat(birimEl.textContent).toFixed(2) : "0.00";

  if (!urunSecimi || adet <= 0 || isNaN(birimFiyat)) {
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

  const getVal = (id) => document.getElementById(id) ? document.getElementById(id).value : "";

  const firmaAdi = getVal("firmaAdi");
  const vergino = getVal("vergino");
  const adres = getVal("adres");
  const eposta = getVal("eposta");
  const telefon = getVal("telefon");
  const bugun = new Date().toLocaleDateString('tr-TR');
  
  const kdvToggle = document.getElementById("kdvToggle");
  const kdvEkle = kdvToggle ? (kdvToggle.value === "evet") : false;
  const kdvDurumu = kdvEkle ? "KDV DAHİL" : "KDV HARİÇ";
  
  const kurInput = document.getElementById("kurInput");
  const euroKuru = kurInput ? (parseFloat(kurInput.value) || 0).toFixed(2) : "0.00";

  let proformaHTML = `
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        table { border-collapse: collapse; width: 100%; margin-top: 20px; }
        th, td { border: 1px solid #ccc; padding: 1px; text-align: center; }
        th { background-color: #f0f0f0; }
        h2 { color: #f38379; }
        .footer { margin-bottom: 5px; }
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
        Adres: Mahalle/Semt:KURTULUŞ MAH. Cadde/Sokak:1.(510) SK. MANOLYA SITESI <br>
         Bina
 A Blok Kapı No:12 B/B <br>
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
 <strong>IBAN :</strong> TR11 0004 6011 7988 8000 0890 14
 <p class="footer">
 <strong>Akbank USD:</strong>
 TR49 0004 6011 7900 1000 0897 76 
<p class="footer">
<strong>Akbank EUR:</strong>
TR80 0004 6011 7903 6000 0897 74
            </p>
            
    </body>
  </html>
  `;

  const win = window.open("", "", "width=800,height=600");
  win.document.write(proformaHTML);
  win.document.close();

  urunler = [];
}

window.onload = hesapla;

// --- EKLENEN EVENT LİSTENER'LAR (DÜZELTME BURADA) ---

const urunSecimiEl = document.getElementById("urunSecimi");
if (urunSecimiEl) {
  urunSecimiEl.addEventListener("change", function () {
    manuelFiyatGirildi = false; // Yeni ürün seçildiğinde manuel girişi sıfırla
    hesapla(); // Fiyatı anında güncelle
  });
}

const adetEl = document.getElementById("adet");
if (adetEl) {
  adetEl.addEventListener("input", hesapla); // Adet değiştiğinde anında güncelle
}

const indirimEl = document.getElementById("indirimInput");
if (indirimEl) {
  indirimEl.addEventListener("input", hesapla); // İndirim değiştiğinde anında güncelle
}

const kdvToggleEl = document.getElementById("kdvToggle");
if (kdvToggleEl) {
  kdvToggleEl.addEventListener("change", hesapla); // KDV değiştiğinde anında güncelle
}

// Manuel fiyat girişi için dinleyici
const birimFiyatInputEl = document.getElementById("birimFiyatInput");
if (birimFiyatInputEl) {
  birimFiyatInputEl.addEventListener("input", function () {
    manuelFiyatGirildi = true;

    const adetInput = document.getElementById("adet");
    const adet = adetInput ? (parseFloat(adetInput.value) || 0) : 0;
    
    const kdvToggle = document.getElementById("kdvToggle");
    const kdvEkle = kdvToggle ? (kdvToggle.value === "evet") : false;
    const kdvOrani = 20;
    
    const indirimInput = document.getElementById("indirimInput");
    const manuelIndirim = indirimInput ? (parseFloat(indirimInput.value) || 0) : 0;

    const girilenFiyat = parseFloat(this.value);
    if (!isNaN(girilenFiyat)) {
      const birimFiyatIndirimli = girilenFiyat * (1 - (manuelIndirim / 100));
      let toplam = adet * birimFiyatIndirimli;
      if (kdvEkle) toplam *= (1 + kdvOrani / 100);

      const birimEl = document.getElementById("birim");
      const toplamEl = document.getElementById("toplam");
      
      if (birimEl) birimEl.textContent = birimFiyatIndirimli.toFixed(2);
      if (toplamEl) toplamEl.textContent = toplam.toFixed(2);
    }
  });
}
