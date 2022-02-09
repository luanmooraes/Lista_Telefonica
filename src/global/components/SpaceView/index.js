import React from 'react'

import { SpaceContainer } from './styles';

const SpaceView = ({ vertical = 0, horizontal = 0 }) => {
    return (
        <SpaceContainer vertical={vertical} horizontal={horizontal} />
    )
}

export default SpaceView