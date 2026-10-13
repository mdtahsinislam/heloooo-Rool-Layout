
// //C:\Web-Development\MyNextjs Journey\tripgraphy\components\Hero\page.tsx
// const Hero =()=>{
//     return (
//         <div>
//        provide image section 
//         </div>
//     )
// }
// export default Hero


// C:\Web-Development\MyNextjs Journey\tripgraphy\components\Hero\page.tsx
// C:\Web-Development\MyNextjs Journey\tripgraphy\components\Hero\page.tsx
"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="A beautiful wooden pier and resort over calm ocean water at sunset."
        fill
        className="object-cover z-0"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Hero Content */}
      {/* <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center mt-12">
        <h1 className="text-3xl mt-32 md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Discover Your Tropical Escape
        </h1> */}
        <div className="relative z-20 flex flex-col items-center justify-start h-full text-white px-4 text-center pt-32">
  <h1 className="text-3xl md:text-5xl lg:text-8xl font-extrabold tracking-tight mt-80 drop-shadow-lg">
    Discover Your Tropical Escape
  </h1>


        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-3xl drop-shadow-md">
          Journey to breathtaking destinations and create memories that last a lifetime.
        </p>

        <button
          className="bg-teal-500 hover:bg-teal-600 transition duration-300 text-white font-semibold py-3 px-8 rounded-full shadow-xl uppercase tracking-wider"
          onClick={() => console.log("Explore button clicked")}
        >
          Start Exploring Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
