import React, { useEffect, useRef } from "react";
import L from "leaflet";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import floatIcon from "../assets/float.png";
import { useNavigate } from "react-router-dom";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import heroImg from "../assets/hero.png";
import bawahHeroImg from "../assets/bawah-hero.png";
import frKamera from "../assets/fr_kamera.png";
import frPesan from "../assets/fr_pesan.png";

import adelImg from "../assets/adel.png";
import putriImg from "../assets/putri.png";
import fatimahImg from "../assets/fatimah.png";
import iksanImg from "../assets/iksan.png";
import sandiImg from "../assets/sandi.png";
import arifImg from "../assets/arif.png";

function Home() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Init Swiper
    new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });

    // --- Fix marker icon Leaflet ---
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });

    // Inisialisasi Leaflet map
    if (mapRef.current) {
      mapRef.current.remove();
    }

    const map = L.map("map").setView([-6.914744, 107.60981], 5);
    mapRef.current = map;

    // Tambahkan layer OpenStreetMap
    const osmLayer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "&copy; OpenStreetMap contributors",
      }
    ).addTo(map);

    // Tambahkan layer alternatif Satellite (HOT OSM)
    const satelliteLayer = L.tileLayer(
      "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      {
        attribution: "&copy; OpenStreetMap contributors (HOT)",
      }
    );

    // Data lokasi TPS lengkap
    const tpsData = [
      {
        name: "TPST Bantar Gebang",
        lat: -6.347,
        lng: 106.997,
        address: "Ciketing Udik, Bantar Gebang, Bekasi, West Java 17153",
        hours: "24 Jam",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzOeyzNYemMfg0PXjeWHUolLrXWEUNE2tnw&s",
      },
      {
        name: "TPA Sarimukti",
        lat: -6.8,
        lng: 107.349,
        address: "Sarimukti, Cipatat, West Bandung Regency, West Java 40554",
        hours: "03:00 - 18:00",
        photo:
          "https://cdn1-production-images-kly.akamaized.net/d8AzopkxBBJlzk1I-UTM0f1o15o=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4800469/original/093698900_1712959298-115a9d7a-1a82-4d7d-b82c-3ef7e36252fd.jpg",
      },
      {
        name: "TPA Jatibarang",
        lat: -7.023,
        lng: 110.356,
        address: "Kedungpane, Mijen, Semarang City, Central Java 50211",
        hours: "04:00 - 17:30",
        photo:
          "https://mmc.tirto.id/image/2023/03/04/tpa-jatibarang-tirto-2_ratio-16x9.jpg",
      },
      {
        name: "TPA Suwung",
        lat: -8.722,
        lng: 115.221,
        address:
          "Jl. TPA Suwung No.200, Sesetan, Denpasar Selatan, Kota Denpasar, Bali",
        hours: "07:00 - 15:00",
        photo:
          "https://www.setda.denpasarkota.go.id/public/uploads/berita/Berita_232011081111_suasana-tpa-suwung-pasca-berkahirnya-status-darurat-bencana-kebakaran-titik-api-padam-100-persen-status-darurat-bencana-kebakaran-tpa-suwung-berakhir.jpg",
      },
      {
        name: "TPA Sampah Antang",
        lat: -5.176,
        lng: 119.491,
        address: "Bangkala, Manggala, Makassar City, South Sulawesi 90235",
        hours: "24 Jam",
        photo:
          "https://awsimages.detik.net.id/community/media/visual/2023/03/08/kondisi-tpa-antang-makassar_169.jpeg?w=1200",
      },
      {
        name: "TPA Sampah Manggar",
        lat: -1.208,
        lng: 116.939,
        address:
          "Jl. Proklamasi No.28, Manggar, Kec. Balikpapan Tim., Kota Balikpapan, Kalimantan Timur 76117",
        hours: "07:30 - 16:00",
        photo:
          "https://www.inibalikpapan.com/wp-content/uploads/2020/08/TPA-Manggar.jpg",
      },
      {
        name: "TPA Batu Layang",
        lat: 0.028,
        lng: 109.322,
        address:
          "Jl. Kebangkitan Nasional, Batu Layang, Kec. Pontianak Utara, Kota Pontianak, Kalimantan Barat 78244",
        hours: "08:00 - 17:00",
        photo:
          "https://images.genpi.co/resize/320x240-100/uploads/kalbar/arsip/normal/2022/08/11/ruang-terbuka-hijau-yang-ada-di-tpa-batu-layang-kota-pontia-ahyb.webp",
      },
      {
        name: "TPA Pisugi",
        lat: -3.636,
        lng: 138.859,
        address: "Okoloma, Kurulu, Jayawijaya Regency, Papua",
        hours: "07:30 - 16:00",
        photo:
          "https://www.jayawijayakab.go.id/public/gambarberita/berita/Berita%20Tahun%202025/Berita052.jpg",
      },
      {
        name: "TPA Karya Jaya",
        lat: -3.051,
        lng: 104.708,
        address: "Karya Jaya, Kertapati, Palembang City, South Sumatra 30259",
        hours: "08:00 - 17:00",
        photo:
          "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80",
      },
    ];

    // Layer group untuk marker TPS
    const tpsMarkers = L.layerGroup();

    // Tambahkan marker ke dalam layer group
    tpsData.forEach(({ name, lat, lng, address, hours, photo }) => {
      const popupContent = `
    <div style="width: 250px;">
      <h5>${name}</h5>
      <img src="${photo}" alt="${name}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 6px; margin-bottom: 8px;" />
      <p><strong>Alamat:</strong> ${address}</p>
      <p><strong>Jam Operasional:</strong> ${hours}</p>
    </div>
  `;
      const marker = L.marker([lat, lng]).bindPopup(popupContent);
      tpsMarkers.addLayer(marker);
    });

    // Tambahkan semua marker ke peta
    tpsMarkers.addTo(map);

    // Tambahkan kontrol layer
    L.control
      .layers(
        {
          OpenStreetMap: osmLayer,
          Satellite: satelliteLayer,
        },
        {
          "TPS Markers": tpsMarkers,
        }
      )
      .addTo(map);

    // Cleanup jika unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const teamMembers = [
    { name: "Adella", role: "Front-End & Back-End", img: adelImg },
    { name: "Putri", img: putriImg },
    { name: "Fatimah", img: fatimahImg },
    { name: "Iksan", role: "Machine Learning", img: iksanImg },
    { name: "Sandi", img: sandiImg },
    { name: "Arif", img: arifImg },
  ];

  // eslint-disable-next-line no-unused-vars
  const FloatingButton = ({ floatIcon }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/Chatbot");
    };

    return (
      <div
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 1050,
        }}
      >
        <button
          onClick={handleClick}
          className="btn btn-dark rounded-circle shadimportow p-3"
          title="Open Chatbot"
        >
          <img
            src={floatIcon}
            alt="Chatbot Icon"
            style={{ width: 24, height: 24 }}
          />
        </button>
      </div>
    );
  };

  return (
    <main className="container my-5">
      {/* Hero Swiper Section */}
      <section
        className="mb-5 rounded-3 overflow-hidden position-relative"
        style={{ height: 400 }}
      >
        <div className="swiper h-100">
          <div className="swiper-wrapper h-100">
            {/* Slide 1 */}
            <div className="swiper-slide position-relative h-100">
              <img
                src={heroImg}
                alt="Hero Maydarling"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 h-100 d-flex align-items-center px-4 px-md-5"
                style={{ width: "100%", maxWidth: 480 }}
              >
                <div className="text-white">
                  <h2
                    className="fw-bold mb-3"
                    style={{ fontSize: "2.5rem", lineHeight: 1.1 }}
                  >
                    Selamat datang! <br /> Di maydarling.id
                  </h2>
                  <p className="fs-6">
                    Bersama, kita mulai langkah bijak dalam mengelola sampah
                    untuk masa depan yang lebih baik.
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide position-relative h-100">
              <img
                src={bawahHeroImg}
                alt="Hero TrashScan"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 h-100 d-flex align-items-center justify-content-between px-4 px-md-5"
                style={{ width: "100%", backgroundColor: "rgba(0,0,0,0.4)" }}
              >
                <div className="text-white" style={{ maxWidth: 600 }}>
                  <h2
                    className="fw-bold mb-3"
                    style={{ fontSize: "2.75rem", lineHeight: 1.1 }}
                  >
                    Kenali Sampahmu dengan TrashScan
                  </h2>
                  <p className="fs-5 mb-0">
                    Unggah atau foto sampah, dan kami siap bantu
                    mengklasifikasikan secara otomatis. Saatnya memilah jadi
                    mudah!
                  </p>
                </div>
                <a
                  href="#/scan"
                  className="btn btn-outline-light btn-lg rounded-circle shadow"
                  style={{
                    width: 56,
                    height: 56,
                    fontSize: "1.5rem",
                    lineHeight: 1,
                  }}
                >
                  →
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-pagination position-absolute bottom-0 start-50 translate-middle-x mb-3"></div>
        </div>
      </section>

      {/* Masalah Sampah */}
      <section className="row align-items-center mb-5 gx-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <h3
            className="fw-bold mb-4"
            style={{ fontSize: "1.5rem", color: "black" }}
          >
            Mengapa Sampah Mendesak Menjadi Masalah yang Mendesak?
          </h3>
          <div
            className="d-flex justify-content-between text-center fw-semibold"
            style={{ color: "black", fontSize: "0.9rem" }}
          >
            <div style={{ marginRight: "2rem" }}>
              <h4 style={{ fontSize: "2rem", fontWeight: "900" }}>#5</h4>
              <p className="mb-0">
                Di ASEAN dalam <br />
                urusan kebersihan
              </p>
            </div>
            <div style={{ marginRight: "2rem" }}>
              <h4 style={{ fontSize: "2rem", fontWeight: "900" }}>
                33,8<span className="fs-6"> jt</span>
              </h4>
              <p className="mb-0">
                Ton Sampah <br />
                pertahunnya
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "2rem", fontWeight: "900" }}>11,7%</h4>
              <p className="mb-0">
                Sampah Yang Berhasil <br />
                Didaur ulang
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={heroImg}
            alt="Masalah Sampah"
            className="rounded shadow"
            style={{ width: "100%", maxHeight: 280, objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Artikel */}
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold">Artikel Terbaru</h4>
          <a
            href="/Article"
            className="text-primary fw-semibold text-decoration-underline"
          >
            Lihat Semua
          </a>
        </div>
        <div className="row g-4">
          {[
            {
              date: "29 Mei 2025",
              title:
                "Dari Satu Ember Sampah, Ema Suranta Bikin Perubahan Lingkungan",
              source: "SINDOnews",
              url: "https://daerah.sindonews.com/read/1573457/174/dari-satu-ember-sampah-ema-suranta-bikin-perubahan-lingkungan-1748498742",
              img: "https://pict.sindonews.net/webp/732/pena/news/2025/05/29/174/1573457/dari-satu-ember-sampah-ema-suranta-bikin-perubahan-lingkungan-sse.webp",
            },
            {
              date: "26 Mei 2025",
              title:
                "Jatim Berhasil Go Green, Khofifah Buat Program Inovatif Ubah Sampah Rumah Jadi Rupiah",
              source: "SINDOnews",
              url: "https://daerah.sindonews.com/read/1572279/704/jatim-berhasil-go-green-khofifah-buat-program-inovatif-ubah-sampah-rumah-jadi-rupiah-1748253936",
              img: "https://pict.sindonews.net/webp/732/pena/news/2025/05/26/704/1572279/jatim-berhasil-go-green-khofifah-buat-program-inovatif-ubah-sampah-rumah-jadi-rupiah-ncv.webp",
            },
            {
              date: "25 Mei 2025",
              title:
                "Sebab Sungai Citeureup, Citarum, dan Bengawan Solo Tercemar",
              source: "Tempo",
              url: "https://www.tempo.co/lingkungan/sebab-sungai-citeureup-citarum-dan-bengawan-solo-tercemar-1543777",
              img: "https://statik.tempo.co/data/2025/05/20/id_1399872/1399872_720.jpg",
            },
          ].map(({ date, title, source, url, img }, i) => (
            <article key={i} className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-3">
                <img
                  src={img}
                  alt="Artikel"
                  className="card-img-top rounded-top"
                  style={{ height: 180, objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="text-muted small mb-1">{date}</p>
                  <h5 className="card-title fw-semibold fs-6">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      {title}
                    </a>
                  </h5>
                  <p className="card-text text-muted small">{source}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Peta TPS */}
      <section className="mb-5">
        <h4 className="fw-bold mb-3">Temukan Lokasi TPS Terdekat</h4>
        <div
          id="map"
          className="rounded shadow border"
          style={{ height: 420, width: "100%" }}
        ></div>
      </section>

      {/* Tentang */}
      <section className="row gx-5 align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <h4 className="fw-bold mb-3">Tentang MayDarling.id</h4>
          <p className="text-secondary fs-5" style={{ lineHeight: 1.6 }}>
            Maydarling.id (Mayoritas Sadar Lingkungan) adalah platform digital
            yang dibangun untuk menjawab keresahan akan masalah sampah yang tak
            kunjung usai. Bukan sekadar edukasi, kami hadir untuk menggerakkan
            perubahan — dari kesadaran menjadi aksi nyata.
          </p>
        </div>
        <div className="col-md-6">
          <a href="/Trashscan" className="text-decoration-none text-dark">
            <div
              className="d-flex align-items-start mb-4"
              style={{ cursor: "pointer" }}
            >
              <img
                src={frKamera}
                alt="Ikon Kamera"
                className="me-3"
                style={{ width: 32, height: 32 }}
              />
              <div>
                <p className="mb-1 fw-semibold">
                  Trashscan: Foto → Kenali Jenis Sampah!
                </p>
                <p className="text-muted small mb-0">
                  Bingung ini sampah organik atau anorganik? Cukup foto, dan
                  kami bantu jawab!
                </p>
              </div>
            </div>
          </a>

          <a href="/Chatbot" className="text-decoration-none text-dark">
            <div className="d-flex align-items-start">
              <img
                src={frPesan}
                alt="Ikon Pesan"
                className="me-3"
                style={{ width: 32, height: 32 }}
              />
              <div>
                <p className="mb-1 fw-semibold">
                  Tanya Lingkungan? ChatBot siap bantu jawab!
                </p>
                <p className="text-muted small mb-0">
                  Cari solusi seputar sampah dan lingkungan? fitur ChatBot kami
                  hadir untuk bantu jawab pertanyaanmu.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="mb-5">
        <h4 className="fw-bold mb-4">Tim di Balik Maydarling.id</h4>
        <div
          className="d-flex overflow-auto gap-4 pb-3"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="flex-shrink-0 text-center"
              style={{
                width: "160px",
                scrollSnapAlign: "start",
              }}
            >
              <p className="text-muted small mb-1 fw-bold">
                {member.role ? `| ${member.role}` : "\u00A0"}
              </p>
              <img
                src={member.img}
                alt={member.name}
                className="rounded-3 w-100"
                style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
              />
              <p className="mt-2 fw-bold">{member.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 1050,
        }}
      >
        <>
          {/* Floating Button */}
          <div
            style={{
              position: "fixed",
              bottom: "1.5rem",
              right: "1.5rem",
              zIndex: 1050,
            }}
          >
            <a href="/Chatbot" className="text-decoration-none text-dark">
              <button className="btn btn-dark rounded-circle shadow p-3">
                <img
                  src={floatIcon}
                  alt="Recycle Icon"
                  style={{ width: 24, height: 24 }}
                />
              </button>
            </a>
          </div>
        </>
      </div>
    </main>
  );
}

export default Home;
