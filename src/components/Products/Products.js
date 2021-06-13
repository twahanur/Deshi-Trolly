import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';


const Products = ({ product }) => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, price, productIMG, _id, weight, seller } = product;
    const buyProduct = () => {
        history.push(`/checkout/${_id}`);
    }
    return (
        <>



            <div className="col-md-2 ">
            <div className="card border-outline-info border-rounded" style={{ "width": "13rem"}}>
                <img src={productIMG} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex">
                        <h5 className="card-title">{name}</h5>
                        <h5 className=" ms-auto">৳{price}</h5>
                    </div>
                    <p className="card-text"></p>
                    <p>Brand:{seller}</p>
                    <a onClick={buyProduct} class="btn btn-outline-primary">But Now</a>
                </div>
            </div>
            </div>

        </>
    );
};

export default Products;