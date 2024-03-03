import medicines from "@/utils/medicines.json";
import drugs from "@/utils/drugs.json";

export const amoxicillin = (w, mg) => {
  const immutable = 80;
  let calcDosis = (((w * immutable) / 3) * 5) / mg;
  let result = calcDosis / 3;

  return result;
};

export const amoxicillinAC = (w, mg) => {
  const immutable = 40;
  let calcDosis = (((w * immutable) / 3) * 5) / mg;
  let result = calcDosis / 3;

  return result;
};

export const azithromycin = (w) => {
  const immutable = 10;
  return (((w * immutable) / 3) * 5) / 200;
};

export const tms = (w) => {
 const immutable = 12;
  return (((w * immutable) / 2) * 5) / 240
}

export const penicillinV = (w) => {
  //ui: 60000 === 1ml
  if (w < 30) {
    let ml = (((w * 50000) / 3) * 5) / 300000; //ui
    return ml; //x 10 dias
  } else {
    let ml = (((w * 50000) / 3) * 5) / 500000; //ui
    return ml; //x 10 dias
  }
};

export const paracetamol = (w) => {
  return w * 2; // ?
};

export const ibuprofen = (w, percentage) => {
  return w / percentage;
};

export const dipyrone = (w, type) => {
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

export const mebendazole = (type) => {
  let unique = "oxiuros";
  //let group = ['ascharis', 'trichiurus', 'tenias']
  return type.toLowerCase() === unique
    ? "Administer 2.5 ml as a single dose. Repeat 15 days after the last dose."
    : "Administer 2.5 ml every 12 hrs for 3 days, then repeat after 15 days from last dose.";
};

export const diphenhydramine = (w, type) => {
  // const constante = 3;
  //(((w * constante) / 3) * 5) / 12.5  //mg = 12,5 always
  if (type.toLowerCase() === "injectable") {
    return (5 * w) / 10 / 3;
  } else {
    return (5 * w) / 12.5;
  }
};

export const cetirizine = (age) => {
  if (age <= 2) return "Five drops, once a day";
  if (age > 2 && age <= 6){
    return "2,5mg: Ten drops a day (one or two times each day) - 5mg: Ten drops, one time per day - max dose: twice a day"
     // en total (en gotas) por día. Dosis maxima 2 veces por dia
    }
  return "20 drops in total. Max dosis: twice a day"; // en total (en gotas) por día. Dosis maxima 2 veces por dia
};

export const betamethasone = (w) => {
  return w; // 3 x dia x 3 dias
};

export const dexamethasone = (w) => {
  let constante = 0.3;
  let ml = 2;
  let mg = 8;
  return (w * constante * ml) / mg;
};

//---------------------------------------------------
export const hydrocortisone = () => {
  return null;
};

export const metoclopramide = (w, type) => {
  if (type === "injectable") {
    if (w <= 5) return "DO NOT USE THIS DRUG";
    else if (w >= 5 && w <= 10) {
      return "0.2 ml"; //ml
    } else if (w >= 10 && w <= 15) {
      return "0.5 ml";
    } else if (w >= 15 && w <= 20) {
      return "0.7 ml";
    } else if (w >= 20 && w <= 25) {
      return "0.9 ml";
    } else if (w >= 25 && w <= 30) {
      return "1 ml";
    } else if (w >= 30 && w <= 35) {
      return "1.5 ml";
    }
    return "2 ml";
  }
  return `${w} drops`; //1 drop x kg
};

// export const antiparasiticsFinder = (string) => {
//   const antiparasitics = [
//     {
//       name: "mebendazole",
//       function: (type) => {
//         let unique = "oxiuros";
//         //let group = ['ascharis', 'trichiurus', 'tenias']
//         return type.toLowerCase() === unique
//           ? "Administer 2.5 ml as a single dose."
//           : "Administer 2.5 ml every 12 hours for 3 days, then repeat the treatment after 15 days from the last dose.";
//       },
//     },
//   ];

//   return antiparasitics.find((obj) => obj.name === string);
// };
// export const antibioticsFinder = (string) => {
//   const antibiotics = [
//     {
//       name: "amoxicillin",
//       function: (w, mg) => {
//         const constante = 80;
//         let calcDosis = (((w * constante) / 3) * 5) / mg;
//         let result = calcDosis / 3;

//         return result;
//       },
//     },
//     {
//       name: "amoxicillin with clavulanic acid",
//       function: (w, mg) => {
//         const constante = 40;
//         let calcDosis = (((w * constante) / 3) * 5) / mg;
//         let result = calcDosis / 3;

//         return result;
//       },
//     },
//     {
//       name: "azithromycin",
//       function: (w) => {
//         const constante = 10;
//         return (((w * constante) / 3) * 5) / 200;
//       },
//     },
//     {
//       name: "trimethoprim-sulfamethoxazole",
//       function: null,
//     },
//     {
//       name: "penicillin V",
//       function: (w) => {
//         //ui: 60000 === 1ml
//         if (w < 30) {
//           let ml = (((w * 50000) / 3) * 5) / 300000; //ui
//           return ml; //x 10 dias
//         } else {
//           let ml = (((w * 50000) / 3) * 5) / 500000; //ui
//           return ml; //x 10 dias
//         }
//       },
//     },
//   ];

//   return antibiotics.find((obj) => obj.name === string);
// };

// export const antipyreticsFinder = (string) => {
//   const antipyretics = [
//     {
//       name: "paracetamol",
//       function: (w) => {
//         return 2 * w;
//       },
//     },
//     {
//       name: "ibuprofen",
//       function: (w, percentage) => {
//         return w / percentage;
//       },
//     },
//     {
//       name: "dipyrone",
//       function: (w, type) => {
//         if (type.toLowerCase() === "injectable") {
//           if (w <= 5) {
//             return 0.2;
//           } else if (w >= 5 && w <= 10) {
//             return 0.3;
//           } else if (w >= 10 && w <= 15) {
//             return 0.4;
//           } else if (w >= 15 && w <= 20) {
//             return 0.5;
//           } else if (w >= 20 && w <= 25) {
//             return 0.7;
//           } else if (w >= 25 && w <= 30) {
//             return 0.8;
//           } else if (w >= 30 && w <= 35) {
//             return 1;
//           }
//           return 2;
//         } else {
//           return w / 3;
//         }
//       },
//     },
//   ];

//   return antipyretics.find((obj) => obj.name === string);
// };

// export const antihistaminesFinder = (string) => {
//   const antihistamines = [
//     {
//       name: "diphenhydramine",
//       function: (w, mg) => {
//         const constante = 3;

//         return (((w * constante) / 3) * 5) / mg; //mg = 12,5 always
//       },
//     },
//     {
//       name: "cetirizine hydrochloride",
//       function: (age) => {
//         if (age <= 2) return 5;
//         if (age > 2 && age <= 6) return 10; // en total (en gotas) por día. Dosis maxima 2 veces por dia
//         return 20; // en total (en gotas) por día. Dosis maxima 2 veces por dia
//       },
//     },
//   ];
//   return antihistamines.find((obj) => obj.name === string);
// };

// export const anticonvulsantsFinder = (string) => {
//   const anticonvulsants = [];
//   return null;
// };

// export const corticosteroidsFinder = (string) => {
//   const corticosteroids = [
//     {
//       name: "betamethasone",
//       function: (w) => {
//         return w; // 3 x dia x 3 dias
//       },
//     },
//     {
//       name: "dexamethasone",
//       function: (w) => {
//         let constante = 0.3;
//         let ml = 2;
//         let mg = 8;
//         return (w * constante * ml) / mg; //mg = 12,5 always
//       },
//     },
//     {
//       name: "hydrocortisone",
//       function: () => {
//         return null;
//       },
//     },
//   ];
//   return corticosteroids.find((obj) => obj.name === string);
// };

// export const antiemeticsFinder = (string) => {
//   const antiemetics = [
//     {
//       name: "metoclopramide",
//       function: (w, type) => {
//         if (type.toLowerCase() === "injectable") {
//           if (w <= 5) return "DO NOT USE THIS DRUG";
//           else if (w >= 5 && w <= 10) {
//             return 0.2;
//           } else if (w >= 10 && w <= 15) {
//             return 0.5;
//           } else if (w >= 15 && w <= 20) {
//             return 0.7;
//           } else if (w >= 20 && w <= 25) {
//             return 0.9;
//           } else if (w >= 25 && w <= 30) {
//             return 1;
//           } else if (w >= 30 && w <= 35) {
//             return 1.5;
//           }
//           return 2;
//         }
//         return w;
//       },
//     },
//   ];
//   return antiemetics.find((obj) => obj.name === string);
// };

export const functionFinder = (str, medicines) => {
  if (str === "antibiotics") return antibioticsFinder(medicines);
  if (str === "antipyretics") return antipyreticsFinder(medicines);
  if (str === "antiparasitics") return antiparasiticsFinder(medicines);
  if (str === "antihistamines") return antihistaminesFinder(medicines);
  if (str === "anticonvulsants") return anticonvulsantsFinder(medicines);
  if (str === "corticosteroids") return corticosteroidsFinder(medicines);
  if (str === "antiemetics") return antiemeticsFinder(medicines);
};

//----------------------------------------------------------------------------------

//claritromicina
export const claritromicina = (w, mg) => {
  const constante = 15;
  return (((w * constante) / 2) * 5) / mg;
};

export const cefalexina = (w, mg) => {
  const constante = 25;
  return (((w * constante) / 4) * 5) / mg;
};

// export const diazepam = (mg, w) => {
//   let ml;
// };

// export const loracepam = () => {};

// export const levetiracetam = () => {};

// export const valproatoSodico = () => {};

// export const fenitoina = () => {};

// export const midazolam = () => {};

//----------------------------------------------------------------------------------

export const dropdown = medicines.medicamentos.map((e) => {
  return e.nombre;
});

export const singleDrugFinder = (newDrug) => {
  let finder = medicines.medicamentos.find((e) => e.nombre === newDrug);
  return finder;
};
