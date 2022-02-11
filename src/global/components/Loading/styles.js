import styled from 'styled-components/native'

export const WrapperActivityIndicator = styled.View`
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
	background-color: ${(props) =>
		props.bgColor === 'transparent'
			? 'rgba(0, 0, 0, 0.6)'
			: props.bgColor};
`

export const ActivityIndicator = styled.ActivityIndicator.attrs((props) => ({
	size: props.size,
	color: props.color ? props.color : 'black',
	hidesWhenStopped: true,
	animating: true
}))``
