import React, { useEffect, useState } from "react";
import styles from "@/styles/databox.module.css";
import { functionFinder } from "@/utils";
import { componentChooser } from "@/utils/componentChoose";

const DataBox = ({ medGroup, medicine }) => {
  const [singleMedicine, setSingleMedicine] = useState(undefined);
  const [firstInput, setFirstInput] = useState(undefined);
  const [secondInput, setSecondInput] = useState(undefined);

  const [result, setResult] = useState();

  const handleSubmit = (event) => {
    let singleFunction = singleMedicine?.function;

    typeof singleFunction === "function"
      ? setResult(singleFunction(firstInput, secondInput))
      : setResult(<p> Error: please try again</p>);
  };
  // console.log("esto es result", result);

  const handleFirstInput = (event) => {
    let input = event.target.value;
    setFirstInput(input);
  };

  const handleSecondInput = (event) => {
    let input = event.target.value;
    setSecondInput(input);
  };

  useEffect(() => {
    // console.log("corre el useEffect");
    const state = functionFinder(medGroup, medicine);
    state && state !== singleMedicine ? setSingleMedicine(state) : undefined;
  }, []);


  return (
    <div className={styles.boxContainer}>
      {/* <p> we're working for you! </p>
      <br />
      <p>This feature will be available soon</p>
      <br />
      <p>Thank you for ur patience {"<3"}</p> */}
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <label> insert data: </label>
        <input name="first" onChange={(e) => handleFirstInput(e)} />
        <label> insert data: </label>
        <input name="second" onChange={(e) => handleSecondInput(e)} />
        <button type="submit" onClick={handleSubmit}>
          send
        </button>
        <p>{result}</p>
      </div> */}

      {medGroup && medicine ? componentChooser(medicine) : undefined}
    </div>
  );
};

export default DataBox;
