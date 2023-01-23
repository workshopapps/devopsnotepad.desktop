import React, { useEffect, useState } from 'react';
import DemoPage from '../DemoPage/DemoPage';
import GetDemo from '../GetDemo/GetDemo';

function Demo() {
  const [demoView, setDemoView] = useState(null);
  useEffect(() => {
    const signedUp = JSON.parse(
      localStorage.getItem('d5339e41-f0c2-46b9-b3bb-038c767c4ebb'),
    )
      ? JSON.parse(localStorage.getItem('d5339e41-f0c2-46b9-b3bb-038c767c4ebb'))
      : false;

    signedUp ? setDemoView(1) : setDemoView(2);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function showDemo() {
    setDemoView(1);
    window.scrollTo(0, 0);
  }

  return demoView ? (
    demoView === 1 ? (
      <DemoPage />
    ) : (
      <GetDemo setDemoView={showDemo} />
    )
  ) : (
    <div></div>
  );
}

export default Demo;
