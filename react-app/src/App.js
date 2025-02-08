import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Subject title="WEB" sub="world wide web!"></Subject>
      <TOC></TOC>
      <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
    </div>
  );
}

export default App;
