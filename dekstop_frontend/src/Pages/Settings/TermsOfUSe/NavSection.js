import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';
export default function NavSection() {
  const {isActive, setIsActive}=useState(false);
  const handleClick=(e)=>{
    e.preventDefault();
    setIsActive(current=>!current)
  }
  return (
    <div>
      <div className="container--head">Legal</div>
      <ul className="nav--section">
                      
        <li onClick={handleClick} style={{backgroundColor:isActive? "#EDEDED":""}}>
                          <Link to="/terms">Terms of Use</Link>
                        
        </li>
                      
        <li>
                          <Link to="/privacy">Privacy Policy</Link>
                        
        </li>
                    
      </ul>
    </div>
  );
}
