import React from "react";
import Header from "../Header";
import Nav from "../Nav";
import CreditCards from "../CreditCards";
import Container from "../Container";
import UserCards from "../UserCards";
import { CreditCardsData, UserCardsData } from "../../data/data";
import TransactionForm from "../TransactionForm";
function App() {
  return (
    <div className="App">
      <Header image="data:image/png;base64,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" />
      <Nav />
      <Container
        title="Select credit card"
        content={<CreditCards cards={CreditCardsData} />}
      />
      <Container
        title="Recipient"
        linkText="Show all"
        content={<UserCards cards={UserCardsData} />}
      />
      <Container title="Transaction details" content={<TransactionForm />} />
    </div>
  );
}

export default App;
