function pad(n) {
  return n.toString().padStart(2, "0");
}

export const HORA_APERTURA = "10:30";
export const HORA_CIERRE = "22:00";
export const HORARIO_TEXTO = "Todos los días, de 10:30 a.m. a 10:00 p.m.";

// Slots cada 30 min desde la apertura hasta 30 min antes del cierre.
export const HORAS_DISPONIBLES = (() => {
  const [openH, openM] = HORA_APERTURA.split(":").map(Number);
  const [closeH, closeM] = HORA_CIERRE.split(":").map(Number);
  const startMin = openH * 60 + openM;
  const endMin = closeH * 60 + closeM - 30;
  const slots = [];
  for (let t = startMin; t <= endMin; t += 30) {
    slots.push(`${pad(Math.floor(t / 60))}:${pad(t % 60)}`);
  }
  return slots;
})();

export function formatFecha(isoDate) {
  if (!isoDate) return "";
  const [y, m, d] = isoDate.split("-");
  return `${d}/${m}/${y}`;
}
