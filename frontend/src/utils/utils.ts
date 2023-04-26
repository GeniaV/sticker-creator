export const mmToPxConvert = (data: string) => {
  const k = 3.8;
  return +data * k;
}

export const isValidBarcode = (value: string) => {

  if (!value.match(/^(\d{8}|\d{12,14})$/)) {
    return false;
  }

  const paddedValue = value.padStart(14, '0');

  let result = 0;
  for (let i = 0; i < paddedValue.length - 1; i += 1) {
    result += parseInt(paddedValue.charAt(i), 10) * ((i % 2 === 0) ? 3 : 1);
  }

  return ((10 - (result % 10)) % 10) === parseInt(paddedValue.charAt(13), 10);
}
