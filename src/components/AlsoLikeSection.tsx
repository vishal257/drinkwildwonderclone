import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "../assets/css/alsolike.css";
import mangoGold from "../assets/img/alsolike/mango-gold.png";
import strawberryPassion from "../assets/img/alsolike/strawberry-passion.png";
import raspberryLychee from "../assets/img/alsolike/raspberry-lychee.png";
import pineappleParadise from "../assets/img/alsolike/pineapple-paradise.png";
import guavaRose from "../assets/img/alsolike/guava-rose.png";
import bananaQueen from "../assets/img/alsolike/banana-queen.png";
import varietyPack from "../assets/img/alsolike/variety-pack.png";
import botanical from "../assets/img/alsolike/botanical.png";


const items = [
  { imgSrc: mangoGold, name: "MANGO GOLD", value: "$10" },
  { imgSrc: strawberryPassion, name: "STRAWBERRY PASSION", value: "$20" },
  { imgSrc: raspberryLychee, name: "RASPBERRY LYCHEE", value: "$30" },
  { imgSrc: pineappleParadise, name: "PINEAPPLE PARADISE", value: "$40" },
  { imgSrc: guavaRose, name: "GUAVA ROSE", value: "$50" },
  { imgSrc: bananaQueen, name: "BANANA QUEEN", value: "$60" },
  { imgSrc: varietyPack, name: "VARIETY PACK", value: "$70" },
  { imgSrc: botanical, name: "BOTANICAL BOUQUET", value: "$80" },
];

const AlsoLikeSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="relative also-like-container z-30">
    <svg className="small--hide icon-wave" viewBox="0 0 1440 86" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2063.32 4.47852L1977.08 -1.37418C1890.85 -7.22688 1718.37 -18.9323 1545.35 0.203321C1372.33 19.3389 1198.76 69.315 1026.06 70.563C853.359 71.811 681.524 24.3301 509.051 12.6247C336.579 0.919319 163.482 24.3726 76.9387 35.7909L-9.6154 47.826L-11.9848 181.059L74.328 182.594C160.641 184.129 333.267 187.199 505.892 190.269C678.518 193.339 851.144 196.409 1023.77 199.479C1196.4 202.549 1369.02 205.619 1541.65 208.689C1714.27 211.758 1886.9 214.828 1973.21 216.363L2059.52 217.898L2063.32 4.47852Z" fill="currentColor"></path>
  </svg>
    <div className="carousel-container pt-10">
    <div>
      <h1 className="mb-4 text-center text-6xl font-semibold">YOU MAY ALSO LIKE</h1>
    </div>
      <Slider {...settings} className="carousel-slider mt-10">
        {items.map((item, index) => (
          <div key={index} className="carousel-item text-center w-full relative">
            <div>
              <img src={item.imgSrc} alt={item.name} className="object-cover mx-auto cursor-pointer" />
              <div className="md:pt-6 text-3xl font-semibold">{item.name}</div>
              <div className="text-2xl text-md mt-2 font-semibold">{item.value}</div>
            </div>
            <div className="">
              <button className="w-[90%] bg-[#E21B79] text-white px-4 py-2 rounded-md mt-4 hover:bg-[#ee599e]">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <svg className="small--hide icon-wave rotate-180 relative bottom-1" viewBox="0 0 1440 86" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2063.32 4.47852L1977.08 -1.37418C1890.85 -7.22688 1718.37 -18.9323 1545.35 0.203321C1372.33 19.3389 1198.76 69.315 1026.06 70.563C853.359 71.811 681.524 24.3301 509.051 12.6247C336.579 0.919319 163.482 24.3726 76.9387 35.7909L-9.6154 47.826L-11.9848 181.059L74.328 182.594C160.641 184.129 333.267 187.199 505.892 190.269C678.518 193.339 851.144 196.409 1023.77 199.479C1196.4 202.549 1369.02 205.619 1541.65 208.689C1714.27 211.758 1886.9 214.828 1973.21 216.363L2059.52 217.898L2063.32 4.47852Z" fill="currentColor"></path>
  </svg>
    </div>
  );
};

export default AlsoLikeSection;
