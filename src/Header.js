import React from "react";
import logo from "./images/logo.svg";
import search from "./images/search.svg";

function Header() {

  let[formData, setFormData] = React.useState({
    location:"",
    guests:""
  })

  function handleChange(event) {
    let{name, value} = event.target;
    setFormData( (prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    } )
  }


  return (
    <header>
      <img src={logo} alt="logo" className="logo" />

      <form className="inputs">
        <input
        type="text"
        name="location"
        className="location"
        placeholder="Helsinki, finland"
        onChange={handleChange}
        value={formData.location}
        />
        <input
        type="text"
        name="guests"
        className="guests"
        placeholder="Add guests"
        onChange={handleChange}
        value={formData.guests}
        />
        <input
        type="text"
        className="search"
        />
        <img src={search} alt="icon" width="24" className="search-icon"/>
      </form>
    </header>
  )
}

export default Header;
