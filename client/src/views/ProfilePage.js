import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { config } from "../config"

import NavBar from "../components/NavBar.js";
import TextButton from "../components/TextButton.js";
import LinkWrapper from "../components/LinkWrapper.js";
import EventItemListView from "../components/EventItemListView.js";

class ProfilePage extends Component {

    constructor(props) {
	super(props);

	this.state = {
	    user: this.props.activeUser,
	    errands: [],
	    fetchErrandsSuccess: null,
	    profilePic: "https://image.flaticon.com/icons/png/512/37/37943.png",
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
	}).then((response) => {
	    if(response.data.error === undefined){
		console.log("You are authorized!");
	    }
	    else{
		window.location.href = "/" ;
	    }
	}).catch((error) => {
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

    render() {
	return (
		<div>
		<NavBar leftButtonType="back" leftButtonLink="/home" />

		<ProfileInfoWrapper>
		<StyledImage src={this.state.profilePic} />
		<StyledText>
		<Descriptor>
		Name
            </Descriptor>
		<Info>
		{this.state.user.name} 
            </Info>
		</StyledText>
		<StyledText>
		<Descriptor>
		Area 
            </Descriptor>
		<Info>
		{this.state.user.areaID} 
            </Info>
		</StyledText>
		<StyledText>
		<Descriptor>
		E-mail 
            </Descriptor>
		<Info>
		{this.state.user.email} 
            </Info>
		</StyledText>
		</ProfileInfoWrapper>

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
  margin: 0.5em;
  font-size: 18px;
`;

const Descriptor = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  padding-right: 10px;
`;

const Info = styled.div`

`;

const StyledTextHeadLine = styled.div`
  display: flex; 
  justify-content: center;
  font-size: 18px;
  padding-bottom: 20px;
`;

const StyledImage = styled.img`
  margin: 2em;
  width: 7em;
  height: 7em;
`;

export default ProfilePage;
