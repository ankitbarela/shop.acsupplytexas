import React from 'react'
import './LogoHeader.css';
import ACLogo from './ACLogo.png';
import LogoFb from './LogoFb.png';


export default function LogoHeader() {
    return (
        <div>
                <div className="logo-header">
                    <div className='free-delivary'>
                        Free Delivary to your locations 
                    </div>
                    <div class="dropdown">
                            <button class="dropdown-Button dropdown-toggle" type="button">
                                Parts
                            </button>
                    </div>
                </div>
                <div className="main-logo-header">
                    <div className="main-logo">
                       <img src={ACLogo} alt={ACLogo} />
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search..."/>
                        <input type="text" value={'go'} className='go-search' />
                    </div>
                    <div className="right-content">
                      <ul>
                          <li> <img src={LogoFb} alt={LogoFb} /></li>
                      </ul>
                      <div className="call-text">
                          call or text any  location 151555564
                      </div>
                    </div>
                </div>
        </div>
    )
}
