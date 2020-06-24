import styled from 'styled-components'

export const IconStyles = (Icon) => {
    return styled(Icon)`
        width: 100%;
        fill: ${(props) => (props.liked ? props.theme.priColor : 'white')};
        margin-top: 5px;
        :hover {
            cursor: pointer;
        }
    `
}
