import "./App.css";
import ThemeProvider from "./context/ThemeProvider";
import Theme from "./styles/themes";
import Navbar from "./components/navbar";
import PageBody from "./components/pageBody";


function App() {
  return (
    <>
      <ThemeProvider>
        <Theme>
        <Navbar />
        <PageBody />
        </Theme>
      </ThemeProvider>
    </>
  );
}

export default App;
