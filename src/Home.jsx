import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
                
                           
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={require('./img/2.jpg')} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>Welcome to eCoding blog.</h5>
                                            <p>We will provide you info about all the techs and codings..</p>
                                            <button type="button" className="btn btn-success">eCoder</button>
                                            <button type="button" className="btn btn-danger">TechInfo</button>
                                            <button type="button" className="btn btn-warning">Web development</button>
                                        </div>
                                    </div>
                                    </div>
                            <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="container my-4">
                                <div className="row mb-2">
                                    <div className="col-md-6">
                                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                            <div className="col p-4 d-flex flex-column position-static">
                                                <strong className="d-inline-block mb-2 text-primary">Web Design</strong>
                                                <h3 className="mb-0">Learn Web development</h3>
                                                <div className="mb-1 text-muted">June30</div>
                                                <p className="card-text mb-auto">This is a simple blog to give you a brief idea about web development.<br/>What? Where? How?</p>
                                                <Link to="" className="stretched-link">Continue reading</Link>
                                            </div>
                                            <div className="col-auto d-none d-lg-block">
                                                <img className="bd-placeholder-img" width="200" height="250" src={require('./img/t2.jpg')} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                            <div className="col p-4 d-flex flex-column position-static">
                                                <strong className="d-inline-block mb-2 text-success">Coding</strong>
                                                <h3 className="mb-0">Coding platforms</h3>
                                                <div className="mb-1 text-muted">July01</div>
                                                <p className="mb-auto">This Blog is for those who wants to start coding.<br></br>Which language? Where?</p>
                                                <a href="" className="stretched-link">Continue reading</a>
                                            </div>
                                            <div className="col-auto d-none d-lg-block">
                                                <img className="bd-placeholder-img" width="200" height="250" src={require('./img/t4.jpg')} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    );
};



export default Home;