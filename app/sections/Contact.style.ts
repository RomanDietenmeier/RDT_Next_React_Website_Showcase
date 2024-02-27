"use client";

import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 10% auto 15%;

  @media (width <= 768px) {
    margin: 1% 5%;
  }
`;

export const ContactFormWrapper = styled.div`
  width: 90%;
  padding: 40px;
  padding-top: 20px;
  padding-bottom: 20px;

  background-color: #fff;
  border: 4px solid rgb(21 106 183 / 40%);
  border-radius: 15px;

  h2 {
    margin-bottom: 30px;
    font-size: 2em;
    font-weight: bold;
    color: ${(p) => p.theme.color.accent};
  }

  .input-box {
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 10px;
  }

  input,
  textarea {
    resize: none;

    width: 93%;
    margin: 10px 0;
    padding: 10px;

    font-size: 15px;

    border: 2px solid #ccc;
    border-radius: 12px;
    outline: none;

    transition: border-color 0.3s;
  }

  textarea {
    height: 150px;
  }

  .input-box span {
    pointer-events: none;

    position: absolute;
    left: 0;

    margin: 10px 0;
    padding: 6px 10px;

    font-size: 16px;
    color: #999;

    background-color: #fff;

    transition: 0.3s;
  }

  input:focus,
  textarea:focus {
    border-color: ${(p) => p.theme.color.accent};
  }

  input:focus ~ span,
  textarea:focus ~ span,
  input:not(:placeholder-shown) ~ span,
  textarea:not(:placeholder-shown) ~ span {
    transform: translateY(-20px);
    font-size: 15px;
    color: ${(p) => p.theme.color.accent};
  }

  input[type="submit"] {
    cursor: pointer;

    width: 100%;
    padding: 10px;

    font-size: 14px;
    color: #fff;

    background: ${(p) => p.theme.color.accent};
    border: none;
    border-radius: 18px;

    transition: 0.5s;

    &:hover {
      background: #1e90ff;
    }
  }

  @media (width <= 768px) {
    width: 70%;

    h2 {
      font-size: 1.6em;
      font-weight: bold;
    }

    textarea {
      height: 120px;
    }

    input,
    textarea {
      resize: none;

      width: 88%;
      margin: 10px 0;
      padding: 10px;

      font-size: 15px;

      border: 2px solid #ccc;
      border-radius: 12px;
      outline: none;

      transition: border-color 0.3s;
    }
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  @media (width <= 768px) {
    flex-direction: column;
  }
`;

export const ContactGoUpWrapper = styled.div`
  width: 5%;
  margin: 0% 0% 0% 10%;

  @media (width <= 768px) {
    position: absolute;
    margin: 30% -90% 0% 0%;
  }

  @media (width <= 550px) {
    position: absolute;
    margin: 43% -90% 0% 0%;
  }

  @media (width <= 500px) {
    position: absolute;
    margin: 40% -85% 0% 0%;
  }

  @media (width <= 450px) {
    position: absolute;
    margin: 50% -85% 0% 0%;
  }

  @media (width <= 300px) {
    position: absolute;
    margin: 55% -85% 0% 0%;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto 0%;

  @media (width <= 768px) {
    grid-template-columns: 1fr;
    padding-bottom: 10%;
  }
`;

export const ContactInfoItem = styled.div`
  display: flex;
  padding: 5%;

  @media (width <= 768px) {
    padding: 0%;
  }
`;

export const ContactInfoIcon = styled.div`
  width: 70px;
  height: 70px;

  text-align: center;

  background-color: #fff;
  border-radius: 50%;
`;

export const ContactInfoIconContent = styled.i`
  width: 55px;
  height: 55px;
  margin-top: 8%;

  @media (width <= 768px) {
    margin-top: 9%;
  }
`;

export const ContactInfoContent = styled.div`
  margin-left: 30px;
`;

export const ContactInfoHeading = styled.h4`
  margin-bottom: 5px;

  font-family: metropolis-semibold, sans-serif;
  font-size: 1.4em;
  font-weight: 400;
  color: ${(p) => p.theme.color.accent};
`;

export const ContactInfoText = styled.p`
  font-family: Epilogue, Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 1.1em;

  a {
    color: inherit;
    text-decoration: none; /* Entfernt die Unterstreichung des Links */
  }
`;
