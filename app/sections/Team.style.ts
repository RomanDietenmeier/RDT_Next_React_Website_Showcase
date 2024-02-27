"use client";
import styled from "styled-components";
import { ResponsiveFlexGrid } from "../../ui/general.style";

export const TeamSection = styled.div`
  margin: 8% auto 5%;

  @media (width <= 768px) {
    margin: 15% 5%;
  }
`;

export const TeamImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 0.6rem;
  padding: 0 1.3rem;
`;

export const TeamImage = styled.img`
  width: 15.5rem;
  height: 15.5rem;
  object-fit: cover;
  border-radius: 50%;

  @media (0 <= width <= 22rem) {
    width: 100%;
    height: auto;
  }
`;

export const TeamResponsiveFlexGrid = styled(ResponsiveFlexGrid)`
  ${TeamImageWrapper}:last-child {
    margin-bottom: 0;
  }
`;
