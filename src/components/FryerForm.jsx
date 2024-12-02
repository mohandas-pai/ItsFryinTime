import React, {  useState } from "react";
import { grey } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const FryerForm = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [userTemp, setUserTemp] = useState(190);
    const [userTime, setUserTime] = useState(12);
    const [temp, setTemp] = useState(170);
    const [time, setTime] = useState(9);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const handleInputChange = (e, setFunction) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setFunction(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedValue=="a")
    {
        setTemp(userTemp-20);
        setTime(userTime*0.75);
    }
    if(selectedValue=="b")
    {
        setTemp(userTemp-25);
        setTime(userTime*0.75);
    }
    
  };

  return (
        <form className="fryer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Enter Temperature</label>
          <input type="number" className="form-input" required value={userTemp}
              onChange={(e) => handleInputChange(e, setUserTemp)}/>
          <label className="form-label">Enter Time (in Minutes)</label>
          <input type="number" className="form-input" required value={userTime}
              onChange={(e) => handleInputChange(e, setUserTime)}/>
          <div className="form-radio-button">
          <RadioGroup
            row
            name="position"
            defaultValue="top"
            color='#f1f1f1'
          >

          <FormControlLabel
                    value="celcius"
                    control={<Radio
                      {...controlProps('a')}
                      sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }}
                    />}
                    label="°C"
                    labelPlacement="bottom"
          />

          <FormControlLabel
                    value="farenheit"
                    control={<Radio
                      {...controlProps('b')}
                      sx={{
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                      }}
                    />}
                    label="°F"
                    labelPlacement="bottom"
          />

          </RadioGroup>
            
          </div>

          <button type="submit" className="submit-button">Its Fryin Time</button>

          <p className="fryer-result">Set fryer to  {temp}°C for {time} minutes</p>
        </div>
      </form>
  )
}

export default FryerForm