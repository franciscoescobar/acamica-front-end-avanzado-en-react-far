import React from "react";
import styled from "styled-components";
const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .flex-input {
    flex: 1 1 100%;
    margin: 0 16px;
  }
  .input {
    margin-top: 20px;
    margin-bottom: 4px;
  }
  .button {
    height: 56px;
    margin-top: 36px;
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    border-radius: 6px;
    color: #ffffff;
    background: #613eea;
  }
`;

const TransactionForm = () => (
  <FormWrapper>
    <input className="flex-input input" placeholder="120.50" />
    <input className="flex-input input" placeholder="Description (Optional)" />
    <input className="flex-input button" type="submit" value="Confirm" />
  </FormWrapper>
);

export default TransactionForm;
