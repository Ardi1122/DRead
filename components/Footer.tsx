import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-8 sm:px-12 md:px-24">
      <div className="bg-black text-white py-8 px-8 sm:px-12 rounded-t-3xl md:rounded-t-[50px]">
        <section className="flex flex-col sm:flex-row gap-8 gap-x-16 md:gap-x-36 lg:gap-x-96 sm:pb-10 lg:pb-20">
          <div>
            <h1 className="text-xl font-bold lg:text-2xl">DRead</h1>
            <p className="text-sm mt-2 lg:text-xl">Buy, Read, Own Blockchain.</p>
          </div>
          <div className="">
            <h1 className="text-xl lg:text-2xl font-bold">Stay Connected</h1>
            <div className="flex gap-4 md:gap-x-6  mt-3">
              <Link href='/'>
                <Image src='/images/instagram.png' alt="Instagram" width={20} height={20} className="lg:w-[25px]"/>
              </Link>
              <Link href='/'>
                <Image src='/images/whatsapp.png' alt="WhatsApp" width={20} height={20} className="lg:w-[25px]"/>
              </Link>
              <Link href='/'>
                <Image src='/images/twitter.png' alt="Twitter" width={20} height={20} className="lg:w-[25px]"/>
              </Link>
            </div>
          </div>
          
        </section>
        <div className="border-t-2 mt-12 ">
          <p className="pt-7 text-center text-sm lg:text-xl">
          © 2025 DecentraRead. All Rights Reserved.
        </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
