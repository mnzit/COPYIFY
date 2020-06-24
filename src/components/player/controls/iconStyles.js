import styled from 'styled-components'

export const directionalStyles = (Icon) => {
    return styled(Icon)`
        width: ${(props) => props.theme.medium};
        fill: ${(props) => props.theme.fill};
    `
}
