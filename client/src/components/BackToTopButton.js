
import React from 'react'
import styled from 'styled-components'
import {BsArrowUpShort} from "react-icons/bs"

const Button = styled.div`
position: fixed;
visibility: hidden;
opacity: 0;
right: 15px;
bottom: 15px;
z-index: 996;
background: #149ddd;
width: 40px;
height: 40px;
border-radius: 50px;
transition: all 0.4s
&:active{
visibility: visible;
opacity: 1;
};`

const BackToTopButton = () => {
  return (
      <>
      <Button>helo please<BsArrowUpShort/></Button>
      </>
    
  )
}

export default BackToTopButton