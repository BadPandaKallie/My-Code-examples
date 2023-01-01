import React from 'react'
import {Image, Header, Grid, Segment} from 'semantic-ui-react'
import Teal from './pictures/Teal small.png'
import ContentContainer from './contentcontainer'

const News = () => (
    <div style={{paddingTop: '160px', paddingRight:'160px', paddingLeft: '160px'}}>
        <Image size='small' src={Teal} floated='left' />
        <ContentContainer>
            <Grid divided>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Segment basic>
                            <Header>
                                Company News
                            </Header>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment basic>
                            <Header>
                                Today's Menu
                            </Header>
                            Text holder
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </ContentContainer>
    </div>
)

export default News