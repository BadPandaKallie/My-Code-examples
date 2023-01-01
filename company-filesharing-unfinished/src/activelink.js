import React from 'react'
import {Menu} from 'semantic-ui-react'
import {Link, useRoute} from 'wouter'

export const ActiveLink = props => {
    const [isActive] = useRoute(props.to);

    return(
        <Link {...props}>
            <Menu.Item className='menubutton' active={isActive}>{props.children}</Menu.Item>    
        </Link>
    )
}