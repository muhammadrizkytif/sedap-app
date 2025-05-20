export default function ArtikelDetail() {
  return (
    <div>
      <h1>Selamat Datang Keluarga Sehat</h1>
      <p>
        Pandemi COVID-19 ini menuntut kita untuk menjalani gaya hidup yang lebih
        bersih dan lebih sehat. Karena hidup yang sehat memiliki beragam
        manfaat, mulai dari kesehatan mental, fisik hingga fokus pada melakukan
        sesuatu, kesejahteraan kehidupan keluarga, menciptakan suasana yang
        indah, aman dan damai. Gaya hidup sehat merupakan cara kita untuk
        menjaga kesehatan tubuh agar tetap bugar dan produktif dalam menjalani
        aktivitas sehari-hari. Berikut kiat-kiat memulai hidup sehat dalam
        keluarga
        
      </p>
      <Greeting />
      <TipsTambahan /> 
      <Penutup />
      <Referensi />
    </div>
  );
}

function Greeting() {
  return (
    <div>
        <hr />
      <small>Selamat Datang Keluarga Sehat</small>
      <h2>1. Membiasakan Pola Hidup Sehat</h2>
      <p>
        Pola hidup sehat sangatlah menunjang untuk menjaga kestabilan badan
        tetap fit. Seperti membiasakan olahraga secara teratur minimal 2-3 kali
        dalam seminggu, karena olahraga yang dilakukan secara sistematis dan
        teratur dapat meningkatkan kebugaran badan dan meningkatkan hormone
        endorphine yang tentunya dapat meningkatkan imunitas tubuh. Kemudian
        menetapkan jam makan yang teratur (tidak menunggu lapar) dan tidur yang
        cukup.
      </p>
      <img src="img/1.jpg" alt="logo" />
      <h2>2. Perbanyak Makanan yang Sehat dan Bergizi</h2>
      <p>
        Dalam hal ini para orang tua cukup memegang andil penting dalam
        mengedukasi dan membiasakan anak-anak akan pentingnya mengonsumsi
        makanan sehat dan bergizi. Karena mengonsumsi makanan yang bernutrisi
        dan mengonsumsi ragam makanan berbeda, bermanfaat untuk mendapatkan
        berbagai asupan Vitamin dan Mineral yang dibutuhkan tubuh setiap
        harinya. Dan jangan lupa, orang tua pun turut memegang andil dalam
        memberi contoh kepada anak dalam mengkonsumsi makanan yang sehat setiap
        hari.
      </p>
      <img src="img/2.jpg" alt="logo" />
      <h2>3. Hapus Kebiasaan Buruk yang Tidak Sehat</h2>
      <p>
        Menyingkirkan kebiasaan tidak sehat merupakan upaya agar gaya hidup
        sehat lebih optimal. Seperti halnya menyingkirkan kebiasaan mengonsumsi
        makanan cepat saji (junk food). Junk Food adalah makanan yang mengandung
        kalori tinggi akan tetapi tidak memiliki kandungan gizi atau sangat
        minim kadarnya, memiliki kadar garam yang tinggi, lemak, soda, dan bahan
        aditif (penambah rasa, pemanis buatan, pewarna, pengawet). Sehingga
        mengonsumsi Junk Food terlalu sering dapat meningkatkan lemak yang tidak
        seimbang dan menyebabkan penuaan dini, peningkatan penyakit degeneratif,
        seperti diabetes mellitus, kanker, hipertensi hingga jantung koroner.
      </p>
      <img src="img/4.jpg" alt="logo" />
    </div>
  );
}

function TipsTambahan() {
  return (
    <div>
        <hr />
      <h2>Tips Tambahan untuk Keluarga Sehat</h2>
      <ul>
        <li>
          <b>Rutin Cek Kesehatan:</b> Lakukan pemeriksaan kesehatan secara
          berkala untuk mendeteksi dini potensi masalah kesehatan.
        </li>
        <li>
          <b>Kelola Stres:</b> Luangkan waktu untuk relaksasi, meditasi, atau
          aktivitas yang menyenangkan untuk mengurangi stres.
        </li>
        <li>
          <b>Jaga Kebersihan Lingkungan:</b> Lingkungan yang bersih mendukung
          kesehatan keluarga.
        </li>
        <li>
          <b>Batasi Penggunaan Gawai:</b> Kurangi waktu layar, terutama sebelum
          tidur, untuk meningkatkan kualitas tidur.
        </li>
      </ul>
    </div>
  );
}

function Penutup() {
  return (
    <div>
        <hr />
      <h3>Mari Wujudkan Keluarga Sehat!</h3>
      <p>
        Dengan menerapkan langkah-langkah sederhana ini, Anda dapat menciptakan
        lingkungan keluarga yang lebih sehat dan bahagia. Ingat, kesehatan
        adalah investasi terbaik untuk masa depan.
      </p>
    </div>
  );
}

function Referensi() {
  return (
    <div>
      <hr />
      <h2>Referensi</h2>
      <ul>
        <li>
          World Health Organization (WHO). (2023).{" "}
          <em>Promoting health through diet and physical activity.</em> Diakses
          dari
          <a
            href=" https://www.who.int/europe/health-topics/physical-activity/data-and-statistics"
            target="_blank"
            rel="noopener noreferrer"
          >
             https://www.who.int/europe/health-topics/physical-activity/data-and-statistics
          </a>
        </li>
        <li>
          Kementerian Kesehatan Republik Indonesia. (2022).{" "}
          <em>Pedoman Gizi Seimbang.</em> Jakarta: Kemenkes RI. Diakses dari
          <a
            href="https://www.kemkes.go.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.kemkes.go.id/
          </a>
        </li>
        <li>
          Mayo Clinic. (2023).{" "}
          <em>Healthy lifestyle: 5 keys to a longer life.</em> Diakses dari
          <a
            href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/health-habits/art-20045943"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/health-habits/art-20045943
          </a>
        </li>
        <li>
          UNICEF. (2021).{" "}
          <em>The State of the World’s Children 2021 - Nutrition.</em> Diakses
          dari
          <a
            href="https://www.unicef.org/reports/state-worlds-children-2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.unicef.org/reports/state-worlds-children-2021
          </a>
        </li>
      </ul>
    </div>
  );
}
