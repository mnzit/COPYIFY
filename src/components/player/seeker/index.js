import React from 'react'
import styled from 'styled-components'
import { queries } from '../../mediaQuery'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const Wrapper = styled.div`
    width: 100%;
    height: 4px;
    grid-area: SEEKER;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    @media all and (min-width: ${queries.large}px) {
        grid-column: 4/8;
        grid-row: 3/4;
        max-width: 1000px;
    }
`

const SliderWrapper = styled(Slider)`
    .rc-slider-track {
        background-color: white;
    }

    .rc-slider-handle {
        border: none;
    }

    .rc-slider-rail {
        background-color: white;
        opacity: 0.4;
    }
`

export default function Seeker() {
    return (
        <>
            <Wrapper>
                <SliderWrapper min={0} max={100} />
            </Wrapper>
        </>
    )
}
