import React from "react";

const Artikel = () => {
  const artikelSamping = [
    {
      tanggal: "26 Mei 2025",
      judul: "Jatim Berhasil Go Green, Khofifah Buat Program Inovatif Ubah Sampah Rumah Jadi Rupiah",
      sumber: "SINDOnews",
      link: "https://daerah.sindonews.com/read/1572279/704/jatim-berhasil-go-green-khofifah-buat-program-inovatif-ubah-sampah-rumah-jadi-rupiah-1748253936",
      img: "https://pict.sindonews.net/webp/732/pena/news/2025/05/26/704/1572279/jatim-berhasil-go-green-khofifah-buat-program-inovatif-ubah-sampah-rumah-jadi-rupiah-ncv.webp",
    },
    {
      tanggal: "25 Mei 2025",
      judul: "Sebab Sungai Citeureup, Citarum, dan Bengawan Solo Tercemar",
      sumber: "Tempo",
      link: "https://www.tempo.co/lingkungan/sebab-sungai-citeureup-citarum-dan-bengawan-solo-tercemar-1543777",
      img: "https://statik.tempo.co/data/2025/05/20/id_1399872/1399872_720.jpg",
    },
    {
      tanggal: "17 Mei 2025",
      judul: "Hitam Bau, KLH Sebut Kali Cirarab Tangerang Tercemar Limbah B3 dan Sampah TPA",
      sumber: "Tempo",
      link: "https://www.tempo.co/lingkungan/hitam-bau-klh-sebut-kali-cirarab-tangerang-tercemar-limbah-b3-dan-sampah-tpa-1463962",
      img: "https://statik.tempo.co/data/2025/05/17/id_1399282/1399282_720.jpg",
    },
  ];

  const beritaMaydarling = [
    {
      tanggal: "29 Mei 2025",
      judul: "Pulau Pramuka Bisa Hasilkan hingga 20 Liter Solar per Hari dari Sampah Plastik",
      sumber: "Tempo",
      link: "https://www.tempo.co/ekonomi/pulau-pramuka-bisa-hasilkan-hingga-20-liter-solar-per-hari-dari-sampah-plastik-1583455",
      img: "https://statik.tempo.co/data/2025/05/29/id_1402118/1402118_720.jpg",
    },
    {
      tanggal: "29 Mei 2025",
      judul: "Inovasi PGE Dorong Efisiensi Energi, Sampah Bisa Jadi Saldo e-Money",
      sumber: "Kompas",
      link: "https://money.kompas.com/read/2025/05/29/090458926/inovasi-pge-dorong-efisiensi-energi-sampah-bisa-jadi-saldo-e-money",
      img: "https://asset.kompas.com/crops/lv_ebs1MgPND-Cm_YdItvkbt5zI=/675x234:3485x2107/1200x800/data/photo/2025/05/29/6837c008be60a.jpg",
    },
    {
      tanggal: "28 Mei 2025",
      judul: "Libatkan Disabilitas, Rework2Relove Sulap Limbah Tekstil Jadi Barang Bernilai",
      sumber: "Kompas",
      link: "https://lestari.kompas.com/read/2025/05/28/223227886/libatkan-disabilitas-rework2relove-sulap-limbah-tekstil-jadi-barang-bernilai",
      img: "https://asset.kompas.com/crops/v-FXEgM0NveA52IlOdbnmogS-CY=/0x112:1080x832/1200x800/data/photo/2025/05/28/6837177eb638b.jpg",
    },
    {
      tanggal: "27 Mei 2025",
      judul: "Daur Ulang Limbah Kerang Hijau Jadi Produk Inovatif",
      sumber: "Tempo",
      link: "https://www.tempo.co/foto/arsip/daur-ulang-limbah-kerang-hijau-jadi-produk-inovatif--1563516",
      img: "https://statik.tempo.co/data/2025/05/27/id_1401570/1401570_720.jpg",
    },
  ];

  const edukasi = [
    {
      tanggal: "8 Mei 2025",
      judul: "KLH: 60% Sampah RI Belum Terkelola, 12 Juta Ton Berakhir ke Laut",
      sumber: "CNBC Indonesia",
      link: "https://www.cnbcindonesia.com/news/20250508112554-4-632003/klh-60-sampah-ri-belum-terkelola-12-juta-ton-berakhir-ke-laut",
      img: "https://akcdn.detik.net.id/visual/2025/05/08/sekretaris-utama-kementerian-lingkungan-hidup-klh-rosa-vivien-ratnawati-dalam-acara-endresshauser-indonesia-sustainability-rec-1746675679183_169.jpeg?w=900&q=80",
    },
    {
      tanggal: "25 April 2025",
      judul: "10 Jenis Sampah Plastik yang Paling Lama Terurai, Butuh 6 Abad",
      sumber: "CNBC Indonesia",
      link: "https://www.cnbcindonesia.com/research/20250424174938-131-628527/10-jenis-sampah-plastik-yang-paling-lama-terurai-butuh-6-abad",
      img: "https://akcdn.detik.net.id/visual/2025/04/24/10-jenis-sampah-plastik-yang-paling-lama-terurai-butuh-6-abad-1745491765474.jpeg?w=900&q=80",
    },
    {
      tanggal: "2 Mei 2025",
      judul: "Gerakan Pengelolaan Sampah Berbasis AI Diminta Optimalkan Kembali TPS3R dan TPST",
      sumber: "SINDOnews",
      link: "https://daerah.sindonews.com/read/1562753/174/gerakan-pengelolaan-sampah-berbasis-ai-diminta-optimalkan-kembali-tps3r-dan-tpst-1746201951",
      img: "https://pict.sindonews.net/webp/732/pena/news/2025/05/02/174/1562753/gerakan-pengelolaan-sampah-berbasis-ai-diminta-optimalkan-kembali-tps3r-dan-tpst-ote.webp",
    },
    {
      tanggal: "21 Mei 2025",
      judul: "Di Lampung, Maggot Mampu Kurangi Sampah Organik hingga 1 Ton",
      sumber: "Kompas",
      link: "https://lestari.kompas.com/read/2025/05/21/122100086/di-lampung-maggot-mampu-kurangi-sampah-organik-hingga-1-ton-",
      img: "https://asset.kompas.com/crops/23dB3sbcBCOu6uEZAK6kmkmAjIQ=/0x26:1080x746/1200x800/data/photo/2025/05/21/682d32298f0f4.jpg",
    },
  ];

  const CardList = ({ data }) => (
    <>
      {data.map((item, index) => (
        <div key={index} className="d-flex mb-3">
          <img
            src={item.img}
            alt={item.judul}
            className="flex-shrink-0 rounded"
            style={{ width: "96px", height: "96px", objectFit: "cover" }}
          />
          <div className="ms-3">
            <span className="text-danger fw-semibold d-block mb-1" style={{ fontSize: "0.8rem" }}>
              {item.sumber}
            </span>
            <p className="fw-bold mb-1" style={{ fontSize: "0.9rem", lineHeight: 1.2 }}>
              {item.judul}
            </p>
            <p className="text-muted mb-1" style={{ fontSize: "0.75rem" }}>
              {item.tanggal}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.8rem" }}
              className="text-primary text-decoration-underline"
            >
              Baca Selengkapnya
            </a>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="row g-4">
      <div className="col-lg-4">
        <h5 className="fw-bold mb-3">Berita Terbaru</h5>
        <CardList data={artikelSamping} />
      </div>
      <div className="col-lg-4">
        <h5 className="fw-bold mb-3">Berita Maydarling</h5>
        <CardList data={beritaMaydarling} />
      </div>
      <div className="col-lg-4">
        <h5 className="fw-bold mb-3">Edukasi & Info</h5>
        <CardList data={edukasi} />
      </div>
    </div>
  );
};

export default Artikel;
