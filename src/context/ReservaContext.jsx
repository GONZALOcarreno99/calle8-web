import { createContext, useContext, useState } from "react";

const ReservaContext = createContext(null);

export function ReservaProvider({ children }) {
  const [preset, setPresetState] = useState({ barbero: "", paqueteId: "" });

  function setPreset(partial) {
    setPresetState((p) => ({ ...p, ...partial }));
  }

  return (
    <ReservaContext.Provider value={{ preset, setPreset }}>{children}</ReservaContext.Provider>
  );
}

export function useReservaPreset() {
  const ctx = useContext(ReservaContext);
  if (!ctx) throw new Error("useReservaPreset debe usarse dentro de <ReservaProvider>");
  return ctx;
}
