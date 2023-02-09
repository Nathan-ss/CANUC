import { productSummary } from "../../types";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getClothing } from "../../services/getClothes";

export const useProductsQuery = () => {
  const queryClient = useQueryClient();

  const loadProducts = async (): Promise<productSummary[]> => {
    try {
      return getClothing();
    } catch (error) {
      console.error(error);
    }
  };

  const queryProducts = useQuery<productSummary[]>({
    queryKey: ["product"],
    queryFn: loadProducts,
    staleTime: 1000 * 60,
    keepPreviousData: true,
    refetchOnWindowFocus: true,
  });
  return { queryClient, queryProducts };
};
