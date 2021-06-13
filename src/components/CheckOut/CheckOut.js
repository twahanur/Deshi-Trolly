import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import PreLoader from '../PreLoader/PreLoader';
import './CheckOut.css';

const CheckOut = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [productForBuy, setProductForBuy] = useState([]);
    const { name, price, productIMG, weight } = productForBuy;
    const [preLoad, setPreLoad] = useState(false);
    useEffect(() => {
        fetch(`https://powerful-spire-90415.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(product => {
                setProductForBuy(product[0])
                setPreLoad(true);
            })
    }, []);

    const sendOrderInfoInDB = {
        name: name,
        price: price,
        productIMG: productIMG,
        weight: weight
    }
    const confirmOrder = () => {
        const orderDetails = {...loggedInUser, ...sendOrderInfoInDB, Date: (new Date().toString("dddd, mmmm dS, yyyy, g:i A TT"))};
        const url = `https://powerful-spire-90415.herokuapp.com/confirmOrder`;
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                history.push('/orders');
            }
        })
    }
    return (
        <div className="marginTopBottom">
            <div className="container">
                {preLoad ? <div className="ProductForCheckOut">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={productIMG} alt={name} /></td>
                                <td>{name}</td>
                                <td>1</td>
                                <td>৳ {price}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="CheckOutBtn">
                        <button className="OrderButton" onClick={() => confirmOrder()}>Confirm Order</button>
                    </div>
                </div> : <div className="center">
                    <PreLoader />
                </div>}
            </div>
        </div>
    );
};

export default CheckOut;