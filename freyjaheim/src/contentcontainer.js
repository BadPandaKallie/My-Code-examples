import React from 'react'
import { Container, Segment} from 'semantic-ui-react'

const ContentContainer = ({children, nobackground}) => (
    <Container textAlign='center' style={{marginTop: '50px'}}>
        <Segment basic style={(!nobackground) ? {backgroundColor:'rgba(197, 164, 143, 25% )'} : {backgroundColor:'transparent'}}>
            {children}
        </Segment>
    </Container>
)

export default ContentContainer