import React from "react";
<<<<<<< HEAD
import Rule from "./components/JSX/Rule";
import InterPolation from "./components/JSX/Interpolation.";
import Header from "./components/Header";
import MyButton from "./components/Component/MyButton";
import MyList from "./components/Component/MyList";

// App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트를 포함한다
// App 컴포넌트는 Header 컴포넌트와 Interpolation 컴포넌트가 중첩됐다
export default function App() {
  return (
    <div>
      <Header></Header>
      <InterPolation></InterPolation>
      <MyButton></MyButton>
      <MyList></MyList>
    </div>
  );
}

=======
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
>>>>>>> test
