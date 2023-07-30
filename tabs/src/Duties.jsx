/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Duties({ duties }) {
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div key={id} className="flex gap-4 justify-center my-1   ">
            <FaAngleDoubleRight className="text-blue-500"></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
}
