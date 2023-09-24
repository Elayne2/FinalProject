import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (<>
    <Navbar />
    <div className="container my-3 py-3">
      <h1 className="text-center">About Us</h1>
      <hr />
      <p className="lead text-center">
      The latest trends speak clearly: vintage is a must-have!

            Buying second-hand clothes allows you to find unique items at very affordable prices, making your look exclusive and on trend.
             Also, buying second-hand clothes helps to reduce the environmental impact of the fashion industry, one of the world’s most polluting industries.
      </p>

      <h2 className="text-center py-4">Our Products</h2>
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-3 px-3">
          <div className="card h-100">
            <img className="card-img-top img-fluid" src="Client/public/assets/products/kidpic.jpg.jpeg" alt="" height={160} />
            <div className="card-body">
              <h5 className="card-title text-center">For Kids</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3 px-3">
          <div className="card h-100">
            <img className="card-img-top img-fluid" src="Client/public/assets/products/menpic.jpg.jpeg" alt="" height={160} />
            <div className="card-body">
              <h5 className="card-title text-center">For Men</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-3 px-3">
          <div className="card h-100">
            <img className="card-img-top img-fluid" src="Client/public/assets/products/womenpic.jpg.jpeg" alt="" height={160} />
            <div className="card-body">
              <h5 className="card-title text-center">For Women</h5>
            </div>
          </div>
        </div>
        
    <Footer />
  </> 
  )}
export default Products;