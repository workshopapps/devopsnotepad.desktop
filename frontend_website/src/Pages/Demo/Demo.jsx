import React, { useEffect, useState } from 'react';
import DemoPage from '../DemoPage/DemoPage';
import GetDemo from '../GetDemo/GetDemo';

function Demo() {
  const [demoView, setDemoView] = useState(false);
  useEffect(() => {
    const signedUp = JSON.parse(
      localStorage.getItem('d5339e41-f0c2-46b9-b3bb-038c767c4ebb'),
    )
      ? JSON.parse(localStorage.getItem('d5339e41-f0c2-46b9-b3bb-038c767c4ebb'))
      : false;

    // if (!signedUp) {
    //   setDemoView(false);
    // }
    signedUp ? setDemoView(true) : setDemoView(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return demoView ? (
    <DemoPage />
  ) : (
    <GetDemo
      setDemoView={() => {
        setDemoView(true);
      }}
    />
  );
}

export default Demo;
