// core version + navigation, pagination modules:
import {Swiper, SwiperSlide} from 'swiper/react';
import React from "react";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import required modules
import { FreeMode } from "swiper/modules";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function SwiperSelection() {
    return (
        <div 
         className='p-3 rounded-lg flex gap-5 bg-white dark:bg-gray-800  transition-colors duration-300'>
            <div className="overflow-x-auto w-[1070px]">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={10}
                    freeMode={true}
                    className='mySwiper'
                    modules={[FreeMode]}
                    >
                        <SwiperSlide 
                            className='bg-purple p-1 rounded-md text-white w-20'>All
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                        <SwiperSlide 
                            className='text-slate-400'>Python Snippet
                        </SwiperSlide>
                    </Swiper>
            </div>
            <button className='bg-purple p-1 rounded-md px-3 flex gap-1 items-center text-white'>
                <AddOutlinedIcon sx={{ fontSize: 18 }}
                />
                <span>tag</span>
            </button>
         </div>
    )
}