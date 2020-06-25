import styled from 'styled-components'

export const IconStyles = (Icon) => {
    return styled(Icon)`
        width: 80%;
        fill: ${(props) => (props.liked_ ? props.theme.priColor : 'white')};
        filter: drop-shadow(
            ${(props) => (props.shadow_ ? `1px 1px 1px rgba(0, 0, 0, 0.3)` : 0)}
        );
        margin-top: 5px;
        :hover {
            cursor: pointer;
        }
    `
}
