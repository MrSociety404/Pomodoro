const Title = ({title}) => {
  return (
    <section className="title">
      <h2 className="title__title">{title}</h2>
      <div className="title__box">
        <div className={`title__step ${title === "work" ? "active" : ""}`}></div>
        <div className={`title__step ${title === "break" ? "break" : ""}`}></div>
        <div className={`title__step ${title === "end" ? "end" : ""}`}></div>
      </div>
    </section>
  );
};

export default Title;
