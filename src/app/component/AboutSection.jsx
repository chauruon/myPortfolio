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
            Chuyên ngành chính của tôi chính lập trình di động, trên giảng đường 
            tôi cũng có tham gia một số dự án với team về app mobile bằng ngôn ngữ Java.
            Tại giảng đường ngôn ngữ chính được đào là Java.
            <br/>&bull; Sau khi tốt nghiệp tôi vẫn theo app mobile về React Native tuy vậy tôi vẫn có thể xử lý 
            khi app gặp vấn đề về native
            <br/>&bull; Ngoài ra, tôi cũng mong muốn có cơ hội làm việc trong môi trường 
          đa dạng và sáng tạo, nơi tôi có thể hợp tác với các đồng nghiệp có chung tinh 
          thần và mục tiêu để đổi mới và tạo ra những sản phẩm phần mềm mang lại giá trị thực cho khách hàng và xã hội.
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
