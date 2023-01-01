import React from 'react'
import ContentContainer from './contentcontainer'
import {Menu} from 'semantic-ui-react'
import PreemieGirls from './preemiegirls'
import PreemieBoys from './preemieboys'
import PreemieNeutral from './preemieneutral'
import Pre1 from './picture/DSC_0220(2).png'
import Pre2 from './picture/DSC_0218(2).png'
import Pre3 from './picture/DSC_0212(2).png'
import Pre4 from './picture/DSC_0216(2).png'
import NameOverlay from './nameoverlay'
import { NavLink, Switch, Route } from 'react-router-dom'


const Preemie = () => (
    <ContentContainer>
        <b className='intro'> -Preemie- </b>
        <p className='listing'>Here you can find clothing for preemie girls and boys. You can go to the listing on 
        my Etsy shop by clicking the picture of the item you are looking to buy.</p>
        <Menu secondary className='mymenu'>
            <Menu.Menu position='center'>
                <Menu.Item className='preemiemenu'
                    as={NavLink}
                    to='/preemie/girls'
                    name='preemie girls'
                />
                <Menu.Item className='preemiemenu'
                    as={NavLink}
                    to='/preemie/boys'
                    name='preemie boys'
                />
                <Menu.Item className='preemiemenu'
                    as={NavLink}
                    to='/preemie/neutral'
                    name='preemie neutral'
                />
            </Menu.Menu>
        </Menu>
            <Switch>
                <Route path='/preemie/girls'>
                    <PreemieGirls />
                </Route>
                <Route path='/preemie/boys'>
                    <PreemieBoys />
                </Route>
                <Route path='/preemie/neutral'>
                    <PreemieNeutral />
                </Route>
            </Switch>
        {/*<NameOverlay
            image={Pre1}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Preemie StarJoy Boys Non-Scratch Mittens-
                    </a>
                </h3>
            )}
        />
        <NameOverlay
            image={Pre2}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Preemie StarJoy Boys Bundle-
                    </a>
                </h3>
            )}
        />
        <NameOverlay
            image={Pre3}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Preemie Pompom Balett Girls Booties-
                    </a>
                </h3>
            )}
        />
        <NameOverlay
            image={Pre4}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Preemie StarJoy Boys Beenie Hat-
                    </a>
                </h3>
            )}
        /> */}
    </ContentContainer>
)

export default Preemie