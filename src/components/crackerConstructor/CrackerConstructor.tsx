import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { PackComponent } from "../packComponent";

export const CrackerConstructor = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [showPackComponent, setShowPackComponent] = useState(false);

  const handleValueChange = (
    event: ChangeEvent<HTMLInputElement>,
    setValue: Dispatch<SetStateAction<number>>
  ) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
  };

  const togglePackComponent = () => {
    setShowPackComponent(!showPackComponent);
  };

  return (
    <div className="cracker-constructor">
      <h2 className="cracker-constructor__title">cracker constructor</h2>
      <h3 className="cracker-constructor__subtitle">
        Current Value: {value1 + value2 + value3 + value4}
      </h3>

      <div className="cracker-constructor__content">
        <div className="cracker-constructor__content__block-1">
          <div className="cracker-constructor__content__block-1__icon-1"></div>
          <input
            type="range"
            min="0"
            max="100"
            value={value1}
            className="cracker-constructor__content__block-1__input-1"
            onChange={(event) => handleValueChange(event, setValue1)}
          />
          <p className="cracker-constructor__content__block-1__value">
            {value1} %
          </p>
        </div>
        <div className="cracker-constructor__content__block-2">
          <div className="cracker-constructor__content__block-2__icon-2"></div>
          <input
            type="range"
            min="0"
            max="100"
            value={value2}
            className="cracker-constructor__content__block-2__input-2"
            onChange={(event) => handleValueChange(event, setValue2)}
          />
          <p className="cracker-constructor__content__block-1__value">
            {value2} %
          </p>
        </div>
        <div className="cracker-constructor__content__block-3">
          <div className="cracker-constructor__content__block-3__icon-3"></div>
          <input
            type="range"
            min="0"
            max="100"
            value={value3}
            className="cracker-constructor__content__block-3__input-3"
            onChange={(event) => handleValueChange(event, setValue3)}
          />
          <p className="cracker-constructor__content__block-3__value">
            {value3} %
          </p>
        </div>
        <div className="cracker-constructor__content__block-4">
          <div className="cracker-constructor__content__block-4__icon-4"></div>
          <input
            type="range"
            min="0"
            max="100"
            value={value4}
            className="cracker-constructor__content__block-4__input-4"
            onChange={(event) => handleValueChange(event, setValue4)}
          />
          <p className="cracker-constructor__content__block-4__value">
            {value4} %
          </p>
        </div>
        <div className="cracker-constructor__content__block-5">
          <div className="cracker-constructor__content__block-5__wrapper">
            <div className="cracker-constructor__content__block-5__wrapper__icon-5"></div>
            <button className="cracker-constructor__content__block-5__wrapper__choose-button" onClick={togglePackComponent}>
              {" "}
              choose your pack{" "}
            </button>
          </div>
          <button className="cracker-constructor__content__block-5__add-button">
            {" "}
            +{" "}
          </button>
        </div>
      </div>
      {showPackComponent && <PackComponent />}
    </div>
  );
};
