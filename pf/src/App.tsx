import "./App.css";
import { Home } from "./Home";
import { PageProvider } from "./PageContext";

function App() {
  return (
    <>
      <PageProvider>
        <Home />
      </PageProvider>
    </>
  );
}

export default App;
