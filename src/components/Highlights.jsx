import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: ".highlights",
        start: isMobile ? "bottom bottom" : "top top",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="highlights container mx-auto lg:py-40 max-lg:px-5">
      <h2 className=" text-white font-semibold text-3xl lg:text-7xl text-center max-w-3xl mx-auto">
        There's never been a better time to upgrade.
      </h2>
      <h3 className="text-[#F5F5F7] font-semibold text-xl lg:text-3xl text-center mt-10">
        Here's what you get with the Macbook Pro.
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 text-[#F5F5F7]">
        {/*left column*/}
        <div className=" left-column flex flex-col justify-between gap-5 opacity-0 -translate-y-5">
          {/*first container*/}
          <div className=" h-full bg-[url(/highlight-bg.png)] bg-no-repeat bg-cover p-10 2xl:pt-32 lg:pt-20 rounded-3xl">
            <img src="/laptop.png" alt="Laptop" />
            <p className="font-semibold text-4xl max-w-2xs">
              Fly through demanding tasks up to 9.8x faster.
            </p>
          </div>
          {/*second container*/}
          <div className=" bg-[#1D1D1F] p-10 rounded-3xl flex items-center gap-7">
            <img src="/sun.png" alt="Sun" />
            <p className="font-semibold lg:text-2xl 2xl:text-3xl">
              A stunning Liquid Retina XDR <b /> display.
            </p>
          </div>
        </div>
        {/*right column*/}
        <div className=" right-column flex flex-col justify-between gap-5  opacity-0 -translate-y-5">
          {/*first container*/}
          <div className="apple-gradient ">
            <img src="/ai.png" alt="AI" />
            <p className="font-semibold text-4xl max-w-2xs">
              Built for
              <br />
              <span
                className="  background: linear-gradient(
                91deg,
                #0096ff 0%,
                #bb64ff 42%,
                #f2416b 74%,
                #eb7500 100%
              );
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent"
              >
                Apple Intelligence.
              </span>
            </p>
          </div>
          {/*second container*/}
          <div className="h-full bg-[#1D1D1F]  p-10 2xl:pt-32 lg:pt-20 rounded-3xl">
            <img src="/battery.png" alt="Battery" />
            <p className="font-semibold text-4xl max-w-sm">
              <span className="green-gradient">
                {""}Up to 14 more hours{""}
              </span>{" "}
              battery life.
              <span className="text-dark-100">
                {" "}
                {""}(Up to 24 hours total.)
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Highlights;
