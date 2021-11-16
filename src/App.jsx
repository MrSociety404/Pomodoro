import "./styles/styles.scss";
import Countdown from "./components/Countdown";
import Title from "./components/Title";
import Controls from "./components/Controls";

const App = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Promodoro</h1>
      </header>
      <main className="main">
        <Countdown />
        <Title />
        <Controls />
      </main>
      <footer className="footer">
        <a href="https://github.com/MrSociety404">MrSociety404</a>
      </footer>
    </>
  );
};

export default App;