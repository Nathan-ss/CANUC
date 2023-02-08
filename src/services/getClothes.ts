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

export function getClothing() {
  try {
    const response: AxiosResponse = axios.get<productSummary>("/api/products");

    return response;
  } catch (error) {
    console.error(error);
  }
}
