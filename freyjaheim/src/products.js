import React from 'react'
import _ from 'lodash'
import {useRouteMatch} from 'react-router-dom'
import productsdata from './productsdata.json'
import Gallery from './gallery'

const Products = () => {
    let match = useRouteMatch()
    
    const getProducts = () => {
        const category = _.find(productsdata, (productCategory) => {
            return _.includes(match.path, productCategory.name)
        })

        if(!category) return null // Maybe add some error message and/or default image

        return (
            <>
                <h3>{category.displayName}</h3>
                <Gallery products={category.products} />
            </>
        )
    }

    return getProducts()
}


export default Products