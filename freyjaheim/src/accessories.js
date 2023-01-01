import React from 'react'
import ContentContainer from './contentcontainer'
import Pre1 from './picture/DSC_0220(2).png'
import Pre2 from './picture/DSC_0218(2).png'
import Pre3 from './picture/DSC_0212(2).png'
import Pre4 from './picture/DSC_0216(2).png'
import NameOverlay from './nameoverlay'
import Products from './products'


const Accessories = () => (
    <ContentContainer>
        <b className='intro'> -Accessories- </b>
        <p className='listing'>Here you can find Accessories for babies. You can go to the listing on 
        my Etsy shop by clicking the picture of the item you are looking to buy.</p>
    <Products />
       {/* <NameOverlay
            image={Pre1}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Accessories Dummy Chain-
                    </a>
                </h3>
            )}
        />
        <NameOverlay
            image={Pre2}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Accessories Bundle-
                    </a>
                </h3>
            )}
        />
        <NameOverlay
            image={Pre3}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Accessories Blanket-
                    </a>
                </h3>
            )}
        />
        <NameOverlay
            image={Pre4}
            content={(
                <h3>
                    <a href='https://www.etsy.com/se-en/shop/Freyjaheim' target='_blank'>
                        -Accessories Toys-
                    </a>
                </h3>
            )}
            /> */}
    </ContentContainer>
)

export default Accessories