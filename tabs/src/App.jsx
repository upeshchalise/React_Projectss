import { useEffect, useState } from "react"; // import Buttons from "./Buttons";

import JobInfo from "./JobInfo";
import Buttons from "./Buttons";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentValue, setCurrentValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section>
        <h1 className="text-5xl">Loading...</h1>
      </section>
    );
  }

  // const { company, duties, title, dates } = jobs[currentValue];

  return (
    <>
      <section>
        <div className="flex flex-col items-center my-10">
          <h2 className="capitalize font-bold text-3xl">exprience</h2>
          <hr className="h-0 border-2 w-20 rounded border-blue-700" />
        </div>

        <div className="flex justify-center gap-6">
          {/* btn container*/}
          <Buttons jobs={jobs} setCurrentValue={setCurrentValue} />
          <div>
            {/* {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  className="border"
                  onClick={() => setCurrentValue(index)}
                >
                  {item.company}
                </button>
              );
            })} */}
          </div>

          <JobInfo jobs={jobs} CurrentValue={currentValue} />
        </div>
      </section>
    </>
  );
}

export default App;
