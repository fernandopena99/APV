import { create } from "zustand";
import { v } from "../styles/variables";
export const useOperaciones = create((set, get) => ({
  tipo: "i",
  tituloBtnDes: "Categorias ingresos",
  colorCategoria: v.colorIngresos,
  bgCategoria: v.colorbgingresos,
  setTipo: (p) => {
    set({ tipo: p.tipo });
    set({
      tituloBtnDes: p.text,
    });
    set({
      colorCategoria: p.color,
    });
    set({
      bgCategoria: p.bgcolor,
    });
  },
}));
