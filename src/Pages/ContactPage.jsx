import React, { useState } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Check, Clock, Copy, Mail, MapPin, Phone } from "lucide-react";
import MyMap from "../components/map";
import heroContact from '../assets/hero-contact.jpg'

function ContactPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MainSection />
      <Footer />
    </>
  );
}

export default ContactPage;

function MainSection() {
  return (
    <>
      <div className="flex w-full justify-center my-10">
        <div className="flex justify-center w-3/4">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[450px] mt-16"
        style={{
          backgroundImage: `url(${heroContact})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-7xl font-bold">Contact Us</h1>
            <p className="mb-5 text-2xl font-semibold">
              Get in touch with our team to discuss your coffee needs
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactForm() {
  const [inquiryType, setInquiryType] = useState("Request a Quotation");
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    inquiryType: "Request a Quotation",
    product: "",
    volume: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simpan data ke Firestore
      await addDoc(collection(db, "contacts"), formData);
      alert("Pesan berhasil dikirim!");
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        inquiryType: "Request a Quotation",
        product: "",
        volume: "",
        message: "",
      }); // Reset form
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="max-w-3xl p-6">
      <h1 className="text-4xl font-bold text-[#8B4513] mb-2">
        Send Us a Message
      </h1>
      <p className="text-gray-700 mb-6">
        Fill out the form below and our team will get back to you within 24
        hours.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-gray-900 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-semibold text-gray-900 mb-1"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Your company"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-900 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-semibold text-gray-900 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Your phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-1">
            Type of Inquiry
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="quotation"
                name="inquiryType"
                value="Request a Quotation"
                checked={inquiryType === "Request a Quotation"}
                onChange={(e) => setInquiryType(e.target.value)}
                className="h-4 w-4 text-[#8B4513] focus:ring-[#8B4513]"
              />
              <label htmlFor="quotation" className="ml-2 text-sm text-gray-900">
                Request a Quotation
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="samples"
                name="inquiryType"
                value="Request Samples"
                checked={inquiryType === "Request Samples"}
                onChange={(e) => setInquiryType(e.target.value)}
                className="h-4 w-4 text-[#8B4513] focus:ring-[#8B4513]"
              />
              <label htmlFor="samples" className="ml-2 text-sm text-gray-900">
                Request Samples
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="partnership"
                name="inquiryType"
                value="Partnership Inquiry"
                checked={inquiryType === "Partnership Inquiry"}
                onChange={(e) => setInquiryType(e.target.value)}
                className="h-4 w-4 text-[#8B4513] focus:ring-[#8B4513]"
              />
              <label
                htmlFor="partnership"
                className="ml-2 text-sm text-gray-900"
              >
                Partnership Inquiry
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="other"
                name="inquiryType"
                value="Other"
                checked={inquiryType === "Other"}
                onChange={(e) => setInquiryType(e.target.value)}
                className="h-4 w-4 text-[#8B4513] focus:ring-[#8B4513]"
              />
              <label htmlFor="other" className="ml-2 text-sm text-gray-900">
                Other
              </label>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="product"
            className="block text-sm font-semibold text-gray-900 mb-1"
          >
            Product of Interest
          </label>
          <div className="relative">
            <select
              id="product"
              name="product"
              className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
              value={formData.product}
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Select a product
              </option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="volume"
            className="block text-sm font-semibold text-gray-900 mb-1"
          >
            Estimated Volume (kg)
          </label>
          <div className="relative">
            <select
              id="volume"
              name="volume"
              className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
              value={formData.volume}
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Select volume range
              </option>
              <option value="0-100">0-100 kg</option>
              <option value="101-500">101-500 kg</option>
              <option value="501-1000">501-1000 kg</option>
              <option value="1000+">1000+ kg</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-900 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            name="message"
            placeholder="Please provide details about your requirements"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8B4513]"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#6d3710] focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function ContactInfo() {
  const [copiedItems, setCopiedItems] = useState({});

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);

    // Tandai item tertentu sebagai telah disalin
    setCopiedItems((prev) => ({ ...prev, [id]: true }));

    // Reset status disalin setelah 1 detik
    setTimeout(() => {
      setCopiedItems((prev) => ({ ...prev, [id]: false }));
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-[#8B4513] mb-2">
        Contact Information
      </h1>
      <p className="text-gray-700 mb-6">
        You can also reach us directly using the following contact details.
      </p>

      <div className="space-y-4">
        {/* Email Card */}
        <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <Mail className="text-amber-800" size={20} />
                <h2 className="text-lg font-bold text-gray-900">Email</h2>
              </div>
              <p className="text-gray-600 mt-1">info@aromasriwijaya.com</p>
            </div>
            <button
              onClick={() =>
                copyToClipboard("info@aromasriwijaya.com", "email")
              }
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Copy email address"
            >
              {copiedItems.email ? (
                <Check size={18} className="text-green-500" />
              ) : (
                <Copy size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Phone Card */}
        <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <Phone className="text-amber-800" size={20} />
                <h2 className="text-lg font-bold text-gray-900">Phone</h2>
              </div>
              <p className="text-gray-600 mt-1">+62 812 3456 7890</p>
            </div>
            <button
              onClick={() => copyToClipboard("+62 812 3456 7890", "phone")}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Copy phone number"
            >
              {copiedItems.phone ? (
                <Check size={18} className="text-green-500" />
              ) : (
                <Copy size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Address Card */}
        <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <MapPin className="text-amber-800" size={20} />
                <h2 className="text-lg font-bold text-gray-900">Address</h2>
              </div>
              <p className="text-gray-600 mt-1">
                Jl. Sriwijaya No. 123, Palembang, South Sumatra, Indonesia 30139
              </p>
            </div>
            <button
              onClick={() =>
                copyToClipboard(
                  "Jl. Sriwijaya No. 123, Palembang, South Sumatra, Indonesia 30139",
                  "address"
                )
              }
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Copy address"
            >
              {copiedItems.address ? (
                <Check size={18} className="text-green-500" />
              ) : (
                <Copy size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Map */}
        <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <MapPin className="text-amber-800" size={20} />
                <h2 className="text-lg font-bold text-gray-900">Location</h2>
              </div>
              <p className="text-gray-600 mt-1">Find us on the map below</p>
            </div>
          </div>
          <MyMap />
        </div>

        {/* Business Card */}
        <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex flex-col justify-center w-full">
              <div className="flex items-center gap-4">
                <Clock className="text-amber-800" size={20} />
                <h2 className="text-lg font-bold text-gray-900">
                  Business Hours
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-1 text-gray-700">
                <p className="text-left">Monday - Friday</p>
                <p className="text-right">8:00 AM - 5:00 PM</p>
                <p className="text-left">Saturday</p>
                <p className="text-right">9:00 AM - 2:00 PM</p>
                <p className="text-left">Sunday</p>
                <p className="text-right">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
