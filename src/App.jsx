import "./styles/styles.scss";
import Countdown from "./components/Countdown";
import Title from "./components/Title";
import Controls from "./components/Controls";
import {useRef, useState, useEffect} from "react";

const App = () => {
  const [time, setTime] = useState(5);
  const [title, setTitle] = useState("setup");
  const [play, setPlay] = useState(false);

  const countdown = useRef();

  useEffect(() => {
    if (play) {
      /* setInterval(() => {
        if (time === 0) {
          if (title === "break") setTitle("end");
          else {
            setTitle("break");
            setTime(3000);
          }
        } else {
          console.log(time);
          setTime(prevTime => prevTime - 1);
        }
      }, 1000);
 */
      const interval = setInterval(() => {
        if (time === 0) {
          if (title === "break") setTitle("end");
          else {
            setTitle("break");
            setTime(3000);
          }
        } else {
          console.log(time);
          setTime(prevTime => prevTime - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [play]);

  const startCountdown = () => {};

  const onClickPlay = () => {
    countdown.current.classList.add("active");
    setTitle("work");
    setPlay(true);
  };

  const onClickForward = () => {
    if (title === "work") {
      countdown.current.classList.remove("active");
      countdown.current.classList.add("break");
    } else {
      countdown.current.classList.remove("break");
      countdown.current.classList.add("end");
    }
    setTitle(`${title === "work" ? "break" : "end"}`);
  };

  const onClickReset = () => {
    countdown.current.classList = "countdown__box";
    setTitle("setup");
  };

  const onClickAdd = () => {
    setTime(time + 1);
  };

  const onClickRemove = () => {
    setTime(time - 1);
  };

  const onClickRestart = () => {
    countdown.current.classList.remove("end");
    countdown.current.classList.add("active");
    setTitle("work");
  };

  const onClickConfig = () => {
    countdown.current.classList.remove("end");
    setTitle("setup");
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">Promodoro</h1>
      </header>
      <main className="main">
        <Countdown ref={countdown} time={time} />
        <Title title={title} />
        <Controls
          onClickPlay={onClickPlay}
          onClickForward={onClickForward}
          onClickReset={onClickReset}
          onClickAdd={onClickAdd}
          onClickRemove={onClickRemove}
          onClickRestart={onClickRestart}
          onClickConfig={onClickConfig}
          state={title}
        />
      </main>
      <footer className="footer">
        <a href="https://github.com/MrSociety404">MrSociety404</a>
      </footer>
    </>
  );
};

export default App;
