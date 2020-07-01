import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LikedIcon } from '../../../../svgs/like_filled.svg'
import { ReactComponent as UnlikedIcon } from '../../../../svgs/like_outline.svg'
import { IconStyles } from './iconStyles'
import PropTypes from 'prop-types'

const Liked = styled(IconStyles(LikedIcon))`
    fill: ${(props) => props.theme.priColor};
`
const Unliked = styled(IconStyles(UnlikedIcon))`
    fill: ${(props) => props.theme.secColor};
`

const Wrapper = styled.div`
    width: calc(100%);
    max-width: 15px;

    display: flex;
    align-items: center;
    grid-column: 9/10;
`

export default function Like({ like }) {
    return <Wrapper>{like ? <Liked /> : <Unliked />}</Wrapper>
}

Like.propTypes = {
    like: PropTypes.bool,
}
