import React from 'react';

import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar.js';
import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js'
import NavBar from '../components/NavBar.js';
import ArrowButton from '../components/ConfirmButton.js'; //TODO Fix Arrow button

class ResidenceInfo extends React.Component{
      state = {
        address: '',
        area: '',
        city: '',
      }

      saveInput = e => {
        this.setState({ [e.target.name]: e.target.value })
      }

      storeSession = e => {
        window.sessionStorage.setItem("stateResidenceInfo", JSON.stringify(this.state));
      }

    render(){
      console.log(this.state)
        return (
          <div>
            <NavBar />

            <SectionTitle text = "Residence Info" />

            <form>
              <SectionTitle text = "Address" titleType="Variant" />
              <TextInput
              height="24px"
              name="address"
              value={this.address}
              saveInput={this.saveInput}
              />

              <SectionTitle text = "Area Code" titleType="Variant"/>
              <TextInput
              type="number"
              pattern="[0-9]"
              height="24px"
              name="area"
              value={this.area}
              saveInput={this.saveInput}
              />

              <SectionTitle text="City" titletype="Variant"/>
              <TextInput
              height="24px"
              name="city"
              value={this.city}
              saveInput={this.saveInput}
              />

            </form>

            <Link to="insert-image">
              <ConfirmButton onClickFunc={this.storeSession}/>
            </Link>
          </div>
        );
    }
}

export default ResidenceInfo;
