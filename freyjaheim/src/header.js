import React from 'react'
import {Segment, Image, Header } from 'semantic-ui-react'
import Picture from './picture/Freyjaheim small.png'

const MyHeader = () => (
    <div>
        <Segment style={{backgroundColor:'#F7F2E1'}} className='myheader'>
             Contact me : Freyjaheimbabyclothes@gmail.com
             <Image src={Picture} size='small' circular centered className='headerimage'/>
        </Segment>
        <Segment basic textAlign='center'>
            <Header as='h1' className='freyjaheim' style={{color:'#565656'}}> -Freyjaheim- </Header>
            <Header as='h2' className='craft' style={{color:'#565656'}} > -Nålbindning-Knitting-Crocheting- </Header>
        </Segment>
    </div>
)
 
export default MyHeader
