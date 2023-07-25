import React, { useState, useEffect } from "react";
import { Card, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import defaultIMG from "../../images/default.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import wish from "../../images/wish.svg";
import addcart from "../../images/add-cart.svg";
import view from "../../images/view.svg";
import wishFilled from "../../images/wish-filled.svg";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import { addToWishlist, getWishlist } from "../../functions/user";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [tooltip, setTooltip] = useState("Click to add");
  const [inWishList, setinWishList] = useState("false");

  const checkWishList = async() => {
    try {
      const wishlist = await getWishlist(user.token);
      const productId = product._id;
      const inWishList = wishlist.some((wishlistProduct) => wishlistProduct._id === productId);

      setinWishList(inWishList);
    }
    catch (error) {
      console.error("Error fetching user's wishlist:", error);
    }
  }

  useEffect(() => {
    checkWishList();
  }, []);

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(product._id, user.token).then((res) => {
      console.log("ADDED TO WISHLIST", res.data);
      toast.success("Added to wishlist");
      setinWishList((inWishlist) => !inWishlist);
    });
  };

  // redux
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

  
  // destructure
  const { images, title, description, slug, category, price } = product;
  return (
    <>
      {/* <Card
        cover={
          <img
            src={images && images.length ? images[0].url : defaultIMG}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart} disabled={product.quantity < 1}>
              <ShoppingCartOutlined className="text-danger" /> <br />
              {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
            </a>
          </Tooltip>,
        ]}
      >
        <Meta
          title={title}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card> */}
      <Card className="col-12" style={{ width: ""}}>
        <Link to={`/product/${slug}`} className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent" onClick={handleAddToWishlist}>
              <img src={inWishList ? wish : wishFilled} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            {images && images.length >= 1 ? (
              <img style={{ height: "150px", objectFit: "cover" }} src={images[0].url} className="img-fluid" alt="product image" />
            ) : (
              <img style={{ height: "150px", objectFit: "cover" }} src={defaultIMG} className="img-fluid" alt="product image" />
            )}

            {images && images.length >= 2 ? (
              <img style={{ height: "150px", objectFit: "cover" }} src={images[1].url} className="img-fluid" alt="product image" />
            ) : (
              <img style={{ height: "150px", objectFit: "cover" }} src={defaultIMG} className="img-fluid" alt="product image" />
            )}
          </div>

          <div className="product-details">
            <h6 className="brand">{category && category.name}</h6>
            <h5 className="product-title">
              {title}
            </h5>
            {product && product.ratings && product.ratings.length > 0 ? (
              showAverage(product)
            ) : (
              <div className="text-center pt-1 pb-3">No rating yet</div>
            )}
            <p className="price">${price}</p>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent">
                  <img src={view} alt="view" />
                </button>
                <button className="border-0 bg-transparent" onClick={handleAddToCart}>
                  <img src={addcart} alt="addcart" />
                </button>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    </>
  );
};

export default ProductCard;
