import React, {useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import { addToWishlist } from "../../functions/user";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

const ProductListItems = ({ product }) => {
  const [tooltip, setTooltip] = useState("Click to add");
  const {
    price,
    category,
    subs,
    shipping,
    color,
    resident,
    quantity,
    sold,
    title
    // creator
  } = product;

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token).then((res) => {
      console.log("ADDED TO WISHLIST", res.data);
      toast.success("Added to wishlist");
    });
  };

  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      setTooltip("Added");

      // add to reeux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart items in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };

  return (
    <>
      <div className="main-product-details">
        <div className="border-bottom">
          <h3 className="title">
            {title}
          </h3>
        </div>
        <div className="border-bottom py-3">
          <p className="price">${price}</p>
        </div>
        <div className=" py-3">
          {category && (
            <div className="d-flex gap-10 align-items-center my-2">
              <h3 className="product-heading">Category :</h3>
              <p className="product-data"><Link
                to={`/category/${category.slug}`}
                className="label label-default label-pill pull-xs-right"
              >
                {category.name}
              </Link></p>
            </div>
          )}
          {subs && (
            <div className="d-flex gap-10 align-items-center my-2">
              <h3 className="product-heading">Sub Categories :</h3>
              {subs.map((s) => (
                <p className="product-data"><Link
                  key={s._id}
                  to={`/sub/${s.slug}`}
                  className="label label-default label-pill pull-xs-right"
                >
                  {s.name}
                </Link></p>
              ))}
            </div>
          )}
          <div className="d-flex gap-10 align-items-center my-2">
            <h3 className="product-heading">Shipping :</h3>
            <p className="product-data">{shipping}</p>
          </div>
          <div className="d-flex gap-10 align-items-center my-2">
            <h3 className="product-heading">Color :</h3>
            <p className="product-data">{color} </p>
          </div>
          <div className="d-flex gap-10 align-items-center my-2">
            <h3 className="product-heading">Available :</h3>
            <p className="product-data">{quantity}</p>
          </div>
          <div className="d-flex gap-10 align-items-center my-2">
            <h3 className="product-heading">Sold :</h3>
            <p className="product-data">{sold}</p>
          </div>
          
          <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
            <div className="d-flex align-items-center gap-30 ms-5">
              <button
                className="button border-0"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                type="button"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="d-flex align-items-center gap-15">
            <div>
              <a onClick={handleAddToWishlist}>
                <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
              </a>
            </div>
          </div>
          <div className="d-flex gap-10 flex-column  my-3">
            <h3 className="product-heading">Shipping & Returns :</h3>
            <p className="product-data">
              Free shipping and returns available on all orders! <br /> We
              ship all US domestic orders within
              <b> 5-10 business days!</b>
            </p>
          </div>
        </div>
      </div>


      {/* <ul className="list-group">
        <li className="list-group-item">
          Price{" "}
          <span className="label label-default label-pill pull-xs-right">
            $ {price}
          </span>
        </li>

        {category && (
          <li className="list-group-item">
            Category{" "}
            <Link
              to={`/category/${category.slug}`}
              className="label label-default label-pill pull-xs-right"
            >
              {category.name}
            </Link>
          </li>
        )}

        {subs && (
          <li className="list-group-item">
            Sub Categories
            {subs.map((s) => (
              <Link
                key={s._id}
                to={`/sub/${s.slug}`}
                className="label label-default label-pill pull-xs-right"
              >
                {s.name}
              </Link>
            ))}
          </li>
        )}

        <li className="list-group-item">
          Shipping{" "}
          <span className="label label-default label-pill pull-xs-right">
            {shipping}
          </span>
        </li>

        <li className="list-group-item">
          Color{" "}
          <span className="label label-default label-pill pull-xs-right">
            {color}
          </span>
        </li>

        <li className="list-group-item">
          Resident{" "}
          <span className="label label-default label-pill pull-xs-right">
            {resident}
          </span>
        </li>

        <li className="list-group-item">
          Available{" "}
          <span className="label label-default label-pill pull-xs-right">
            {quantity}
          </span>
        </li>

        <li className="list-group-item">
          Sold{" "}
          <span className="label label-default label-pill pull-xs-right">
            {sold}
          </span>
        </li> */}

        {/* <li className="list-group-item">
        Created By{" "}
        <span className="label label-default label-pill pull-xs-right">
          {product.creator.name}
        </span>
      </li> */}
      {/* </ul> */}

    </>
  );
};

export default ProductListItems;
