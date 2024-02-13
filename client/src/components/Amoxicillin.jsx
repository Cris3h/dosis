"use client";
import { useEffect, useState } from "react";
import { amoxicillin, dropdown, singleDrugFinder } from "@/utils";

function Amoxicillin() {
  const [dosis, setDosis] = useState();
  const [ml, setMl] = useState(250);
  const [amoDosis, setAmoDosis] = useState();

  const [drug, setDrug] = useState();

  const [drugDetails, setDrugDetails] = useState();

  const handleInput = (e) => {
    e.target.value?.lenght > 4
      ? setDosis("wrong input!")
      : setDosis(e.target.value);
  };

  const handleSelect = (ml) => {
    setMl(ml.target.value);
  };

  const handleSubmit = () => {
    const result = amoxicillin(ml, dosis);
    setAmoDosis(result);
  };

  const drugHandleSelect = (e) => {
    setDrug(e?.target.value);
    // setDrugDetails(e?.target.value)
  };

//   console.log(drug);

  useEffect(() => {
    let oneDrug = singleDrugFinder(drug);
    setDrugDetails(oneDrug);
  }, [drug]);

// console.log(drugDetails)

function fixPresentations (element) {
  return element.map((argument) => argument)
}

  return (
    <>
      {/* <div>
        <p> prueba</p>
        <label>
          Choose the doses / elija la dosis
          <select onChange={(e) => drugHandleSelect(e)}>
            {dropdown.map((e, i) => {
              return (
                <option key={i} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </label>
        {drug ? <p>que estado se carga? : {drug}</p> : undefined}
        {drugDetails ?  
        <div>
            <p>{drugDetails.nombre? drugDetails.nombre : 'nada'}</p>
            <p>{drugDetails.dosis? drugDetails.dosis : 'nada'}</p>
            <p>{drugDetails.presentaciones ? `presentaciones: ${fixPresentations(drugDetails.presentaciones)}` : 'no tiene presentaciones'}</p>
        </div>
        : undefined
        }
      </div> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "solid",
          borderRadius: "8px",
          padding: "2rem",
          gap: "2rem",
        }}
      >
        <div style={{ flexDirection: "row" }}>
          <aside style={{ marginBottom: "5px" }}> Amoxicillin: </aside>
          <label style={{ marginBottom: "5px" }}>
            Insert weight / Ingrese peso{" "}
          </label>
          <input
            type="number"
            name="weight"
            onChange={(e) => handleInput(e)}
            style={{ marginBottom: "5px" }}
          />
          <br />
          <label style={{ marginBottom: "5px" }}>ML: </label>
          <select
            name="ml"
            id="amoxicillin"
            onChange={(ml) => handleSelect(ml)}
            style={{ marginBottom: "5px" }}
          >
            <option value="250">250</option>
            <option value="500">500</option>
          </select>
          <br />
          <button
            type="button"
            onClick={() => handleSubmit()}
            style={{ marginBottom: "5px" }}
          >
            consultar
          </button>
        </div>
        <div style={{}}>
          <p style={{ marginBottom: "5px" }}>
            Dosis: {amoDosis ? Math.floor(amoDosis[0]) : "0"}ml / 8hrs
          </p>
          <p> {amoDosis ? Math.floor(amoDosis[1]) : "0"}ml / 12hrs</p>
        </div>
      </div>
    </>
  );
}

export default Amoxicillin;
