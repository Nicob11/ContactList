import React from "react";

const FormContact = () => {
    return (
        <>
    <form>
  <div className="mb-3">
    <label forHtml="exampleInputEmail1" className="form-label">Full Name</label>
    <input type="text" className="form-control" aria-describedby="full name"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="enter email"/>
    </div>
  <div className="mb-3">
    <label forHtml="exampleInputPassword1" className="form-label">Phone</label>
    <input type="text" className="form-control" id="exampleInputPassword1" aria-describedby="enter phone"/>
  </div>
  <div className="mb-3">
    <label forHtml="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" id="Enter address"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Create a new contact</button>
</form>
</> )
}
export default FormContact;