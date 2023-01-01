import React from 'react'
import {Image, Container} from 'semantic-ui-react'
import Instagram from './picture/instagramlink.png'
import Etsy from './picture/Etsylink.png'

const SocialLinks = () => (
    <Container textAlign='center'>
        <Image src={Instagram} size='tiny' 
        href='https://www.instagram.com/freyjaheim/'
        />
        <Image src={Etsy} size='tiny'
        href='https://www.etsy.com/se-en/shop/Freyjaheim'
        />
    </Container>
)

export default SocialLinks