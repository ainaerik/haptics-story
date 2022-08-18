import { IPanelContent } from "../CollapsePanel/index";
import SliderInput from "../SliderInput";

export const getMockPanelContent = (): IPanelContent[] => [
  {
    key: "amplitude",
    title: "Amplitude",
    content: (
      <div>
        <SliderInput
          label="Number of periods"
          value={0}
          min={-1}
          max={1}
          step={0.01}
        />
        <SliderInput label="Phase" value={0} min={-1} max={1} step={0.01} />
        <SliderInput label="Amplitude" value={0} min={-1} max={1} step={0.01} />
        <SliderInput label="Offset" value={0} min={-1} max={1} step={0.01} />
      </div>
    ),
    onClick: () => {
      console.log("Amplitude");
    },
  },
  {
    key: "transient",
    title: "Transient",
    content: (
      <div>
        <SliderInput label="X Axis" value={0} min={-1} max={1} step={0.01} />
        <SliderInput label="Y Axis" value={0} min={-1} max={1} step={0.01} />
      </div>
    ),
    onClick: () => {
      console.log("Transient");
    },
  },
  {
    key: "frequency",
    title: "Frequency",
    content: (
      <div>
        <SliderInput label="X Axis" value={0} min={-1} max={1} step={0.01} />
        <SliderInput label="Y Axis" value={0} min={-1} max={1} step={0.01} />
        <SliderInput
          label="Frequency min"
          value={0}
          min={-1}
          max={1}
          step={0.01}
        />
        <SliderInput
          label="Frequency max"
          value={0}
          min={-1}
          max={1}
          step={0.01}
        />
      </div>
    ),
    onClick: () => {
      console.log("Frequency");
    },
  },
  {
    key: "audio",
    title: "Audio",
    content: (
      <div>
        <SliderInput
          label="Visualizer opacity"
          value={50}
          min={0}
          max={100}
          step={1}
          formatter={(value) => `${value}%`}
          parser={(value) => +value!.replace("%", "")}
        />
      </div>
    ),
    onClick: () => {
      console.log("Audio");
    },
  },
];
