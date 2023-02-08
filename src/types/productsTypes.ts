export interface productSummary {
  _id: string;
  Amount: string;
  ImageUrl: string;
  Name: string;
  Price: number;
  Size: "P" | "M" | "G";
  tag: [string];
}
