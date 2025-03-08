// import React from "react";

// export default function MovingTextBanner() {
//   // WhatsApp link with the phone number and a pre-filled message
//   const whatsappLink = `https://wa.me/92314586629?text=Hi%20SOC,%20I%20have%20a%20question.`;

//   return (
//     <div className="w-full">
//       {/* Moving Text Banner */}
//       <div className="bg-[#D2B48C] text-black text-center py-6 md:py-10 text-lg md:text-3xl font-bold overflow-hidden relative w-full h-16 md:h-24 flex items-center">
//         {/* Moving Text */}
//         <div className="absolute w-full animate-marquee text-center whitespace-nowrap">
//           Flat Shipping Rate 200 Nationwide
//         </div>

//         {/* Tailwind CSS Animation */}
//         <style>
//           {`
//             @keyframes marquee {
//               0% { transform: translateX(100%); }
//               100% { transform: translateX(-100%); }
//             }
//             .animate-marquee {
//               animation: marquee 8s linear infinite;
//             }
//           `}
//         </style>
//       </div>

//       {/* Phone Number & SOC (Left and Center Alignment) */}
//       <div className="flex items-center justify-between px-4 md:px-8 mt-6 md:mt-8">
//         {/* Phone Number on the Left */}
//         <a
//           href={whatsappLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-black text-sm md:text-xl font-semibold hover:text-[#D2B48C] transition-colors duration-300"
//         >
//           +92 314586629
//         </a>

//         {/* Centered SOC */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-black">SOC</h1>
//           <p className="text-sm md:text-lg text-gray-600 mt-1 md:mt-2">
//             Shareef Online Cloth
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function MovingTextBanner() {
  // WhatsApp link with the phone number and a pre-filled message
  const whatsappLink = `https://wa.me/92314586629?text=Hi%20SOC,%20I%20have%20a%20question.`;

  return (
    <>
      {/* Sticky Banner at the Very Top */}
      <div className="w-full fixed top-0 left-0 z-50 bg-[#D2B48C] text-black text-center py-6 md:py-10 text-lg md:text-3xl font-bold overflow-hidden h-16 md:h-24 flex items-center">
        {/* Moving Text */}
        <div className="absolute w-full animate-marquee text-center whitespace-nowrap">
          Flat Shipping Rate 200 Nationwide
        </div>
      </div>

      {/* Spacer to prevent overlap */}
      <div className="h-16 md:h-24"></div> 

      {/* Contact and SOC Section */}
      <div className="flex items-center justify-between px-4 md:px-8 mt-6 md:mt-8 relative">
        {/* Phone Number on the Left */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-sm md:text-xl font-semibold hover:text-[#D2B48C] transition-colors duration-300"
        >
          +92 314586629
        </a>

        {/* Centered SOC */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black">SOC</h1>
          <p className="text-sm md:text-lg text-gray-600 mt-1 md:mt-2">
            Shareef Online Cloth
          </p>
        </div>
      </div>

      {/* Tailwind CSS Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 8s linear infinite;
          }
        `}
      </style>
    </>
  );
}

