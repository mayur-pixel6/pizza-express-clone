import styled from '@emotion/styled'
import React from 'react'
import { SlideData } from '../data/data'
import Slide1 from '../images/img/PizzexpSlide.jpeg'
import Slide2 from '../images/img/PizzexpSlide1.jpeg'
import Slide3 from '../images/img/PizzexpSlide2.jpeg'

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
    border-radius: 16px;
`
const CarouselSlide = styled.div`
    height: 100%;
    position: relative;
`
const CarouselImage = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;

`

export const HeroSlider = () => {
    return (
        <SliderWrapper className='container'>
            <CarouselContainer>
                {
                    SlideData.map((obj) => {
                        return (
                            <CarouselSlide>
                                <CarouselImage>
                                    <img src={obj.url}></img>
                                </CarouselImage>
                            </CarouselSlide>
                        )
                    })
                }
            </CarouselContainer>
            {/* <CarousalIndicator></CarousalIndicator> */}
        </SliderWrapper>
    )
}
