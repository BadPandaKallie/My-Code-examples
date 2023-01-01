import React, {useState} from 'react'
import _ from 'lodash'
import uhohfoxtookthesocks from './picture/uhohfoxtookthesocks.png'
import NameOverlay from './nameoverlay'
import {Divider} from 'semantic-ui-react'

const Gallery = ({products}) => {
    const [Listing, setListing] = useState(null)
    const GetListings = () => (_.map(products, p => (
        <NameOverlay
            image={(p.picture) ? p.picture : uhohfoxtookthesocks}
            content={
                <h3 onClick={() => setListing(p)} style={{cursor: 'pointer'}}>
                    {p.name}
                </h3>
                }
            />
        ))
    )
    const GetVariations = () => {
        if (!Listing) return null

        return (
            <>
                <Divider />
                {_.map(Listing.items, i => (
                    <NameOverlay
                        image={(i.picture) ? i.picture : uhohfoxtookthesocks}
                        content={
                            <a href={`https://www.etsy.com/se-en/${Listing.etsyListingId}/${Listing.etsyListingName}/?variation0=${i.etsyVariationId}`} target="_blank">
                                {i.name}
                            </a>
                        }
                    />
                ))}
            </>
        )
    }
    return (
        <>
            {GetListings()} 
            {GetVariations()}
        </>
    )
}

export default Gallery