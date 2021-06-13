import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Home.css';
import Products from '../Products/Products';
import PreLoader from '../PreLoader/PreLoader';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    document.title = 'Deshi-Trolly.Com - #1 Grocery Shop in Bangladesh!';
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://powerful-spire-90415.herokuapp.com/products')
            .then(res => res.json())
            .then(product => setProducts(product))
    }, [])









    return (
        <div>
            <div className="container m-auto">
                <div className="Search">
                    <h3>Search for Products</h3>
                    <input type="text" placeholder="Search" />
                    <input type="submit" value="Search" />
                </div>
                <div className="row m-auto d-flex justify-content-center">
                    {
                        products.length === 0 && <PreLoader />
                    }
                    {
                        products.map(product => <Products key={product._id} product={product}></Products>)
                    }
                </div>
            </div>
<Footer />
        </div>
    );
};

export default Home;