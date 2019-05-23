import styled from "styled-components";

export const CreditCardWrapper = styled.div`
  min-width: 144px;
  height: 120px;
  box-shadow: 0px 8px 28px rgba(134, 118, 251, 0.6);
  background: #613eea;
  border-radius: 6px;
  color: white;
  margin: 20px 8px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CreditCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
`;

export const CreditCardBody = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  letter-spacing: 2px;
  justify-content: space-between;
`;

export const CreditCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 18px;

  /* identical to box height, or 150% */
  letter-spacing: 0.2px;
`;
