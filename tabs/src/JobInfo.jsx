/* eslint-disable react/prop-types */

import Duties from "./Duties";

export default function JobInfo({ jobs, CurrentValue }) {
  const { title, company, dates, duties } = jobs[CurrentValue];
  return (
    <div className="flex flex-col w-1/2">
      <h2 className="text-4xl text-gray-500 mb-2">{title}</h2>
      <h3 className="bg-gray-300 text-gray-500 w-max p-1  ">{company}</h3>
      <p className="text-gray-400 font-semibold my-1">{dates}</p>
      <Duties duties={duties} />
    </div>
  );
}
