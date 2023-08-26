import { useState } from "react";
import "./App.css";
import Questions from "./Questions";
import questions from "./data.tsx";

function App() {
  const [list, setList] = useState(questions);

  return (
    <>
      <Questions list={list} />
    </>
  );
}

export default App;
