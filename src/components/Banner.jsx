import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import ielts from '../assets/IELTS.png'
import toefl from '../assets/TOEFL.png'
import student from '../assets/student.png'

const Banner = () => {
  return (
    <div className='bg-[#FDFDF5] h-[100vh] relative'>
        <Container className='flex justify-between items-center'>
            <div className=' '>

            <div class="pt-[200px]">
                <h2 class="font-Inter text-[70px] font-bold">
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#7FBDE4] to-[#233255]">BETTER</span>
                    <br />
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#233255]">FUTURE</span>
                    <br />
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#F6AD2B] to-[#7FBDE4]">FOR YOUR KIDS</span>
                </h2>

                <p className='max-w-[524px] mt-[26px] font-Inter text-[18px] text-[#233255CC]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper augue cras massa facilisis dolor volutpat quam risus venenatis.
                </p>

                <div className='my-[50px] flex gap-[25px]'>
                    
                <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 font-medium rounded-[34px] text-sm px-[30px] py-5 text-center me-2 mb-2 flex gap-[10px] items-center">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="19" viewBox="0 0 27 19" fill="none">
                    <path d="M7.3173 9.77532C9.06408 9.77532 10.4801 8.35927 10.4801 6.6125C10.4801 4.86572 9.06408 3.44968 7.3173 3.44968C5.57052 3.44968 4.15448 4.86572 4.15448 6.6125C4.15448 8.35927 5.57052 9.77532 7.3173 9.77532Z" stroke="#FDFDF5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.0769 4.50738V13.7144M13.9705 15.4458V16.5292C13.9709 16.6677 13.9438 16.805 13.8909 16.9331C13.8381 17.0612 13.7604 17.1776 13.6624 17.2756C13.5644 17.3735 13.4481 17.4512 13.32 17.5041C13.1919 17.5569 13.0546 17.584 12.916 17.5837H2.05449C1.91592 17.584 1.77864 17.5569 1.65056 17.5041C1.52247 17.4512 1.40609 17.3735 1.3081 17.2756C1.21012 17.1776 1.13246 17.0612 1.07958 16.9331C1.02671 16.805 0.999665 16.6677 1 16.5292V15.4458C2.38398 10.9458 13.1622 11.717 13.9705 15.4458ZM14.3064 7.49776V10.7234V7.49776ZM17.2301 4.50738V13.7144V4.50738ZM20.1538 1.41635V16.8055V1.41635ZM26 7.49776V10.7234V7.49776Z" stroke="#FDFDF5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                        Join Us Today
                    </button>


                    
                    <button type="button" class=" flex gap-[10px] items-center text-base leading-6">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
                    <path d="M12.4205 36.4768C11.7709 36.9236 11.6025 37.8163 12.0966 38.4306C14.4876 41.4027 17.7248 43.5971 21.3956 44.712C25.5231 45.9655 29.9541 45.7798 33.9622 44.1852C37.9704 42.5907 41.318 39.6819 43.4565 35.9356C45.595 32.1893 46.3974 27.8277 45.7324 23.5656C45.0674 19.3035 42.9743 15.3937 39.7961 12.477C36.618 9.5603 32.5433 7.80967 28.2399 7.51202C23.9365 7.21438 19.6596 8.38738 16.1102 10.8388C12.9535 13.019 10.5387 16.0953 9.1669 19.6545C8.88336 20.3901 9.31578 21.1891 10.0706 21.4167C10.8254 21.6444 11.6159 21.2139 11.9092 20.4821C13.0876 17.5412 15.1086 15.0003 17.7327 13.188C20.7497 11.1043 24.385 10.1072 28.0429 10.3602C31.7008 10.6132 35.1643 12.1013 37.8657 14.5805C40.5671 17.0597 42.3463 20.383 42.9115 24.0058C43.4768 27.6286 42.7947 31.3359 40.977 34.5203C39.1593 37.7046 36.3138 40.1771 32.9069 41.5325C29.4999 42.8878 25.7337 43.0457 22.2253 41.9802C19.1738 41.0534 16.4748 39.249 14.4564 36.8069C13.9542 36.1992 13.0701 36.0301 12.4205 36.4768Z" fill="#233255" fill-opacity="0.75"/>
                    <path d="M22.1455 18.1945L36.5888 26.5334L22.1455 34.8722L22.1455 18.1945Z" fill="#233255" fill-opacity="0.75"/>
                    </svg>
                    </span>
                        Watch our welcome video
                    </button>

                </div>

                <div className='flex gap-[30px] items-center'>
                    <Image src={ielts} alt={'IELTS Logo'} to={'/'}/>
                    <Image src={toefl} alt={'TOEFL logo'} to={'/'}/>

                </div>



            </div>

            </div>






            <div className='absolute top-0 right-[14%] h-[100%]'>
                <Image className='w-full h-full' src={student} alt={'Banner'} to={'/'}/>
            </div>


        </Container>
    </div>
  )
}

export default Banner