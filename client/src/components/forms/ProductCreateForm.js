import React from "react";
import Select from '@mui/material/Select';
import { Box, Button, Paper, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import { TextareaAutosize } from "@material-ui/core";
const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  showSub,
  handleChangeColor,
  handleChangeUnit,
  handleChangeSub,
  handleChangeShipping

}) => {
  // destructure
  const {
    title,
    description,
    price,
    categories,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    units,
    color,
    unit,
  } = values;
  console.log(subOptions);
  return (
    <Box padding={2}>
      <form onSubmit={handleSubmit}>
        <Paper >
          <Box display={"flex"} padding={2} height={30}>
            <TextField
              id="outlined-basic" variant="outlined"
              label="title"
              name="title"
              type="text"
              fullWidth
              onChange={handleChange}
              size="small"
            />

            <FormControl fullWidth style={{ marginLeft: "24px" }}>
              <InputLabel id="demo-simple-select-label" style={{marginTop: -7}}>shipping</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={shipping}
                onChange={handleChangeShipping}
                label="shipping"
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>

              </Select>
            </FormControl>
          </Box>
          <Box display={"flex"} padding={2} height={30} marginTop={5}>
            <FormControl fullWidth >
              <InputLabel htmlFor="outlined-adornment-amount" style={{marginTop: -7}}>Price</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                endAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Amount"
                onChange={handleChange}
                value={price}
                name="price"
                size="small"
              />
            </FormControl>
            <TextField
              fullWidth
              style={{ marginLeft: 12 }}
              id="outlined-number"
              label="quantity"
              type="number"
              value={quantity}
              onChange={handleChange}
              name="quantity"
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
            />
          </Box>

          <Box display={"flex"} padding={2} height={30} marginTop={5} >

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" style={{marginTop: -7}}>Color</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={color}
                onChange={handleChangeColor}
                label="Color"
              >
                {colors.map((c) => (
                  <MenuItem key={c} value={c}>{c}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ marginLeft: 12 }}>
              <InputLabel id="demo-simple-select-label" style={{marginTop: -7}}>Unit</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={unit}
                onChange={handleChangeUnit}
                label="Unit"
                required
              >
                {units.map((c) => (
                  <MenuItem key={c} value={c}>{c}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box padding={2} marginTop={5}>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label" style={{marginTop: -7}}>Category</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={(e) => { handleCatagoryChange(e) }}
                label="Category"
                required

              >
                {categories && categories.length > 0 &&
                  categories.map((c) => (
                    c._id && <MenuItem key={c._id} value={c._id}>{c.name}</MenuItem>
                  ))}
              </Select>
            </FormControl>
            {showSub ? (<FormControl fullWidth style={{ marginTop: 12 }}>
              <InputLabel id="demo-simple-select-label" style={{marginTop: -7}}>Sub Categories</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subs}
                onChange={handleChangeSub}
                label="Sub Categories"
              >
                {subOptions && subOptions.length > 0 && subOptions.map((c) => (
                  c && c._id && <MenuItem key={c._id} value={c._id}>{c.name}</MenuItem>
                ))}
              </Select>
            </FormControl>) : ""
            }

          </Box>
        </Paper>
        <Paper style={{ minHeight: "150px", marginTop: 24 }}>
          <Box display="flex" padding={2} paddingLeft={0}>
            <TextareaAutosize
              fullWidth
              id="outlined-multiline-static"
              title="Description"
              multiline  // Set multiline prop to true
              rows={5}   // Set the number of rows you want the input to display
              name="description"
              value={description}
              onChange={handleChange}
              style={{ marginLeft: 12, width: "100%", padding: 10 }}
              placeholder="Description"
              height={200}
            />
          </Box>
        </Paper>
        {/* <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Shipping</label>
          <select
            name="shipping"
            className="form-control"
            onChange={handleChange}
          >
            <option>Please select</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            className="form-control"
            value={quantity}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Color</label>
          <select name="color" className="form-control" onChange={handleChange}>
            <option>Please select</option>
            {colors.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Unit</label>
          <select name="unit" className="form-control" onChange={handleChange}>
            <option>Please select</option>
            {units.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            className="form-control"
            onChange={handleCatagoryChange}
          >
            <option>Please select</option>
            {categories.length > 0 &&
              categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>

        {showSub && (
          <div>
            <label>Sub Categories</label>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Please select"
              value={subs}
              onChange={handleChangeSub}
            >
              {subOptions.length &&
                subOptions.map((s) => (
                  <Option key={s._id} value={s._id}>
                    {s.name}
                  </Option>
                ))}
            </Select>
          </div>
        )} */}

        <br />
        <Button className="btn btn-outline-info" onClick={handleSubmit}>Save</Button>
      </form>
    </Box>
  );
};

export default ProductCreateForm;
