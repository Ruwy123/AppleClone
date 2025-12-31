import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  const containerRef = useRef(null); // Ref for the whole section (trigger)
  const contentRef = useRef(null); // Ref for the text content
  const maskRef = useRef(null); // Ref for the mask image

  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });

  useGSAP(() => {
    // We only want the scroll animation on Desktop
    if (!isTablet) {
      // 1. Setup the starting state
      gsap.set(maskRef.current, { scale: 100 }); // Start extremely zoomed in
      gsap.set(contentRef.current, { opacity: 0, y: 40 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%", // How long the scroll lasts
          scrub: true,
          pin: true,
        },
      });

      timeline
        // 2. Zoom out the mask
        .to(maskRef.current, {
          scale: 1,
          ease: "none",
        })
        // 3. Fade in the content
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "power1.out",
          },
          "-=0.1"
        ); // Starts slightly before zoom ends
    } else {
      // Mobile fallback: ensure content is visible if no scroll animation
      gsap.set(contentRef.current, { opacity: 1, y: 0 });
    }
  }, [isTablet]);

  return (
    <section ref={containerRef} className="relative bg-black" id="showcase">
      <div className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/game.mp4"
          loop
          muted
          autoPlay
          playsInline
        />

        {/* Mask Layer */}
        <div className="mask absolute inset-0 z-10 flex items-center justify-center pointer-events-none ">
          <img
            ref={maskRef}
            className="h-full object-cover "
            src="/mask-logo.svg"
            alt="mask"
          />
        </div>
      </div>

      {/* Content Layer - Targeted by contentRef */}
      <div
        ref={contentRef}
        className="relative z-20 my-5 lg:-mt-40 font-semibold text-xl text-dark-100 lg:opacity-0 py-60"
      >
        <div className="container mx-auto px-5 pb-20 2xl:px-0 flex flex-col lg:flex-row justify-center gap-20">
          <div className="lg:max-w-md">
            <h2 className="font-semibold text-3xl lg:text-7xl text-white">
              Rocket Chip
            </h2>
            <div className="space-y-5 mt-7 pe-10 text-gray-400">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                . M4 powers...
              </p>
              <p>
                It drives Apple intelligence on iPad Pro, so you can write,
                create, and accomplish more.
              </p>
              <p className="text-[#0071e3] cursor-pointer">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14 text-gray-400">
            <div className="space-y-2">
              <p>Up to</p>
              <p className="text-white text-4xl">4x faster</p>
              <p>pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <p className="text-white text-4xl">1.5x faster</p>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
