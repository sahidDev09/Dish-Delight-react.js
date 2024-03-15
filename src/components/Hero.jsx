const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[650px] rounded-xl "
        style={{
          backgroundImage:
            "url(https://www.shutterstock.com/image-photo/african-american-female-chef-having-600nw-2150289105.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" md:p-20 text-white">
            <h1 className="mb-5 md:text-7xl text-4xl font-bold ">
              Ignite your culinary journey <br /> with us
            </h1>
            <p className="mb-5">
              Transform into a world-class programmer through rigorous training
              in programming fundamentals,
              <br /> data structures, and algorithmic thinking.
            </p>
            <button className="btn btn-success mr-4 rounded-full">
              Explore Now
            </button>
            <button className="btn btn-outline border-white text-white rounded-full">
              Our feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
