import styled from 'styled-components'

export const IconStyle = (Icon) => {
    return styled(Icon)`
        width: ${(props) => props.theme.small};
        fill: ${(props) => props.theme.fill};
        :hover {
            cursor: pointer;
        }
    `
}
