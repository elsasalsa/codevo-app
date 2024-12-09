import React from "react";
import { Card } from 'primereact/card';
import '../css/service.css';

function Service() {
    return (
        <div className="service-container">
            <div className="service-description">
                <div className="icon-container">
                    <img src="/img/service.png" alt="Service Icon" className="service-icon" />
                </div>
                <h6>
                    Codevo provides complete services to support your business' digital presence.
                    Starting from creating and developing a custom website designed according to your needs.
                    With website maintenance and management services, we ensure your site is always safe,
                    updated and functioning optimally. Additionally, we offer integration of e-commerce and
                    other digital systems, allowing your business to grow with modern and efficient technology solutions.
                </h6>
            </div>

            <Card className="service-card" style={{ flex: '1.3' }}>
                <h3 style={{ marginBottom: "50px", marginTop: "20px" }}>
                    <center>Our <b>five</b> main services</center>
                </h3>
                <ul>
                    <li>Creation and development of custom websites.</li>
                    <li>SEO optimization and website speed.</li>
                    <li>Innovative UI/UX design.</li>
                    <li>Website maintenance and management.</li>
                    <li>Integration of e-commerce and other digital systems.</li>
                </ul>
            </Card>
        </div>
    );
}

export default Service;
