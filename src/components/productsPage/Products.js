
import React from 'react'
import {ProductConsumer} from '../../context/context';
import Title from '../Title';
import Product from '../../components/Product';
import ProductFilter from './ProductFilter'
export default function Products() {
    return (
        <ProductConsumer>
            {value => {
                const {filterProducts}=value;
                return <section className="py-5">
                            <div className = "container">
                                {/**Title */}
                                <Title center title = "our Products"/>
                                {/**product filter */}
                                <ProductFilter></ProductFilter>
                                {/**Row */}
                                <div className = "row">
                                    <div className = "col-10 mx-auto">
                                        <h6 className = "text-title">
                                            total products: {filterProducts.length}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            {/**Products */}
                            <div className= "row py-5">                      
                                { 
                    
                                filterProducts.map(product=> {
                                    return (
                                        <Product key= {product.id} product = {product}></Product>
                                    )
                                })
                                }                             
                            </div>
                        </section>
            }}
        </ProductConsumer>
    )
}
