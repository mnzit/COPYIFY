import styled from 'styled-components'

export const IconStyles = (Icon) => {
    return styled(Icon)`
        width: 100%;
        height: 100%;
        fill: ${(props) => (props.liked ? props.theme.priColor : 'white')};

        :hover {
            cursor: pointer;
        }
    `
}
