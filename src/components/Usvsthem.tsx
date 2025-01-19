import can from "../assets/img/usvsthem/can.png";
import soda from "../assets/img/usvsthem/soda.png";
import kombucha from "../assets/img/usvsthem/kombucha.png";
import logo from "../assets/img/usvsthem/logo.svg";
import "../assets/css/usvsthem.css";

const Usvsthem = () => {
  return (
    <div className="md:block hidden mb-32">
      <div className="text-6xl font-semibold text-center m-10 mb-24">US VS THEM</div>
      <div>
        <div className="lg:w-4/6 w-[90%] m-auto grid grid-rows-7 grid-cols-4 text-center items-center">

          <div className="p-4 row-span-3"></div>
          <div className="p-4 row-span-3 relative">
            <div className=""><img className="h-28 m-auto" src={can} alt="can" /></div>
            <div className=""><img className="m-auto mt-2" src={logo} alt="logo" /></div>

            <div className="table-border"></div>



          </div>
          <div className="p-4 row-span-3">
            <div><img className="m-auto" src={soda} alt="soda" /></div>
            <div className="text-3xl font-semibold mt-2">Soda</div>
          </div>
          <div className="p-4 border-l row-span-3">
            <div><img className="m-auto" src={kombucha} alt="kombucha" /></div>
            <div className="text-3xl font-semibold mt-2">Kombucha</div>
          </div>

          
          <div className=" p-4 border-t">Live Probiotics</div>

          <div className=" p-4 border-t">1 billion CFUs</div>
          <div className=" p-4 border-t">X</div>
          <div className=" p-4 border-t border-l">X</div>

          <div className=" p-4 border-t">Fiber</div>
          <div className=" p-4 border-t">5g (20% DV)</div>
          <div className=" p-4 border-t">X</div>
          <div className=" p-4 border-t border-l">X</div>

          <div className=" p-4 border-t">Sugar</div>
          <div className=" p-4 border-t">6g</div>
          <div className=" p-4 border-t">40g</div>
          <div className=" p-4 border-t border-l">16g</div>

          <div className=" p-4 border-t">Calories</div>
          <div className=" p-4 border-t">35</div>
          <div className=" p-4 border-t">160</div>
          <div className=" p-4 border-t border-l">60</div>

          <div className=" p-4 border-t">Delicious & Refreshing</div>
          <div className=" p-4 border-t">Yes</div>
          <div className=" p-4 border-t">Sometimes</div>
          <div className=" p-4 border-t border-l">No</div>

          <div className=" p-4 border-t">Organic</div>
          <div className=" p-4 border-t">Yes</div>
          <div className=" p-4 border-t">No</div>
          <div className=" p-4 border-t border-l">Sometimes</div>
        </div>
      </div>
    </div>
  );
};

export default Usvsthem;
