import React from "react";

const Countdown = React.forwardRef(({time}, ref) => {

  let mind = time % (60 * 60);
  let minutes = Math.floor(mind / 60);
          
  let secd = mind % 60;
  let seconds = Math.ceil(secd);

  return (
    <section className="countdown">
      <div className="countdown__box" ref={ref}>
        <h2 className="countdown__time">
          <span className="countdown__time-minutes">
            {minutes < 10 ? `0${minutes}`: minutes}</span>:
          <span className="countdown__time-seconds">
            {seconds < 10 ? `0${seconds}`: seconds}</span>
        </h2>
        <p className="countdown__desc">minutes</p>
      </div>
    </section>
  );
});

export default Countdown;
