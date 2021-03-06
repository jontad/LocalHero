import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { config } from "../config"

import BackButton from '../components/BackButton.js';
import TextButton from "../components/TextButton.js";
import LinkWrapper from "../components/LinkWrapper.js";
import EventItemListView from "../components/EventItemListView.js";

import "../css/util.css";
import "../css/main.css";

class ProfilePage extends Component {

    constructor(props) {
    	super(props);

    	this.state = {
    	    user: this.props.activeUser,
    	    errands: [],
    	    fetchErrandsSuccess: null,
    	};

    	this.getUserErrands = this.getUserErrands.bind(this);
    }

    logoutUser = () => {
    	axios.post(config.baseUrl + "/logout", {
    	    username: this.state.user.username
    	}).then((response) => {
    	    console.log("Recieved message succesfully!");
    	});
    	localStorage.clear();
    }

    getUserErrands = () => {
    	axios
    	    .post(config.baseUrl + "/getUserErrand", {
        		username: this.state.user.username
    	    })
    	    .then((response) => {
        		this.setState({
        		    fetchErrandsSuccess: true,
        		    errands: response.data["errands"],
        		});
    	    })
    	    .catch((error) => {
        		console.log("You have no errands!", error);
        		this.setState({ fetchErrandsSuccess: false });
    	    });
    	this.getUserErrandsTimeout = setTimeout(this.getUserErrands, 2000);
    };


    checkAuth = async () => {
    	await axios.post(config.baseUrl + "/checkAuth", {
    	    accessToken: this.props.activeUser.accessToken,
    	})
      .then((response) => {
    	    if(response.data.error === undefined){
        		console.log("You are authorized!");
    	    } else {
        		window.location.href = "/" ;
    	    }
    	})
      .catch((error) => {
    	    console.log(error);
    	});
    }
    componentDidMount() {
    	console.log("---------- PROFILEPAGE.JS DID MOUNT ----------------");
    	this.checkAuth();
    	this.getUserErrands();
    }

    componentWillUnmount() {
    	console.log("---------- PROFILEPAGE.JS WILL UNMOUNT ----------------");
    	clearTimeout(this.getUserErrandsTimeout);
    }

    renderBackButton = (link, text) => {
        return <LinkWrapper to={link}>
                  <ButtonWrapper>{text}</ButtonWrapper>
              </LinkWrapper>
    };


  render() {
    return (
          <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100">
                <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                  <span className="login100-form-title">
                    <BackButton
                        text="Home"
                        link="/home"
                    />
                    <div>
                      {this.renderBackButton("/settings", "Settings")}
                    </div>
                    {this.state.user.name}
                  </span>

                  <div className="wrap-input100 validate-input m-b-16">
                    <ProfileInfoWrapper>

                      <StyledText>
                        <Descriptor>
                          Postal Area:
                        </Descriptor>
                        <Info>
                          {this.state.user.areaID}
                        </Info>
                        </StyledText>

                        <StyledText>
                          <Descriptor>
                            VirtuePoints:
                          </Descriptor>
                          <Info>
                            {this.state.user.virtuePoints}
                          </Info>
                        </StyledText>

                        <StyledDescription>
                          {this.state.user.description}
                        </StyledDescription>

                      </ProfileInfoWrapper>

                    </div>
                  </form>

                  <LinkWrapper to="/">
                    <TextButton onClick={() => this.logoutUser()} description="LOG OUT" />
                  </LinkWrapper>

                  <StyledTextHeadLine>
                    MY ERRANDS
                  </StyledTextHeadLine>
                  <EventItemListView
                    errands={this.state.errands}
                    emptyStateMessage="You currently have no errands"
                  />

                </div>
              </div>
            </div>
    );
  }
}

const ProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 10px;
  flex-direction: column;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
  margin-top: 0.2em;
  font-size: 18px;
`;

const Descriptor = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  padding-right: 10px;
`;

const Info = styled.div`

`;

const StyledDescription = styled.div`
  margin: 0.2em;
`;

const StyledTextHeadLine = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  padding-bottom: 20px;
`;


const ButtonWrapper = styled.button`
    position: absolute;
    top: 20px;
    right: 16px;

    font-family: JosefinSans-Bold;

    &:hover {
        color: white;
    }
`;


export default ProfilePage;
