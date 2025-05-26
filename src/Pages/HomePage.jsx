import React from "react";
import Navbar from "./NavBar";
import { FaArrowRight } from "react-icons/fa6";
import { FiCoffee } from "react-icons/fi";
import { RiGlobalLine } from "react-icons/ri";
import { IoLeafOutline } from "react-icons/io5";
import Footer from "./Footer";
import hero from "../assets/hero.jpg"
import kopi from "../assets/kopi.jpg"

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DescSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[450px] mt-16"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-7xl font-bold">Aroma Sriwijaya</h1>
            <p className="mb-5 text-2xl font-semibold">
              Premium Indonesian Coffee Beans for Global Markets
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn border-0 shadow-md  bg-amber-800 hover:bg-amber-900 font-bold text-gray-300">
                View Coffee Catalog <FaArrowRight className="mt-1" />
              </button>
              {/* <button className="btn btn-outline hover:bg-amber-800 hover:border-amber-800 font-bold text-gray-300">Request a Quote </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DescSection() {
  return (
    <>
      <div className="hero bg-amber-50 h-[650px]">
        <div className="hero-content flex-col lg:flex-row-reverse px-16">
          <img
            src={kopi}
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-16">
            <h1 className="text-5xl font-bold text-amber-900">
              Authentic Toraja Coffee with a Bold Indonesian Soul
            </h1>
            <p className="py-6 text-justify">
              El's Coffee brings you the rich heritage of Indonesia through its
              Toraja Arabica blend grown in the lush highlands of Sulawesi.
              Handpicked and locally roasted, each bean offers a deep, earthy
              flavor with a smooth finish, reflecting the spirit and tradition
              of Torajan coffee culture. Our dedication to quality and
              sustainability ensures that every cup tells a story of origin,
              care, and craft.
            </p>
            <button className="btn bg-amber-800 rounded-lg border-0 hover:bg-amber-900 text-gray-50">
              Learn About Our Coffee
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function WhyChooseUs() {
  return (
    <>
      <section className="py-16 bg-base-100">
        <div className="text-center">
          <div className="badge badge-warning mb-4 text-amber-900 font-semibold">
            Why Choose Us
          </div>
          <h2 className="text-4xl font-bold mb-2">
            Our Commitment to Excellence
          </h2>
          <p className="text-xl font-semibold text-gray-800 max-w-xl mx-auto">
            Discover why coffee businesses around the world trust Aroma
            Sriwijaya for their premium Indonesian coffee needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-4">
          <div className="card border border-warning rounded-md shadow-sm">
            <div className="card-body items-start">
              <RiGlobalLine className="text-4xl text-amber-500" />
              <h3 className="card-title font-bold text-xl">Global Reach</h3>
              <p className="text-md">
                We export to roasteries and wholesalers worldwide, with
                efficient logistics and reliable delivery.
              </p>
            </div>
          </div>

          <div className="card border border-warning rounded-md shadow-sm">
            <div className="card-body items-start">
              <FiCoffee className="text-4xl text-amber-500" />
              <h3 className="card-title font-bold text-xl">
                Quality Assurance
              </h3>
              <p className="text-md">
                Rigorous quality control ensures only the finest beans make it
                to your roastery.
              </p>
            </div>
          </div>

          <div className="card border border-warning rounded-md shadow-sm">
            <div className="card-body items-start">
              <IoLeafOutline className="text-4xl text-amber-500" />
              <h3 className="card-title font-bold text-xl">Sustainability</h3>
              <p className="text-md">
                Direct partnerships with farmers promote sustainable practices
                and fair compensation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeaturedProducts() {
  return (
    <>
      <section className="py-16 bg-amber-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2">
            Featured Coffee Selecttions
          </h2>
          <p className="text-xl font-semibold max-w-xl mx-auto">
            explore our premium coffee selections, handpicked for quality and
            flavor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-4">
          {/* card-1 */}
          <div className="card border border-amber-900 rounded-xl shadow-md">
            <div className="card-body p-0">
              {/* Kontainer gambar dan badge */}
              <div className="relative h-50 w-full">
                {/* Badge di kanan atas */}
                <div className="badge badge-warning absolute top-2 right-2 z-10 hover:bg-amber-800 hover:text-gray-100 font-semibold">
                  Arabica
                </div>

                {/* Gambar atau background */}
                <img
                  src={kopi}
                  alt="Coffee"
                  className="object-cover h-full w-full rounded-t-xl"
                />
              </div>

              <div className="p-4">
                <h3 className="card-title">Toraja Arabica</h3>
                <p>
                  Experience the rich, earthy flavors of Toraja Arabica, grown
                  in the highlands of Sulawesi.
                </p>
                <button className="btn bg-amber-800 border-amber-800 hover:bg-amber-900 rounded-lg w-full mt-4 text-gray-100">
                  Learn More <FaArrowRight className="mt-1" />
                </button>
              </div>
            </div>
          </div>

          {/* card-2 */}
          <div className="card border border-amber-900 rounded-xl shadow-md">
            <div className="card-body p-0">
              {/* Kontainer gambar dan badge */}
              <div className="relative h-50 w-full">
                {/* Badge di kanan atas */}
                <div className="badge badge-warning absolute top-2 right-2 z-10 hover:bg-amber-800 hover:text-gray-100 font-semibold">
                  Arabica
                </div>

                {/* Gambar atau background */}
                <img
                  src={kopi}
                  alt="Coffee"
                  className="object-cover h-full w-full rounded-t-xl"
                />
              </div>

              <div className="p-4">
                <h3 className="card-title">Toraja Arabica</h3>
                <p>
                  Experience the rich, earthy flavors of Toraja Arabica, grown
                  in the highlands of Sulawesi.
                </p>
                <button className="btn bg-amber-800 border-amber-800 hover:bg-amber-900 rounded-lg w-full mt-4 text-gray-100">
                  Learn More <FaArrowRight className="mt-1" />
                </button>
              </div>
            </div>
          </div>

          {/* card-3 */}
          <div className="card border border-amber-900 rounded-xl shadow-md">
            <div className="card-body p-0">
              {/* Kontainer gambar dan badge */}
              <div className="relative h-50 w-full">
                {/* Badge di kanan atas */}
                <div className="badge badge-warning absolute top-2 right-2 z-10 hover:bg-amber-800 hover:text-gray-100 font-semibold">
                  Arabica
                </div>

                {/* Gambar atau background */}
                <img
                  src={kopi}
                  alt="Coffee"
                  className="object-cover h-full w-full rounded-t-xl"
                />
              </div>

              <div className="p-4">
                <h3 className="card-title">Toraja Arabica</h3>
                <p>
                  Experience the rich, earthy flavors of Toraja Arabica, grown
                  in the highlands of Sulawesi.
                </p>
                <button className="btn bg-amber-800 border-amber-800 hover:bg-amber-900 rounded-lg w-full mt-4 text-gray-100">
                  Learn More <FaArrowRight className="mt-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
