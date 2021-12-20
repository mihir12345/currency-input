import React, { FC, useCallback, useState } from "react";
import CurrencyInput from "./currencyInput";

const App: FC = () => {
  const [value, setValue] = useState(0);
  const handleValueChange = useCallback((val) => {
    console.log(val);
    setValue(val);
  }, []);

  return (
    <div>
      <CurrencyInput
        max={100000000}
        onValueChange={handleValueChange}
        value={value}
      />
    </div>
  );
};

export default App;
