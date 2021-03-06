import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { config } from "../config"

import SectionTitle from '../components/SectionTitle.js';
import TextInput from '../components/TextInput.js';
import DropDownInput from '../components/DropDownInput.js';
import TextButton from '../components/TextButton.js';
import ServerResponse from '../components/ServerResponse.js';
import BackButton from '../components/BackButton.js';

import "../css/util.css";
import "../css/main.css";



class HelpRequest extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: "",
            description: "",
            requester: this.props.activeUser.username,
            type: "DEFAULT",
            number: this.props.activeUser.mobile,
            email: this.props.activeUser.email,

            adress: this.props.activeUser.address,
            areaID: this.props.activeUser.areaID,
            success: null
        }

        this.handleChange = this.handleChange.bind(this);
    }


    /*   EVENT HANDLER   */

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    // server side signature:  async function insertErrand(errandData)
    handlePublish = () => {
        console.log("handlePublish");
        axios.post(config.baseUrl + "/insertErrand", {
            title: this.state.title,
            description: this.state.description,
            requester: this.state.requester,
            type: this.state.type,
            adress: this.state.adress,
            number: this.state.number,
            email: this.state.email,
            areaID: this.state.areaID
        }).then((response) => {
            console.log("Data submitted successfully!", response)
            this.setState({ success: true });
            this.props.history.push("/home")
        }).catch((error) => {
            console.log("Got error while posting data", error);
            this.setState({ success: false });
        });
    }

    renderResponse = () => (
        <ServerResponse
            success={this.state.success}
            successResponse="Your help request was published."
            failResponse="Something went wrong, try again."
        />
    );

       checkAuth = async () => {
	await axios.post(config.baseUrl + "/checkAuth", {
	    accessToken: this.props.activeUser.accessToken,
	}).then((response) => {
	    if(response.data.error === undefined){
		console.log("You are authorized!");
	    }
	    else{
		window.location.href = "/" ;
	    }
	}).catch((error) => {
	    console.log("Error");
	});
    }


    componentDidMount() {
	console.log("---------- HOME.JS DID MOUNT ----------------");
	this.checkAuth();
    };
    
    componentWillUnmount() {
	console.log("---------- HOME.JS WILL UNMOUNT ----------------");
    }
    

    render(){

        let options = [
            {
                text: "Carrying",
                value: "carrying",
            },
            {
                text: "Shopping",
                value: "shopping"
            },
            {
                text: "Repair work",
                value: "repair"
            },
            {
                text: "Social stimuli",
                value: "socialising"
            }
        ]

        return(
            <div>
                <div className="limiter">
                  <div className="container-login100">
                    <div className="wrap-login100">
                      <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                        <span className="login100-form-title">
                        <BackButton
                            text="Home"
                            link="/home"
                        />
                            Help Request
                        </span>

                        <div className="wrap-input100 validate-input m-b-16">
                          <SectionTitle fontSize="14px" paddingTop="1px" text="Name your help request"/>
                          <InputWrapper>
                            <TextInput
                                inputType="text"
                                height="3em"
                                onChange={this.handleChange}
                                value={this.state.title}
                                name="title"
                            />
                          </InputWrapper>
                        </div>

                        <div className="wrap-input100 validate-input m-b-16">
                          <SectionTitle fontSize="14px" text="What do you need help with?"/>
                          <InputWrapper>
                              <DropDownInput
                                  options={options}
                                  onChange={this.handleChange}
                                  value={this.state.type}
                                  name="type"
                              />
                          </InputWrapper>
                        </div>

                        <div className="wrap-input100 validate-input m-b-16">
                          <SectionTitle fontSize="14px" text="Describe more in detail please"/>
                          <InputWrapper>
                              <TextInput
                                  inputType="text"
                                  height="8em"
                                  onChange={this.handleChange}
                                  value={this.state.description}
                                  name="description"
                              />
                          </InputWrapper>
                        </div>

                        <div className="wrap-input100 validate-input m-b-16">
                          <SectionTitle fontSize="14px" text="Phone Number"/>
                          <TextInput
                              inputType="number"
                              height="32px"
                              width="240px"
                              onChange={this.handleChange}
                              value={this.state.number}
                              name="number"
                          />
                        </div>

                        <div className="wrap-input100 validate-input m-b-16">
                          <SectionTitle fontSize="14px" text="E-mail"/>
                          <TextInput
                              inputType="text"
                              height="32px"
                              width="240px"
                              onChange={this.handleChange}
                              value={this.state.email}
                              name="email"
                          />
                        </div>

                      </form>
                      <TextButton onClick={this.handlePublish} description="PUBLISH HELP REQUEST"/>
                      
                    </div>
                  </div>
                </div>

            </div>
        );
    }
}

const InputWrapper = styled.div`
    padding: 5px;
`;

export default HelpRequest;
