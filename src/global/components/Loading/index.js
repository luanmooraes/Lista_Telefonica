import React, { Fragment } from 'react'

import { WrapperActivityIndicator, ActivityIndicator } from './styles'

const Loading = (props) => {
	const {
		bgColor = 'transparent',
		isVisible = false,
		size = 'large',
		color = 'blueviolet'
	} = props

	return (
		<Fragment>
			{isVisible ? (
				<WrapperActivityIndicator bgColor={bgColor}>
					<ActivityIndicator size={size} color={color} />
				</WrapperActivityIndicator>
			) : null}
		</Fragment>
	)
}

export default Loading