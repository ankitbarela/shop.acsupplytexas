import React from 'react'
import './LandingPage.css';
import AirConditioning from './AirConditioning.png';

export default function LandingPage() {
    return (
        <div>
            <div className="content">
                <div className="contain">
                    <div className="free-system">
                        Duct Free System  
                    </div>
                    <div className="image-box">
                        <div className='image-text'>
                            View Larger Image
                        </div>
                        <div className="ac-img">
                                <img src={AirConditioning} alt={AirConditioning} />
                        </div>
                    </div>
                        <div className="relted-product">
                            <div className="question-text">
                               Not what you are looking for?
                            </div>
                            <div className="bottom-border"></div>
                            <div className="product-button">
                                <button type='button'>
                                    Related Products 
                                </button>
                                <button type='button'>
                                  Related Catagieries
                                </button>
                            </div>
                        </div>
                    <div className="price-box">
                        <div className='new-text'>
                            New LG 22k  Single Zone  Wall Mount  White  HE  Extended  Pipe  
                        </div>
                        <div className="inner-box">
                           <div className="price-text">
                                <div>Price $344.00</div>
                                    <div className="error-text">
                                        your item was not added to the cart  because  of an error
                                    </div>
                           </div>
                           <div className='Quantity-box'>
                               <ul>
                                   <li>Quantity</li>
                                   <li><input type="text" /></li>
                                   <li><button type='button'>Add to Cart    </button></li>
                                   <li>Add to Wishlist</li>
                               </ul>
                           </div>
                        </div>
                    </div>
                    <div className="inner-header">
                        <ul>
                            <li>
                                <div>
                                    Description
                                </div>
                            </li>
                            <li>
                                <div>
                                    Product Summary
                                </div>
                            </li>
                            <li>
                                <div>
                                    Product Specification
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="discription">
                       <div className="heading">
                           Description
                       </div>
                       <div className="bottom-border"></div>
                       <div className="heading-pera">
                       Danny the Champion of the World by Roald Dahl.
                       </div>
                    </div>
                    <div className="product-summary">
                           <div className="heading">
                                Description
                            </div>
                            <div className="bottom-border"></div>
                            <div className="heading-pera">
                            Danny the Champion of the World by Roald Dahl.
                            </div>
                    </div>
                    <div className="product-specification">
                            <div className="specification-text">
                            <div className="heading">
                                Description
                            </div>
                               <div className="bottom-border"></div>
                            <div className="heading-pera">
                                 Danny the Champion of the World by Roald Dahl.
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
