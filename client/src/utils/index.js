import medicines from "@/utils/medicines.json";
import drugs from "@/utils/drugs.json";

//amoxi
export const amoxicillin = (mg, w) => {
  const constante = 80;
  let calcDosis = (((w * constante) / 3) * 5) / mg;
  let result = calcDosis / 3;

  return result;
};

//amoxicilina + acido clabulanico
export const amoxiClabulanico = (mg, w) => {
  const constante = 40;
  let calcDosis = (((w * constante) / 3) * 5) / mg;
  let result = calcDosis / 3;

  return result;
};

//azitromicina - 1 vez por día
export const azitromicina = (w) => {
  const constante = 10;
  return (((w * constante) / 3) * 5) / 200;
};

//claritromicina
export const claritromicina = (w, mg) => {
  const constante = 15;
  return (((w * constante) / 2) * 5) / mg;
};

export const cefalexina = (w, mg) => {
  const constante = 25;
  return (((w * constante) / 4) * 5) / mg;
};

export const trimetoprimaSulfametoxazol = (w, mg) => {
  // const constante = 25
  // return ((((w * constante) / 4) * 5) ) / mg
  return null;
};

export const penicilinaV = (w) => {
  //ui: 60000 === 1ml
  if (w < 30) {
    let ml = (((w * 50000) / 3) * 5) / 300000; //ui
    return ml; //x 10 dias
  } else {
    let ml = (((w * 50000) / 3) * 5) / 500000; //ui
    return ml; //x 10 dias
  }
};

// --------------------------------------------------------------------------

export const paracetamol = (w) => {
  return 2 * w;
};

export const ibuprofeno = (w, percentage) => {
  return w / percentage; //valores unicos 2 o 4
};

export const dipirona = (type, w) => {
  if (type.toLowerCase() === "injectable") {
    if (w <= 5) {
      return 0.2;
    } else if (w >= 5 && w <= 10) {
      return 0.3;
    } else if (w >= 10 && w <= 15) {
      return 0.4;
    } else if (w >= 15 && w <= 20) {
      return 0.5;
    } else if (w >= 20 && w <= 25) {
      return 0.7;
    } else if (w >= 25 && w <= 30) {
      return 0.8;
    } else if (w >= 30 && w <= 35) {
      return 1;
    }
    return 2;
  } else {
    return w / 3;
  }
};

export const mebendazol = (type) => {
  let unique = "oxiuros";
  //let group = ['ascharis', 'trichiurus', 'tenias']
  return type.toLowerCase() === unique
    ? "Administer 2.5 ml as a single dose."
    : "Administer 2.5 ml every 12 hours for 3 days, then repeat the treatment after 15 days from the last dose.";
};

//----------------------------------------------------------------------------------


export const difenhidramina = (w, mg) => {
  const constante = 3

  return ((((w * constante) / 3) * 5) / mg)//mg = 12,5 always
};

export const cetirizina = (age) => {
  if(age <= 2) return 5;
  if(age > 2 && age <= 6) return 10 // en total (en gotas) por día. Dosis maxima 2 veces por dia
  return 20 // en total (en gotas) por día. Dosis maxima 2 veces por dia
};


// export const diazepam = (mg, w) => {
//   let ml;
// };

// export const loracepam = () => {};

// export const levetiracetam = () => {};

// export const valproatoSodico = () => {};

// export const fenitoina = () => {};

// export const midazolam = () => {};

export const betametasona = (w) => {
  return w // 3 x dia x 3 dias
};

export const dexametasona = (w) => {
  let constante = 0.3
  let ml = 2
  let mg = 8
  return (((w * constante) * ml) / mg)//mg = 12,5 always
};

export const metoclopramida = () => {
  
};

export const dropdown = medicines.medicamentos.map((e) => {return e.nombre;});

export const singleDrugFinder = (newDrug) => {
  let finder = medicines.medicamentos.find((e) => e.nombre === newDrug);
  return finder;
};
