import React, { useState } from "react";
import e1 from '../assets/e1.png';
import e2 from '../assets/e2.png';
import e3 from '../assets/e3.png';
import e4 from '../assets/e4.png';
import e5 from '../assets/e5.png';
import e6 from '../assets/e6.png';

const events = [
  {
    id: 1,
    img: e1,
    title: "Workshop: Cara Efektif Memilah Sampah di Rumah",
    desc: "Pelajari cara memilah sampah dengan mudah agar lebih ramah lingkungan dari rumah sendiri.",
    location: "Online Zoom Meeting",
    date: "2025-06-05",
  },
  {
    id: 2,
    img: e2,
    title: "Gerakan Bersih Pantai: Aksi Nyata Melestarikan Laut",
    desc: "Bersama-sama kita bersihkan pantai Batu Hiu dari sampah demi laut yang sehat dan bebas polusi.",
    location: "Pantai Batu Hiu",
    date: "2025-06-23",
  },
  {
    id: 3,
    img: e3,
    title: "#ZeroWaste: Aksi 7 Hari Tanpa Plastik Sekali Pakai",
    desc: "Tantangan seru mengurangi sampah plastik selama 7 hari dengan kebiasaan baru yang lebih hijau.",
    location: "Online Zoom Meeting",
    date: "2025-07-02",
  },
  {
    id: 4,
    img: e4,
    title: "Plastic Free Picnic: Piknik Seru Tanpa Sampah Plastik",
    desc: "Piknik santai tanpa plastik sekali pakai sambil belajar gaya hidup berkelanjutan.",
    location: "Taman Langsat, Jakarta Selatan",
    date: "2025-07-16",
  },
  {
    id: 5,
    img: e5,
    title: "Citarum Bersih, Bumi Asri",
    desc: "Aksi nyata membersihkan Sungai Citarum demi air yang lebih bersih dan lingkungan lebih sehat.",
    location: "Sungai Citarum",
    date: "2025-07-23",
  },
  {
    id: 6,
    img: e6,
    title: "Reuse & Share: Donasi Barang Layak Pakai",
    desc: "Donasikan barang layak pakai kamu untuk mengurangi sampah dan bantu lingkungan lebih bersih.",
    location: "Jakarta Timur",
    date: "2025-07-30",
  },
];
function EventList({ onSelect }) {
  return (
    <section className="container py-5">
      <h2 className="mb-4 fw-bold">Event Terbaru</h2>
      <div className="row g-4">
        {events.map((event) => (
          <div key={event.id} className="col-md-4">
            <div
              className="card h-100 cursor-pointer"
              style={{ cursor: "pointer" }}
              onClick={() => onSelect(event.id)}
            >
              <img
                src={event.img}
                alt={event.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text text-muted flex-grow-1">{event.desc}</p>
                <div className="d-flex justify-content-between text-muted small">
                  <span>📅 {new Date(event.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}</span>
                  <span>📍 {event.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EventDetail({ eventId, onBack }) {
  const event = events.find((e) => e.id === eventId);
  if (!event) return <p className="text-center mt-5">Event tidak ditemukan.</p>;

  const currentEventDate = new Date(event.date);

  const upcomingEvents = events
    .filter((e) => e.id !== eventId && new Date(e.date) > currentEventDate)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mb-4">
          
          <img
            src={event.img}
            alt={event.title}
            className="img-fluid rounded mb-3"
            style={{ height: "300px", objectFit: "cover", width: "100%" }}
          />
          <h1 className="mb-3">{event.title}</h1>
          <p className="text-muted">{event.desc}</p>
          <p className="fw-semibold mb-1">
            {new Date(event.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-danger mb-4">📌 {event.location}</p>
          <a
            href="https://forms.gle/aytw44g7fEmWY89J8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            Daftar Sekarang
          </a>
          <p className="text-muted small mt-2">
            Formulir akan terbuka di tab baru. Silakan kembali ke halaman ini setelah selesai mendaftar.
          </p>
        </div>
        <aside className="col-lg-4">
          <h2 className="h5 mb-3">Event Mendatang</h2>
          {upcomingEvents.map((e) => (
            <div
              key={e.id}
              className="d-flex mb-3 align-items-center p-2 rounded hover-bg-light"
              style={{ cursor: "pointer" }}
              onClick={() => onBack(e.id)}
            >
              <img
                src={e.img}
                alt={e.title}
                className="rounded"
                style={{ width: "80px", height: "60px", objectFit: "cover" }}
              />
              <div className="ms-3">
                <h6 className="mb-1">{e.title}</h6>
                <p className="text-muted small text-truncate" style={{ maxWidth: "180px" }}>
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

export default function Event() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      {selectedId ? (
        <EventDetail eventId={selectedId} onBack={(id) => setSelectedId(id || null)} />
      ) : (
        <EventList onSelect={setSelectedId} />
      )}
    </>
  );
}
