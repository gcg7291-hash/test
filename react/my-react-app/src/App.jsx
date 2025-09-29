import React from "react";
import OnClick from "./components/EventHandling/OnClick";
import Onchange from "./components/EventHandling/Onchange";
import OnSubmit from "./components/EventHandling/OnSubmit";
export default function App() {
  return (
    <div>
      <OnClick></OnClick>
      <OnSubmit></OnSubmit>
    </div>
  );
}
