const Connect = () => {
    return (
      <section className="bg-[#2A317D] text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="md:text-6xl font-semibold mb-10 text-4xl">LET’S STAY IN TOUCH!</h2>
          <p className="md:text-3xl text-xl font-normal w-[45%] m-auto mb-10">
            Sign up now for gut health tips, exclusive offers, and new products. 
            Check your inbox for 10% off your first order!
          </p>
          
          <form className="flex justify-center items-center font-semibold text-xl m-auto w-[45%]">
  <input
    type="email"
    placeholder="Enter your email here"
    className="md:px-4 py-3  w-10/12 h-[auto] text-xs sm:text-sm md:text-xl rounded-l-xl bg-[#FBF5E7]"
  />
  <button
    type="submit"
    className="bg-[#E21B79] text-white text-sm md:text-xl w-1/2 py-[0.66rem] h-[auto] rounded-r-xl hover:bg-[#E21B79]"
  >
    SIGN UP
  </button>
</form>


        </div>
      </section>
    );
  };
  
  export default Connect;
  