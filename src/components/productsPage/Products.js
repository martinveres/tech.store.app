
import React from 'react'
import {ProductConsumer} from '../../context/context';
import Title from '../Title';
import Product from '../../components/Product';
export default function Products() {
    return (
        <ProductConsumer>
            {value => {
                const {filterProducts}=value;
                return <section className="py-5">
                            <div className = "container">
                                <Title center title = "Products:"/>
                            </div>
                            <div className= "row py-5">
                                {filterProducts.map(product=> {
                                    return (
                                        <Product key= {product.id} product = {product}></Product>
                                    )
                                })}
                                    
                                   
                                
                            </div>
                        </section>
            }}
        </ProductConsumer>
    )
}
