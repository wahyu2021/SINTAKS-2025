import React from "react";
import Navbar from "./NavBar"
import { FaArrowRight } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import Footer from "./Footer";
import heroProduct from "../assets/hero-product.jpg";

function ProductPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <Footer />
    </>
  );
}

export default ProductPage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[450px] mt-16"
        style={{
          backgroundImage: `url(${heroProduct})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-7xl font-bold">Our Coffee Products</h1>
            <p className="mb-5 text-2xl font-semibold">
              Premium Indonesian Coffee Beans for Global Markets
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn border-0 bg-amber-800 hover:bg-amber-900 font-bold text-gray-300 shadow-md">
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

function ProductSection() {
  return (
    <>
      <section className="py-8 ">
        <div className="flex justify-between mx-64 mt-4">
          <div className="tabs bg-base-100 p-2 rounded-lg">
            <a className="tab tab-active bg-gray-50 font-semibold text-gray-800 rounded-md">
              All Coffee
            </a>
            <a className="tab text-gray-800">Arabica</a>
            <a className="tab text-gray-800">Robusta</a>
            <a className="tab text-gray-800">Specialty</a>
          </div>

          <button className="btn btn-outline">
            {" "}
            <FiFilter /> Filter Option
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 max-w-full px-64 mx-auto">
          <ProductCard
            image={heroProduct}
            title="Sumatera Mandheling"
            subTitle="Aceh, North Sumatra"
            valueProcessing="Wet-Hulled"
            valueAltitude="800-1,500 masl"
            valueFlavor="Herbal, Earthy, Spicy"
            valueAvailable="Year-round"
          />
          <ProductCard
            image={heroProduct}
            title="Sumatera Mandheling"
            subTitle="Aceh, North Sumatra"
            valueProcessing="Wet-Hulled"
            valueAltitude="800-1,500 masl"
            valueFlavor="Herbal, Earthy, Spicy"
            valueAvailable="Year-round"
          />
          <ProductCard
            image={heroProduct}
            title="Sumatera Mandheling"
            subTitle="Aceh, North Sumatra"
            valueProcessing="Wet-Hulled"
            valueAltitude="800-1,500 masl"
            valueFlavor="Herbal, Earthy, Spicy"
            valueAvailable="Year-round"
          />
          <ProductCard
            image={heroProduct}
            title="Sumatera Mandheling"
            subTitle="Aceh, North Sumatra"
            valueProcessing="Wet-Hulled"
            valueAltitude="800-1,500 masl"
            valueFlavor="Herbal, Earthy, Spicy"
            valueAvailable="Year-round"
          />
          <ProductCard
            image={heroProduct}
            title="Sumatera Mandheling"
            subTitle="Aceh, North Sumatra"
            valueProcessing="Wet-Hulled"
            valueAltitude="800-1,500 masl"
            valueFlavor="Herbal, Earthy, Spicy"
            valueAvailable="Year-round"
          />
          <ProductCard
            image={heroProduct}
            title="Sumatera Mandheling"
            subTitle="Aceh, North Sumatra"
            valueProcessing="Wet-Hulled"
            valueAltitude="800-1,500 masl"
            valueFlavor="Herbal, Earthy, Spicy"
            valueAvailable="Year-round"
          />
          <ProductCard
            image={heroProduct}
            title="Sumatera Mandheling"
            subTitle="Aceh, North Sumatra"
            valueProcessing="Wet-Hulled"
            valueAltitude="800-1,500 masl"
            valueFlavor="Herbal, Earthy, Spicy"
            valueAvailable="Year-round"
          />
          <ProductCard
            image={heroProduct}
            title="Sumatera Mandheling"
            subTitle="Aceh, North Sumatra"
            valueProcessing="Wet-Hulled"
            valueAltitude="800-1,500 masl"
            valueFlavor="Herbal, Earthy, Spicy"
            valueAvailable="Year-round"
          />
        </div>
      </section>
    </>
  );
}

function ProductCard(props) {
  return (
    <div className="card border-gray-600 rounded-lg shadow-xl">
      <div className="card-body p-0">
        {/* Kontainer gambar dan badge */}
        <div className="relative h-80 w-full bg-white">
          {/* Badge di kanan atas */}
          <div className="badge rounded-xl bg-amber-600 border-amber-600 text-gray-100 absolute top-2 right-2 z-10 hover:bg-amber-800 hover:border-amber-800 font-semibold text-xs px-2 py-0">
            Arabica
          </div>

          {/* Gambar atau background */}
          <img
            src={props.image}
            alt={props.title}
            className="h-full w-full object-cover rounded-t-lg"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl text-gray-800 font-bold">{props.title}</h2>
          <p className="text-gray-800/50 font-semibold">{props.subTitle}</p>
          <div className="mt-4">
            <div className="grid grid-cols-2">
              <DescProduct title="Processing" value={props.valueProcessing} />
              <DescProduct title="Altitude" value={props.valueAltitude} />
              <DescProduct title="Flavor" value={props.valueFlavor} />
              <DescProduct title="Available" value={props.valueAvailable} />
            </div>
          </div>
          <button className="btn rounded-lg bg-amber-800 border-amber-800 hover:bg-amber-900 hover:border-amber-900 w-full mt-4 text-gray-100">
            Request Quotation
          </button>
        </div>
      </div>
    </div>
  );
}

function DescProduct(props) {
  return (
    <>
      <p className="text-gray-800 text-lg font-semibold">{props.title}</p>
      <div className="text-gray-800 text-[15px] text-right">{props.value}</div>
    </>
  );
}

function test()
{
  return(
    <>
    
    </>
  );
}