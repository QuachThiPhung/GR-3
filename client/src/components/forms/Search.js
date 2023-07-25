import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { BsSearch } from "react-icons/bs";
// import { DropdownButton, Dropdown } from "react-bootstrap";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    if (e.keyCode && e.keyCode !== 13) return;
    e.preventDefault();
    navigate(`/shop?${text}`);
  };

  return (
    // <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
    //   {/* <DropdownButton id="dropdown-basic-button" title={searchCategoryToggle}>
    //     <Dropdown.Item onClick={() => setSearchCategoryToggle("All")}>All</Dropdown.Item>
    //     {categories.map((category, id) => (
    //       <Dropdown.Item key={id} onClick={() => setSearchCategoryToggle(category.name)}>{category.name}</Dropdown.Item>
    //     ))}
    //   </DropdownButton> */}
    //   <input
    //     onChange={handleChange}
    //     type="search"
    //     value={text}
    //     className="form-control mr-sm-2"
    //     placeholder="Search"
    //   />
    //   <SearchOutlined onClick={handleSubmit} style={{ cursor: "pointer" }} />
    // </form>
    <>
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control py-2"
          placeholder="Search Product Here..."
          aria-label="Search Product Here..."
          aria-describedby="basic-addon2"
          onChange={handleChange}
          value={text}
        />
        <button
          className="input-group-text p-3"
          type="submit"
          id="basic-addon2"
          style={{ background: "orange", border: "none", cursor: "pointer" }}
          // onSubmit={handleSubmit}
        >
          <BsSearch className="fs-6" />
        </button>
      </form>
    </>
  );
};

export default Search;