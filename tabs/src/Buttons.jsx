/* eslint-disable react/prop-types */
export default function Buttons({ jobs, setCurrentValue }) {
  return (
    <div className="flex flex-col gap-5 bg-gray-50">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setCurrentValue(index)}
            className="bg-gray-100 text-2xl border-l-2 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500"
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}
