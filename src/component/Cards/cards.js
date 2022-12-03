import React from "react";
import "./cards.css";


const Cards = () => {
  
return (
    <div className="cards">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-sm-6 col-md-4">
          <div className="card" >
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="card"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Fancy Product</h5>
              <p className="card-text">$40.00 - $80.00</p>
              <button
                id="cart-btn-add"
                type="button"
                className="btn btn-outline-success"
              >
                Add to cart
              </button>
              <button id="cart-btn-remove" className="btn btn-outline-danger">
                Remove
              </button>
            </div>
          </div>
        </div>


        <div className="col-lg-3 col-sm-6 col-md-4">
          <div className="card" >
            <span className="badge bg-dark">Sale</span>
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="card"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Special Item </h5>
              <p className="card-text">
                <p>
                  <span id="strikethrough" className="text-muted">$20.00</span>
                </p>
                <>$18.00</>
              </p>
              <a href="#" id="cart-btn-add" className="btn btn-outline-success">
                Add to cart
              </a>
              <a
                href="#"
                id="cart-btn-remove"
                className="btn btn-outline-danger"
              >
                Remove
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 col-md-4">
          <div className="card" >
            <span className="badge bg-dark">Sale</span>
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="card"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Sale Item </h5>
              <p className="card-text">
                <p>
                  <span id="strikethrough" className="text-muted">$50.00</span>
                </p>
                <>$25.00</>
              </p>
              <a href="#" id="cart-btn-add" className="btn btn-outline-success">
                Add to cart
              </a>
              <a
                href="#"
                id="cart-btn-remove"
                className="btn btn-outline-danger"
              >
                Remove
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 col-md-4">
          <div className="card" >
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="card"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Popular Item </h5>
              <div id="rating"></div>
              <p className="card-text">$40.00</p>
              <a href="#" id="cart-btn-add" className="btn btn-outline-success">
                Add to cart
              </a>
              <a
                href="#"
                id="cart-btn-remove"
                className="btn btn-outline-danger"
              >
                Remove
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 col-md-4">
          <div className="card" >
            <span className="badge bg-dark">Sale</span>
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="card"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Sale Item</h5>
              <p className="card-text">
                <p>
                 <span id="strikethrough" className="text-muted">$50.00</span>
                </p>
                <>$25.00</>
              </p>
              <a href="#" id="cart-btn-add" className="btn btn-outline-success">
                Add to cart
              </a>
              <a
                href="#"
                id="cart-btn-remove"
                className="btn btn-outline-danger"
              >
                Remove
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 col-md-4">
          <div className="card" >
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="card"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title"> Fancy Product </h5>
              <p className="card-text">$120.00- $280.00</p>
              <a href="#" id="cart-btn-add" className="btn btn-outline-success">
                Add to cart
              </a>
              <a
                href="#"
                id="cart-btn-remove"
                className="btn btn-outline-danger"
              >
                Remove
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 col-md-4">
          <div className="card">
            <span className="badge bg-dark">Sale</span>
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="card"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Special Item </h5>
              <p className="card-text">
                <p>
                 <span id="strikethrough" className="text-muted">$20.00</span>
                </p>
                <>$18.00</>
              </p>
              <a href="#" id="cart-btn-add" className="btn btn-outline-success">
                Add to cart
              </a>
              <a
                href="#"
                id="cart-btn-remove"
                className="btn btn-outline-danger"
              >
                Remove
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 ">
          <div className="card" >
            <img
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="card"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Popular Item</h5>
              <p className="card-text">$40.00</p>
              <a href="#" id="cart-btn-add" className="btn btn-outline-success">
                Add to cart
              </a>
              <a
                href="#"
                id="cart-btn-remove"
                className="btn btn-outline-danger"
              >
                Remove
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;