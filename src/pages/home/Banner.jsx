import React from 'react'
import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return  (
    <div className="flex flex-col items-center py-16 gap-12">
      
      <div className="text-center">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">New Costumes Fashion This Week</h1>
        <p className="mb-10">
          It's time to update your wardrobe with some of the latest and greatest trends in the fashion world.
          From chic outfits to trendy accessories, this week's new arrivals offer something for everyone.
        </p>
        {/* <button className="btn-primary">Subscribe</button> */}
      </div>

      
      <div className="w-full flex justify-center">
        <img src={bannerImg} alt="Fashion Banner" className="w-full md:w-[80%]" />
      </div>
    </div>
  
);
};

export default Banner







/* <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>New costumes fashion this week</h1>
            <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
            <button className='btn-primary'>Subscribe</button>
        </div>
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
          <img src={bannerImg} alt="" />
        </div> 
     </div>*/