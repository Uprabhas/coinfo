import React from "react";
import { Link } from "react-router-dom";
import "./reg.css";

export default function Registration() {
  return (
    <div className="body">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-md-6">
                <label for="Prabhas" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                />
              </div>
              <div className="col-md-6">
                <label for="9999999999" class="form-label">
                  Moblie No.
                </label>
                <input
                  type="number"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">
              <Link to="/" className="submit">
                Submit
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
