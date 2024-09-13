/*import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import MetaData from "../layouts/MataData/MataData";
import Loader from "../layouts/loader/Loader";
import Sidebar from "./Siderbar";
import { createSupplier, clearSupplierErrors } from "../../actions/supplierAction";
import { SUPPLIER_CREATE_RESET } from "../../constants/supplierConstants";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Navbar from "./Navbar";
import useStyles from "../User/LoginFromStyle";
import {
  Avatar,
  TextField,
  Typography,
  FormControl,
  Button,
} from "@material-ui/core";

function NewSupplier() {
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();
  const classes = useStyles();

  const { loading, error, success } = useSelector((state) => state.newSupplier);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [isCategory, setIsCategory] = useState(false);
  const [toggle, setToggle] = useState(false);

  const categories = ["Local", "International"];

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setIsCategory(true);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearSupplierErrors());
    }

    if (success) {
      alert.success("Supplier Created Successfully");
      history.push("/admin/suppliers");
      dispatch({ type: SUPPLIER_CREATE_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createSupplierSubmitHandler = (e) => {
    e.preventDefault();
    const supplierData = {
      name,
      email,
      phone,
      address,
      category,
    };

    dispatch(createSupplier(supplierData));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"New Supplier"} />
          <div className={classes.updateProduct}>
            <div
              className={
                !toggle ? `${classes.firstBox1}` : `${classes.toggleBox1}`
              }
            >
              <Sidebar />
            </div>

            <div className={classes.secondBox1}>
              <div className={classes.navBar1}>
                <Navbar toggleHandler={toggleHandler} />
              </div>

              <div
                className={`${classes.formContainer} ${classes.formContainer2}`}
              >
                <form
                  className={`${classes.form} ${classes.form2}`}
                  onSubmit={createSupplierSubmitHandler}
                >
                  <Avatar className={classes.avatar}>
                    <AddCircleOutlineIcon />
                  </Avatar>
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.heading}
                  >
                    Create Supplier
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    className={`${classes.nameInput} ${classes.textField}`}
                    label="Supplier Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonIcon
                            style={{
                              fontSize: 20,
                              color: "#414141",
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    variant="outlined"
                    label="Email"
                    value={email}
                    required
                    fullWidth
                    className={`${classes.passwordInput} ${classes.textField}`}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon
                            style={{
                              fontSize: 20,
                              color: "#414141",
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="outlined"
                    label="Phone"
                    value={phone}
                    required
                    className={`${classes.passwordInput} ${classes.textField}`}
                    onChange={(e) => setPhone(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PhoneIcon
                            style={{
                              fontSize: 20,
                              color: "#414141",
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    variant="outlined"
                    label="Address"
                    value={address}
                    required
                    fullWidth
                    className={`${classes.passwordInput} ${classes.textField}`}
                    onChange={(e) => setAddress(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <LocationOnIcon
                            style={{
                              fontSize: 20,
                              color: "#414141",
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <div className={classes.selectOption}>
                    {!isCategory && (
                      <Typography variant="body2" className={classes.labelText}>
                        Choose Category
                      </Typography>
                    )}
                    <FormControl className={classes.formControl}>
                      <Select
                        variant="outlined"
                        fullWidth
                        value={category}
                        onChange={handleCategoryChange}
                        className={classes.select}
                        inputProps={{
                          name: "category",
                          id: "category-select",
                        }}
                        MenuProps={{
                          classes: {
                            paper: classes.menu,
                          },
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                          transformOrigin: {
                            vertical: "top",
                            horizontal: "left",
                          },
                          getContentAnchorEl: null,
                        }}
                      >
                        {!category && (
                          <MenuItem value="">
                            <em>Choose Category</em>
                          </MenuItem>
                        )}
                        {categories.map((cate) => (
                          <MenuItem key={cate} value={cate}>
                            {cate}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>

                  <Button
                    variant="contained"
                    className={classes.loginButton}
                    fullWidth
                    type="submit"
                    disabled={loading ? true : false}
                  >
                    Create
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NewSupplier;
*/