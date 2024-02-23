import React, { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AppointmentSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({ id: users[users.length - 1].id + 1, name, email, number })
    );
    navigate('/appointmentdisplay')
  };
  return (
    <section className="container-fluid my-5 appoint-content">
      <h2 className="display-4 appoint-head text-center mb-4">
        Make an appointment
      </h2>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group p-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group p-3">
              <label htmlFor="number">Mobile No</label>
              <input
                type="number"
                className="form-control"
                id="number"
                placeholder="Your Mobile number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <button type="submit" className="m-3 btn btn-warning">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AppointmentSection;
