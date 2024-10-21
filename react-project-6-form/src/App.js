import React from "react";
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    country : "India",
    streetAddress : "",
    city : "",
    state : "",
    zipCode : "",
    notify : "everything",
    comments : false,
    candidates : false,
    offers : false

  });

  

  function changeHanlder(event){

    const {name, value, checked, type} = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
          [name] : type === "checkbox" ? checked : value
        }
    })
    
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Submited!!!");
    console.log(formData);
  }

  return (
    <div className='formArea'>

      <form action="" className='form' onSubmit={submitHandler}>
        <label htmlFor="firstName">
          First name
        </label>
        <input onChange={changeHanlder}
          type="text"
          placeholder='Yuvraj'
          id="firstName"
          name="firstName"
          value={formData.firstName}
        />

        <label htmlFor="lastName">
          Last name
        </label>
        <input onChange={changeHanlder}
          type="text"
          placeholder='Singh'
          id="lastName"
          name="lastName"
          value={formData.lastName}
        />

        <label htmlFor="email">
          Email
        </label>
        <input onChange={changeHanlder}
          type="text"
          placeholder='yuvraj123@email.com'
          id="email"
          name="email"
          value={formData.email}
        />

        <label htmlFor="country">
          Country
        </label>
        <select 
        name="country" 
        id="country" 
        onChange={changeHanlder}
        value={formData.country}
        >
          <option value="India">India</option>
          <option value="Usa">Usa</option>
          <option value="Australia">Australia</option>
          <option value="Nepal">Nepal</option>
        </select>

        <label htmlFor="streetAddress">
          Street address
        </label>
        <input onChange={changeHanlder}
          type="text"
          placeholder='123 abc, xyz'
          id="streetAddress"
          name="streetAddress"
          value={formData.streetAddress}
        />

        <label htmlFor="city">
          City
        </label>
        <input onChange={changeHanlder}
          type="text"
          placeholder='Mumbai'
          id="city"
          name="city"
          value={formData.city}
        />

        <label htmlFor="state">
          State / Province
        </label>
        <input onChange={changeHanlder}
          type="text"
          placeholder='Maharashtra'
          id="state"
          name="state"
          value={formData.state}
        />

        <label htmlFor="zipCode">
          Zip Code/ Pin Code
        </label>
        <input onChange={changeHanlder}
          type="text"
          placeholder='12345'
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
        />

        <div>
          <p>By Email</p>

          <div>
            <div className='wrap'>
              <input onChange={changeHanlder}
                type="checkbox"
                id="comments"
                name="comments"
                checked = {formData.comments}
              />
              <label htmlFor="comments">
                Comments
              </label>

            </div>
            <p className='comments-msg'>
              Get notified when someones posts a comment on a posting.
            </p>
          </div>

          <div>
            <div className="wrap">
              <input onChange={changeHanlder}
                type="checkbox"
                id="candidates"
                name="candidates"
                checked = {formData.candidates}
              />
              <label htmlFor="candidates">
                Candidates
              </label>

            </div>

            <p className='comments-msg'>
              Get notified when a candidate applies for a job.
            </p>

          </div>

          <div>
            <div className="wrap">
              <input onChange={changeHanlder}
                type="checkbox"
                id="offers"
                name="offers"
                checked = {formData.offers}
              />
              <label htmlFor="offers">
                Offers
              </label>

            </div>
            <p className='comments-msg'>
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </div>
        </div>

        <div>
          <p>Push Notifications </p>
          <p className='noti-msg'>These are delivered via SMS to your mobile phone.</p>
          <div className="wrap">
            <input onChange={changeHanlder}
              type="radio"
              name="notify"
              id="everything"
              value = "everything"
              checked = {formData.notify === "everything"}
            />
            <label htmlFor="everything">
              Everything
            </label>
          </div>
          <div className="wrap">
            <input onChange={changeHanlder}
              type="radio"
              name="notify"
              id="same-as-email"
              value = "same-as-email"
              checked = {formData.notify === "same-as-email"}
            />
            <label htmlFor="same-as-email">
              Same as Email
            </label>
          </div>

          <div className="wrap">
            <input onChange={changeHanlder}
              type="radio"
              name="notify"
              id="no-notify"
              value = "no-notify"
              checked = {formData.notify === "no-notify"}
            />
            <label htmlFor="no-notify">
              No push Notification
            </label>
          </div>
        </div>

        <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
