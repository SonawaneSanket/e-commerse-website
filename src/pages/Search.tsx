import { useState } from "react";
import Productcard from "../components/Product-card";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler = () => {};

  const isPrevPage = page > 1;
  const isNextPage = page < 4;
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asend">(Low to High)</option>
            <option value="desend">(High to Low)</option>
          </select>
        </div>
        <div>
          <h4>max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">Sample 1</option>
            <option value="">Sample 2</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search Product Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-product-list">
          <Productcard
            productId="7a6s65fa76"
            name="pavillion"
            price={59999}
            stock={43}
            handler={addToCartHandler}
            photo="https://rukminim2.flixcart.com/image/416/416/kwdv3bk0/computer/r/m/c/15-ec2145ax-gaming-laptop-hp-original-imag92vp9cznphgg.jpeg?q=70"
          ></Productcard>
          <Productcard
            productId="1k3hhb413k"
            name="Iphone 15"
            price={74999}
            stock={5}
            handler={addToCartHandler}
            photo="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/7/h/-original-imagtc5fyznz42bx.jpeg?q=70"
          ></Productcard>
          <Productcard
            productId="j42n5n5j2m"
            name="Reebok"
            price={3999}
            stock={143}
            handler={addToCartHandler}
            photo="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/e/s/u/-original-imagudce6uxthwfg.jpeg?q=70"
          ></Productcard>
          <Productcard
            productId="mn34j23423"
            name="Cannon DSLR"
            price={40000}
            stock={24}
            handler={addToCartHandler}
            photo="https://rukminim2.flixcart.com/image/416/416/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70"
          ></Productcard>
          <Productcard
            productId="b2h3b23hbb"
            name="Samsung Smart TV"
            price={26999}
            stock={43}
            handler={addToCartHandler}
            photo="https://rukminim2.flixcart.com/image/416/416/xif0q/television/j/2/j/-original-imagtq4hqqt37tgx.jpeg?q=70"
          ></Productcard>
        </div>
        <article>
          <button
            disabled={!isPrevPage}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <span>
            {page} of {4}
          </span>
          <button
            disabled={!isNextPage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
};

export default Search;
