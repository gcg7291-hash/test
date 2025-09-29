import React from "react";
import Parent from "./components/Props/Parent";
import ProfileContainer from "./components/PropsExample/ProfileContainer";
import CardContainer from "./components/PropsFunction/CardContainer";
import FormContainer1 from "./components/PropsFunction/FormContainer1";
import ProductContainer from "./components/ProductCard/ProductContainer";
import UserCardContainer from "./components/Usercard/UserCardContainer";
export default function App() {
  return (
    <div>
      <FormContainer1></FormContainer1>
      <ProductContainer></ProductContainer>
      <UserCardContainer></UserCardContainer>
    </div>
  );
}
