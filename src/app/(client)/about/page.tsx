'use client'
import { MutableRefObject, useEffect, useRef } from "react";
import Link from 'next/link'
import { Comforter } from 'next/font/google'
const comforter = Comforter({
  subsets: ["latin"],
  weight: '400',
})
const AboutPage = () => {
  const section1Ref: MutableRefObject<null> = useRef(null)
  const section2Ref: MutableRefObject<null> = useRef(null)
  const section3Ref: MutableRefObject<null> = useRef(null)
  useEffect(() => {
    let observer
    // if (window.IntersectionObserver) {
    if (typeof window !== 'undefined' && window.IntersectionObserver) {
      observer = new IntersectionObserver(
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
      if (section1Ref.current) observer.observe(section1Ref.current);
      if (section2Ref.current) observer.observe(section2Ref.current);
      if (section3Ref.current) observer.observe(section3Ref.current);
    }
  }, [section1Ref, section2Ref, section3Ref])

  return (
    <div className="h-screen w-full flex bg-white">
      <img src={'/images/about_image/image1.jpg'} className="w-1/2" />
      <div className="flex flex-col my-auto mx-24 text-black animate-fadeIn_aboutContent">
        <p className="text-6xl textbla">We are Gold Coast based Photography team & Creative with passion for design</p>
        <div className={comforter.className}>
          <p className='text-4xl mt-10'>Juptier Photography Studio</p>
        </div>
        <div className="flex mt-20 space-x-10">
          <div className="flex flex-col space-y-5 w-1/2">
            <p className="text-2xl font-bold">Work</p>
            <p className="text-sm">We take pohots, editing them in different ways. We have several templates for them. After that, we can send them directly, or make photo frames, calendar ect.</p>
            <Link className='font-bold text-xl' href={'/gallery'}>Latest Works →</Link>
          </div>
          <div className="flex flex-col space-y-5 w-1/2">
            <p className="text-2xl font-bold">Contact</p>
            <p className="text-sm">We take pohots, editing them in different ways. We have several templates for them. After that, we can send them directly, or make photo frames, calendar ect.</p>
            <Link className='font-bold text-xl' href={'/contact'}>Get in touch →</Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutPage