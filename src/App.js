import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Slider from "./components/slider/slider";

function App() {
  const defOption = [
    {
      name: "Brightness",
      filter: "brightness",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Contrast",
      filter: "contrast",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Saturation",
      filter: "saturate",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Sepia",
      filter: "sepia",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Blur",
      filter: "blur",
      value: 0,
      range: {
        min: 0,
        max: 20,
      },
      unit: "px",
    },
    {
      name: "Hue",
      filter: "hue-rotate",
      value: 0,
      range: {
        min: 0,
        max: 300,
      },
      unit: "deg",
    }
  ];

  const [image, setImage] = useState(null);
  const [options, setOptions] = useState(defOption);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedOption = options[selectedIndex];

  const handleChange = ({ target }) => {
    setOptions((prevOptions) => {
      return prevOptions.map((opt, index) => {
        if (index !== selectedIndex) return opt;
        return { ...opt, value: target.value };
      });
    });
  };

  const imageFunction = ({ target }) => {
    const imageUrl = URL.createObjectURL(target.files[0]);
    setImage(imageUrl);
  };

  const changeStyle = () => {
    const filters = options.map((opt, index) => {
      return `${opt.filter}(${opt.value}${opt.unit})`;
    });
    return {
      backgroundImage:`url(${image})` ,
      filter: filters.join(" ")
    };
  };
  return (
    <div className="App">
      <div className="main">
        {image ? (
          <div className="image" style={changeStyle()} id="image" ></div>
        ) : (
          <div className="input">
            <h2>Photoshop Clone</h2>
            <input type="file" accept="image/*" onInput={imageFunction} />
          </div>
        )}
      </div>
      <Sidebar
        options={options}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      
      />
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handlechange={handleChange}
      />
    </div>
  );
}

export default App;
