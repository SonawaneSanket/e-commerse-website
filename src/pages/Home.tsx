import { Link } from "react-router-dom";
import Productcard from "../components/Product-card";


const Home = () => {

  const addToCartHandler=()=>{
  } 

  return (
    <div className="home">

      <section></section>

      <h1>Latest Product

        <Link to="/search" className="findmore">More</Link>
      </h1>
      <main>
        <Productcard productId="7a6s65fa76" name="pavillion" price={59999} stock={43} handler={addToCartHandler} photo="https://rukminim2.flixcart.com/image/416/416/kwdv3bk0/computer/r/m/c/15-ec2145ax-gaming-laptop-hp-original-imag92vp9cznphgg.jpeg?q=70"></Productcard>
        <Productcard productId="1k3hhb413k" name="Iphone 15" price={74999} stock={5} handler={addToCartHandler} photo="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/7/h/-original-imagtc5fyznz42bx.jpeg?q=70"></Productcard>
        <Productcard productId="j42n5n5j2m" name="Reebok" price={3999} stock={143} handler={addToCartHandler} photo="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/e/s/u/-original-imagudce6uxthwfg.jpeg?q=70"></Productcard>
        <Productcard productId="mn34j23423" name="Cannon DSLR" price={40000} stock={24} handler={addToCartHandler} photo="https://rukminim2.flixcart.com/image/416/416/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70"></Productcard>
        <Productcard productId="b2h3b23hbb" name="Samsung Smart TV" price={26999} stock={43} handler={addToCartHandler} photo="https://rukminim2.flixcart.com/image/416/416/xif0q/television/j/2/j/-original-imagtq4hqqt37tgx.jpeg?q=70"></Productcard>
      </main>
    </div>
  )
}

export default Home;