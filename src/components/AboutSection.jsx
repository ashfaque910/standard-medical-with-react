import React from "react";

function AboutSection() {
  return (
    <div>
      <section id="about" className="bg-light py-5">
        <div className="container-fluid about-wrap">
          <h2 className="display-4 text-center mb-4">About Us</h2>
          <p className="lead text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Praesent in orci et velit fermentum volutpat nec a urna.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur quibusdam molestiae quae dignissimos. Tempore,
            repudiandae blanditiis? Ipsum eum vitae, eos id libero unde aut
            autem cumque, minima, perspiciatis enim.
          </p>
          <p className="text-center">
            <a className="btn btn-success" href="#" role="button">
              Read more
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
