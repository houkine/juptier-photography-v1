'use client'
import { useEffect, useRef } from "react";
import Card from "./card";
import { cardlistSection1, cardlistSection2, cardlistSection3 } from "@/constant/aboutPageContent";

const AboutPage = () => {
  const section1Ref: any = useRef(null)
  const section2Ref: any = useRef(null)
  const section3Ref: any = useRef(null)
  if (typeof window !== 'undefined' && window.IntersectionObserver) {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn_aboutContent');
        } else {
          entry.target.classList.remove('animate-fadeIn_aboutContent');
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    useEffect(() => {
      observer.observe(section1Ref.current);
      observer.observe(section2Ref.current);
      observer.observe(section3Ref.current);
    }, [section1Ref, section2Ref, section3Ref])
  }

  return (
    <div className='h-screen w-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory'>
      <div className={" bg-[url('/images/about_image/image1.jpg')]" + imageClassNameFix}>
        <div className={imageCoverClassNameFix + 'justify-end '} ref={section1Ref}>
          <div className="flex flex-col justify-center items-start w-3/5 ">
            <h6 className="w-4/5 text-6xl font-bold tracking-wider ">
              Juptier Photography Studio
            </h6>
            <div className="bg-black w-1/2 h-px mt-16" />
            <p className="italic mt-5 text-gray-800 w-4/5 tracking-wide leading-7">
              Founded in 2022, Juptier Photography Studio is committed to providing customers with the ultimate shooting experience and quality photography services. Nowadays, with the rapid development of the photography industry, people's demand for beauty has increased dramatically. As a service company specializing in providing photography aesthetics, Juptier hopes to bring more beautiful photography experience to people through the operation of various sub-brands and the efforts of all our partners, and push ourselves to a higher height until the completion of the great mission of "presenting the beauty of the heart to the world".
            </p>
            <div className="flex space-x-5 mt-8">
              {cardlistSection1.map((card, index) => (<Card key={index} imageSrc={card.imageSrc} title={card.title} content={card.content} link={card.link} />))}
            </div>
          </div>
        </div>
      </div>
      <div className={" bg-[url('/images/about_image/image2.jpg')]" + imageClassNameFix}>
        <div className={imageCoverClassNameFix + 'justify-start '} ref={section2Ref}>
          <div className="flex flex-col justify-center items-start w-3/5 ml-64">
            <h6 className="w-4/5 text-6xl font-bold tracking-wider ">
              WHAT WE DO
            </h6>
            <div className="bg-black w-1/2 h-px mt-16" />
            <p className="italic mt-5 text-gray-800 w-4/5 tracking-wide leading-7">
              We take pohots, editing them in different ways. We have several templates for them. After that, we can send them directly, or make photo frames, calendar ect.
            </p>
            <div className="flex space-x-5 mt-8">
              {cardlistSection2.map((card, index) => (<Card key={index} imageSrc={card.imageSrc} title={card.title} content={card.content} link={card.link} />))}
            </div>
          </div>
        </div>
      </div>
      <div className={" bg-[url('/images/about_image/image3.jpg')]" + imageClassNameFix}>
        <div className={imageCoverClassNameFix + 'justify-end '} ref={section3Ref}>
          <div className="flex flex-col justify-center items-start w-3/5 ">
            <h6 className="w-4/5 text-6xl font-bold tracking-wider ">
              OUR TEAM
            </h6>
            <div className="bg-black w-1/2 h-px mt-16" />
            <p className="italic mt-5 text-gray-800 w-4/5 tracking-wide leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie orci ut nibh
            </p>
            <div className="flex space-x-5 mt-8">
              {cardlistSection3.map((card, index) => (<Card key={index} imageSrc={card.imageSrc} title={card.title} content={card.content} link={card.link} />))}
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