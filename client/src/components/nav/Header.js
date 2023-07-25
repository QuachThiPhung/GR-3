import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Search from "../forms/Search";
import { selectDatabase } from "../../functions/db";
import { BsSearch } from "react-icons/bs";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const navigate = useNavigate();

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));


  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/login");
  };

  document.addEventListener('DOMContentLoaded', () => {
    const databaseDropdown = document.getElementById('databaseDropdown');
    databaseDropdown.addEventListener('change', () => {
      const selectedDatabase = databaseDropdown.value;
      selectDatabase(selectedDatabase)
        .then(() => {
          console.log('Database selection successful');
          window.location.reload(); // Refresh the page
        })
        .catch(error => {
          console.error('Error selecting database:', error);
        });
    });
  });

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+91 8264954234">
                  +91 8264954234
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" to="/">ResidentHub</Link>
              </h2>
            </div>
            <div className="col-2">
              <select id="databaseDropdown" selected="">
                <option value="">Select Database</option>
                <option value="db1">Database 1</option>
                <option value="db2">Database 2</option>
                <option value="db3">Database 3</option>
                <option value="db4">Database 4</option>
                <option value="db5">Database 5</option>
              </select>
            </div>
            <div className="col-3">
              {/* <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div> 
              <Search />
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                {/* <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    {/* <img src={compare} alt="compare" /> *
                    <p className="mb-0">
                      Compare Products
                    </p>
                  </Link>
                  <div> 
                <div>
                  <Link to="/" className="d-flex align-items-center gap-10 text-white">
                    <AppstoreOutlined style={{ fontSize: '16px' }} />
                    <p className="mb-0">Home</p>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Link
                to="/wishlist"
                className="d-flex align-items-center gap-10 text-white"
              >
                {/* <img src={wishlist} alt="wishlist" />
                <p className="mb-0">
                  Favourite <br /> wishlist
                </p>
              </Link>
            </div>
            <div>
              <Link
                to="/login"
                className="d-flex align-items-center gap-10 text-white"
              >
                <img src={user} alt="user" />
                <p className="mb-0">
                  Log in <br /> My Account
                </p>
              </Link>
            </div>
            <div>
              <Link
                to="/cart"
                className="d-flex align-items-center gap-10 text-white"
              >
                <img src={cart} alt="cart" />
                <div className="d-flex flex-column gap-10">
                  <span className="badge bg-white text-dark">0</span>
                  <p className="mb-0">$ 500</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
      </header > */}

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" to="/">ResidentHub</Link>
              </h2>
            </div>
            <div className="col-2">
              <select id="databaseDropdown" selected="">
                <option value="">Select Database</option>
                <option value="db1">Database 1</option>
                <option value="db2">Database 2</option>
                <option value="db3">Database 3</option>
                <option value="db4">Database 4</option>
                <option value="db5">Database 5</option>
              </select>
            </div>
            <div className="col-3">
              <Search />
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/shop" className="d-flex align-items-center gap-10 text-white">
                    <ShoppingOutlined style={{ fontSize: '40px' }} />
                    <p className="mb-0">Shop</p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <ShoppingCartOutlined style={{ fontSize: '40px' }} />
                    <Badge count={cart.length} offset={[9, 0]}>
                      <p className="mb-0 text-white">Cart</p>
                    </Badge>
                  </Link>
                </div>
                {!user && (
                  <div>
                    <Link to="/register" className="d-flex align-items-center gap-10 text-white">
                      <UserAddOutlined style={{ fontSize: '40px' }} />
                      <p className="mb-0">Register</p>
                    </Link>
                  </div>
                )}
                {!user && (
                  <div>
                    <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                      <UserOutlined style={{ fontSize: '40px' }} />
                      <p className="mb-0">Login</p>
                    </Link>
                  </div>
                )}

                {/* {user && (
                  <SubMenu
                    icon={<SettingOutlined style={{ fontSize: '40px' }} />}
                    title={user.email && user.email.split("@")[0]}
                    className="float-right"
                  >
                    {user.role === "subscriber" && (
                      <div>
                        <Link to="/user/history" className="d-flex align-items-center gap-10 text-white">
                          <p className="mb-0">Dashboard</p>
                        </Link>
                      </div>
                    )}

                    {user.role === "buyer" && (
                      <div>
                        <Link to="/user/upgrade-seller" className="d-flex align-items-center gap-10 text-white">
                          <p className="mb-0">Upgrade to Seller</p>
                        </Link>
                      </div>
                    )}

                    {user.role === "admin" && (
                      <div>
                        <Link to="/admin/dashboard" className="d-flex align-items-center gap-10 text-white">
                          <p className="mb-0">Dashboard</p>
                        </Link>
                      </div>
                    )}

                    {user.role === "seller" && (
                      <div>
                        <Link to="/seller/dashboard" className="d-flex align-items-center gap-10 text-white">
                          <p className="mb-0">Seller Dashboard</p>
                        </Link>
                      </div>
                    )}
                    <div onClick={logout}>
                      <p className="mb-0">
                        Logout
                      </p>
                    </div>
                  </SubMenu> 
                    )} */}

              </div>
            </div>
          </div>
        </div>
      </header>

      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<AppstoreOutlined />}>
          <Link to="/">Home</Link>
        </Item>
        <select id="databaseDropdown" selected="">
          <option value="">Select Database</option>
          <option value="db1">Database 1</option>
          <option value="db2">Database 2</option>
          <option value="db3">Database 3</option>
          <option value="db4">Database 4</option>
          <option value="db5">Database 5</option>
        </select>

        <Item key="shop" icon={<ShoppingOutlined />}>
          <Link to="/shop">Shop</Link>
        </Item>

        <Item key="cart" icon={<ShoppingCartOutlined />}>
          <Link to="/cart">
            <Badge count={cart.length} offset={[9, 0]}>
              Cart
            </Badge>
          </Link>
        </Item>

        {!user && (
          <Item key="register" icon={<UserAddOutlined />} className="">
            <Link to="/register">Register</Link>
          </Item>
        )}

        {!user && (
          <Item key="login" icon={<UserOutlined />} className="">
            <Link to="/login">Login</Link>
          </Item>
        )}

        {user && (
          <SubMenu
            icon={<SettingOutlined />}
            title={user.email && user.email.split("@")[0]}
            className="float-right"
          >
              <Item>
                <Link to="/user/history">Dashboard</Link>
              </Item>

            {user && user.role === "buyer" && (
              <Item>
                <Link to="/user/upgrade-seller">Upgrade to Seller</Link>
              </Item>
            )}

            {user && user.role === "admin" && (
              <Item>
                <Link to="/admin/dashboard">Dashboard</Link>
              </Item>
            )}

            {user && user.role === "seller" && (
              <Item>
                <Link to="/seller/dashboard">Seller Dashboard</Link>
              </Item>
            )}
            <Item icon={<LogoutOutlined />} onClick={logout}>
              Logout
            </Item>
          </SubMenu>
        )}
      </Menu>
    </>

  );
};

export default Header;