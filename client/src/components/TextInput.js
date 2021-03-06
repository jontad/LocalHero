import React from 'react';

import styled from 'styled-components'

import "./components.css"

const TextInput = (props) => {
  let type = props.inputType;
  switch(type){
    case "number":
      return (
      <StyledInput
        type="number"
        autocomplete="on"
        height={props.height}
        width={props.width}
        {...props}
        min="0"
      />
      );

    case "password":
      return (
      <StyledInput
        type="password"
        autocomplete="on"
        height={props.height}
        width={props.width}
        {...props}
      />
      );

    //PF: Profile Creation
    case "pf":
      return (
        <WrapperPf>
          <StyledInputPf {...props}/>
        </WrapperPf>
      );

    case "descriptionPf":
      return (
        <WrapperPf>
          <StyledDesc {...props}/>
        </WrapperPf>
      );


    default:
      return (
      <StyledTextArea
        type="text"
        autocomplete="on"
        height={props.height}
        width={props.width}
        {...props}
      />
      );
  }
}

const StyledTextArea = styled.textarea`
    margin: auto;
    display: flex;

    font-family: Ubuntu-Regular;
    font-size: 14px;
    padding: 5px;

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: ${props => props.height || '24em'};
    width: ${props => props.width || '18em'};

    resize: ${props => props.resize || 'none'};

    &:hover {
      cursor: auto;
      background-color: #F0F0F0;
      border-image: linear-gradient(to right, #11998e, #38ef7d);
      border-image-slice: 1;
    }

    &:focus {
      background-color: #F0F0F0;
      border-image: linear-gradient(to right, #11998e, #38ef7d);
      border-image-slice: 1;
    }

`
const StyledInput = styled.input`
    margin: auto;
    display: flex;

    font-family: Ubuntu-Regular;
    font-size: 14px;
    padding: 5px;

    border:  1px solid #31D285;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: ${props => props.height || '24em'};
    width: ${props => props.width || '18em'};

    &:hover {
      cursor: auto;
      background-color: #F0F0F0;
      border-image: linear-gradient(to right, #11998e, #38ef7d);
      border-image-slice: 1;
    }

    &:focus {
      background-color: #F0F0F0;
      border-image: linear-gradient(to right, #11998e, #38ef7d);
      border-image-slice: 1;
    }
`


const WrapperPf = styled.div`
    margin: auto;
    display: flex;

    padding: 2px 0 0;
    width: 70%;
`

const StyledInputPf = styled.input`
    font-family: Ubuntu-Regular;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.2rem;
    color: black;
    padding: 7px 0;

    height: ${props => props.height || '24em'};
    resize: ${props => props.resize || 'none'};

    &:hover {
      cursor: auto;

      background-color: #F0F0F0;
      border-image: linear-gradient(to right, #11998e, #38ef7d);
      border-image-slice: 1;

      ::placeholder {
        opacity: 1;
      }
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        opacity: 1;
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
        opacity: 1;
      }
    }

    &:focus {
      padding-bottom: 6px;
      font-weight: 400;
      border-width: 3px;

      background-color: #F0F0F0;
      border-image: linear-gradient(to right, #11998e, #38ef7d);
      border-image-slice: 1;

      //opacity for placeholder
      ::placeholder {
        opacity: 1;
      }
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        opacity: 1;
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
        opacity: 1;
      }
    }

    ::placeholder {
      opacity: 0.65;
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      opacity: 0.65;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      opacity: 0.65;
    }
`

const StyledDesc = styled.textarea`
    font-family: Ubuntu-Regular;
    font-size: 1.2rem;

    border: 0;
    outline: 0;
    border-bottom: 2px solid #9b9b9b;

    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);

    height: ${props => props.height || '24em'};
    width: ${props => props.width || '18em'};

    resize: ${props => props.resize || 'none'};

    &:hover {
      cursor: auto;

      background-color: #F0F0F0;
      border-image: linear-gradient(to right, #11998e, #38ef7d);
      border-image-slice: 1;

      ::placeholder {
        opacity: 1;
      }
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        opacity: 1;
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
        opacity: 1;
      }
    }

    &:focus {
      padding-bottom: 6px;
      font-weight: 400;
      border-width: 3px;

      background-color: #F0F0F0;
      border-image: linear-gradient(to right, #11998e, #38ef7d);
      border-image-slice: 1;

      //opacity for placeholder
      ::placeholder {
        opacity: 1;
      }
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        opacity: 1;
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
        opacity: 1;
      }
    }

    ::placeholder {
      opacity: 0.65;
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      opacity: 0.65;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      opacity: 0.65;
    }

`




export default TextInput;
