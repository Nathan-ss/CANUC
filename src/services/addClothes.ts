import axios from "axios";

type typeClothing = {
  Name: string;
  Tag: string;
  Price: number;
  ImageUrl: string;
  Size: "M" | "P" | "G";
  amount: number;
};

export function addClothing(dataClothing: typeClothing) {
  axios
    .post("/api/addClothing", { dataClothing })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
}
