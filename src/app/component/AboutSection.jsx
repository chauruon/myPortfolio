"use client"
import React,{useTransition, useState} from 'react'
import Image from "next/image"
import { TabButton } from "../component/tab/TabButton"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Reactjs</li>
        <li>React Native</li>
        <li>PHP-Laravel</li>
        <li>NextJs (Learning)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>College FPT Polytechnic</li>
      </ul>
    ),
  },
];


export const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(()=>{
      setTab(id);
    });
  }

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-2 lg:gap-2 py-8
      px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image className='relative top-0 object-cover' src={'/images/about-image.png'} alt='' width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
          <p className='text-base lg:text-lg'>
            My main specialization is in mobile programming. On campus, I have also participated in several projects 
            with teams working on mobile apps using Java language. 
            Java is the primary language taught at the university
            <br/>&bull; After graduation, I still pursue mobile app development using React Native. However, 
              I am still capable of handling native issues when the app encounters them.
            <br/>&bull; Furthermore, I also aspire to have the opportunity to work in a diverse and creative environment, 
              where I can collaborate with like-minded colleagues 
              who share the same spirit and goals to innovate and create software products that bring real value to customers and society.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={ tab === 'skills'}>
              {' '}Skills{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('education')} active={ tab === 'education'}>
              {' '}Education{" "}
            </TabButton>
          </div>
          <div className="mt-3">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}
