import React from 'react'
import {Button, Divider, Grid, Header, Icon, Search, Segment} from 'semantic-ui-react'
import History from './upload-history'

const Files = () => (
    <div style={{paddingTop: '250px', paddingRight:'250px', paddingLeft: '250px'}}>
        <Segment placeholder>
            <Grid columns={2} stackable textAlign='center'>
                <Divider vertical className='dividerOR'>OR</Divider>

                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Header icon>
                                <Icon name='search' />
                                Search for a file
                            </Header>

                            <Search placeholder='Search for files...' />
                        </Grid.Column>

                        <Grid.Column>
                            <Header icon>
                                <Icon name='file code' />
                            </Header>
                                <Button primary>Upload New Files</Button>
                        </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <History />
    </div>
    
)


export default Files