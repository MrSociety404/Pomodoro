import Button from "./Button";

const Controls = ({state, onClickPlay, onClickForward, onClickReset, onClickRemove, onClickAdd, onClickConfig, onClickRestart}) => {
  if (state === "work" || state === "break") {
    return (
      <section className="controls">
        <Button icon="IoRefreshOutline" onClick={onClickReset} />
        <Button icon="IoPauseOutline" onClick={onClickPlay} />
        <Button icon="IoPlayForwardOutline" onClick={onClickForward} />
      </section>
    );
  } else if (state === "end") {
    return (
      <section className="controls">
        <Button content="Config" onClick={onClickConfig} />
        <Button content="Restart" onClick={onClickRestart} />
      </section>
    );
  } else {
    return (
      <section className="controls">
        <Button icon="IoRemove" onClick={onClickRemove} />
        <Button icon="IoPlayOutline" onClick={onClickPlay} />
        <Button icon="IoAdd" onClick={onClickAdd} />
      </section>
    );
  }
};

export default Controls;
