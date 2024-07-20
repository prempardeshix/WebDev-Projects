// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    pincode: "",
    comments: true,
    candidates: true,
    offers: true,
    notify: "",
  });

  // console.log(formData);
  function changeHandler(event) {
    const { type, name, checked, value } = event.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="lol flex justify-center flex-col items-center w-[100%]"
      >
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          placeholder="First Name"
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          placeholder="Last Name"
          onChange={changeHandler}
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="Email"
          onChange={changeHandler}
        />
        <br />
        <select name="contry" id="country" onChange={changeHandler}>
          <option value="India">India</option>
          <option value="Russia">Russia</option>
          <option value="Mexico">Mexico</option>
          <option value="Japan">Japan</option>
          <option value="America">America</option>
        </select>
        <br />
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          placeholder="Address"
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          placeholder="City"
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          placeholder="State"
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          name="pincode"
          id="pincode"
          value={formData.pincode}
          placeholder="Pincode"
          onChange={changeHandler}
        />
        <br />
        <div>
          <input
            type="checkbox"
            name="comments"
            id="comments"
            checked={formData.comments}
            onChange={changeHandler}
          />
          <label htmlFor="comments">Comments</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="candidates"
            id="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
          />
          <label htmlFor="candidates">Candidates</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="offers"
            id="offers"
            checked={formData.offers}
            onChange={changeHandler}
          />
          <label htmlFor="offers">Offers</label>
        </div>
        <fieldset className="flex flex-col justify-center items-center">
          <legend>Push Notifications</legend>
          <div>
            <input
              type="radio"
              name="notify"
              value="All"
              id="All"
              onChange={changeHandler}
              checked={formData.notify === "All"}
            />
            <label htmlFor="All">All Notifications</label>
          </div>
          <div>
            <input
              type="radio"
              name="notify"
              value="Same"
              id="Same"
              onChange={changeHandler}
              checked={formData.notify === "Same"}
            />
            <label htmlFor="Same">Same as Email</label>
          </div>
          <div>
            <input
              type="radio"
              name="notify"
              value="None"
              id="None"
              onChange={changeHandler}
              checked={formData.notify === "None"}
            />
            <label htmlFor="None">No push notifications</label>
          </div>
        </fieldset>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
