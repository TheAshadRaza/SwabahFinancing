"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="Count on us for expert financial help. We're here to assist with your goals and answer your questions promptly. Your success is our focus."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[10/10] items-center justify-center">
                
              <iframe src="https://giphy.com/embed/Wljoyh9YibUStevNCJ" width="100%" height="100%" style={{position:"absolute"}} frameBorder={"0"} className="giphy-embed" allowFullScreen></iframe>
            </div><p><a href="https://giphy.com/gifs/StockUnlocked-stocks-stockunlocked-stock-unlocked-Wljoyh9YibUStevNCJ"></a></p>


                
                <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      

    

      
    </section>
  );
};

export default Video;
