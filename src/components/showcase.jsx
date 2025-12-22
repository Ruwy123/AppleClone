import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
      timeline
        .to(".mask img", {
          scale: 1,
          opacity: 1,
          ease: "none",
        })

        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);
  return (
    <section className="relative" id="showcase">
      <div className="relative lg:overflow-hidden">
        <video
          className="w-full object-cover object-center"
          src="/videos/game.mp4"
          loop
          muted
          autoPlay
          playsInline
        />
        <div className="mask absolute h-full top-0 inset-0 pointer-events-none">
          <img
            className=" h-full scale-150 lg:scale-100"
            src="/mask-logo.svg"
          />
        </div>
      </div>
      <div className="content relative z-10 my-5 lg:-mt-40 bg-black font-semibold text-xl text-dark-100 lg:opacity-0">
        <div className="container mx-auto px-5 pb-20 2xl:px-0 flex flex-col lg:flex-row justify-center gap-20">
          <div className="lg:max-w-md">
            <h2 className="font-semibold text-3xl lg:text-7xl text-white">
              Rocket Chip
            </h2>
            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing {""}
                <span className="text-white">
                  M4,the next generation of Apple silicon
                </span>
                . M4 powers
              </p>
              <p>
                It drives Apple intelligence on iPad Pro, so you can
                write,create,and accomplish more with ease. All in a design
                that's unbelievably thin,light,and powerful
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,color
                accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to your fingertips.
              </p>
              <p className="text-[#0071e3]">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>
          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <p>4x faster</p>
              <p>pro rendering performance</p>
              <p>than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <p>1.5x faster</p>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShowCase;
