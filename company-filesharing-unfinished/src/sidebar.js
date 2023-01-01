import React, {useState} from 'react'
import {Icon, Menu, Sidebar, Button} from 'semantic-ui-react'
import { ActiveLink } from './activelink'

const SideBar = () => {
    const [visible, setVisible] = useState(false)
        const [sideVisible, setSideVisible] = useState(false)

    return(
        <>
            <Menu secondary>
            <Menu.Item>
                {!visible &&
                    <Button className='menubutton' floated='left' icon onClick={() => setSideVisible(!sideVisible)}>
                        <Icon name='bars' />
                    </Button>
                }
            </Menu.Item>
            </Menu>
                <Sidebar style={{background:'#17202A', paddingTop:'10px'}}
                as={Menu}
                animation='overlay'
                icon='bars'
                inverted
                onHide={() => setSideVisible(false)}
                vertical
                visible={sideVisible}
                width='thin'
                onVisible={() => setVisible(true)}
                onHidden={() => setVisible(false)}
                >
                    
                    {visible &&
                        <Menu.Item className='menubutton' onClick={() => setSideVisible(false)} as='a'>
                            <Icon className='menubutton' name='times circle' />
                            Close
                        </Menu.Item>
                    }
                    <ActiveLink to='/'>
                        <Icon className='menubutton' name='newspaper outline' />
                            Home
                    </ActiveLink>
                    <ActiveLink to='/upload-search' >
                        <Icon className='menubutton' name='upload' />
                        Upload & Search
                    </ActiveLink>
                    <ActiveLink to='/project-groups'>
                        <Icon className='menubutton' name='group' />
                        Project Groups
                    </ActiveLink>
                    <ActiveLink to='/managers-project-managers'>
                        <Icon className='menubutton' name='address book outline' />
                        Managers & Project Managers
                    </ActiveLink>
                    <ActiveLink to='/menu'>
                        <Icon className='menubutton' name='food' />
                        Menu
                    </ActiveLink>
                    <ActiveLink to='/profile'>
                        <Icon className='menubutton' name='user circle outline icon' />
                        Profile
                    </ActiveLink>
                </Sidebar> 
        </>
    )
}

export default SideBar