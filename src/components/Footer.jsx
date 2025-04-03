import React from "react";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto px-5 py-10 md:pt-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-5">
    {/* <div className="flex flex-col justify-center items-center">
      <h3 className="text-dark-light font-bold text-lg">Product</h3>
      <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
        <li><a href="/">Landing Page</a></li>
        <li><a href="/">Features</a></li>
        <li><a href="/">Documentation</a></li>
        <li><a href="/">Referral Program</a></li>
        <li><a href="/">Pricing</a></li>
      </ul>
    </div>

    <div className="flex flex-col justify-center items-center">
      <h3 className="text-dark-light font-bold text-lg">Services</h3>
      <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
        <li><a href="/">Documentation</a></li>
        <li><a href="/">Design</a></li>
        <li><a href="/">Themes</a></li>
        <li><a href="/">Illustrations</a></li>
        <li><a href="/">UI Kit</a></li>
      </ul>
    </div>

    <div className="flex flex-col justify-center items-center">
      <h3 className="text-dark-light font-bold text-lg">Company</h3>
      <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
        <li><a href="/">About</a></li>
        <li><a href="/">Terms</a></li>
        <li><a href="/">Privacy Policy</a></li>
        <li><a href="/">Careers</a></li>
      </ul>
    </div>

    <div className="flex flex-col justify-center items-center">
      <h3 className="text-dark-light font-bold text-lg">Follow Us</h3>
      <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
        <li><a href="/">Facebook</a></li>
        <li><a href="/">Twitter</a></li>
        <li><a href="/">LinkedIn</a></li>
        <li><a href="/">Instagram</a></li>
      </ul>
    </div> */}

  </div>

  {/* Copyright Section */}
  <div className="text-center text-[#959EAD] text-sm mt-10 border-t border-gray-700 pt-5">
    © {new Date().getFullYear()} YourCompany. All Rights Reserved.
  </div>
</footer>

    </section>
  );
};

export default Footer;
