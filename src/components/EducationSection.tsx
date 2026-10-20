import { useState } from "react";
import certificate from "../assets/certificate.png"

function EducationSection() {
  const [isZoom, setIsZoom] = useState<boolean>(false)
  return (
    <section id="education" className="mt-16 mx-3">
      <h1 className="text-lg font-semibold">Education</h1>
      <div className="mt-5">
        <h1 className="mb-2 font-semibold">- Formal Education</h1>
        <div className="ms-3">
          <p>SMK Teknik Muhammadiyah Plus Cianjur</p>
          <p className="my-1 text-sm">Software Engineering</p>
          <p className="text-sm">2023 - 2026</p>
          </div>
        <div className="ms-3 mt-3">
          <p>MTs Al-Muawanah Cianjur</p>
          <p className="text-sm">2020 - 2023</p>
          </div>
        <div className="ms-3 mt-3">
          <p>Assasul Islam Majlis</p>
          <p className="text-sm">2014 - 2020</p>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="mb-2 font-semibold">- Certifications </h1>
        <div className="ms-3">
          <div className="relative inline-block overflow-hidden border border-slate-100 cursor-zoom-in">
            <img src={certificate} alt="Industrial visit certificate" className="w-60 h-auto hover:opacity-90 transition-opacity" onClick={() => setIsZoom(true)} />
          </div>
          <p className="text-sm">Industrial visit</p>
          <p className="text-sm">2024</p>
        </div>
        {isZoom && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setIsZoom(false)}>
            <img src={certificate} alt="Industrial visit certificate zoomed" className="max-w-full max-h-[85vh] shadow-2xl object-contain" />
          </div>
        )}
      </div>
    </section>
  );
}

export default EducationSection