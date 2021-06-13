import {
    Link
} from "react-router-dom";
import React from 'react';
const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'rgb(10 39 66)', color: 'white' }} className="pb-5">
            <div className="d-flex pt-5">
                <div className="col-md-5 pl-5">
                    <p>H#340(4th Floor), Road #24, <br /> New DOHS, Mohakhali, Dhaka, Bangladesh <br />Phone: 018XXXXXXXX <br />E-mail: info@company.com</p>
                </div>
                <div className="col-md-2">
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Site Map</p>
                    <p>Support Center</p>
                    <p>Terms Conditions</p>
                    <p>Submit Listing</p>
                </div>
                <div className="col-md-2">
                    <h4>Quick Links</h4>
                    <li><Link className="text-decoration-none text-white" to="/">Home</Link></li>
                    <li><Link className="text-decoration-none text-white" to="/orders">Orders</Link></li>
                    <li><Link className="text-decoration-none text-white" to="#">Best Deals</Link></li>
                    <li><Link className="text-decoration-none text-white" to="/admin">Admin</Link></li>
                </div>
                <div className="col-md-3">
                    <h4>About us</h4>
                    <p>We are the top real estate <br />agency in sydney, with agents <br />available to answer any <br />question 24/7</p>
                </div>
            </div>
            <div className="text-center">
                <p> &copy; Copyright {(new Date()).getFullYear()} All Rights Reserved Thohanur Rahman</p>
            </div>
        </footer>
    );
};

export default Footer;