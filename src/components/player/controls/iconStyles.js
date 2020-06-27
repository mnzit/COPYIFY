import styled from 'styled-components'

export const directionalStyles = (Icon) => {
    return styled(Icon)`
        width: ${(props) => props.theme.smallish};
        fill: ${(props) => props.theme.fill};
    `
}
