import React from 'react';

function QnA() {
  return (
    <div className="qna-section">
      <hr />
      <JudulSection judul="Pertanyaan yang Sering Diajukan (QnA)" />
      <DaftarPertanyaan />
      <MitosKesehatan />
    </div>
  );
}

function JudulSection({ judul }) {
  return <h2>{judul}</h2>;
}

function DaftarPertanyaan() {
  return (
    <div className="daftar-pertanyaan">
      <div className="qna-item">
        <h3>
          P: Berapa sering sebaiknya keluarga berolahraga dalam seminggu?
        </h3>
        <p>
          J: Idealnya, keluarga sebaiknya berolahraga bersama minimal 2-3 kali
          dalam seminggu. Aktivitas bisa berupa jalan santai, bersepeda,
          berenang, atau olahraga lain yang disukai semua anggota keluarga.
        </p>
      </div>

      <div className="qna-item">
        <h3>
          P: Apa saja contoh makanan sehat yang mudah disiapkan untuk keluarga?
        </h3>
        <p>
          J: Contoh makanan sehat yang mudah disiapkan antara lain salad sayur
          dengan protein (ayam, ikan, tahu), tumis sayuran dengan bumbu minimalis,
          sup ayam dengan sayuran, atau buah-buahan sebagai camilan.
        </p>
      </div>

      <div className="qna-item">
        <h3>
          P: Bagaimana cara mengatasi anak yang susah makan sayur?
        </h3>
        <p>
          J: Coba variasikan cara penyajian sayur (misalnya, dibuat jus,
          keripik, atau disembunyikan dalam makanan lain). Ajak anak untuk
          terlibat dalam proses memasak, dan berikan contoh yang baik dengan
          rajin mengonsumsi sayur.
        </p>
      </div>

      <div className="qna-item">
        <h3>P: Apa pentingnya tidur yang cukup bagi kesehatan keluarga?</h3>
        <p>
          J: Tidur yang cukup penting untuk menjaga kesehatan fisik dan mental
          semua anggota keluarga. Kurang tidur dapat menyebabkan penurunan
          konsentrasi, gangguan mood, dan melemahnya sistem kekebalan tubuh.
        </p>
      </div>
    </div>
  );
}

function MitosKesehatan() {
  return (
    <div className="mitos-section">
      <hr />
      <JudulSection judul="Mitos Seputar Kesehatan yang Perlu Diluruskan" />
      <div className="mitos-item">
        <h2>Mitos: Makan malam setelah jam 8 bikin gemuk.</h2>
        <p>
          Fakta: Kenaikan berat badan lebih disebabkan oleh total kalori yang
          dikonsumsi sepanjang hari, bukan waktu makan. Tetap perhatikan porsi
          dan jenis makanan yang dikonsumsi.
        </p>
      </div>

      <div className="mitos-item">
        <h2>Mitos: Olahraga berat setiap hari itu sehat.</h2>
        <p>
          Fakta: Tubuh juga butuh istirahat untuk pemulihan. Olahraga berlebihan
          justru dapat menyebabkan cedera dan kelelahan kronis.
        </p>
      </div>

      <div className="mitos-item">
        <h2>Mitos: Vitamin C bisa mencegah pilek.</h2>
        <p>
          Fakta: Vitamin C memang penting untuk sistem kekebalan tubuh, tetapi
          tidak secara langsung mencegah pilek. Vitamin C dapat membantu
          memperpendek durasi dan mengurangi gejala pilek.
        </p>
      </div>
    </div>
  );
}

export default QnA;