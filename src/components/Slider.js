import styled from '@emotion/styled'
import React, { useRef, useState } from 'react'
import { SlideData } from '../data/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';



const SliderWrapper = styled.div`
    height: 65vh;
    padding: 36px;
    `

    const CarouselContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
    `
    const CarouselSlide = styled.div`
    height: 100%;
    position: relative;
    `
    const CarouselImage = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;

`

export const HeroSlider = () => {
    return (
        <SliderWrapper className='container'>
            <Swiper scrollbar={{
                hide: true,
            }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Scrollbar, Pagination]}
            >
                {
                    SlideData.map((obj) => {
                        return (
                            <SwiperSlide>
                                <CarouselSlide>
                                    <CarouselImage>
                                        <img src={obj.url}></img>
                                    </CarouselImage>
                                </CarouselSlide>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </SliderWrapper>
    )
    {/* <CarouselContainer>
                
            </CarouselContainer> */}
    {/* <CarousalIndicator></CarousalIndicator> */ }
}
