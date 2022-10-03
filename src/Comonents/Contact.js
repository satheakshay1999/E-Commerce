import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="fw-bold ">Have some Questions ?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <img src="/Pictures/mail.jpg" alt="Contact image" height="350px" width="450px"></img>
          </div>
          <div className="col-md-6">
            <div class="mb-3">
              <label for="Fullname" class="form-label">
               Full Name 
              </label>
              <input
                type="text"
                class="form-control"
                id="Fullname"
                placeholder="Write Your Name here "
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Write Your Query 
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>

            </div>
            <button className="btn btn-outline-primary w-100 fw-bold btn-1" type="submit" >Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
