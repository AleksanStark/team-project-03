import style from './DailyFormula.module.css';

const DailyFormula = () => {
  return (
    <div>
      <div className={style.divWithFormulas}>
        <p className={style.formula}>
          For girl:
          <span className={style.spanFormula}>V=(M*0,03) + (T*0,4)</span>
        </p>
        <p className={style.formula}>
          For man:
          <span className={style.spanFormula}>V=(M*0,04) + (T*0,6)</span>
        </p>
      </div>
      <p className={style.explanation}>
        <span className={style.star}>*</span> V is the volume of the water norm
        in liters per day, M is your body weight, T is the time of active
        sports, or another type of activity commensurate in terms of loads (in
        the absence of these, you must set 0)
      </p>
    </div>
  );
};

export default DailyFormula;
