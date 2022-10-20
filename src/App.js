import "./App.css";
import Card from "./components/Card.js";
/* import * as React from "react";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Class Component </h1>
          <h2> Class Component </h2>
        </header>
      </div>
    );
  }
} */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Functional Component </h1>
        <Card title="Card Title 1" desc="description 1"></Card>
        <Card title="Card Title 2" desc="description 2"></Card>
      </header>
    </div>
  );
}

export default App;
