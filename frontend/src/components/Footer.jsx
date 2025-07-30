import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
   <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-white border-1">
  <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b-2 border-gray-300 pb-6">
    <div className="md:max-w-96">
      <img className="h-9" src={logo} alt="dummyLogoDark" />
      <p className="mt-6 text-sm text-gray-600">
        Cogent Solutions is a dynamic technology company specializing in delivering innovative software and IT services. They focus on providing tailored digital solutions that help businesses streamline operations, enhance productivity, and drive growth. With expertise in modern technologies and customer-centric approaches, Cogent Solutions empowers organizations to succeed in an ever-evolving digital landscape.
      </p>
    </div>
    <div className="flex-1 flex items-start md:justify-end gap-20">
      <div>
        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
        <ul className="text-sm space-y-2 text-gray-600">
          <li><a href="#home">Home</a></li>
          <li><a href="#event">Event</a></li>
          <li><a href="#Contact">Contact us</a></li>
          <li><a href="#speakers">Speakers</a></li>  
            <li><a href="#agenda">Agenda'</a></li>
          <li><a href="#about">AboutUss</a></li>  
         

        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
        <div className="text-sm space-y-2 text-gray-600">
          <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className="flex items-center gap-2 pt-4">
            <input className="border border-gray-400 placeholder-gray-500 focus:ring-2 ring-blue-600 outline-none w-full max-w-64 h-9 rounded px-2" type="email" placeholder="Enter your email" />
            <button className="bg-blue-600 w-24 h-9 text-white rounded hover:bg-blue-700 transition">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p className="pt-4 text-center text-xs md:text-sm pb-5 text-gray-500">
    © 2024 <a href="https://prebuiltui.com" className="underline hover:text-blue-600">Noordeen</a>. All Rights Reserved.
  </p>
</footer>

  )
}

export default Footer
