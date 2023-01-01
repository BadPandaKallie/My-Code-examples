import React, {useState} from 'react'
import {Image, Dimmer} from 'semantic-ui-react'

const NameOverlay = ({image, content}) => {
    const [active, setActive] = useState(false)

    return (
        <Dimmer.Dimmable
            as={Image}
            className='nameoverlay'
            dimmed={active}
            dimmer={{active, content}}
            circular
            size='small'
            src={image}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        />
    )
}

export default NameOverlay