import React from 'react'
import ContentContainer from './contentcontainer'
import Pre1 from './picture/DSC_0220(2).png'
import Pre2 from './picture/DSC_0218(2).png'
import Pre3 from './picture/DSC_0212(2).png'
import Pre4 from './picture/DSC_0216(2).png'
import NameOverlay from './nameoverlay'
import Products from './products'


const Neutral = () => (
    <ContentContainer>
        <b className='intro'> -Neutral- </b>
        <p className='listing'>Here you can find clothing for babies which sex is unknown by the parents. You can go to the listing on 
        my Etsy shop by clicking the picture of the item you are looking to buy.</p>
    <Products />
         { /* <NameOverlay
            image={Pre1}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Neutral Non-Scratch Mittens-
                    </a>
                </h3>
            )}
        />
        <NameOverlay
            image={Pre2}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Neutral Bundle-
                    </a>
                </h3>
            )}
        />
        <NameOverlay
            image={Pre3}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Neutral Pompom Booties-
                    </a>
                </h3>
            )}
        />
        <NameOverlay
            image={Pre4}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Neutral Beenie Hat-
                    </a>
                </h3>
            )}
            /> */}
    </ContentContainer>
)

export default Neutral