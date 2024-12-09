import React from "react";
import { Card, Image } from "react-bootstrap";
import "../css/product.css";

function Product() {
  return (
    <div className="container-1">
      <h1>Products</h1>
      <div className="product-container">
        <Card className="card">
          <Image src="/img/1.1.png" alt="Image 1" />
          <h5>Website Custom</h5>
          <h6>Developing specially designed and attractive websites according to client needs.</h6>
        </Card>
        <Card className="card">
          <Image src="/img/1.2.png" alt="Image 2" />
          <h5>Platform  E-Commerce</h5>
          <h6>Complete solution for online stores, from design to inventory management.</h6>
        </Card>
        <Card className="card">
          <Image src="/img/1.3.png" alt="Image 3" />
          <h5>Web App</h5>
          <h6>Creating web-based applications for business needs such as management dashboards.</h6>
        </Card>
        <Card className="card">
          <Image src="/img/1.4.png" alt="Image 4" />
          <h5>Landing Page</h5>
          <h6>Creating landing pages for product promotions, events or marketing campaigns.</h6>
        </Card>
        <Card className="card">
          <Image src="/img/1.5.png" alt="Image 5" />
          <h5>Maintenance Package</h5>
          <h6>Continuous service to ensure client websites remain optimal.</h6>
        </Card>
        <Card className="card">
          <Image src="/img/1.6.png" alt="Image 5" />
          <h5>AI integration</h5>
          <h6>Intelligent chatbots and for efficiency and business insight.</h6>
        </Card>
        <Card className="card">
          <Image src="/img/1.7.png" alt="Image 5" />
          <h5>Redesign</h5>
          <h6>Transforming old websites with modern design and technology.</h6>
        </Card>
      </div>
    </div>
  );
}

export default Product;