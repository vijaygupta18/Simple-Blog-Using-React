import React, { createContext, useEffect, useState } from 'react';


const About = () => {
  return (
    <>
      <div classNameName="container-fluid nav_bg">
        <div classNameName="row">
          <div classNameName="col-10 mx-auto"></div>
          <div className="container">
            <br></br>
            <br></br>
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">We Focus on Latest Technology. <span className="text-muted">Techs  you need.</span></h2>
                <p className="lead">Technology is the source of many environmental and social problems, but it is also key to addressing environmental degradation, climate change, food scarcity, waste management and a host of other modern challenges.
                Focus on the digital technology that will transform your business
                It’s about not being disrupted and not disappearing from the marketplace. We will provide
                you all the tech related stuff on our blog
    <br></br>
    Technology has also brought about efficiency and quality in the manufacturing sector. Technological advancement has reduced the risk. Development is closely related with technology and the stage of development the human being has arrived could have been possible without the advancement in technology.</p>
              </div>
              <div className="col-md-5">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" src={require('./img/t4.jpg')} alt="" />
            
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">We focus on coding. <span className="text-muted">Coding related problems.</span></h2>
                <p className="lead">One of the main problems with coding problems is that there are hundreds and thousands of coding problems on interviews, there are even sites like LeetCode, HackerRank, Codewars, Topcoder, freeCodeCamp, HackerEarth which train programmers for coding interviews with lots of tough questions, which sometimes just overwhelms a beginner looking for a job.
                I believe in simplicity and the 10% of effort which produce 90% of results and that’s why I have collected top 100 coding problems which are not too tough and also frequently asked on real interviews.
                Solving these problems not only give you confidence but also help you to recognize some of the most common algorithmic patterns which will also help you to solve some unseen problems on real interviews.
            Here we will help you to find the best among all those platforms.</p>
              </div>
              <div className="col-md-5 order-md-1">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={require('./img/t1.jpg')}  alt="" /> </div>
            </div>
          </div>
          <div className="container">
            <br></br>
            <br></br>
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">We Focus on Latest Technology. <span className="text-muted">Techs  you need.</span></h2>
                <p className="lead">Technology is the source of many environmental and social problems, but it is also key to addressing environmental degradation, climate change, food scarcity, waste management and a host of other modern challenges.
                Focus on the digital technology that will transform your business
                It’s about not being disrupted and not disappearing from the marketplace. We will provide
                you all the tech related stuff on our blog
    <br></br>
    Technology has also brought about efficiency and quality in the manufacturing sector. Technological advancement has reduced the risk. Development is closely related with technology and the stage of development the human being has arrived could have been possible without the advancement in technology.</p>
              </div>
              <div className="col-md-5">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" src={require('./img/t4.jpg')}  alt="" />
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading">We focus on coding. <span className="text-muted">Coding related problems.</span></h2>
                <p className="lead">One of the main problems with coding problems is that there are hundreds and thousands of coding problems on interviews, there are even sites like LeetCode, HackerRank, Codewars, Topcoder, freeCodeCamp, HackerEarth which train programmers for coding interviews with lots of tough questions, which sometimes just overwhelms a beginner looking for a job.
                I believe in simplicity and the 10% of effort which produce 90% of results and that’s why I have collected top 100 coding problems which are not too tough and also frequently asked on real interviews.
                Solving these problems not only give you confidence but also help you to recognize some of the most common algorithmic patterns which will also help you to solve some unseen problems on real interviews.
            Here we will help you to find the best among all those platforms.</p>
              </div>
              <div className="col-md-5 order-md-1">
                <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={require('./img/t4.jpg')}  alt="" /> </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};



export default About;