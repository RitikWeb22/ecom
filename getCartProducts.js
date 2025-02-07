
export const getCartProductFromLS = () => {
    let cartProducts = localStorage.getItem('cartProductLS');

    if (!cartProducts) {
        return [];
    }

    return JSON.parse(cartProducts); 
};
