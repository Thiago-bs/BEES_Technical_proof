import Cart from '../../models/Cart'

const INITIAL_CART_STATE = {
    activeCart: false,
    products: [],
}

export default function beersReduce(cart: Cart = INITIAL_CART_STATE, action: any){
    if(action.type ==='CHANGE_BEERS'){  
        let listProducts = cart.products;
        listProducts.push(action.beer)
        return { ...cart, activeCart:true, products: listProducts};
    }
    return cart
}