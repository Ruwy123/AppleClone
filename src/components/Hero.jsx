import { useRef, useEffect } from "react";
const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);
  return (
    <section
      id="hero"
      className="h-fit lg:h-[80vh] flex flex-col items-center justify-center mt-40 lg:mt-20 2xl:mt-[7vh] "
    >
      <div className="relative z-10 flex flex-col items-center justify-center lg:translate-y-16">
        <img className="container mx-auto w-2/3" src="/title.png" alt="Title" />
        <video
          ref={videoRef}
          className="mx-auto lg:translate-y-5 2xl:translate-y-0"
          src="/videos/hero.mp4"
          autoPlay
          muted
          playsInline
        />
        <button className="relative z-10 bg-[#0071e3] text-white py-2 px-6 mt-10 lg:mt-0 mb-5 rounded-full font-semibold text-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          Buy
        </button>
        <p className="lg:text-bold font-semibold text-base text-dark-100">
          From $1566 or $133 for 12 months
        </p>
      </div>
    </section>
  );
};
export default Hero;
