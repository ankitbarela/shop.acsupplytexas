import React from 'react'
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className="header-box">
                <div class="dropdown">
                    <button class="dropdown-Button dropdown-toggle" type="button">
                        Equipment
                      </button>
                </div>
                <div class="dropdown">
                    <button class="dropdown-Button dropdown-toggle" type="button">
                        Parts
                      </button>
                </div>
                <div class="dropdown">
                    <button class="dropdown-Button dropdown-toggle" type="button">
                        Indoor Air Quality
                      </button>
                </div>
                <div class="dropdown">
                    <button class="dropdown-Button dropdown-toggle" type="button">
                       Controls
                      </button>
                </div>
                <div class="dropdown">
                    <button class="dropdown-Button dropdown-toggle" type="button">
                        DuctWork
                      </button>
                </div>
                <div class="dropdown">
                    <button class="dropdown-Button dropdown-toggle" type="button">
                        Grilles And Diffusers
                      </button>
                </div>
                <div class="dropdown">
                    <button class="dropdown-Button dropdown-toggle" type="button">
                        Brands
                      </button>
                </div>
                <div className="dropdown">
                    <button class="dropdown-Button" type="button">About Us</button>
                </div>
                <div className="dropdown">
                    <button class="dropdown-Button" type="button">Quick Order Form</button>
                </div>
            </div>
    </div>
    )
}
