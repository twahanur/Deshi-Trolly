import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './ManageProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBox, faPen, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
import PreLoader from '../PreLoader/PreLoader';

const ManageProducts = () => {
    document.title = 'Manage Products - Deshi-Trolly.Com';
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [preLoad, setPreLoad] = useState(false);

    useEffect(() => {
        fetch('https://powerful-spire-90415.herokuapp.com/products')
            .then(res => res.json())
            .then(products => {
                setProducts(products)
                setPreLoad(true);
            })
    }, [])

    const deleteProduct = id => {
        console.log(id)
        const url = `https://powerful-spire-90415.herokuapp.com/deleteProduct/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    history.push('/admin');
                }
            })
    }
    return (
        <div className="container">
            <div className="Dashborad">
                <ul>
                    <li><Link to="/admin"><span><FontAwesomeIcon icon={faPlus} /></span> Add Product</Link></li>
                    <li><Link to="/manage_products"><span><FontAwesomeIcon icon={faBox} /></span> Manage Product</Link></li>
                    <li><Link to="/manage_products"><span><FontAwesomeIcon icon={faPen} /></span> Edit Product</Link></li>
                </ul>
            </div>
            <div className="ProductOptions">
                <div className="PageTitle">
                    <h3>Manage Products</h3>
                </div>
                {preLoad ? <table>
                    <thead>
                        <tr>
                            <th scope="col" className="THead">Image</th>
                            <th scope="col" className="THead">Name</th>
                            <th scope="col" className="THead">Price</th>
                            <th scope="col" className="THead">Weight</th>
                            <th scope="col" className="THead">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr id="EntryProduct" key={product._id}>
                                <td><img src={product.productIMG} alt={product.name} /></td>
                                <td>{product.name}</td>
                                <td>৳ {product.price}</td>
                                <td>{product.weight}</td>
                                <td>
                                    <button className="EditProduct"><span><FontAwesomeIcon icon={faPencilAlt} /></span></button>
                                    <button className="DeleteProduct" onClick={() => deleteProduct(product._id)}><span><FontAwesomeIcon icon={faTrashAlt} /></span></button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table> : <div className="center">
                    <PreLoader />
                </div>}
            </div>
        </div>
    );
};

export default ManageProducts;