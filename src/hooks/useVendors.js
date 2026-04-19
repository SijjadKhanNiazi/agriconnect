// Ye hook vendors ko area ke hisaab se filter karega
import { useState } from "react";

const mockVendors = [
  {
    id: 1,
    name: "Malik Tractor Service",
    area: "Rokhri",
    tool: "Laser Leveler",
  },
  { id: 2, name: "Khan Agri Store", area: "Piplan", tool: "Thresher" },
];

export const useVendors = (selectedArea) => {
  const filtered = selectedArea
    ? mockVendors.filter((v) => v.area === selectedArea)
    : mockVendors;

  return { vendors: filtered };
};
