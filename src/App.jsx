import "./styles/styles.scss";
import Countdown from "./components/Countdown";
import Title from "./components/Title";
import Controls from "./components/Controls";
import {useRef, useState, useEffect} from "react";

/**
 * Edit class on a element
 * @param {HTML} element Element to edit
 * @param {string} addClass class to add
 * @param {string} removeClass class to remove
 */
const editClass = (element, addClass, removeClass) => {
  element.current.classList.remove(removeClass);
  element.current.classList.add(addClass);
};

const App = () => {
  const [time, setTime] = useState(1200);
  const [initialTime, setInitialTime] = useState();
  const [title, setTitle] = useState("setup");
  const [play, setPlay] = useState(false);
  const [status, setStatus] = useState(false);

  const countdown = useRef();

  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        if (time === 0) {
          audio.play();
          if (title === "break") {
            setTitle("end");
            editClass(countdown, "end", "break");
            setTime(0);
            clearInterval(interval);
            setPlay(false);
          } else {
            setTitle("break");
            setTime(300);
            setStatus("break");
            editClass(countdown, "break", "active");
          }
        } else {
          setTime(time - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [play, time, title]);

  const onClickPlay = () => {
    if (status === false) setInitialTime(time);
    setPlay(true);
    if (status === "break") {
      setTitle("break");
      editClass(countdown, "break", undefined);
    } else {
      setTitle(`${status ? status : "work"}`);
      editClass(countdown, status === "break" ? "break" : "active", undefined);
    }
  };

  const onClickPause = () => {
    setPlay(false);
    setStatus(title);
    setTitle("setup");
    countdown.current.classList = "countdown__box";
  };

  const onClickForward = () => {
    if (title === "work") {
      editClass(countdown, "break", "active");
      setTime(300);
      setStatus("break");
    } else {
      editClass(countdown, "end", "break");
      setTime(0);
      setPlay(false);
    }
    setTitle(`${title === "work" ? "break" : "end"}`);
  };

  const onClickReset = () => {
    countdown.current.classList = "countdown__box";
    setTitle("setup");
    setPlay(false);
    setTime(initialTime);
  };

  const onClickAdd = () => {
    setTime(time + 1);
  };

  const onClickRemove = () => {
    setTime(time === 0 ? 0 : time - 1);
  };

  const onClickRestart = () => {
    editClass(countdown, "active", "end");
    setTitle("work");
    setPlay(true);
    setTime(initialTime);
  };

  const onClickConfig = () => {
    editClass(countdown, undefined, "end");
    setTitle("setup");
    setTime(initialTime);
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">Pomodoro</h1>
      </header>
      <main className="main">
        <Countdown ref={countdown} time={time} />
        <Title title={title} />
        <Controls
          onClickPlay={onClickPlay}
          onClickPause={onClickPause}
          onClickForward={onClickForward}
          onClickReset={onClickReset}
          onClickAdd={onClickAdd}
          onClickRemove={onClickRemove}
          onClickRestart={onClickRestart}
          onClickConfig={onClickConfig}
          state={title}
        />
      </main>
      <footer title="Go to my Github" className="footer">
        <a href="https://github.com/MrSociety404">MrSociety404</a>
      </footer>
    </>
  );
};

export default App;
