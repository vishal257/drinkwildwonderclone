import Nav from "../components/Nav"
import Product from "../components/Product"
import AlsoLikeSection from "../components/AlsoLikeSection"
import Usvsthem from "../components/Usvsthem"
import Apeek from "../components/Apeek"
import Footer from "../components/Footer"
import CustomerReview from "../components/CustomerReview"
import Connect from "../components/Connect"
import Posts from "../components/Posts"
function ProductInfo() {
  return (
    <div className="font-barlow text-[#2A317D]">
    <Nav/>
    <Product/>
    <AlsoLikeSection/>
    <Usvsthem/>
    <Apeek/>
    <CustomerReview/>
    <Connect/>
    <Posts/>
    <Footer/>
    </div>
  )
}

export default ProductInfo;
