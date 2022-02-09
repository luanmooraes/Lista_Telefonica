import styled from 'styled-components/native'

export const SpaceContainer = styled.View`
    margin-top: ${({vertical}) => vertical}px;
    margin-bottom: ${({vertical}) => vertical}px;
    margin-left: ${({horizontal}) => horizontal}px;
    margin-right: ${({horizontal}) => horizontal}px;
`