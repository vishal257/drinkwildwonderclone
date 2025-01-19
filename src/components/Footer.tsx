import { IoLogoInstagram } from "react-icons/io";
import logo from "../assets/img/products/white-logo.png";
import { BsTiktok } from "react-icons/bs";

export default function Footer() {
    return(
        <footer className="bg-[#2A317D] text-white p-10 py-14 text-lg font-normal tracking-wider">
  <div className="container mx-auto grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-10 lg:gap-4">
    <div>
      <h4 className="font-semibold text-3xl mb-2">SHOP</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Variety Packs</a></li>
        <li><a href="#" className="hover:underline">Our Flavors</a></li>
        <li><a href="#" className="hover:underline">Subscibe & Save</a></li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold text-3xl mb-2">SUPPORT</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">Find Us</a></li>
        <li><a href="#" className="hover:underline">Shipping & Return Policy</a></li>
        <li><a href="#" className="hover:underline">Terms of Service</a></li>
        <li><a href="#" className="hover:underline">Accessibility Options</a></li>
        <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold text-3xl mb-2">QUESTIONS</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">hello@drinkwildwonder.com</a></li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold text-3xl mb-2">WHOLESALE</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">sales@drinkwildwonder.com</a></li>
      </ul>
    </div>

    <div>
      <img src={logo} alt="logo" />
      <div className="flex mt-4 gap-2 text-4xl justify-end"><IoLogoInstagram /> <BsTiktok /></div>
    </div>
  </div>
</footer>

    )
}