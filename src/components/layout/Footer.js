import React from 'react';
import './footer.css'


const Footer = () => {
    return (
<footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p> Hack Blog : write about tech </p>
                            <p> Life is a journey, let Wayfarer be there with you ever step of the way. Connect with others during your journey! Travel smarter, cheaper, and longer.</p>
                        </div>


                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Contribute</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 footer-copyright">
                                <p class="copyright-text">Copyright &copy; 2019 All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer;
