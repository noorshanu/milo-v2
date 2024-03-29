import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

function Features() {
  // const [showTypewriter, setShowTypewriter] = useState(false);

  // useEffect(() => {
  //   let lastScrollTop = 0;

  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //     if (scrollTop < lastScrollTop) {
  //       setShowTypewriter(true);
  //     } else {
  //       setShowTypewriter(false);
  //     }

  //     lastScrollTop = scrollTop;
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <section className="container-wrapper  mx-auto mt-12 sm:mt-4 py-4">
    <div className=" flex justify-center gap-4 items-center mx-auto">
      <img src="images/star.png " alt="" className=" h-[50px]" />
     
        <Typewriter
          options={{
            strings: ['OUR FEATURES'],
            autoStart: true,
            loop: true,
            wrapperClassName: 'font-daughter text-2xl sm:text-4x', // Apply Tailwind CSS classes here
          }}
        />
    
    
      {/* <h1 className=" font-daughter text-2xl sm:text-4xl">OUR FEATURES</h1> */}
      <img src="images/star.png " alt="" className=" h-[50px]" />
    </div>
    <div className=" flex justify-between items-center py-6 flex-col sm:flex-row gap-4"> 
      <div className=" h-[300px] w-[300px] bg-black border-2 border-white rounded-lg"> <img src="images/dog1.jpeg" alt="" className=' rounded-lg' /></div>

      <div className=" h-[300px] w-[300px] bg-black border-2 border-white rounded-lg"><img src="images/dog2.jpeg" alt="" /></div>

      <div className=" h-[300px] w-[300px]  bg-black border-2 border-white rounded-lg"><img src="images/dog3.jpeg" alt="" /></div>
    </div>

    <p className=" text-center font-daughter font-medium ">Dive deeper into the phenomenon that is LexieSol! Explore the unique factors that make him such a meme-able force, from his expressive face to his relatable charm. Learn how his journey began and how he captured the hearts of millions online. </p>
  </section>
  )
}

export default Features