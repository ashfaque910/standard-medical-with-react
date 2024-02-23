import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { editUser } from "./UserReducer";

function AppointmentEditData() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email, number } = existingUser[0];
  const [editname, setName] = useState(name);
  const [editemail, setEmail] = useState(email);
  const [editnumber, setNumber] = useState(number);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(editUser({
        id: id,
        name: editname,
        email: editemail,
        number: editnumber,
      })
    );
    navigate('/appointmentdisplay')
  };

  return (
    <section className="container-fluid my-5 appoint-content">
      <h2 className="display-4 appoint-head text-center mb-4">
        Edit Your Data
      </h2>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleUpdate}>
            <div className="form-group p-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                value={editname}
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
                value={editemail}
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
                value={editnumber}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <button type="submit" className="m-3 btn btn-warning">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AppointmentEditData;
