export default function getCartTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
