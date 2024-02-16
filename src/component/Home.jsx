import web3Image from "../assets/images/image-web-3-desktop.jpg";
import web3ImageMobile from "../assets/images/image-web-3-mobile.jpg";
import retroPCsImage from "../assets/images/image-retro-pcs.jpg";
import topLaptopsImage from "../assets/images/image-top-laptops.jpg";
import gamingGrowthImage from "../assets/images/image-gaming-growth.jpg";
function Home() {
  return (
    <main className="mx-auto p-6 w-full md:w-[1200px] ">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <section>
          <img
            src={web3Image}
            alt=""
            className="md:flex hidden h-[260px] w-full"
          />
          <img
            src={web3ImageMobile}
            alt=""
            className="md:hidden h-[260px] w-full"
          />
          <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 items-center md:items-end md: md:mt-8 w-full">
            <h1 className="font-bold text-5xl capitalize max-w-[20rem] text-left ">
              the bright future of web 3.0?
            </h1>
            <div className="max-w-sm ">
              <p className="text-gray-500 font-medium">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className=" text-white hover:bg-black bg-red-400 py-2 duration-150 px-6 capitalize mt-4 text-lg">
                read more
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#000] px-4 py-6  space-y-5 cursor-pointer">
          <div className="">
            <h1 className="text-yellow-500 font-semibold text-3xl">New</h1>
            <h1 className="text-white pt-4 font-semibold hover:text-yellow-500 text-lg">
              Hydrogen VS Electric Cars
            </h1>
            <p className="text-gray-300 pt-2 text-sm">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
            <div className="border-[0.1px] border-gray-400 mt-8"></div>
          </div>

          <div>
            <h1 className="text-white pt-4 font-semibold hover:text-yellow-500 text-lg">
              The Downsides of AI Artistry
            </h1>
            <p className="text-gray-300 pt-2 text-sm">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
            <div className="border-[0.1px] border-gray-400 mt-8"></div>
          </div>

          <div>
            <h1 className="text-white pt-4 font-semibold hover:text-yellow-500 text-lg">
              Is VC Funding Drying Up?
            </h1>
            <p className="text-gray-300 pt-2 text-sm">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </section>
      </div>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
        <div className="flex space-x-3 h-full ">
          <img src={retroPCsImage} alt="retro" className="h-[150px]" />
          <div className="flex flex-col space-y-3 p-2">
            <h1 className="text-zinc-400 font-semibold text-3xl">01</h1>
            <h3 className=" font-extrabold hover:text-red-500 cursor-pointer">
              Reviving Retro PCs
            </h3>
            <p className="text-zinc-500 font-medium text-sm">
              What happens when old PCs are modern upgrades?
            </p>
          </div>
        </div>

        <div className="flex space-x-3 h-full ">
          <img src={topLaptopsImage} alt="laptops" className="h-[150px]" />
          <div className="flex flex-col space-y-3 p-2">
            <h1 className="text-zinc-400 font-semibold text-3xl">02</h1>
            <h3 className=" font-extrabold hover:text-red-500 cursor-pointer">
              Top 10 Laptops of 2022
            </h3>
            <p className="text-zinc-500 font-medium text-sm">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>

        <div className="flex space-x-3 h-full ">
          <img
            src={gamingGrowthImage}
            alt="gaming-growth"
            className="h-[150px]"
          />
          <div className="flex flex-col space-y-3 p-2">
            <h1 className="text-zinc-400 font-semibold text-3xl">03</h1>
            <h3 className=" font-extrabold hover:text-red-500 cursor-pointer">
              The Growth of Gaming
            </h3>
            <p className="text-zinc-500 font-medium text-sm">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
