import React from 'react'
import ContentContainer from './contentcontainer'
import Pre1 from './picture/DSC_0220(2).png'
import Pre2 from './picture/DSC_0218(2).png'
import Pre3 from './picture/DSC_0212(2).png'
import Pre4 from './picture/DSC_0216(2).png'
import NameOverlay from './nameoverlay'
import Products from './products'


const Boys = () => (
    <ContentContainer>
        <b className='intro'> -Boys- </b>
        <p className='listing'>Here you can find clothing for full term boys. You can go to the listing on 
        my Etsy shop by clicking the picture of the item you are looking to buy.</p>
    <Products />
       { /* <NameOverlay
            image={Pre1}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -StarJoys Boys Non-Scratch Mittens-
                    </a>
                </h3>
            )}
        />
        <NameOverlay
            image={Pre2}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -StarJoys Boys Bundle-
                    </a>
                </h3>
            )}
        />
        <NameOverlay
            image={Pre3}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Pompom StarJoys Boys Booties-
                    </a>
                </h3>
            )}
        />
        <NameOverlay
            image={Pre4}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -StarJoys Boys Beenie Hat-
                    </a>
                </h3>
            )}
            /> */}
    </ContentContainer>
)

export default Boys