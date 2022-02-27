import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <h1 className="footer__title">NT - Animals</h1>
            <div className="footer text-md-left">
                <div className="row text-md-left mt-3 pb-3">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4">ABOUT</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus turpis vel cursus cursus. Aenean mollis tempor libero elementum laoreet. Quisque varius, mi in bibendum porttitor, purus leo tincidunt sapien, ac lobortis ipsum eros quis massa. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 ">Categories</h6>
                        <p>
                            <a href="#!">Mammals</a>
                        </p>
                        <p>
                            <a href="#!">Reptiles</a>
                        </p>
                        <p>
                            <a href="#!">Fish</a>
                        </p>
                        <p>
                            <a href="#!">Birds</a>
                        </p>
                        <p>
                            <a href="#!">Amphibians</a>
                        </p>
                        <p>
                            <a href="#!">Insects</a>
                        </p>
                        <p>
                            <a href="#!">Invertebrates</a>
                        </p>
                    </div>

                    <hr className="w-100 clearfix d-md-none" />

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4">Contact</h6>
                        <p>
                            <i className="fa fa-envelope"></i>
                            <span style={{marginLeft:"20px"}}>discovery@gmail.com</span> 
                        </p>
                        <p>
                            <i className="fa fa-phone"></i>
                            <span style={{marginLeft:"20px"}}>+84 123456789</span> 
                        </p>
                    </div>
                </div>
                <hr />

                <div className="row text-center d-flex align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-md-left">
                            Created by:
                            <strong>
                                &nbsp;Nguyen Minh Nha - Ngo Tan Thieu
                            </strong>
                        </p>
                    </div>

                    <div className="col-md-5 col-lg-4 ml-lg-0">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a
                                        href="#!"
                                        className="btn-floating btn-sm mx-1"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="#!"
                                        className="btn-floating btn-sm mx-1"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="#!"
                                        className="btn-floating btn-sm mx-1"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;