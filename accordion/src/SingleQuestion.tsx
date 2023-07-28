import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function SingleQuestion({ info, title }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="flex flex-col items-center w-[90%] border p-1 mb-4 shadow-xl relative">
      <header className="flex">
        <h5>{title}</h5>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="absolute right-2 pt-1"
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}

export default SingleQuestion;
