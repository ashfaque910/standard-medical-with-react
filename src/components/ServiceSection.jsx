import React from "react";

function ServiceSection() {
  return (
    
    <div>
      <section id="services" className="container-fluid my-5 service-content">
        <h2 className="text-center mb-5 display-4">Our Services</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card mx-2">
              <img
                src={"./images/consultation.jpg"}
                className="card-img-top"
                alt="Service Image"
              />
              <div className="card-body">
                <h5 className="card-title ">Medical Consultation</h5>
                <p className="card-text">
                  Our experienced doctors provide comprehensive medical
                  consultations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card mx-2">
              <img
                src={"./images/emergency_0.webp"}
                className="card-img-top"
                alt="Service Image"
              />
              <div className="card-body">
                <h5 className="card-title-2 ">Emergency Care</h5>
                <p className="card-text mb-2">
                  We are available 24/7 for emergency medical care.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card mx-2">
              <img
                src={"./images/LUH-NICU-DrPatient-004_1.png"}
                className="card-img-top"
                alt="Service Image"
              />
              <div className="card-body">
                <h5 className="card-title ">Specialized Treatments</h5>
                <p className="card-text">
                  Offering specialized treatments for various medical
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSection;
