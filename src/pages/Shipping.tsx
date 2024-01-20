import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Shipping = () => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="shipping">
      <button
        className="back-btn"
        onClick={() => {
          navigate("/cart");
        }}
      >
        <BiArrowBack></BiArrowBack>
      </button>

      <form action="">
        <h1>Shipping Location</h1>

        <input
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="city"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="state"
          name="state"
          value={shippingInfo.state}
          onChange={changeHandler}
        />

        <select
          name="country"
          required
          value={shippingInfo.country}
          onChange={changeHandler}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
        </select>
        <input
          type="number"
          placeholder="pincode"
          name="pincode"
          value={shippingInfo.pincode}
          onChange={changeHandler}
        />
        <button type="submit">
          Pay Now <FaArrowRight></FaArrowRight>
        </button>
      </form>
    </div>
  );
};

export default Shipping;
