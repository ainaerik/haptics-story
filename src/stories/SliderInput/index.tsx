import { FC, useState } from "react";
import { InputNumber, Slider } from "antd";

import "./style.less";

interface SliderInputProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  // formatter={value => `${value}%`}
  formatter?: ((value: number | undefined) => string) | undefined;
  // parser={value => value!.replace('%', '')}
  parser?: ((displayValue: string | undefined) => number) | undefined;
}

const SliderInput: FC<SliderInputProps> = ({
  label,
  value = 0,
  min = -1,
  max = 1,
  step = 0.01,
  formatter,
  parser,
}) => {
  const [inputValue, setInputValue] = useState<number>(value);

  const onChange = (value: number) => {
    if (isNaN(value)) {
      return;
    }

    setInputValue(value);
  };

  return (
    <div className="slider-input">
      <div className="label-input">
        <span className="label">{label}</span>
        <InputNumber
          value={inputValue}
          step={step}
          onChange={onChange}
          formatter={formatter}
          parser={parser}
        />
      </div>
      <Slider
        className="slider"
        min={min}
        max={max}
        value={inputValue}
        step={step}
        onChange={onChange}
      />
    </div>
  );
};

export default SliderInput;
