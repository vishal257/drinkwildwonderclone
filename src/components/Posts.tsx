import Slider from "react-slick";
import img1 from "../assets/img/posts/p1.jpg";
import img2 from "../assets/img/posts/p2.jpg";
import img3 from "../assets/img/posts/p3.jpg";
import img4 from "../assets/img/posts/p4.jpg";
import img5 from "../assets/img/posts/p5.jpg";
import img6 from "../assets/img/posts/p6.jpg";
import img7 from "../assets/img/posts/p7.jpg";
import "../assets/css/posts.css";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  swipeToSlide: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4, 
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3, 
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1, 
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <section className="relative bg-[#C3E8F1] py-16">
      <div className="container mx-auto text-center w-[100%] overflow-hidden">
        <h2 className="md:text-6xl text-2xl font-semibold mb-14">
          CREATE #EVERYDAYWONDERS
        </h2>

        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-[95%] h-56 object-cover cursor-pointer p-2 m-auto"
              />
            </div>
          ))}
        </Slider>

        <div className="text-center mt-10 pb-10">
          <a
            href="https://www.instagram.com/drinkwildwonder"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E21B79] text-white text-2xl font-medium px-8 py-3 rounded-xl hover:bg-[#E21B79] mt-28"
          >
            Follow @drinkwildwonder
          </a>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
