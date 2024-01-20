import { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import CartItems from "../components/Cart-items";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "product",
    photo:
      "https://rukminim2.flixcart.com/image/416/416/kwdv3bk0/computer/r/m/c/15-ec2145ax-gaming-laptop-hp-original-imag92vp9cznphgg.jpeg?q=70",
    name: "Hp Pavillion ",
    price: 59999,
    quantity: 30,
    stock: 10,
  },
];
const subTotal = 59999;
const tax = Math.round(subTotal * 0.018);
const shippingCharge = 200;
const total = subTotal + tax + shippingCharge;
const discount = 400;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, item) => (
            <CartItems key={item} cartItem={i}></CartItems>
          ))
        ) : (
          <h1>Cart is Empty</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subTotal}</p>
        <p>shipping Charge : ₹{shippingCharge}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount: <em> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid coupon <MdErrorOutline></MdErrorOutline>{" "}
            </span>
          ))}
        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
