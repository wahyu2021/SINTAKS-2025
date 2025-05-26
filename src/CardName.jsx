import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function CardName() {
  return (
    <>
      <div className="bg-white w-[520px] h-auto p-8 rounded-2xl shadow-xl border-1 border-gray-500">
        <div className="flex flex-col items-center mb-2">
          <img
            src="src/assets/picture.jpg"
            alt=""
            className="w-35 h-35 object-cover rounded-full shadow-xl mb-2 border-2 border-gray-500"
          />
          <p className="text-xl font-semibold">Wahyu Wahid Nugroho</p>
          <p className="text-md text-gray-600">
            Mahasiswa - Manajemen Informatika
          </p>
        </div>

        <p className="text-justify">
          "Halo, saya adalah seorang mahasiswa politeknik yang bersemangat,
          mendalami dunia teknologi sambil secara aktif mengasah keterampilan
          sebagai seorang programmer. Keseharian saya diisi dengan eksplorasi
          konsep-konsep pemrograman terkini dan implementasinya dalam berbagai
          proyek, sembari menyeimbangkan tuntutan akademis di poltek untuk
          membangun fondasi teoretis yang kuat dalam disiplin ilmu komputer."
        </p>

        <div className="mt-4 flex items-center gap-3 flex-col">
          <LinkSocial
            icon={<FaLinkedin className="text-2xl"/>}
            title="Linkedin"
            link="https://www.linkedin.com/in/wahyu-wahid-nugroho/"
          />

          <LinkSocial
            icon={<FaInstagram className="text-2xl"/>}
            title="Instagram"
            link="https://www.instagram.com/_wahyu_wn"
          />

          <LinkSocial
            icon={<FaGithub className="text-2xl"/>}
            title="Github"
            link="https://www.github.com/wahyu2021"
          />
          
        </div>
      </div>
    </>
  );
}

export default CardName;

function LinkSocial(props) {
  return (
    <>
      <a
        href={props.link}
        className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-xl w-full flex items-center justify-center gap-2 text-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
         {props.icon}
         {props.    title}
      </a>
    </>
  );
}
