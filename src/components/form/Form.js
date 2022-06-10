import React, { useRef, useState } from "react";
import Print from "../print/Print";

const Form = ({ user, setUser }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [displayHide, setDisplayHide] = useState("display");
  const formEl = useRef(null);

  const handleChange = (e) => {
    console.log(e.target);
    const { placeholder, value } = e.target;
    setUser({ ...user, [placeholder]: value });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(!isSubmit);
    setDisplayHide(() => (isSubmit ? "display" : "hide"));
  };

  const handleClear =()=>{
    
  }

  return (
    <>
      <form onSubmit={handleSubmit} ref={formEl}>
        <input
          type="Text"
          placeholder="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
        <input
          type="Text"
          placeholder="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="age"
          value={user.age}
          onChange={handleChange}
        />
        <input type="submit" value={displayHide} />
      </form>

      <button
        onClick={() => {
          setUser({'firstName':"",'lastName':""})
          var list = formEl.current.children;
          for (let item of list) {
            if (item.type != "submit") {
              item.value = "";
            }
          }
        }}
      >
        clear all values
      </button>

      {isSubmit ? (
        <Print user={user} />
      ) : (
        <div>
          <p>click the submit button to display/hide the input values</p>
        </div>
      )}
    </>
  );
};

export default Form;
