import axios, { AxiosResponse } from "axios";
import { productSummary } from "../types";

type typeClothing = {
  Name: string;
  Tag: string;
  Price: number;
  ImageUrl: string;
  Size: "M" | "P" | "G";
  amount: number;
};

export async function getClothing(): Promise<productSummary[]> {
  try {
    //const response = fetch("/api/products");
    const response = axios.get<productSummary[]>("/api/products").then((res) => {
      return res.data;
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}
