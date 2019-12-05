import React, { useRef, useEffect } from "react";
import TestChild from "./TestChild";

const Test = () => {
  const refChild = useRef(null);
  const childRefCallBack = ({ current }) => (refChild.current = current);

  useEffect(() => {
    console.log("U rodzica");
    console.log(refChild);
  }, []);

  const check = ref => {
    const allRefParagraphs = ref.current.querySelectorAll("li");
    console.log(allRefParagraphs);
    allRefParagraphs.forEach(item => (item.textContent = 100));
  };

  return (
    <div>
      <h1>Header</h1>
      <button onClick={() => check(refChild)}>Sprawdź dziecko</button>
      <TestChild childRef={childRefCallBack} />
    </div>
  );
};

export default Test;
