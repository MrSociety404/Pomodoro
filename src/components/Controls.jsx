import Button from "./Button";

const Controls = ({state}) => {
  return (
    <section className="controls">
      <Button icon="IoRemove" />
      <Button icon="IoPlayOutline" />
      <Button icon="IoAdd" />
    </section>
  );
};

export default Controls;
