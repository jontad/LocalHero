import React from 'react';
import styled from 'styled-components'

import { Checkmark } from 'react-checkmark';

const ConfirmButton = (props) => {
    return (
        <ConfirmButtonWrapper type="submit" value="Submit" id="confirm" onClick={props.onClickFunc}>
            <Checkmark size='large'/>
        </ConfirmButtonWrapper>
    );
}

const ConfirmButtonWrapper = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 0px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 100%;


`;

export default ConfirmButton;
