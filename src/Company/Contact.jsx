import React from "react";
import { Card, Image, Form, Button } from "react-bootstrap";
import { Typography } from "@mui/material";
import "../css/contact.css";

function Contact() {
  return (
    <div className="container-contact">
      <div className="text-contact">
        <h2>Contact Us</h2>
      </div>
      <div className="card-contact">
        <Card className="card-horizontal">
          <div className="card-content">
            <Image src="/img/telephone.png" alt="Telephone" />
            <Typography>0821-3347-9908</Typography>
          </div>
        </Card>
        <Card className="card-horizontal">
          <div className="card-content">
            <Image src="/img/gmail.png" alt="Gmail" />
            <Typography>codevo@gmail.com</Typography>
          </div>
        </Card>
        <Card className="card-horizontal">
          <div className="card-content">
            <Image src="/img/instagram.png" alt="Instagram" />
            <Typography>@codevo.co</Typography>
          </div>
        </Card>
      </div>

      <div className="map-form-section">
        <div className="map-section">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Jakarta&z=15&output=embed"
            width="100%"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="email-form-section">
          <Card className="email-form-card">
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Write your message" />
              </Form.Group>

              <Button variant="primary" type="submit" className="submit-btn">
                Send Message
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Contact;
