import style from './DailyCalculate.module.css';
import { useState } from 'react';

const DailyCalculate = () => {
  const [weight, setWeight] = useState();
  const [activity, setActivity] = useState();
  const [gender, setGender] = useState('Woman');

  const calculate = () => {
    const M = +weight || 0;
    const T = +activity || 0;

    if (gender === 'Woman') {
      return M * 0.03 + T * 0.4;
    } else {
      return M * 0.04 + T * 0.6;
    }
  };

  const result = calculate();
  const amountOfWater = result.toFixed(1);
  return (
    <div>
      <h4 className={style.calculateTitle}>Calculate your rate:</h4>
      <div className={style.divWithRadioButtons}>
        <div>
          <input
            onChange={() => setGender('Woman')}
            type="radio"
            name="gender"
            checked={gender === 'Woman'}
          />
          <label className={style.gender}>For woman</label>
        </div>
        <div>
          <input
            onChange={() => setGender('Man')}
            type="radio"
            name="gender"
            checked={gender === 'Man'}
          />
          <label className={style.gender}>For man</label>
        </div>
      </div>
      <div className={style.divWithChoiceOfWeight}>
        <p className={style.selectionName}>Your weight in kilograms:</p>
        <input
          className={style.choice}
          onChange={e => setWeight(e.target.value)}
          type="text"
          name="weight"
          placeholder="0"
          value={weight}
        />
      </div>
      <div className={style.divWithChoiceOfActivity}>
        <p className={style.selectionName}>
          The time of active participation in sports or other activities with a
          high physical. load in hours:
        </p>
        <input
          className={style.choice}
          onChange={e => setActivity(e.target.value)}
          type="text"
          name="activity"
          placeholder="0"
          value={activity}
        />
      </div>
      <div className={style.amountOfWater}>
        <p className={style.amountOfWaterTitle}>
          The required amount of water in liters per day:
        </p>
        <p className={style.spanOfAmountOfWater}> {amountOfWater} L</p>
      </div>
    </div>
  );
};

export default DailyCalculate;
