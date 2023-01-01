import React from 'react'
import { Image } from 'semantic-ui-react'
import ContentContainer from './contentcontainer'
import P1 from './picture/Handmade-logo.svg'
import P2 from './picture/cruelty-free-logo.svg'
import P3 from './picture/Customizable.svg'
import P4 from './picture/Protected.svg'

const Safe = () => (
  <ContentContainer nobackground>
        <Image.Group>
            <Image src={P1} size='small' className='safem'/>
            <Image src={P2} size='small' className='safem'/>
            <Image src={P3} size='small' className='safem'/>
            <Image src={P4} size='small' className='safem' />
        </Image.Group>
  </ContentContainer>

)

export default Safe