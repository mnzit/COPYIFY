import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ReactComponent as PlayIcon } from '../../../../svgs/play.svg'
import { ReactComponent as PauseIcon } from '../../../../svgs/play.svg'

const PlayWrapper = styled(PlayIcon)`
    width: ${(props) => props.theme.largest};
    fill: ${(props) => props.theme.fill};
`
const PauseWrapper = styled(PauseIcon)`
    width: ${(props) => props.theme.largest};
    fill: ${(props) => props.theme.fill};
`

export default function Play({ playing }) {
    return playing ? <PauseWrapper /> : <PlayWrapper />
}

Play.propTypes = {
    playing: PropTypes.bool,
}
