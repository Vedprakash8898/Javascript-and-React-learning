import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("india");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += " Fullname";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
      ) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid Password");
      }
    }

    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }

    if (phone === null || phone === "") {
      isproceed = false;
      errormessage += "  Phone no";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[6-9]\d{9}$/gi.test(phone)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid Mobile no");
      }
    }

    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let finalObj = { id, name, password, email, phone, country };
    if (IsValidate()) {
      //console.log(finalObj);
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(finalObj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
    }
  };
  return (
    <div className="border">
      <div className="offset-lg-3 col-lg-6">
        <div>
          <form className="container" onSubmit={handlesubmit}>
            <div className="card">
              <div className="card-header ">
                <h2>Registration Page</h2>
              </div>
              <div className="card-body ">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        User Name <span className="errmsg">*</span>
                      </label>
                      <input
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="form-control"
                      ></input>
                      <br/>
                      {errormessage}

                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Full Name <span className="errmsg">*</span>
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      ></input>
                      <br/>
                  
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Email <span className="errmsg">*</span>
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      ></input>
                      <br/>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Password <span className="errmsg">*</span>
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                      ></input>
                      <br/>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Country <span className="errmsg">*</span>
                      </label>
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="form-control"
                      >
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="singapore">Singapore</option>
                      </select>
                      <br/>

                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Phone <span className="errmsg"></span>
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                      ></input>
                      <br/>

                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-success">
                  Register
                </button>{" "}
                | <nbsp></nbsp> <nbsp></nbsp>
                <Link to={"/login"} className="btn btn-dark">
                  Close
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
