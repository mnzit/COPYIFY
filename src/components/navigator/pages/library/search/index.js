import React from 'react'
import styled from 'styled-components'
import Filters from './filters'
import { ReactComponent as Icon } from '../../../../../svgs/search.svg'

const Form = styled.form`
    width: 100%;
    padding: 0 15px;
    display: flex;
    font-weight: bold;
`

const IconWrapper = styled(Icon)`
    width: 50%;
    fill: white;
`
const IconContainer = styled.div`
    width: 15%;
    max-width: 35px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3px;
    background-color: hsla(360, 100%, 100%, 0.35);
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
`

const SearchBar = styled.input`
    width: 100%;
    margin-right: 15px;
    padding: 5px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: none;
    outline: none;
    background-color: hsla(360, 100%, 100%, 0.35);
    color: white;
    ::placeholder {
        color: white;
    }
`

const SearchWrapper = styled.div`
    width: 80%;
    display: inline-flex;
    flex: 1 1 300px;
    position: relative;
`

export default function Search() {
    return (
        <Form>
            <SearchWrapper>
                <IconContainer>
                    <IconWrapper />
                </IconContainer>

                <SearchBar type='text' placeholder='Find in library' />
            </SearchWrapper>

            <Filters />
        </Form>
    )
}
