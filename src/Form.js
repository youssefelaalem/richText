import React, { useState } from "react";

function Form() {
  const [namePerson, setNamePerson] = useState(null);
  const [nameShow, setNameShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameShow(true);
    // setNamePerson(e.target.value)
  };
  return (
    <>
      <form >
        <label for="name">
          Name
          <input
            type="text"
            name="name"
            value={namePerson}
            onChange={ (e)=>setNamePerson(e.target.value)}
            placeholder="Type Your Name"
          />
        </label>
        <button  onClick={handleSubmit}>submit</button>
        {nameShow && (
            <h1>Welcome ya {namePerson}</h1>
        )}
      </form>
    </>
  );
}

export default Form;
