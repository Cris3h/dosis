//peso x 80 x 5  todo eso dividido 500 y el resultado dividido 3
export const amoxicillin = (ml, w) => {
  if (ml === '500') {
    let first = w * 80 * 5;
    let second = first / 500;
    let eight = second / 3;
    let twelve = second / 2;
    return [eight, twelve];
  }
  if (ml === '250') {
    let first = w * 80 * 5;
    let second = first / 250;
    let eight = second / 3;
    let twelve = second / 2;
    return [eight, twelve];
  }
};
