import React, { Component } from 'react'
import {linkData} from './linkData';
import {socialData} from './socialData';
import {items} from '../context/productData'; 
const ProductContext = React.createContext();
class ProductProvider extends Component {
    state = {
        sideBarOpened: false,
        cartOpened: true,
        cartItems: 0,
        links: linkData,
        cart: [],
        socialIcons:socialData,
        cartSubTotal: 0,
        cartTax:0,
        cartTotal:0,
        storeProducts:[],
        filterProducts:[],
        featuredProducts:[],
        singleProduct: {},
        loading: true
    }
    componentDidMount() {
        this.setProducts(items);
    }
    setProducts = (products) => {
        let storeProducts = products.map(item=> {
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = {id, ...item.fields, image};
           
            return product;
        })
        //featured products:
        let featuredProducts = storeProducts.filter(item => item.featured === true);
        this.setState({ storeProducts,
                        filterProducts: storeProducts,
                        featuredProducts,
                        cart: this.getStorageCart(),
                        singleProduct: this.getStorageProduct(),
                        loading:false
        } , () => {
            this.addTotals();
        })  
    }
    getStorageProduct = () => {
        return localStorage.getItem("singleProduct")?{}:JSON.parse(localStorage.getItem("singleProduct"));
    }
    getStorageCart = () => {
        let cart;
        if(localStorage.getItem('cart')) {
            cart =JSON.parse( localStorage.getItem("cart"))
        }
        else {
            cart = [];
        }
        return cart;
    };
    getTotals = () => {

    };
    getCartFromStorage = () => {}

    getProductFromStorage = () => {}

    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach(item => {
            subTotal += item.total;
            cartItems+= item.count;
        })
        subTotal =  parseFloat(subTotal.toFixed(2));
        let tax = subTotal*0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));
        return {
            cartItems,
            subTotal,
            total,
            tax
        }
    };

    addTotals = () => {
        const totals = this.getTotals();
        this.setState({
            cartItems:totals.cartItems,
            cartSubTotal:totals.subTotal,
            cartTax: totals.tax,
            cartTotal:totals.total
        });
    }

    syncStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }

    setSingleProduct = (id) => {
       let product = this.state.storeProducts.find(item=> item.id===id) ;
       localStorage.setItem("singleProduct", JSON.stringify(product));
       this.setState( {
           singleProduct : {...product},
           loading:false
       })
    }

    addToCart = (id) => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item=> item.id ===id) ;
        if(!tempItem) {
            tempItem = tempProducts.find(item=>item.id===id);
            let total = tempItem.price;
            let cartItem = {...tempItem, count : 1, total  }
            tempCart = [...tempCart, cartItem]
        }
        else {
            tempItem.count++;
            tempItem.total += tempItem.price;
            tempItem.total = parseFloat(tempItem.total.toFixed(2)); 
        }
        this.setState( () => {
            return ( {cart:tempCart})
        } , ()=> {
            this.addTotals()
            this.syncStorage()
            this.openCart()
        })
    }
    handleSideBar = () => {
        this.setState({
           sideBarOpened: !this.state.sideBarOpened 
        });
    }
    handleCart = () => {
        this.setState({
           cartOpened: !this.state.cartOpened
        });
    }
   
    closeCart = () => {
        this.setState({
            cartOpened:false
        })
    }
    openCart = () => {
        this.setState({
            cartOpened:true
        })
    }
    //cart functionality:
    //increment:
    increment = (id) => {
        console.log();
    }
    //decrement
    decrement = (id)=> {
        console.log(`decrement" + ${id}`);
    }
    removeItem = (id) => {
        console.log(id);
    }
    clearCart = () => {
        console.log("clear cart");
    }
    render() {
        return (
        <ProductContext.Provider value = {{
            ...this.state,
            handleSideBar: this.handleSideBar,
            handleCart: this.handleCart,
            closeCart: this.closeCart,
            openCart:this.openCart,
            addToCart: this.addToCart,
            setSingleProduct: this.setSingleProduct, 
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart
            }}>
                {this.props.children}
        </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer} ;