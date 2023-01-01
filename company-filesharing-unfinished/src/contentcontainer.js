import React from 'react'
import { Container, Segment} from 'semantic-ui-react'

const ContentContainer = ({children, nobackground}) => (
    <Container textAlign='center' style={{marginTop: '35px'}}>
        <Segment size='large' style={(!nobackground) ? {backgroundColor:'#F4F4F4'} : {backgroundColor:'transparent'}}>
            {children}
        </Segment>
    </Container>
)

export default ContentContainer

