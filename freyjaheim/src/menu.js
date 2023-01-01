import React from 'react'
import { Menu } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

const Menubar = () => {


        return (
            <Menu secondary className='mymenu'>
                <Menu.Menu position='center'>
                    <Menu.Item className='mymenu mymenustyle'
                    as={NavLink}
                    to='/'
                    name='home'
                    exact
                    />
                    <Menu.Item className='mymenu mymenustyle'
                    as={NavLink}
                    to='/preemie' 
                    name='preemie'
                    />
                    <Menu.Item className='mymenu mymenustyle' 
                    as={NavLink}
                    to='/girls'
                    name='girls'
                    />
                    <Menu.Item className='mymenu mymenustyle'
                    as={NavLink}
                    to='/boys' 
                    name='boys'
                    />
                    <Menu.Item className='mymenu mymenustyle'
                    as={NavLink}
                    to='/neutral'
                    name='neutral'
                    />
                    <Menu.Item className='mymenu mymenustyle'
                    as={NavLink}
                    to='/accessories'
                    name='accessories'
                    />
                </Menu.Menu>
            </Menu>
        )
    }

    export default Menubar