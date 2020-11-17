import React, { createContext, useEffect, useState } from 'react';

const Contact=()=>{
    return(
        <>
        <div className="contact">
            <h2>My Details</h2>
          <p>Mobile No: 8565017450</p>
          <p>Email: vijayrauniyar1818@gmail.com</p>
        </div>  
        <div className="container">
            <div id="form-main">
                <div id="form-div">
                    <form className="montform" method="post" name="myemailform"  >
                        <p className="name">
                            <input name="name" type="text" className="feedback-input" required placeholder="Name" id="name" />
                        </p>
                        <p className="email">
                            <input name="email" type="email" required className="feedback-input" id="email" placeholder="Email" />
                        </p>
                        <p className="text">
                            <textarea name="message" className="feedback-input" id="comment" placeholder="Message"></textarea>
                        </p>
                        <div className="submit">
                            <button type="submit" className="button-blue" value="submit">SUBMIT</button>
                            <div className="ease"></div>
                        </div>
                    </form>
                    </div>
            </div>
        </div>
        
        
        </>
    );
};



export default Contact;