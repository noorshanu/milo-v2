import Typewriter from "typewriter-effect";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
function Hero() {
  return (
    <section className=" relative z-10 py-16">
      <img
        src="images/bnb.png"
        alt=" "
        className=" absolute left-0 top-10 sm:h-[200px] h-[100px] floating "
      />

      <div className="container-wrapper  flex flex-col  justify-center lg:drop-shadow-[0_0_10rem_white]">
        <div className="flex justify-between items-center mt-8 mb-8 gap-6 flex-col sm:flex-row">
          <div className=" relative z-40">
            <div className=" pt-3 mb-2 sm:max-w-xl w-full max-w-full ">
              <h2 className=" text-2xl font-semibold font-daughter py-2">
                {" "}
                <Typewriter
                  options={{
                    strings: ["Hi, meet LEXIESOL,"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "text-2xl font-semibold font-daughter", // Apply Tailwind CSS classes here
                  }}
                />
              </h2>
              <div className=" bg-[#00ffba] h-2 w-[70px] my-3"></div>

              <p className=" font-daughter text-base ">
               LEXIESOL is more than just a cute pup; he's a symbol of joy,
                laughter, and internet fame. With his expressive face and
                irresistible charm,LEXIESOLhas captured the hearts of millions
                around the world.
              </p>

              <a href="https://solscan.io/token/DyMqXJNhENa8ik9XSrogoj6kMiEqUWFr8ZDMsyRpiwVq" className=" font-semibold text-xl my-3">
                Contract : DyMqXJNhENa8ik9XSrogoj6kMiEqUWFr8ZDMsyRpiwVq
              </a>
            </div>
            <div className=" flex  items-end pt-3 gap-4">
              <a
                href="/"
                className="font-daughter text-2xl uppercase text-black bg-[#00fff6] border-2 border-[#00a59f] py-2 px-6 rounded-full"
              >
               DexTools
              </a>
              <div className=" flex items-center gap-4">
                <a
                  href="https://t.me/lexiesoll"
                  target="_blank"
                  className=" text-4xl"
                >
                  <FaTelegramPlane />
                </a>
                <a
                  href="https://twitter.com/LexieSolll"
                  className=" text-4xl"
                  target="_blank"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          <img
            src="/images/hero.png"
            className="w-[300px] h-auto sm:w-[50%] sm:h-[50%] object-contain floating"
            alt=""
          />
        </div>
      </div>

      <img
        src="images/cube1.png"
        alt=""
        className=" absolute right-[15%] bottom-0 h-[100px] -z-10 anime2 "
      />
    </section>
  );
}

export default Hero;
