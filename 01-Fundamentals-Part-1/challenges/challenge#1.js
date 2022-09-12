const markWeight1 = 78;
const markHeight1 = 1.69;

const johnWeight1 = 92;
const johnHeight1 = 1.95;

const markWeight2 = 95;
const markHeight2 = 1.88;

const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI1 = markWeight1 / markHeight1 ** 2;
const markBMI2 = markWeight2 / markHeight2 ** 2;

const johnBMI1 = johnWeight1 / johnHeight1 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

const markHiguerBMI1 = markBMI1 > johnBMI1;
const markHiguerBMI2 = markBMI2 > johnBMI2;

console.log({
  markBMI1,
  markBMI2,
  johnBMI1,
  johnBMI2,
  markHiguerBMI1,
  markHiguerBMI2,
});
