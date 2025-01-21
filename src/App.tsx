import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
function App() {
  return (
    <div className="min-h-screen w-full bg-slate-100">
      <div className="ml-auto mr-auto min-h-screen w-full max-w-xl bg-white px-5 py-8 shadow-xl">
        <Header />
        <Editor />
        <List />
      </div>
    </div>
  );
}

export default App;
