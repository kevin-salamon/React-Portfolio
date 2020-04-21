import React from 'react';
import '../style.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
            <div className="row">
                <div className="col-sm-12 footer-main text-center" style={{marginTop:"2%"}}>
                Contact
                </div>
            </div>
            <div className="row footer-sub">
                <div className="col-sm-4">
                <a href="https://www.linkedin.com/in/kevin-salamon/" target="#"><p className="footer-content">LinkedIn</p></a>
                </div>
                <div className="col-sm-4">
                <a href="https://github.com/kevin-salamon" target="#"><p className="footer-content">GitHub</p></a>
                </div>
                <div className="col-sm-4">
                <p className="footer-content"><u>theksalamon@gmail.com</u></p>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;