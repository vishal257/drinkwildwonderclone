import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { MdOutlineStarBorder } from "react-icons/md"

function CustomerReview() {
  return (
    <section className="bg-gray-100 py-8">
  <div className="container mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-6xl font-semibold">Customer Reviews</h2>
      <div className="flex justify-center mt-4 mb-2">    
        <p className="flex gap-1 text-xl items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
        </p></div>
      <p className="text-gray-600">Based on 138 reviews</p>
      <button className="mt-2 bg-[#FFD100] text-2xl font-medium px-4 w-[26%] py-2 rounded-xl hover:bg-[#FFD100]">
        Write a review
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] m-auto ">
      
      <div className="bg-[#C3E8F1] shadow-md p-4 rounded-xl">
        <p className="text-sm flex justify-between mb-2">  
            <p className="flex gap-1 text-xl items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
        </p><span className="font-semibold text-xl">01/06/2025</span></p>
        <h4 className="font-semibold text-2xl flex justify-left items-center mb-4">Ashlee Mahar <span className="bg-[#2A317D] text-white font-normal text-sm px-2 py-1 rounded-full ml-2 inline-block">Verified</span></h4>
        <p className="uppercase mt-2 font-semibold text-2xl">Strawberry passion is my fave</p>
        <p className="mt-1 font-normal text-lg">Addicted is all I have to say</p>
      </div>
      <div className="bg-[#C3E8F1] shadow-md p-4 rounded-xl">
        <p className="text-sm flex justify-between mb-2">  
            <p className="flex gap-1 text-xl items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
        </p><span className="font-semibold text-xl">12/11/2024</span></p>
        <h4 className="font-semibold text-2xl flex justify-left items-center mb-4">C. <span className="bg-[#D3EBF1] text-gray-600 font-normal text-sm px-2 py-1 rounded-full ml-2 inline-block">Verified by Shop</span></h4>
        <p className="uppercase mt-2 font-semibold text-2xl"></p>
        <p className="mt-1 font-normal text-xl">Sooo good!</p>
      </div>

      <div className="bg-[#C3E8F1] shadow-md p-4 rounded-xl">
        <p className="text-sm flex justify-between mb-2">  
            <p className="flex gap-1 text-xl items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
        </p><span className="font-semibold text-xl">12/09/2024</span></p>
        <h4 className="font-semibold text-2xl flex justify-left items-center mb-4">Marla Bird <span className="bg-[#2A317D] text-white font-normal text-sm px-2 py-1 rounded-full ml-2 inline-block">Verified</span></h4>
        <p className="uppercase mt-2 font-semibold text-2xl">One of my favs</p>
        <p className="mt-1 font-normal text-lg">It tastes great & helps my insides! Love it!</p>
      </div>
      <div className="bg-[#C3E8F1] shadow-md p-4 rounded-xl">
        <p className="text-sm flex justify-between mb-2">  
            <p className="flex gap-1 text-xl items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
        </p><span className="font-semibold text-xl">11/20/2024</span></p>
        <h4 className="font-semibold text-2xl flex justify-left items-center mb-4">Brenda Long <span className="bg-[#D3EBF1] text-gray-600 font-normal text-sm px-2 py-1 rounded-full ml-2 inline-block">Verified by Shop</span></h4>
        <p className="uppercase mt-2 font-semibold text-2xl"></p>
        <p className="mt-1 font-normal text-lg">Love the flavor and benefits from drinking!</p>
      </div>
      <div className="bg-[#C3E8F1] shadow-md p-4 rounded-xl">
        <p className="text-sm flex justify-between mb-2">  
            <p className="flex gap-1 text-xl items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
        </p><span className="font-semibold text-xl">11/11/2024</span></p>
        <h4 className="font-semibold text-2xl flex justify-left items-center mb-4">David Downs <span className="bg-[#2A317D] text-white font-normal text-sm px-2 py-1 rounded-full ml-2 inline-block">Verified</span></h4>
        <p className="uppercase mt-2 font-semibold text-2xl"></p>
        <p className="mt-1 font-normal text-lg">I love the taste and drink one when I exercise.</p>
      </div>
      <div className="bg-[#C3E8F1] shadow-md p-4 rounded-xl">
        <p className="text-sm flex justify-between mb-2">  
            <p className="flex gap-1 text-xl items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <MdOutlineStarBorder />
        </p><span className="font-semibold text-xl">11/04/2024</span></p>
        <h4 className="font-semibold text-2xl flex justify-left items-center mb-4">Carol R Butch<span className="bg-[#2A317D] text-white font-normal text-sm px-2 py-1 rounded-full ml-2 inline-block">Verified</span></h4>
        <p className="uppercase mt-2 font-semibold text-2xl">Fruity beverage</p>
        <p className="mt-1 font-normal text-lg">A touch sweeter than I thought it would be, it’s good.</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default CustomerReview
