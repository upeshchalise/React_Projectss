import CartContainer from "./CartContainer";
import Navbar from "./Navbar";
import { useGlobalContext } from "./context";

const App = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <h1>Loading ...</h1>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
