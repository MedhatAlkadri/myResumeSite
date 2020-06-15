import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">
            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="eight columns flex-container">
               <div className="flexslider">
                  <ul className="slides">
                  <li>
                     <blockquote>
                          <img  src='images/portfolio/testimonials/1.jpg' alt="" />
                     </blockquote>
                  </li>

                     <li>
                        <blockquote>
                             <img  src='images/portfolio/testimonials/2.jpg' alt="" />
                        </blockquote>
                     </li>
                     <li>
                        <blockquote>
                             <img  src='images/portfolio/testimonials/3.jpg' alt="" />
                        </blockquote>
                     </li>
                     <li>
                        <blockquote>
                             <img  src='images/portfolio/testimonials/4.jpg' alt="" />
                        </blockquote>
                     </li>
                     <li>
                        <blockquote>
                             <img  src='images/portfolio/testimonials/5.jpg' alt="" />
                        </blockquote>
                     </li>
                     <li>
                        <blockquote>
                             <img  src='images/portfolio/testimonials/6.jpg' alt="" />
                        </blockquote>
                     </li>
                     <li>
                        <blockquote>
                             <img  src='images/portfolio/testimonials/7.jpg' alt="" />
                        </blockquote>
                     </li>
                     <li>
                        <blockquote>
                             <img  src='images/portfolio/testimonials/8.jpg' alt="" />
                        </blockquote>
                     </li>
                     <li>
                        <blockquote>
                             <img  src='images/portfolio/testimonials/9.jpg' alt="" />
                        </blockquote>
                     </li>
                     <li>
                        <blockquote>
                             <img  src='images/portfolio/testimonials/10.jpg' alt="" />
                        </blockquote>
                     </li>
                     </ul>
               </div>
            </div>
         </div>
       </div>
   </section>
    );
  }
}

export default Testimonials;
