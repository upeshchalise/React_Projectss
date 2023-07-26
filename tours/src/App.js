import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <main>{<Loading />}</main>;
  }

  if (tours.length === 0) {
    return (
      <section className="app">
        <div className="title">
          <h1>No tours left</h1>
        </div>
        <button onClick={fetchTours}> Refresh</button>
      </section>
    );
  }

  return <Tours tours={tours} removeTours={removeTours} />;
}

export default App;
