//import { formatResponseType } from "@/types";

import moment from "moment";
//import { mask, unMask } from "remask";

// export const cnpjFormat = (cnpj: string): formatResponseType => {
//   if (isNaN(unMask(cnpj))) {
//     return { valid: false, value: "NaN" };
//   }
//   if ((unMask(cnpj) as string).length > 14) {
//     return { valid: false, value: "InvalidLength" };
//   }

//   const returnValue = mask(unMask(cnpj), ["99.999.999/9999-99"]);
//   return { valid: true, value: returnValue };
// };

// export const cnpjUnFormat = (cnpj: string): formatResponseType => {
//   const characters = Array.from(cnpj);
//   let valid = true;

//   characters.forEach((c) => {
//     const isMatch = c.match("^[0-9\\-./]");

//     if (isMatch == null) {
//       valid = false;
//     }
//   });

//   if (!valid) {
//     return { valid: false, value: "incorrectCharacters" };
//   }

//   const returnValue = unMask(cnpj);
//   return { valid: true, value: returnValue };
// };

export const currencyFormat = (value: string) => {
  const indexOfDot = value.indexOf(".");

  let valorCasaDecimalTexto = value.substring(indexOfDot + 1);

  if (indexOfDot < 0) {
    valorCasaDecimalTexto = "00";
    const valorFormatado = `${value}${valorCasaDecimalTexto}`;
    value = valorFormatado;
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    return `$ ${value}`;
  } else {
    if (valorCasaDecimalTexto.length < 2) {
      valorCasaDecimalTexto = valorCasaDecimalTexto.padEnd(2, "0");
    }
    const valorFormatado = `${value.substring(0, value.indexOf("."))}${valorCasaDecimalTexto}`;

    value = valorFormatado;
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    return `$ ${value}`;
  }
  // value = value
  //   .replace(/^([+-]?\d+)(\.\d+)?$/g, '$1$2')
  //   .replace(/[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, '');

  // value = value.replace(/[$?!;:%]/g, '');
  // value = value.replace('.', ',');

  // value = value.replace(/\D/g, '');
  // value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  // value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
};

export const setCurrencyFormat = (value: string) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  return `${value}`;
};
export const currencyUnformat = (value: string) => {
  value = value.replace("R$", "").replace(".", "").replace(",", ".");
  //value = value.replace(/\D/g, '');
  return parseFloat(value);
};

// export const dateFormating = (value: Date | string) => {
//   value = moment(value).format("DD/MM/YYYY");
//   return value;
// };

// export const dateUnFormating = (value: Date | string) => {
//   value = moment(value).format("DD/MM/YYYY-MM-DDTh:mm:ssZ");
//   return value;
// };
