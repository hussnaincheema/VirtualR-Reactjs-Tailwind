import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div
      id="features"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px] p-7"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-6xl font-bold px-10 py-4 uppercase">
          Feature
        </span>
        <h2 className="text-3xl capitalize sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center mt-10 lg:mt-20 max-w-[1200px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 flex justify-center"
            >
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
