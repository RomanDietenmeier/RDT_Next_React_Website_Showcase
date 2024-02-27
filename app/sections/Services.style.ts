"use client";
import styled from "styled-components";
import Link from "next/link";

export const ContentSectionContainer = styled.div`
  padding: 10% 0%;

  @media (max-width: 768px) { 
    margin: 15% 5%;
  }
`;

export const ServiceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 50px;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 ${(p) => p.theme.card.shadow};
  transition: transform 0.8s;
  max-height: 600px;
  overflow: hidden;
  background-color: ${(p) => p.theme.color.accent};

 

  & > h3,
  & > p {
    margin: 5px 2% 0 2%;
    padding-left: 14px;
    font-family: Epilogue, Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  & > h3 {
    font-size: 30px;
    font-weight: 750;
    margin-top: -15px ;
    color: white;
  }

  & > p {
    margin-bottom: 15px;
    font-family: Epilogue, Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: white;
  }

  & > h3,
  & > p {
    opacity: 1;
    transition: opacity 0.2s;
  }



  @media (max-width: 768px) { 
 
    & > h3 {
 
    font-size: 17px;
    font-weight: 750;
  }

  & > p {

    font-size: 14px;
    font-weight: 550;
    line-height: 20px;
    margin: 5px 5px 15px 5px
  }

  }

  @media (max-width: 500px) { 
    & > h3 {
 
 font-size: 17px;
 font-weight: 750;
}

& > p {

 font-size: 11px;
 font-weight: 350;
 line-height: 15px;
 margin: 5px 5px 15px 7px
}

}
 
@media (max-width: 400px) { 

}
`;


export const ServiceImage = styled.img`
  position: relative;
  display: block;
  width: 100%;
  object-fit: cover;
  clip-path: polygon(0 0%, 100% 0, 100% 80%, 0% 90%);
  border-radius: 5px 5px 0 0;
`;



export const CardContactButton = styled(Link)`
  cursor: pointer;
  width: 25%;
  padding: 5px 5%;
  margin: 2% 5% 5% 5%;
  font-family: Epilogue, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${(p) => p.theme.color.accent};
  text-align: center;
  text-decoration: none;
  background-color: white;
  border: none;
  border-radius: 15px;
  outline: none;

  /* Cool hover effect */
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background-color: ${(p) => p.theme.color.accent};
    color: white;
    transform: scale(1.1);
    box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.8);
  }

  &:active {
    background-color: black; 
  }

  @media (max-width: 700px) { 
  font-size: 12px;

}
@media (max-width: 450px) { 
  font-size: 10px;

}
@media (max-width: 350px) { 
  font-size: 7px;

}


`;

