'use client'
import { useEffect, useRef } from "react";
import Card from "./card";
import { cards } from "@/constant/aboutPageContent";

const SLIDE_FADE_DISTANCE = 50;
const SLIDE_FADE_DURATION = 1000;
function isBelowViewport(el: any) {
  const rect = el.getBoundingClientRect();
  return rect.top - SLIDE_FADE_DISTANCE > window.innerHeight;
}
const AboutPage = () => {
  return (
    <div className='h-screen w-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory'>
      <div className={" bg-[url('/images/about_image/image1.jpg')]" + imageClassNameFix}>
        <div className={imageCoverClassNameFix + 'justify-end hover:animate-fadeIn_aboutContent'}>
          <div className="flex flex-col justify-center items-start w-3/5 ">
            <h6 className="w-4/5 text-6xl font-bold tracking-wider ">
              Juptier Photography Studio
            </h6>
            <div className="bg-black w-1/2 h-px mt-16" />
            <p className="italic mt-5 text-gray-800 w-4/5 tracking-wide leading-7">
              Founded in 2022, Juptier Photography Studio is committed to providing customers with the ultimate shooting experience and quality photography services. Nowadays, with the rapid development of the photography industry, people's demand for beauty has increased dramatically. As a service company specializing in providing photography aesthetics, Juptier hopes to bring more beautiful photography experience to people through the operation of various sub-brands and the efforts of all our partners, and push ourselves to a higher height until the completion of the great mission of "presenting the beauty of the heart to the world".
            </p>
            <div className="flex space-x-5 mt-8">
              {cards.map((card, index) => (<Card key={index} imageSrc={card.imageSrc} title={card.title} content={card.content} link={card.link} />))}
            </div>
          </div>
        </div>
      </div>
      <div className={" bg-[url('/images/about_image/image2.jpg')]" + imageClassNameFix}>
        <div className={imageCoverClassNameFix + 'justify-start hover:animate-fadeIn_aboutContent'} id='2'>
          <div className="flex flex-col justify-center items-start w-3/5 ml-52">
            <h6 className="w-4/5 text-6xl font-bold tracking-wider ">
              paragraph 2
            </h6>
            <div className="bg-black w-1/2 h-px mt-16" />
            <p className="italic mt-5 text-gray-800 w-4/5 tracking-wide leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibh
            </p>
            <div className="flex space-x-5 mt-8">
              {cards.map((card, index) => (<Card key={index} imageSrc={card.imageSrc} title={card.title} content={card.content} link={card.link} />))}
            </div>
          </div>
        </div>
      </div>
      <div className={" bg-[url('/images/about_image/image3.jpg')]" + imageClassNameFix}>
        <div className={imageCoverClassNameFix + 'justify-end hover:animate-fadeIn_aboutContent'}>
          <div className="flex flex-col justify-center items-start w-3/5 ">
            <h6 className="w-4/5 text-6xl font-bold tracking-wider ">
              paragraph 2
            </h6>
            <div className="bg-black w-1/2 h-px mt-16" />
            <p className="italic mt-5 text-gray-800 w-4/5 tracking-wide leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibh
            </p>
            <div className="flex space-x-5 mt-8">
              {cards.map((card, index) => (<Card key={index} imageSrc={card.imageSrc} title={card.title} content={card.content} link={card.link} />))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const imageClassNameFix = ' snap-always snap-start h-screen w-full bg-cover flex'
const imageCoverClassNameFix = ' bg-gradient-to-b from-white w-full h-full flex '
export default AboutPage