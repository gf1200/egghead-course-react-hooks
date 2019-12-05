import React, { useRef, useEffect, useState } from "react";

const TestChild = ({ childRef }) => {
  const [state, setState] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    console.log("tylko raz u dziecka");
    childRef(ref);
  }, []);

  const paragraph = number => <p>paragraph: {number}</p>;

  return (
    <div ref={ref}>
      <h2>Lorem ipsum</h2>
      <button onClick={() => setState(prev => prev + 1)}>
        klikaj: {state}
      </button>
      <ul>
        {[...Array(state)].map((e, i) => {
          return <li key={i}>{i}</li>;
        })}
      </ul>
    </div>
  );
};

export default TestChild;
