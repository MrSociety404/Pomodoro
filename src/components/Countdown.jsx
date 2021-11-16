const Countdown = () => {
  return (
    <section className="countdown">
      <div className="countdown__box">
        <h2 className="countdown__time">
          <span className="countdown__time-minutes">20</span>:
          <span className="countdown__time-seconds">00</span>
        </h2>
        <p className="countdown__desc">minutes</p>
      </div>
    </section>
  );
};

export default Countdown;
