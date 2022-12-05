// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
const Carrossel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div
            className="flex justify-center w-full "
            style={{ height: "38rem" }}
          >
            <div className="flex flex-col absolute justify-end w-full items-center  h-4/5 text-center z-10">
              <h1>A melhor do Brasil</h1>
              <h2>
                Garanta logo a sua e fique estiloso para torcer para o Brasil em
                todos os jogos
              </h2>
              <button
                style={{
                  background: "#e6c200",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  margin: "1%",
                  paddingLeft: "4rem",
                  paddingRight: "4rem",
                }}
              >
                Compre Agora
              </button>
            </div>
            <div
              className="absolute z-8 w-full h-full opacity-75"
              style={{ background: "black" }}
            ></div>
            <img
              src="/images/camisetaBrasil.jpg"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center w-full "
            style={{ height: "38rem" }}
          >
            <img
              src="/images/Emirates.webp"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center w-full "
            style={{ height: "38rem" }}
          >
            <img
              src="/images/france.jpg"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrossel;
