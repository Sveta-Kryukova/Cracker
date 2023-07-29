import { ChangeEvent, useEffect, useState } from "react";
import { PackComponent } from "../packComponent";
import { CartButton } from "../cartButton";
import { addToCart } from '../../store/cart';
import { useTypedSelector, useAppDispatch } from '../../store';
import { CartItem } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames'; 

export const CrackerConstructor = () => {
  const dispatch = useAppDispatch();

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

  const updateInputValues = (newValue1: number, newValue2: number, newValue3: number) => {
    const sum = newValue1 + newValue2 + newValue3;
    if (sum < 100) {
      const remainingPercentage = 100 - sum;
      setValue4(remainingPercentage);
    } else {
      setValue4(0);
    }
  };
  
  const handleFirstValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (newValue >= 0 && newValue <= 100) {
      setValue1(newValue);
      updateInputValues(newValue, value2, value3);
    }
  };
  
  const handleSecondValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (newValue >= 0 && newValue <= 100 - value1) {
      setValue2(newValue);
      updateInputValues(value1, newValue, value3);
    }
  };
  
  const handleThirdValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (newValue >= 0 && newValue <= 100 - value1 - value2) {
      setValue3(newValue);
      updateInputValues(value1, value2, newValue);
    }
  };
  
  const handleFourthValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (newValue >= 0 && newValue <= 100 - value1 - value2 - value3) {
      setValue4(newValue);
    }
  };

  useEffect(() => {
    if (value1 + value2 + value3 < 100) {
      updateInputValues(value1, value2, value3);
    } else if (value1 + value2 + value3 === 100 && value4 !== 0) {
      setValue4(0);
    }
  }, [value1, value2, value3, value4]);

  const handlePackSizeChange = (size: string) => {
    setSelectedPackSize(size);
  };

  const togglePackComponent = () => {
    setShowPackComponent(!showPackComponent);
  };
  
  const handleAddToCart = () => {
    if (value1+value2+value3+value4===100 && selectedPackSize !== "") {
      const newItem: CartItem = {
        id: uuidv4(),
        value1: value1.toString(),
        value2: value2.toString(),
        value3: value3.toString(),
        value4: value4.toString(),
        selectedPackSize: selectedPackSize,
        weight: selectedPackageInfo?.weight || 0,
        price: selectedPackageInfo?.price || 0,
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
    <div id='cracker-constructor' className="cracker-constructor">
      <h2 className="cracker-constructor__title">cracker constructor</h2>
      <h3 className="cracker-constructor__subtitle">
      Current Value: {currentValue.toFixed(2)}&#8364;
      </h3>

      <div className="cracker-constructor__content">
        <div className="cracker-constructor__content__block-1">
          <div className="cracker-constructor__content__block-1__icon-1" />
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
          <div className="cracker-constructor__content__block-2__icon-2" />
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
          <div className="cracker-constructor__content__block-3__icon-3" />
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
          <div className="cracker-constructor__content__block-4__icon-4" />
          <input
            type="range"
            min='0'
            max={
              (!value1 && !value2 && !value3)
                ? 100
                : (!value1 || !value2 || !value3)
                ? 0
                : 100 - value1 - value2 - value3
            }
            value={value4}
            className="cracker-constructor__content__block-4__input-4"
            onChange={handleFourthValueChange}
          />
          <p className="cracker-constructor__content__block-4__value">
          {value4} %
          </p>
        </div>
        <div className="cracker-constructor__content__block-5">
          <div className="cracker-constructor__content__block-5__wrapper">
            <div className="cracker-constructor__content__block-5__wrapper__icon-5" />
            <button
              className={classNames('cracker-constructor__content__block-5__wrapper__choose-button', { 'rotate': showPackComponent })}
              onClick={togglePackComponent}
            >
              choose your pack
            </button>
          </div>
          {selectedPackSize !== "" ? (
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