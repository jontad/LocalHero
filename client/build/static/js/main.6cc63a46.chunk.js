(this.webpackJsonplocalhero=this.webpackJsonplocalhero||[]).push([[0],{49:function(e,t,n){e.exports=n(78)},54:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(43),i=n.n(o),c=(n(54),n(28)),s=n(19),l=n.n(s),u=n(23),d=n(5),p=n(6),f=n(12),h=n(8),m=n(7),g=n(4),E=n.n(g),x=n(25),v=n(18),b=r.a.createContext(),y=b.Provider,O=b.Consumer,j=function(e){return function(t){return r.a.createElement(O,null,(function(n){return r.a.createElement(e,Object.assign({},t,{activeUser:n}))}))}},w=n(1),S=n(2);function C(){var e=Object(w.a)(["\n\n    color: black; \n\n    text-decoration: none;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"]);return C=function(){return e},e}var U=Object(S.a)(x.b)(C()),I=function(e){return r.a.createElement(U,e)},k=n(10),D=n(11);function T(){var e=Object(w.a)(["\n    display: flex; \n    flex: 1;\n    justify-content: flex-end;\n    padding: 10px;\n"]);return T=function(){return e},e}function z(){var e=Object(w.a)(["\n    display: flex; \n    flex: 1;\n    justify-content: flex-start;\n    padding: 10px;\n    font-size: 12px;\n"]);return z=function(){return e},e}function A(){var e=Object(w.a)(["\n    display: flex; \n    flex: 3;\n    justify-content: center;\n    padding: 10px;\n"]);return A=function(){return e},e}function L(){var e=Object(w.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    font-weight: 800;\n    height: 60px;\n    background: #31D285;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n"]);return L=function(){return e},e}var R=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).renderLeftButton=function(e,t){return"back"===e?r.a.createElement(I,{to:t},r.a.createElement(k.a,{icon:D.b,style:{fontSize:"24px"}})):null},e.renderRightButton=function(e,t){return"profile"===e?r.a.createElement(I,{to:t},r.a.createElement(k.a,{icon:D.j,style:{fontSize:"24px"}})):null},e}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(B,null,this.renderLeftButton(this.props.leftButtonType,this.props.leftButtonLink)),r.a.createElement(P,null,r.a.createElement(I,{to:"/home",style:{color:"black"}},r.a.createElement(k.a,{icon:D.g,style:{fontSize:"32px"}}))),r.a.createElement(F,null,this.renderRightButton(this.props.rightButtonType,this.props.rightButtonLink)))}}]),n}(a.Component),N=S.a.div(L()),P=S.a.div(A()),B=S.a.div(z()),F=S.a.div(T()),M=R,H=n(20);function W(){var e=Object(w.a)(["\n    margin: auto;\n    display: flex;\n\n    justify-content: center;\n    align-items: center;\n    font-size: 1em;\n    font-family: 'Arial', Helvetica, sans-serif;\n\n    height: ",";\n    width: ",";\n    margin-top: ",";\n    margin-bottom: ",";\n\n    background: #31D285;\n    box-shadow: 1px;\n    border-radius: 4px;\n\n\n    &:hover {\n      cursor: pointer;\n\n      text-shadow: 0 0 2em rgba(250,250,250,1);\n      color:#FFFFFF;\n      border-color:#FFFFFF;\n    }\n"]);return W=function(){return e},e}var V=S.a.button(W(),(function(e){return e.height||"42px"}),(function(e){return e.width||"18em"}),(function(e){return e.marginTop||"30px"}),(function(e){return e.marginBottom||"30px"})),G=function(e){return r.a.createElement(V,e,e.description)};function J(){var e=Object(w.a)(["\n    display: flex; \n    justify-content: center; \n    align-items: center; \n    font-size: 14px;\n    color: red;\n"]);return J=function(){return e},e}function q(){var e=Object(w.a)(["\n    display: flex; \n    justify-content: center; \n    align-items: center; \n    font-size: 14px;\n    color: #31D285;\n"]);return q=function(){return e},e}var Y=S.a.div(q()),_=S.a.div(J()),K=function(e){switch(e.success){case!0:return r.a.createElement(Y,null,e.successResponse);case!1:return r.a.createElement(_,null,e.failResponse);default:return null}};function Z(){var e=Object(w.a)(["\n    display: flex; \n    justify-content: center; \n    font-size: 8px;\n    padding-top: 4px;\n"]);return Z=function(){return e},e}function Q(){var e=Object(w.a)(["\n    display: flex; \n    flex: 1;\n    width: 20%;\n    text-align: center;\n    align-items: center; \n    justify-content: center;\n    flex-direction: end;\n    font-weight: 700;\n    font-size: 10px;\n    padding-top: 4px;\n"]);return Q=function(){return e},e}function $(){var e=Object(w.a)(["\n    display: flex;\n    flex: 1; \n    flex-direction: column; \n    align-items: center;\n    justify-content: center;\n"]);return $=function(){return e},e}function X(){var e=Object(w.a)(["\n    font-weight: 500;\n    font-size: 10px;\n    padding: 4px;\n"]);return X=function(){return e},e}function ee(){var e=Object(w.a)(["\n    font-weight: 700;\n    font-size: 12px;\n    padding: 4px;\n"]);return ee=function(){return e},e}function te(){var e=Object(w.a)(["\n    display: flex; \n    flex: 3;\n    flex-direction: column; \n    justify-content: start;\n    padding-left: 8px; \n"]);return te=function(){return e},e}function ne(){var e=Object(w.a)(["\n    font-weight: 800;\n    padding: 4px;\n"]);return ne=function(){return e},e}function ae(){var e=Object(w.a)(["\n    padding: 20px;\n    font-size: 10px;\n"]);return ae=function(){return e},e}function re(){var e=Object(w.a)(["\n   display: flex; \n   flex-direction: column;\n   padding: 12px;\n   margin: 6px;\n"]);return re=function(){return e},e}function oe(){var e=Object(w.a)(["\n    display: flex; \n    flex-direction: row;\n"]);return oe=function(){return e},e}function ie(){var e=Object(w.a)(["\n    display: flex; \n    flex-direction: column;\n    justify-content: space-between;\n    padding: 12px;\n    margin: 6px;\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);\n    border-radius: 3px;\n"]);return ie=function(){return e},e}var ce=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).toggleView=function(){a.setState({fullView:!a.state.fullView})},a.handleMarkAsDone=function(){console.log("handleMarkAsDone"),E.a.post("/updateErrand",{errandID:a.state.errand._id,newErrandData:{status:"done",helper:a.state.errand.helper?a.state.errand.helper:"unknown"}}).then((function(e){console.log("Errand marked as done successfully!",e)})).catch((function(e){console.log("EventItem, handleMarkAsDone: Got error while updating errand",e)}))},a.handleDeleteErrand=function(){console.log("handleDeleteErrand"),E.a.post("/deleteErrand",{errandID:a.state.errand._id}).then((function(e){console.log("Errand deleted successfully",e)})).catch((function(e){console.log("EventItem, handleDeleteErrand: Got error while deleting errand",e)}))},a.renderResponse=function(){return r.a.createElement(K,{success:a.state.success,successResponse:"Thank you for helping out!",failResponse:"Something went wrong, try again."})},a.renderTypeIcon=function(){var e={display:"flex",justifyContent:"center",padding:"4px",fontSize:"18px",color:"#31D285"};switch(a.state.errand.type){case"carrying":return r.a.createElement(k.a,{icon:D.f,style:e});case"shopping":return r.a.createElement(k.a,{icon:D.h,style:e});case"repair":return r.a.createElement(k.a,{icon:D.i,style:e});case"socialising":return r.a.createElement(k.a,{icon:D.k,style:e});default:return r.a.createElement(k.a,{icon:D.d,style:e})}},a.renderStatusMarker=function(){switch(a.state.errand.status){case"waiting":return r.a.createElement("div",{style:{color:"red"}},"WAITING FOR HELP");case"inProgress":return r.a.createElement("div",{style:{color:"#31D285"}},"HELP UNDER WAY!");case"done":return r.a.createElement("div",null,"DONE");default:return r.a.createElement("div",null,"STATUS UNKOWN")}},a.renderActionButton=function(e){return a.props.disableAction?null:a.state.errand.requester===e?r.a.createElement("div",null,"done"!==a.state.errand.status?r.a.createElement(G,{onClick:a.handleMarkAsDone,description:"MARK AS DONE"}):null,r.a.createElement(G,{onClick:a.handleDeleteErrand,description:"DELETE ERRAND"})):"waiting"===a.state.errand.status?r.a.createElement(I,{to:{pathname:"/help-notice",state:{errand:a.state.errand}}},r.a.createElement(G,{description:"I WANT TO HELP"})):null},a.renderExpandedView=function(){return a.state.fullView?r.a.createElement(ue,null,r.a.createElement(de,{onClick:a.toggleView},r.a.createElement(pe,null,"Requested by"),r.a.createElement(me,null,a.state.errand.requester),"waiting"!==a.state.errand.status?r.a.createElement("div",null,r.a.createElement(pe,null,"Helper"),r.a.createElement(me,null,a.state.errand.helper)):null,r.a.createElement(pe,null,"Adress"),r.a.createElement(me,null,a.state.errand.adress),r.a.createElement(pe,null,"Contact"),r.a.createElement(me,null,a.state.errand.contact)),r.a.createElement(O,null,(function(e){return a.renderActionButton(e.username)})),a.renderResponse()):null},a.state={fullView:!1,errand:{},success:null},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setState({fullView:this.props.fullView,errand:this.props.errand})}},{key:"componentWillReceiveProps",value:function(e){console.log("--------- EVENT ITEM WILL RECEIVE PROPS ----------- "),this.setState({errand:e.errand})}},{key:"render",value:function(){return r.a.createElement(se,null,r.a.createElement(le,{onClick:this.toggleView},r.a.createElement(ge,null,this.renderTypeIcon(),r.a.createElement(xe,null,this.state.errand.createdAt)),r.a.createElement(fe,null,r.a.createElement(he,null,this.state.errand.title),r.a.createElement(me,null,this.state.errand.description)),r.a.createElement(Ee,null,this.renderStatusMarker())),this.renderExpandedView())}}]),n}(a.Component),se=S.a.div(ie()),le=S.a.div(oe()),ue=S.a.div(re()),de=S.a.div(ae()),pe=S.a.div(ne()),fe=S.a.div(te()),he=S.a.div(ee()),me=S.a.div(X()),ge=S.a.div($()),Ee=S.a.div(Q()),xe=S.a.div(Z()),ve=ce;var be=function(e){return e.errands.map((function(e,t){return r.a.createElement(ve,{key:t,fullView:!1,errand:e})}))};function ye(){var e=Object(w.a)(["\n  display: flex; \n  justify-content: center; \n  padding: 30px; \n  font-size: 14px; \n  font-style: italic;\n"]);return ye=function(){return e},e}function Oe(){var e=Object(w.a)(["\n  font-size: 14px;\n  text-transform: uppercase;\n  font-weight: ","; \n  opacity: ","\n"]);return Oe=function(){return e},e}function je(){var e=Object(w.a)(["\n  display: flex; \n  justify-content: space-between;\n  padding-top: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);\n"]);return je=function(){return e},e}var we=S.a.div(je()),Se=S.a.button(Oe(),(function(e){return e.active?"700":"500"}),(function(e){return e.active?"1":"0.5"})),Ce=S.a.div(ye()),Ue=function(e){var t=Object(a.useState)("all"),n=Object(H.a)(t,2),o=n[0],i=n[1];return r.a.createElement("div",null,r.a.createElement(we,null,r.a.createElement(Se,{active:"all"===o,onClick:function(){i("all")}},"All"),r.a.createElement(Se,{active:"waiting"===o,onClick:function(){i("waiting")}},"Waiting"),r.a.createElement(Se,{active:"inProgress"===o,onClick:function(){i("inProgress")}},"In progress"),r.a.createElement(Se,{active:"done"===o,onClick:function(){i("done")}},"Done")),0===e.errands.length?r.a.createElement(Ce,null,e.emptyStateMessage):r.a.createElement(be,{errands:"all"===o?e.errands:e.errands.filter((function(e){return e.status===o}))}))};function Ie(){var e=Object(w.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: space-around;\n    text-align: center;\n    align-items: center;\n    margin: 6px;\n    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);\n    border-radius: 3px;\n"]);return Ie=function(){return e},e}function ke(){var e=Object(w.a)(["\n    display: flex;\n    flex-direction: row;\n"]);return ke=function(){return e},e}function De(){var e=Object(w.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding-top: 8px;\n"]);return De=function(){return e},e}function Te(){var e=Object(w.a)(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n"]);return Te=function(){return e},e}var ze=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(Ae,null,r.a.createElement(I,{to:"zipcode"},r.a.createElement(Le,null,r.a.createElement(k.a,{icon:D.e,style:{color:"#31D285",fontSize:"12px",padding:"4px"}}),r.a.createElement("div",{style:{fontSize:"14px",padding:"4px"}},this.props.areaID))),r.a.createElement(Re,null,r.a.createElement(Ne,null,r.a.createElement("p",null,"ACTIVE ERRANDS IN YOUR LOCAL AREA"),r.a.createElement("p",{style:{fontWeight:"700"}},this.props.activeErrands)),r.a.createElement(Ne,null,r.a.createElement("p",null,"ACTIVE USERS IN YOUR LOCAL AREA"),r.a.createElement("p",{style:{fontWeight:"700"}},this.props.activeUsers))))}}]),n}(a.Component),Ae=S.a.div(Te()),Le=S.a.div(De()),Re=S.a.div(ke()),Ne=S.a.div(Ie()),Pe=ze,Be=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).fetchErrands=function(){console.log("fetchErrands"),E.a.post("/getErrandsArea",{areaID:a.state.areaID}).then((function(e){console.log("Errands fetched successfully!",e),a.setState({fetchErrandsSuccess:!0,errands:e.data.errands})})).catch((function(e){console.log("Got error while fetching errands",e),a.setState({fetchErrandsSuccess:!1})})),a.fetchErrandsTimeout=setTimeout(a.fetchErrands,2e3)},a.fetchUsers=function(){console.log("fetchUsers"),E.a.post("/getUsersArea",{areaID:a.state.areaID}).then((function(e){console.log("Users fetched successfully!",e),a.setState({fetchUsersSuccess:!0,users:e.data.users})})).catch((function(e){console.log("Got error while fetching users",e),a.setState({fetchUsersSuccess:!1})})),a.fetchUsersTimeout=setTimeout(a.fetchUsers,2e3)},a.state={areaID:a.props.activeUser.areaID,users:[],errands:[],fetchErrandsSuccess:null,fetchUsersSuccess:null},a.fetchErrands=a.fetchErrands.bind(Object(f.a)(a)),a.fetchUsers=a.fetchUsers.bind(Object(f.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log("---------- HOME.JS DID MOUNT ----------------"),this.fetchErrands(),this.fetchUsers()}},{key:"componentWillUnmount",value:function(){console.log("---------- HOME.JS WILL UNMOUNT ----------------"),clearTimeout(this.fetchErrandsTimeout),clearTimeout(this.fetchUsersTimeout)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{rightButtonType:"profile",rightButtonLink:"/profile-page"}),r.a.createElement(Pe,{activeUsers:this.state.users.length,activeErrands:this.state.errands.filter((function(e){return"done"!==e.status})).length,areaID:this.state.areaID}),r.a.createElement(I,{to:"/help-request"},r.a.createElement(G,{description:"ASK FOR HELP"})),r.a.createElement(Ue,{errands:this.state.errands,emptyStateMessage:"No errands in this area"}))}}]),n}(a.Component);function Fe(){var e=Object(w.a)(["\n    font-size: ",";\n    text-align: center;\n    text-transform: uppercase;\n    padding-top: ",";\n    padding-bottom: 10px;\n"]);return Fe=function(){return e},e}var Me=S.a.div(Fe(),(function(e){return e.fontSize||"18px"}),(function(e){return e.paddingTop||"20px"})),He=function(e){return r.a.createElement(Me,{paddingTop:e.paddingTop,fontSize:e.fontSize},e.text)};function We(){var e=Object(w.a)(["\n    margin: auto;\n    display: flex;\n\n    font-family: 'Helvetica';\n    font-size: 14px;\n\n    border:  1px solid #31D285;\n    box-sizing: border-box;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);\n\n    height: ",";\n    width: ",";\n"]);return We=function(){return e},e}function Ve(){var e=Object(w.a)(["\n    margin: auto;\n    display: flex;\n\n    font-family: 'Helvetica';\n    font-size: 14px;\n\n    border:  1px solid #31D285;\n    box-sizing: border-box;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);\n\n    height: ",";\n    width: ",";\n"]);return Ve=function(){return e},e}var Ge=S.a.textarea(Ve(),(function(e){return e.height||"24em"}),(function(e){return e.width||"18em"})),Je=S.a.input(We(),(function(e){return e.height||"24em"}),(function(e){return e.width||"18em"})),qe=function(e){switch(e.type){case"number":return r.a.createElement(Je,Object.assign({type:"number",autocomplete:"on",height:e.height,width:e.width},e,{min:"0"}));case"password":return r.a.createElement(Je,Object.assign({type:"password",autocomplete:"on",height:e.height,width:e.width},e));default:return r.a.createElement(Ge,Object.assign({type:"text",autocomplete:"on",height:e.height,width:e.width},e))}};function Ye(){var e=Object(w.a)(["\n    margin: auto;\n    display: flex;\n\n    font-family: 'Helvetica';\n\n    font-size: 14px;\n\n    border:  1px solid #31D285;\n    box-sizing: border-box;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);\n\n    height: 4em;\n    width: 18em;\n"]);return Ye=function(){return e},e}var _e=S.a.select(Ye()),Ke=function(e){return r.a.createElement(_e,{onChange:e.onChange,value:e.value},r.a.createElement("option",{value:"DEFAULT",disabled:!0},"Choose here"),e.options.map((function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.text)})))};function Ze(){var e=Object(w.a)(["\n    padding: 5px;\n"]);return Ze=function(){return e},e}var Qe=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleTitleChange=function(e){console.log("handleTitleChange"),a.setState({title:e.target.value})},a.handleTypeChange=function(e){console.log("handleTypeChange: "+e.target.value),a.setState({type:e.target.value})},a.handleDescriptionChange=function(e){console.log("handleDescriptionChange"),a.setState({description:e.target.value})},a.handleAdressChange=function(e){console.log("handleAdressChange"),a.setState({adress:e.target.value})},a.handleContactChange=function(e){console.log("handleContactChange"),a.setState({contact:e.target.value})},a.handlePublish=function(){console.log("handlePublish"),E.a.post("/insertErrand",{title:a.state.title,description:a.state.description,requester:a.state.requester,type:a.state.type,adress:a.state.adress,contact:a.state.contact,areaID:a.state.areaID}).then((function(e){console.log("Data submitted successfully!",e),a.setState({success:!0}),a.props.history.push("/home")})).catch((function(e){console.log("Got error while posting data",e),a.setState({success:!1})}))},a.renderResponse=function(){return r.a.createElement(K,{success:a.state.success,successResponse:"Your help request was published.",failResponse:"Something went wrong, try again."})},a.state={title:"",description:"",requester:a.props.activeUser.username,type:"DEFAULT",adress:"",contact:"",areaID:a.props.activeUser.areaID,success:null},a.handleTitleChange=a.handleTitleChange.bind(Object(f.a)(a)),a.handleTypeChange=a.handleTypeChange.bind(Object(f.a)(a)),a.handleDescriptionChange=a.handleDescriptionChange.bind(Object(f.a)(a)),a.handleAdressChange=a.handleAdressChange.bind(Object(f.a)(a)),a.handleContactChange=a.handleContactChange.bind(Object(f.a)(a)),a.handlePublish=a.handlePublish.bind(Object(f.a)(a)),a}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{leftButtonType:"back",leftButtonLink:"/home"}),r.a.createElement(He,{fontSize:"14px",text:"Name your help request"}),r.a.createElement($e,null,r.a.createElement(qe,{type:"text",height:"3em",onChange:this.handleTitleChange,value:this.state.title})),r.a.createElement(He,{fontSize:"14px",text:"What do you need help with?"}),r.a.createElement($e,null,r.a.createElement(Ke,{options:[{text:"Carrying",value:"carrying"},{text:"Shopping",value:"shopping"},{text:"Repair work",value:"repair"},{text:"Social stimuli",value:"socialising"}],onChange:this.handleTypeChange,value:this.state.type})),r.a.createElement(He,{fontSize:"14px",text:"Describe more in detail please"}),r.a.createElement($e,null,r.a.createElement(qe,{type:"text",height:"8em",onChange:this.handleDescriptionChange,value:this.state.description})),r.a.createElement(He,{fontSize:"14px",text:"What is the adress of the errand?"}),r.a.createElement($e,null,r.a.createElement(qe,{type:"text",height:"3em",onChange:this.handleAdressChange,value:this.state.adress})),r.a.createElement(He,{fontSize:"14px",text:"Contact details"}),r.a.createElement($e,null,r.a.createElement(qe,{type:"text",height:"3em",onChange:this.handleContactChange,value:this.state.contact})),r.a.createElement(G,{onClick:this.handlePublish,description:"PUBLISH HELP REQUEST"}),this.renderResponse())}}]),n}(a.Component),$e=S.a.div(Ze()),Xe=Qe,et=function(e){var t=Object(a.useState)(null),n=Object(H.a)(t,2),o=n[0],i=n[1],c=e.location.state.errand;return r.a.createElement("div",null,r.a.createElement(M,{leftButtonType:"back",leftButtonLink:"/home"}),r.a.createElement(He,{text:"ERRAND INFORMATION",paddingTop:"30px",fontSize:"16px"}),r.a.createElement(ve,{fullView:!0,errand:c,disableAction:!0}),r.a.createElement(G,{description:"GIVE NOTICE",onClick:function(){console.log("handleHelpNotice"),console.log("ErrandID: "+c._id),E.a.post("/updateErrand",{errandID:c._id,newErrandData:{status:"inProgress",helper:e.activeUser.username}}).then((function(t){console.log("Help notice submitted successfully!",t),console.log("response.data: "+JSON.stringify(t.data)),i(!0),e.history.push("/home")})).catch((function(e){console.log("Got error while handling help notice",e),i(!1)}))}}),r.a.createElement(K,{success:o,successResponse:"Thank you for helping out!",failResponse:"Something went wrong, try again."}))},tt=n(16);function nt(){var e=Object(w.a)(["\n  display: flex; \n  justify-content: flex-end; \n  font-size: 6px;\n"]);return nt=function(){return e},e}function at(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 24px;\n  font-weight: 800;\n  align-items: center;\n  justify-content: center;\n  padding-top: 80px;\n  padding-bottom: 10px;\n"]);return at=function(){return e},e}function rt(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return rt=function(){return e},e}function ot(){var e=Object(w.a)(["\n  border: #4caf50;\n  color: red;\n  font-size: 20px;\n  border-radius: 100%;\n  margin: auto;\n  padding-top: 0.8em;\n"]);return ot=function(){return e},e}var it=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).saveInput=function(e){a.setState(Object(tt.a)({},e.target.name,e.target.value))},a.checkLogin=function(e){e.preventDefault(),E.a.post("/loginUser",{username:a.state.username,password:a.state.password}).then((function(e){if(e.data.login){var t=e.data.user;window.localStorage.setItem("loggedInUser",JSON.stringify(t)),a.props.activeUser.onSetLoggedInUser(t),a.props.history.push("/home")}else a.setState({text:"Wrong Username or Password"})}))},a.state={username:"",password:"",text:""},a}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(st,null,r.a.createElement(lt,null,r.a.createElement(k.a,{icon:D.g,style:{fontSize:"72px",color:"#31D285"}}),r.a.createElement("p",null,"Welcome to LocalHero!")),r.a.createElement(He,{text:"USERNAME"}),r.a.createElement(qe,{name:"username",height:"32px",width:"240px",onChange:this.saveInput,autocomplete:"username"}),r.a.createElement(He,{text:"PASSWORD"}),r.a.createElement(qe,{name:"password",type:"password",height:"32px",width:"240px",onChange:this.saveInput,autocomplete:"new-password"}),r.a.createElement(G,{onClick:this.checkLogin,description:"LOGIN",marginTop:"40px",marginBottom:"10px",height:"32px",width:"240px"}),r.a.createElement(I,{to:"profile-creation"},r.a.createElement(G,{description:"SIGN UP",marginTop:"10px",marginBottom:"10px",height:"32px",width:"240px"})),r.a.createElement(ut,null,"Regular build"),r.a.createElement(ct,null,this.state.text))}}]),n}(a.Component),ct=S.a.div(ot()),st=S.a.div(rt()),lt=S.a.div(at()),ut=S.a.div(nt()),dt=it;function pt(){var e=Object(w.a)(["\n  margin: 2em;\n  width: 7em;\n  height: 7em;\n"]);return pt=function(){return e},e}function ft(){var e=Object(w.a)(["\n  display: flex; \n  justify-content: center;\n  font-size: 18px;\n  padding-bottom: 20px;\n"]);return ft=function(){return e},e}function ht(){var e=Object(w.a)(["\n\n"]);return ht=function(){return e},e}function mt(){var e=Object(w.a)(["\n  font-weight: 700;\n  text-transform: uppercase;\n  padding-right: 10px;\n"]);return mt=function(){return e},e}function gt(){var e=Object(w.a)(["\n  display: flex; \n  flex-direction: row;\n  margin: 0.5em;\n  font-size: 18px;\n"]);return gt=function(){return e},e}function Et(){var e=Object(w.a)(["\n  display: flex; \n  justify-content: center; \n  padding-left: 10px;\n  flex-direction: column;\n"]);return Et=function(){return e},e}var xt=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).getUserErrands=function(){E.a.post("/getUserErrand",{username:a.state.user.username}).then((function(e){a.setState({fetchErrandsSuccess:!0,errands:e.data.errands})})).catch((function(e){console.log("You have no errands!",e),a.setState({fetchErrandsSuccess:!1})})),a.getUserErrandsTimeout=setTimeout(a.getUserErrands,2e3)},a.state={user:a.props.activeUser,errands:[],fetchErrandsSuccess:null,profilePic:"https://image.flaticon.com/icons/png/512/37/37943.png"},a.getUserErrands=a.getUserErrands.bind(Object(f.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log("---------- PROFILEPAGE.JS DID MOUNT ----------------"),this.getUserErrands()}},{key:"componentWillUnmount",value:function(){console.log("---------- PROFILEPAGE.JS WILL UNMOUNT ----------------"),clearTimeout(this.getUserErrandsTimeout)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{leftButtonType:"back",leftButtonLink:"/home"}),r.a.createElement(vt,null,r.a.createElement(wt,{src:this.state.profilePic}),r.a.createElement(bt,null,r.a.createElement(yt,null,"Name"),r.a.createElement(Ot,null,this.state.user.name)),r.a.createElement(bt,null,r.a.createElement(yt,null,"Area"),r.a.createElement(Ot,null,this.state.user.areaID)),r.a.createElement(bt,null,r.a.createElement(yt,null,"E-mail"),r.a.createElement(Ot,null,this.state.user.email))),r.a.createElement(I,{to:"/"},r.a.createElement(G,{onClick:function(){return localStorage.clear()},description:"LOG OUT"})),r.a.createElement(jt,null,"MY ERRANDS"),r.a.createElement(Ue,{errands:this.state.errands,emptyStateMessage:"You currently have no errands"}))}}]),n}(a.Component),vt=S.a.div(Et()),bt=S.a.div(gt()),yt=S.a.div(mt()),Ot=S.a.div(ht()),jt=S.a.div(ft()),wt=S.a.img(pt()),St=xt;function Ct(){var e=Object(w.a)(["\n    background-color: white;\n    border: #4CAF50;\n    color: #4CAF50;\n    padding: 40px;\n    font-size: 48px;\n    border-radius: 100%;\n\n    &:hover {\n      cursor: pointer;\n    }\n"]);return Ct=function(){return e},e}var Ut=S.a.button(Ct()),It=function(e){return r.a.createElement(Ut,Object.assign({type:"button"},e),r.a.createElement(k.a,{icon:D.a}))};function kt(){var e=Object(w.a)(["\n    display: flex; \n    flex-direction: column; \n    justify-content: center; \n    align-items: center;\n"]);return kt=function(){return e},e}var Dt=S.a.form(kt()),Tt=function(e){return r.a.createElement(Dt,null,e.children)};function zt(){var e=Object(w.a)(["\n    border: #4CAF50;\n    color: red;\n    margin-top: 1em;\n    font-size: 20px;\n    border-radius: 100%;\n"]);return zt=function(){return e},e}var At=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).saveInput=function(e){a.setState(Object(tt.a)({},e.target.name,e.target.value))},a.storeUser=function(e){e.preventDefault(),window.sessionStorage.setItem("stateProfileCreation",JSON.stringify(a.state)),a.props.history.push("/residence-info")},a.checkForUniqueUser=function(e){E.a.post("/check-user",{username:a.state.username,email:a.state.email}).then((function(t){var n=t.data.uniqueUser,r=t.data.uniqueEmail;n&&r?a.setState({text:"Username and Email already taken"}):n?a.setState({text:"Username already taken"}):r?a.setState({text:"Email already taken"}):a.storeUser(e)}))},a.state={username:"",password:"",firstname:"",lastname:"",age:"",email:"",mobile:"",text:""},a}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{leftButtonType:"back",leftButtonLink:"/signup"}),r.a.createElement(Tt,null,r.a.createElement(He,{text:"Profile Creation"}),r.a.createElement(He,{id:"username",fontSize:"14px",text:"Username"}),r.a.createElement(qe,{height:"24px",name:"username",onChange:this.saveInput,autocomplete:"username"}),r.a.createElement(He,{fontSize:"14px",text:"Password"}),r.a.createElement(qe,{type:"password",height:"24px",name:"password",value:this.password,onChange:this.saveInput,autocomplete:"new-password"}),r.a.createElement(He,{fontSize:"14px",text:"Given Name"}),r.a.createElement(qe,{height:"24px",name:"firstname",value:this.firstname,onChange:this.saveInput}),r.a.createElement(He,{fontSize:"14px",text:"Surname"}),r.a.createElement(qe,{height:"24px",name:"lastname",value:this.lastname,onChange:this.saveInput}),r.a.createElement(He,{fontSize:"14px",text:"Age"}),r.a.createElement(qe,{height:"24px",name:"age",type:"number",value:this.age,onChange:this.saveInput}),r.a.createElement(He,{fontSize:"14px",text:"Mobile number"}),r.a.createElement(qe,{height:"24px",name:"mobile",type:"number",value:this.mobile,onChange:this.saveInput}),r.a.createElement(He,{fontSize:"14px",text:"E-mail address"}),r.a.createElement(qe,{height:"24px",name:"email",value:this.email,onChange:this.saveInput}),r.a.createElement(Lt,null,this.state.text),r.a.createElement(It,{onClick:this.checkForUniqueUser})))}}]),n}(a.Component),Lt=S.a.div(zt()),Rt=At,Nt=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).saveInput=function(e){a.setState(Object(tt.a)({},e.target.name,e.target.value))},a.storeSession=function(e){window.sessionStorage.setItem("stateResidenceInfo",JSON.stringify(a.state)),a.props.history.push("/insert-image")},a.state={address:"",area:"",city:""},a}return Object(p.a)(n,[{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",null,r.a.createElement(M,{leftButtonType:"back",leftButtonLink:"/profile-creation"}),r.a.createElement(He,{text:"Residence Info"}),r.a.createElement(Tt,null,r.a.createElement(He,{text:"Address",fontSize:"14px"}),r.a.createElement(qe,{height:"24px",name:"address",value:this.address,onChange:this.saveInput}),r.a.createElement(He,{text:"Area Code",fontSize:"14px"}),r.a.createElement(qe,{type:"number",pattern:"[0-9]",height:"24px",name:"area",value:this.area,onChange:this.saveInput}),r.a.createElement(He,{text:"City",fontSize:"14px"}),r.a.createElement(qe,{height:"24px",name:"city",value:this.city,onChange:this.saveInput}),r.a.createElement(It,{onClick:this.storeSession})))}}]),n}(a.Component);function Pt(){var e=Object(w.a)(["\n    background-color: white;\n    border: #4CAF50;\n    color: #4CAF50;\n    padding: 40px;\n    font-size: 48px;\n    border-radius: 100%;\n\n    &:hover {\n      cursor: pointer;\n    }\n"]);return Pt=function(){return e},e}var Bt=S.a.button(Pt()),Ft=function(e){return r.a.createElement(Bt,e,r.a.createElement(k.a,{icon:D.c}))};function Mt(){var e=Object(w.a)(["\n    font-size: 14px; \n    border-style: solid;\n    border-width: 3px;\n    border-color: #31D285;\n"]);return Mt=function(){return e},e}function Ht(){var e=Object(w.a)(["\n    display: flex; \n    flex: 1;\n    justify-content: center; \n    align-items: center;\n"]);return Ht=function(){return e},e}function Wt(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Wt=function(){return e},e}var Vt=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).saveInput=function(e){a.setState(Object(tt.a)({},e.target.name,e.target.value))},a.sendProfiletoBackend=function(e,t){var n=a.state;E.a.post("/insertUser",{username:n.username,password:n.password,email:n.email,name:n.name,age:n.age,address:n.address,description:n.description,virtuePoints:0,areaId:n.area,mobile:n.mobile,city:n.city,image:""}).then((function(e){console.log(e)})),a.props.history.push("/signup")},a.fileSelectHandler=function(e){a.setState({selectedFile:e.target.files[0]})},a.fileUploadHandler=function(){var e=new FormData;e.append("image",a.state.selectedFile,a.state.selectedFile.name),E.a.post("/uploadImage",e,{onUploadProgress:function(e){console.log("Upload Progress"+e.loaded/e.total*100+"%")}}).then((function(e){console.log("Inside response"),console.log(e)})).catch((function(e){console.log(e.response)}))},a.state={username:"",password:"",name:"",age:"",email:"",mobile:"",description:"",address:"",area:"",city:"",image:""},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(sessionStorage.getItem("stateProfileCreation")),t=e.username,n=e.password,a=e.firstname+" "+e.lastname,r=e.age,o=e.email,i=e.mobile,c=JSON.parse(sessionStorage.getItem("stateResidenceInfo")),s=c.address,l=c.area,u=c.city;this.setState({username:t,password:n,name:a,age:r,email:o,mobile:i,address:s,area:l,city:u})}},{key:"render",value:function(){return console.log(this.state),r.a.createElement(Gt,null,r.a.createElement(M,{leftButtonType:"back",leftButtonLink:"/residence-info"}),r.a.createElement(He,{text:"Please insert a profile picture"}),r.a.createElement(Jt,null,r.a.createElement(qt,{type:"file",onChange:this.fileSelectHandler})),r.a.createElement(Ft,{onClick:this.sendProfiletoBackend}))}}]),n}(a.Component),Gt=S.a.div(Wt()),Jt=S.a.div(Ht()),qt=S.a.input(Mt()),Yt=Vt,_t=function(e){var t=Object(a.useState)(""),n=Object(H.a)(t,2),o=n[0],i=n[1],c=Object(a.useState)(null),s=Object(H.a)(c,2),d=s[0],p=s[1];function f(){return(f=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.post("/updateUser",{userID:e.activeUser._id,newUserData:{areaID:o}}).then(function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Zip code updated successfully!",n),p(!0),t.next=4,h();case 4:console.log("switching route from zipcode to home"),e.history.push("/home");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log("Got error while updating zip code",e),p(!1)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){console.log("updateLoggedInUser"),E.a.post("/getUser",{username:e.activeUser.username}).then((function(t){console.log("User updated successfully!",t),console.log("updateUserContext with: "+JSON.stringify(t.data)),e.activeUser.onSetLoggedInUser(t.data)})).catch((function(e){console.log("Got error while updating logged in user",e)})),console.log("finished updatingUserContext in ZipCode")}return r.a.createElement("div",null,r.a.createElement(M,{leftButtonType:"back",leftButtonLink:"/home"}),r.a.createElement(He,{text:"Change Location (Zip Code)",paddingTop:"30px",fontSize:"16px"}),r.a.createElement(qe,{height:"32px",value:o,onChange:function(e){return i(e.target.value)}}),r.a.createElement(G,{description:"Update zip code",onClick:function(){return f.apply(this,arguments)}}),r.a.createElement(K,{success:d,successResponse:"Sucessfully updated zip code.",failResponse:"Something went wrong, try again."}))},Kt=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).setLoggedInUser=function(e){console.log("setLoggedInUser in App.js"),a.setState({userData:e})},a.checkInitialLogin=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("checkInitialLogin in App.js"),e.next=3,JSON.parse(window.localStorage.getItem("loggedInUser"));case 3:return t=e.sent,e.next=6,a.setState({fetchLoggedInUser:t});case 6:null!==t?a.updateUserContext():console.log("No user logged in");case 7:case"end":return e.stop()}}),e)}))),a.updateUserContext=function(){E.a.post("/getUser",{username:a.state.fetchLoggedInUser.username}).then((function(e){console.log("User context updated successfully!",e),a.setState({userData:e.data})})).catch((function(e){console.log("Got error while updating user data",e)}))},a.state={fetchLoggedInUser:{},userData:{}},a.updateUserContext=a.updateUserContext.bind(Object(f.a)(a)),a.setLoggedInUser=a.setLoggedInUser.bind(Object(f.a)(a)),a.checkInitialLogin=a.checkInitialLogin.bind(Object(f.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log("---------- APP.JS DID MOUNT --------------"),this.checkInitialLogin()}},{key:"render",value:function(){return r.a.createElement(x.a,{basename:""},r.a.createElement(y,{value:Object(c.a)(Object(c.a)({},this.state.userData),{},{onSetLoggedInUser:this.setLoggedInUser})},r.a.createElement("div",{className:"App",style:{fontFamily:"Helvetica"}},r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:j(dt)}),r.a.createElement(v.a,{path:"/signup",component:j(dt)}),r.a.createElement(v.a,{path:"/home",component:j(Be)}),r.a.createElement(v.a,{path:"/profile-page",component:j(St)}),r.a.createElement(v.a,{path:"/help-request",component:j(Xe)}),r.a.createElement(v.a,{path:"/help-notice",component:j(et)}),r.a.createElement(v.a,{path:"/profile-creation",component:Rt}),r.a.createElement(v.a,{path:"/residence-info",component:Nt}),r.a.createElement(v.a,{path:"/insert-image",component:Yt}),r.a.createElement(v.a,{path:"/zipcode",component:j(_t)})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Kt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.6cc63a46.chunk.js.map