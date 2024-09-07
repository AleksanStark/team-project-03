import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.circles}>
        <span style={{ '--n': 1 }}></span>
        <span style={{ '--n': 2 }}></span>
        <span style={{ '--n': 3 }}></span>
        <span style={{ '--n': 4 }}></span>
        <span style={{ '--n': 5 }}></span>
        <span style={{ '--n': 6 }}></span>
        <span style={{ '--n': 7 }}></span>
        <span style={{ '--n': 8 }}></span>
        <span style={{ '--n': 9 }}></span>
        <span style={{ '--n': 10 }}></span>
        <span style={{ '--n': 11 }}></span>
        <span style={{ '--n': 12 }}></span>
        <span style={{ '--n': 13 }}></span>
        <span style={{ '--n': 14 }}></span>
        <span style={{ '--n': 15 }}></span>
        <span style={{ '--n': 16 }}></span>
      </div>
    </div>
  );
};

export default Loader;
