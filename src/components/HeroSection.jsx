import React from "react";

function HeroSection() {
  return (
    <div>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container-fluid jumbotron-wrap">
          <div className="jumbo-content">
            <h1 className="display-4">Your Health, Our Priority</h1>
            <p className="lead">
              Providing quality medical care for a healthier community.
            </p>
            <a className="btn btn-warning btn-lg" href="#" role="button">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
