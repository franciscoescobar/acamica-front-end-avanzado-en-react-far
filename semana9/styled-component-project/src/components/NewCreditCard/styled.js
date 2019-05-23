import styled from "styled-components";

export const NewCreditCardWrapper = styled.div`
  width: 144px;
  height: 120px;
  border-radius: 6px;
  color: white;
  margin: 20px 8px;
  padding: 15px 20px;
  display: flex;
  border: 1px dashed #d6d9e4;
  flex-shrink: 0;
`;

export const NewCreditCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .body-value {
    flex: 1;
    text-align: center;
  }
  p.body-value {
    color: #a6aab4;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    /* or 143% */
    text-align: center;
    letter-spacing: 0.2px;
    padding: 5px;
  }
  i.body-value {
    padding-top: 10px;
    font-size: 24px;
    color: #10c971;
    height: 40px;
    width: 40px;
  }
`;
