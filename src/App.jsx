import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(data);
  const removePeople = (previousValue) => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today!</h3>
        <List people={people} />
        <button type="button" className="btn" onClick={removePeople}>
          Remove People
        </button>
      </section>
    </main>
  );
};
export default App;
