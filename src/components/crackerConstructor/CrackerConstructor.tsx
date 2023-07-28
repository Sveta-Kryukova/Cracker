import React, { ChangeEvent, useEffect, useState } from "react";
import { PackComponent } from "../packComponent";
import { CartButton } from "../cartButton";
import { useAppDispatch } from '../../store'; 
import { addToCart } from '../../store';
import { useTypedSelector } from '../../store';

export const CrackerConstructor = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [showPackComponent, setShowPackComponent] = useState(false);
  const [selectedPackSize, setSelectedPackSize] = useState<string>("");
  const [currentValue, setCurrentValue] = useState<number>(0);

  const totalPrice = useTypedSelector((state) => state.totalPrice);
  const selectedPackageInfo = useTypedSelector((state) => state.packageInfo[selectedPackSize]);

  useEffect(() => {
    const packagePrice = selectedPackageInfo?.price ?? 0;
    setCurrentValue(totalPrice + packagePrice);
  }, [totalPrice, selectedPackageInfo]);
  const dispatch = useAppDispatch();

  const updateInputValues = (value1: number, value2: number, value3: number) => {
    const sum = value1 + value2 + value3;
    if (sum < 100) {
      const remainingPercentage = 100 - sum;
      setValue4(remainingPercentage);
    }
  };

  const isTotalPercentage100 = () => {
    return value1 + value2 + value3 + value4 === 100;
  };

  const handleFirstValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (newValue >= 0 && newValue <= 100) {
      const remainingPercentage = 100 - newValue;
      const percentageForEach = +(remainingPercentage / 3).toFixed();
      setValue1(newValue);
      setValue2(percentageForEach);
      setValue3(percentageForEach);
      setValue4(percentageForEach);
    }
  };

  const handleSecondValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (newValue >= 0 && newValue <= 100 - value1) {
      const remainingPercentage = 100 - +(value1 + newValue).toFixed();
      const percentageForEach = +(remainingPercentage / 2).toFixed();
      setValue2(newValue);
      setValue3(percentageForEach);
      setValue4(percentageForEach);
    }
  };

  const handleThirdValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (newValue >= 0 && newValue <= 100 - value1 - value2) {
      const remainingPercentage = (100 - +(value1 + value2 + newValue).toFixed());
      setValue3(newValue);
      setValue4(remainingPercentage);
    }
  };

  useEffect(() => {
    if (value1 + value2 + value3 < 100) {
      updateInputValues(value1, value2, value3);
    } else if (value1 + value2 + value3 === 100 && value4 !== 0) {
      setValue4(0);
    }
  }, [value1, value2, value3]);

  const handlePackSizeChange = (size: string) => {
    setSelectedPackSize(size);
  };

  const togglePackComponent = () => {
    setShowPackComponent(!showPackComponent);
  };
  
  const handleAddToCart = () => {
    if (isTotalPercentage100() && selectedPackSize !== "") {
      const newItem = {
        value1: value1.toString(),
        value2: value2.toString(),
        value3: value3.toString(),
        value4: value4.toString(),
        selectedPackSize: selectedPackSize,
      };
  
      dispatch(addToCart(newItem));
      setShowPackComponent(false);
      setValue1(0);
      setValue2(0);
      setValue3(0);
      setValue4(0);
      setSelectedPackSize("");
    } else {
      alert("Please make sure all inputs are set to 100% and select a pack size.");
    }
  };
  

  return (
    <div className="cracker-constructor">
      <h2 className="cracker-constructor__title">cracker constructor</h2>
      <h3 className="cracker-constructor__subtitle">
      Current Value: {currentValue.toFixed(2)}&#8364;
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
            onChange={handleFirstValueChange}
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
            max={100 - value1}
            value={value2}
            className="cracker-constructor__content__block-2__input-2"
            onChange={handleSecondValueChange}
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
            max={100 - value1 - value2}
            value={value3}
            className="cracker-constructor__content__block-3__input-3"
            onChange={handleThirdValueChange}
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
            max={(!value1 || !value2 || !value3 ) ? 0 : 100 - value1 - value2 - value3}
            value={value4}
            className="cracker-constructor__content__block-4__input-4"
            readOnly
          />
          <p className="cracker-constructor__content__block-4__value">
            {(!value1 || !value2 || !value3 ) ? 0 : 100 - value1 - value2 - value3} %
          </p>
        </div>
        <div className="cracker-constructor__content__block-5">
          <div className="cracker-constructor__content__block-5__wrapper">
            <div className="cracker-constructor__content__block-5__wrapper__icon-5"></div>
            <button
            className={`cracker-constructor__content__block-5__wrapper__choose-button ${showPackComponent ? 'rotate' : ''}`}
            onClick={togglePackComponent}
          >
            choose your pack
          </button>
          </div>
          {(selectedPackSize !== "" && (value1+value2+value3+value4 === 100)) ? (
            <CartButton onClick={handleAddToCart}/>
          ) : (
            <button
              className="cracker-constructor__content__block-5__add-button"
              onClick={() => alert("Please select a pack size and make sure the total percentage is 100%")}
            >
              +
            </button>
          )}
        </div>
      </div>
      {showPackComponent &&  <PackComponent onSelectPack={handlePackSizeChange} selectedPackSize={selectedPackSize} />}
    </div>
  );
};
