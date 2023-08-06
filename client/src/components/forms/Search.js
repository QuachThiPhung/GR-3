import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { TextField } from "@material-ui/core";
import "../css/Search.css"
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
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit} style={{ color: "#FFFFFF", backgroundColor: "#FFFFFF" }}>
  <TextField
    onChange={handleChange}
    type="search"
    variant="outlined"
    style={{ borderRadius: 30, color: "#FFFFFF", backgroundColor: "#FFFFFF" }}
    value={text}
    placeholder="Search"
    InputProps={{
      endAdornment: <SearchOutlined onClick={handleSubmit} style={{ cursor: "pointer"}} />,
    }}
  />
</form>

  );
};

export default Search;