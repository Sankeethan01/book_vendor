/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors ${
          isScrolled ? "bg-gray-900" : "bg-transparent"
        } text-white`}
      >
        <nav className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4 md:px-6">
          <div className="font-bold text-xl">
            <Link href="/">Batch</Link>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Brands & Agencies</Link>
            </li>
            <li>
              <Link href="/">Partner With Us</Link>
            </li>
            <li>
              <Link href="/">Become A Partner</Link>
            </li>
          </ul>
          <div className="flex space-x-4 items-center">
            <Link
              href="/"
              className="bg-black border-yellow-500 border-1 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition"
            >
              Sign Up
            </Link>
            <Link
              href="/"
              className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-lg  transition"
            >
              Become a Partner
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[120vh] flex flex-col justify-center items-center pt-20 pb-10">
        <div className="absolute inset-0 -z-10 w-full h-full">
          <Image
            src="/assets/hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Find & Book Spaces, Vendors, and Retail Essentials
          </h1>
          <p className="text-lg md:text-xl text-white mt-4">
            Welcome to the ultimate marketplace for brands to book spaces for
            activations, pop-ups, and events.Easily connect with top service
            vendors and rent retail fixtures, displays, and event equipment –
            all in one place.
          </p>
        </div>

        {/* SEARCH COMPONENT */}
        <div className="relative max-w-4xl w-full mx-auto pb-16 pt-30">
          {/* Outer Curved Box */}
          <div className="bg-white rounded-3xl shadow-lg p-6 relative z-10">
            {/* Search Inputs - Now in Front */}
            <div className="p-6 bg-white rounded-3xl shadow-md relative z-10">
              {activeTab === 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {/* Brand Event Type */}
                  <div>
                    <label className="block text-gray-600 font-semibold mb-2">
                      Brand Event Type
                    </label>
                    <select className="w-full p-3 border rounded-lg bg-gray-100">
                      <option>Select type</option>
                      <option>Product Launch</option>
                      <option>Pop Up</option>
                      <option>Brand Activation</option>
                      <option>Product Demo</option>
                      <option>Media + Influencer Events</option>
                      <option>Brand Dining Experience</option>
                      <option>Workshop + Masterclass</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-gray-600 font-semibold mb-2">
                      Location
                    </label>
                    <select className="w-full p-3 border rounded-lg bg-gray-100">
                      <option>Select location</option>
                      <option>Kuala Lumpur</option>
                      <option>Damansara</option>
                    </select>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Select Services
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Photography & Videography",
                      "Event Staffing",
                      "Event Design & Décor",
                      "Audio-Visual Equipment",
                      "Food & Beverage",
                      "Interactive Experiences",
                      "Event Production & Management",
                      "Print & Signage",
                      "Entertainment",
                    ].map((vendor) => (
                      <label key={vendor} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        {vendor}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">
                    Choose Essentials
                  </label>
                  <select className="w-full p-3 border rounded-lg bg-gray-100">
                    <option>Select item</option>
                    <option>Event Structures & Setups</option>
                    <option>Lighting & Visual Effects Equipment</option>
                    <option>Audio & Sound Systems</option>
                    <option>Furniture & Seating</option>
                    <option>Display & Branding Installations</option>
                    <option>Retail & Pop-Up Fixtures</option>
                    <option>Catering & Bar Equipment</option>
                    <option>Staging & Presentation Setups</option>
                    <option>Signage & Wayfinding Elements</option>
                    <option>Crowd Control & Safety Barriers</option>
                    <option>Shelving & Product Display Units</option>
                    <option>Interactive & Experiential Installations</option>
                  </select>
                </div>
              )}

              {/* Search Button */}
              <div className="flex justify-end mt-6">
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-gray-800 transition flex items-center space-x-2">
                  <span>Search</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Tab Navigation - Sent to the Back */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-t-3xl shadow-md flex space-x-0 text-lg font-medium z-0">
              {[
                "Book Spaces",
                "Book Event Vendors",
                "Rent Event Essentials",
              ].map((tab, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 transition font-semibold ${
                    activeTab === index
                      ? "bg-yellow-500 text-black"
                      : "text-gray-500"
                  } ${
                    index === 0 ? "rounded-tl-3xl" : "" // First tab rounded on the left
                  } ${
                    index === 2 ? "rounded-tr-3xl" : "" // Last tab rounded on the right
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

  {/* Book with Batch Section */}
<section className="w-full bg-white py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Title */}
    <h2 className="text-3xl font-semibold mb-8">
      Book with <span className="font-bold">batch</span>
    </h2>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 - Flexible Cancellation */}
      <div className="bg-yellow-400 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex justify-center mb-4">
          <img
            src="/icons/cancellation.png"
            alt="Flexible Cancellation"
            className="h-14 w-14"
          />
        </div>
        <h3 className="text-xl font-bold">Flexible Cancellation</h3>
        <p className="text-gray-800 mt-2 text-center">
          More than 90% of our experiences have a flexible cancellation policy.
        </p>
      </div>

      {/* Card 2 - Lowest Price Guarantee */}
      <div className="bg-yellow-400 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex justify-center mb-4">
          <img
            src="/icons/price-guarantee.png"
            alt="Lowest Price Guarantee"
            className="h-14 w-14"
          />
        </div>
        <h3 className="text-xl font-bold">Lowest Price Guarantee</h3>
        <p className="text-gray-800 mt-2 text-center">
          If you find it cheaper, we’ll refund the difference.
        </p>
      </div>

      {/* Card 3 - Satisfaction Guarantee */}
      <div className="bg-yellow-400 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex justify-center mb-4">
          <img
            src="/icons/satisfaction.png"
            alt="Satisfaction Guarantee"
            className="h-14 w-14"
          />
        </div>
        <h3 className="text-xl font-bold">Satisfaction Guarantee</h3>
        <p className="text-gray-800 mt-2 text-center">
          We guarantee you&apos;ll have a great time or your money back.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          {/* Title */}
          <div className="inline-block bg-gray-100 text-gray-800 font-semibold px-4 py-2 rounded-md mb-6">
            TRUSTED BY
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-center">
            <img src="/assets/logo.png" alt="Amazon" className="w-80 mx-auto" />
            <img src="/assets/logo.png" alt="BCG" className="w-80 mx-auto" />
            <img src="/assets/logo.png" alt="Chanel" className="w-80 mx-auto" />
            <img src="/assets/logo.png" alt="Uber" className="w-80 mx-auto" />
            <img src="/assets/logo.png" alt="Nestle" className="w-80 mx-auto" />
            <img src="/assets/logo.png" alt="Figma" className="w-80 mx-auto" />
            <img src="/assets/logo.png" alt="Google" className="w-80 mx-auto" />
            <img
              src="/assets/logo.png"
              alt="J.P. Morgan"
              className="w-80 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Discover Spaces Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl font-semibold mb-8">
            Discover Spaces <span className="font-bold">To</span> Launch In
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/space.jpg"
                  alt="Sketching at The Met Museum"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">⭐ 5.0 (8) • 2 hours</p>
                <h3 className="text-lg font-semibold mt-2">
                  Sketching at The Met Museum
                </h3>
                <p className="text-gray-800 mt-2 font-medium">
                  From $45 / person
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/space.jpg"
                  alt="New York graffiti chronicles with Inkhead"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  ⭐ 4.95 (56) • 1.5 hours
                </p>
                <h3 className="text-lg font-semibold mt-2">
                  New York graffiti chronicles with Inkhead
                </h3>
                <p className="text-gray-800 mt-2 font-medium">
                  From $45 / person
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/space.jpg"
                  alt="The History and Craft of Natural Incense"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  ⭐ 4.93 (27) • 1.5 hours
                </p>
                <h3 className="text-lg font-semibold mt-2">
                  The History and Craft of Natural Incense
                </h3>
                <p className="text-gray-800 mt-2 font-medium">
                  From $110 / person
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/space.jpg"
                  alt="Create and savor a wood-fired New York pizza"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">⭐ 5.0 (6) • 1.5 hours</p>
                <h3 className="text-lg font-semibold mt-2">
                  Create and savor a wood-fired New York pizza
                </h3>
                <p className="text-gray-800 mt-2 font-medium">
                  From $110 / person
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl font-semibold mb-8">Book Event Vendors</h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/book.jpg"
                  alt="Sketching at The Met Museum"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">⭐ 5.0 (8) • 2 hours</p>
                <h3 className="text-lg font-semibold mt-2">
                  Sketching at The Met Museum
                </h3>
                <p className="text-gray-800 mt-2 font-medium">
                  From $45 / person
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/book.jpg"
                  alt="New York graffiti chronicles with Inkhead"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  ⭐ 4.95 (56) • 1.5 hours
                </p>
                <h3 className="text-lg font-semibold mt-2">
                  New York graffiti chronicles with Inkhead
                </h3>
                <p className="text-gray-800 mt-2 font-medium">
                  From $45 / person
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/book.jpg"
                  alt="The History and Craft of Natural Incense"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  ⭐ 4.93 (27) • 1.5 hours
                </p>
                <h3 className="text-lg font-semibold mt-2">
                  The History and Craft of Natural Incense
                </h3>
                <p className="text-gray-800 mt-2 font-medium">
                  From $110 / person
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/book.jpg"
                  alt="Create and savor a wood-fired New York pizza"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">⭐ 5.0 (6) • 1.5 hours</p>
                <h3 className="text-lg font-semibold mt-2">
                  Create and savor a wood-fired New York pizza
                </h3>
                <p className="text-gray-800 mt-2 font-medium">
                  From $110 / person
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl font-semibold mb-8">
            Rent Event Props & Equipment
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/rent.jpg"
                  alt="Sketching at The Met Museum"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">⭐ 5.0 (8) • 2 hours</p>
                <h3 className="text-lg font-semibold mt-2">
                  Sketching at The Met Museum
                </h3>
                <p className="text-gray-800 mt-2 font-medium">
                  From $45 / person
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/rent.jpg"
                  alt="New York graffiti chronicles with Inkhead"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  ⭐ 4.95 (56) • 1.5 hours
                </p>
                <h3 className="text-lg font-semibold mt-2">
                  New York graffiti chronicles with Inkhead
                </h3>
                <p className="text-gray-800 mt-2 font-medium">
                  From $45 / person
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/rent.jpg"
                  alt="The History and Craft of Natural Incense"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  ⭐ 4.93 (27) • 1.5 hours
                </p>
                <h3 className="text-lg font-semibold mt-2">
                  The History and Craft of Natural Incense
                </h3>
                <p className="text-gray-800 mt-2 font-medium">
                  From $110 / person
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src="/assets/rent.jpg"
                  alt="Create and savor a wood-fired New York pizza"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">⭐ 5.0 (6) • 1.5 hours</p>
                <h3 className="text-lg font-semibold mt-2">
                  Create and savor a wood-fired New York pizza
                </h3>
                <p className="text-gray-800 mt-2 font-medium">
                  From $110 / person
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          {/* Title with Link */}
          <h2 className="text-2xl font-semibold mb-8">Insights</h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog Card 1 */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img
                src="/assets/blog.jpg"
                alt="Blog 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  Tools for consulting workshops: Run your next session with
                  Mural
                </h3>
                <a
                  href="#"
                  className="text-blue-600 font-medium mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img
                src="/assets/blog.jpg"
                alt="Blog 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  The top 10 strategic analysis tools for businesses
                </h3>
                <a
                  href="#"
                  className="text-blue-600 font-medium mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img
                src="/assets/blog.jpg"
                alt="Blog 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  Easily put together a business plan with Mural
                </h3>
                <a
                  href="#"
                  className="text-blue-600 font-medium mt-4 inline-block"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Gradient Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            UNLOCK YOUR AI SALES{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 text-transparent bg-clip-text">
              SUPERPOWERS
            </span>
          </h2>

          {/* Email Input & Button */}
          <div className="max-w-lg mx-auto flex items-center bg-gray-900 rounded-full overflow-hidden border border-gray-700">
            <input
              type="email"
              placeholder="Enter your company email"
              className="flex-grow bg-gray-900 text-white placeholder-gray-400 px-4 py-3 outline-none rounded-full"
            />
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition whitespace-nowrap">
              Get free trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          {/* Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
            {/* Column 1 - Offerings */}
            <div>
              <h3 className="font-semibold mb-3">OFFERINGS</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">Offsites & Retreats</a>
                </li>
                <li>
                  <a href="#">Client Events</a>
                </li>
                <li>
                  <a href="#">SKOs</a>
                </li>
                <li>
                  <a href="#">Conferences</a>
                </li>
                <li>
                  <a href="#">Incentive Trips</a>
                </li>
                <li>
                  <a href="#">Expedited Planning</a>
                </li>
                <li>
                  <a href="#">Full Service Planning</a>
                </li>
              </ul>
            </div>

            {/* Column 2 - Platform */}
            <div>
              <h3 className="font-semibold mb-3">PLATFORM</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">Event Management Platform</a>
                </li>
                <li>
                  <a href="#">Guest Management</a>
                </li>
                <li>
                  <a href="#">AI Text Messenger</a>
                </li>
                <li>
                  <a href="#">Event Ticketing</a>
                </li>
                <li>
                  <a href="#">Vendor Sourcing</a>
                </li>
                <li>
                  <a href="#">Product Updates</a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Why BoomPop */}
            <div>
              <h3 className="font-semibold mb-3">WHY BOOMPOP</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">Customer Stories</a>
                </li>
                <li>
                  <a href="#">Data Security</a>
                </li>
                <li>
                  <a href="#">Schedule a Demo</a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Resources */}
            <div>
              <h3 className="font-semibold mb-3">RESOURCES</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">Budget Estimator</a>
                </li>
                <li>
                  <a href="#">Pre-Build Events</a>
                </li>
                <li>
                  <a href="#">City Guides</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Ebooks</a>
                </li>
                <li>
                  <a href="#">Event Content Ideas</a>
                </li>
              </ul>
            </div>

            {/* Column 5 - Company */}
            <div>
              <h3 className="font-semibold mb-3">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">Events Team</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Offsites</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 mt-10 pt-6 text-sm">
            {/* Copyright */}
            <p>
              © 2025 BoomPop, Inc. email- sankeethantharmathayalan@gmail.com
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white text-2xl hover:text-gray-400">
                📷
              </a>{" "}
              {/* Instagram Icon */}
              <a href="#" className="text-white text-2xl hover:text-gray-400">
                🔗
              </a>{" "}
              {/* LinkedIn Icon */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
