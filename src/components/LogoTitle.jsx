import { useState, useRef, useEffect } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

function LogoTitle() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div className="w-full h-max flex items-center justify-center">
      <div className="w-full h-auto flex items-center justify-between gap-5 p-5">
        <div className="w-auto h-auto">
          <FaMapMarkedAlt className="text-4xl md:text-6xl text-orange-200" />
        </div>
        <div>
          <p className="text-xl md:text-6xl font-bold text-[#ffffff]">
            AzWayFinder
          </p>
        </div>
        <div>
          <FaCircleInfo
            className="text-sm md:text-4xl text-slate-50 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center mx-5  sm:mx-3 lg:mx-0 bg-black bg-opacity-50 z-[50]">
          <div
            className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full relative"
            ref={modalRef}
          >
            <button
              className="absolute top-2 right-2 text-3xl text-black"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">AzwayFinder haqqında</h2>
            <p>
              <span className="text-black font-bold">Azwayfinder </span>
              vasitəsilə siz Azərbaycan daxilində getmək istədiyiniz şəhərlər
              arasındakı məsafəni görə bilər,Seçilən tarixə uyğun olarak
              gedəcəyiniz şəhərdəki hava proqnozu ilə tanış ola bilərsiniz.
              Həmçinin yol üzərindəki Yanacaq doldurma məntəqələrini,istirahət
              mərkəzlərini və radarları görə bilərsiniz. Bu proyekt, Ahliman
              Suleymanli tərəfindən React, TailwindCSS ve Leaflet istifadə
              edilərək hazırlanmışdır. Aşağıdakı sosial media hesaplarından məni
              izləməyi unutmayın.
              <div className="flex flex-row gap-2 text-2xl p-2">
                <a
                  href={"https://linkedin.com/in/ahliman-suleymanli-7a44a0302"}
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a href={"https://github.com/Ahliman-sl"} target="_blank">
                  <FaGithub />
                </a>
                <a
                  href={"https://www.instagram.com/ahlimansl/?next=%2F"}
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </div>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogoTitle;
