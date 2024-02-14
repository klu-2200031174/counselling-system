import React, { useState } from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div>
      <p>The current state is: {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={handleToggle}>{isOn ? 'Turn OFF' : 'Turn ON'}</button>
    </div>
  );
};

export default Toggle;