import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div id="Hero" className="flex flex-col items-center mt-6 lg:mt-20 p-7">
      <h1 className="text-4xl bold capitalize sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for <br /> developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-center my-10 space-y-4 sm:space-y-0 sm:space-x-3">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-center capitalize"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border text-center">
          Documentation
        </a>
      </div>

      <div className="flex flex-col items-center lg:flex-row mt-10 lg:justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-2/4 lg:w-2/5 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-2/4 lg:w-2/5 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
