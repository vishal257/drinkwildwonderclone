import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/apeek.css";

import image1 from "../assets/img/apeek/image1.png";
import image2 from "../assets/img/apeek/image2.jpg";
import image3 from "../assets/img/apeek/image3.png";
import image4 from "../assets/img/apeek/image4.png";
import image5 from "../assets/img/apeek/image5.png";

const Apeek = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const items = [
    { img: image1, title: "live probiotics", description: "Bacillus subtilis is a resilient strain of good bacteria, clinically proven to withstand the harsh environment of the stomach to reach your gut."},
    { img: image2, title: "probiotic fiber", description: "Our proprietary blend of fiber-rich jerusalem artichoke and chicory root inulin is like a superfood for your good gut bacteria." },
    { img: image3, title: "strawberry", description: "Sweet, juicy strawberries with an aroma to match. These West Coast treats are nutrient-rich and good for the skin." },
    { img: image4, title: "hibiscus flowers", description: "These tart and tropical flowers are rich in antioxidants and known to support immunity." },
    { img: image5, title: "passionfruit", description: "Peruvian passion fruit picked at the peak of ripeness. This fragrant, tropical fruit is rich in antioxidants and vitamin C." },
  ];

  return (
    <div>
      <svg className="hidden md:block small--hide icon-wave-blue top-0 w-full h-40 left-0 right-0" viewBox="0 0 1440 86" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2063.32 4.47852L1977.08 -1.37418C1890.85 -7.22688 1718.37 -18.9323 1545.35 0.203321C1372.33 19.3389 1198.76 69.315 1026.06 70.563C853.359 71.811 681.524 24.3301 509.051 12.6247C336.579 0.919319 163.482 24.3726 76.9387 35.7909L-9.6154 47.826L-11.9848 181.059L74.328 182.594C160.641 184.129 333.267 187.199 505.892 190.269C678.518 193.339 851.144 196.409 1023.77 199.479C1196.4 202.549 1369.02 205.619 1541.65 208.689C1714.27 211.758 1886.9 214.828 1973.21 216.363L2059.52 217.898L2063.32 4.47852Z" fill="currentColor"></path>
  </svg>
    <div className="carousel-container-blue w-full relative bottom-10 bg-[#add8e6] pt-20">

  <div className="m-10 md:mt-14">
    <div className="text-center md:text-5xl text-4xl font-semibold mb-14 uppercase"> A PEEK INSIDE Strawberry Passion</div>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item text-center md:text-left">
            <img
              src={item.img}
              alt={item.title}
              className="carousel-image m-auto md:m-0"
            />
            <h3 className="carousel-title uppercase text-3xl font-semibold my-2">{item.title}</h3>
            <p className="carousel-description text-lg">
              {item.description}
            </p>
          </div>
        ))}
      </Slider>
  </div>

  <div className="text-center text-lg pb-14">These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</div>

    </div>
    </div>

  );
};

export default Apeek;
