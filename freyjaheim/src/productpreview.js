import React from 'react'
import {Image, Header} from 'semantic-ui-react'
import ContentContainer from './contentcontainer'
import Pro1 from './picture/DSC_0208(2).png'
import Pro2 from './picture/DSC_0212(2).png'
import Pro3 from './picture/DSC_0218(2).png'
import Pro4 from './picture/DSC_0220(2).png'

const Products = () => (
    <ContentContainer>
        <Header className='productp'> -Picks-Of-The-Month- </Header>
            <Image.Group>
                <Image src={Pro2} size='medium' circular className='headerimage safem'/>
                <Image src={Pro4} size='medium' circular className='headerimage safem'/>
                <Image src={Pro3} size='medium' circular className='headerimage safem'/>
                <Image src={Pro1} size='medium' circular className='headerimage safem'/>
            </Image.Group> 
    </ContentContainer>
)

export default Products