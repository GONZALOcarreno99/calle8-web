import { useEffect, useState } from "react";
import { BARBEROS, EXTRAS, SERVICES, whatsappLink } from "../data/site";
import { HORAS_DISPONIBLES, formatFecha } from "../data/horarios";
import { useReservaPreset } from "../context/ReservaContext";
import useReveal from "../hooks/useReveal";

function toLocalDateInput(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const today = toLocalDateInput(new Date());
const inputClass =
  "scroll-mt-24 rounded-full bg-ink border border-line px-5 py-3 text-base md:text-sm text-white normal-case tracking-normal placeholder:text-white/30 focus:outline-none focus:border-gold transition-all duration-300 focus:scale-[1.02] focus:shadow-[0_0_0_3px_rgba(184,147,90,0.15)]";

function Field({ inView, delay, className = "", children }) {
  return (
    <div
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-500 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Reserva() {
  const { preset } = useReservaPreset();
  const [headerRef, headerInView] = useReveal();
  const [formRef, formInView] = useReveal();
  const [form, setForm] = useState({
    nombre: "",
    barbero: "Sin preferencia",
    paqueteId: "",
    corte: "",
    extras: [],
    fecha: "",
    hora: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!preset.barbero && !preset.paqueteId) return;
    setForm((f) => ({
      ...f,
      barbero: preset.barbero || f.barbero,
      paqueteId: preset.paqueteId || f.paqueteId,
    }));
  }, [preset.barbero, preset.paqueteId]);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function toggleExtra(nombre) {
    setForm((f) => ({
      ...f,
      extras: f.extras.includes(nombre) ? f.extras.filter((x) => x !== nombre) : [...f.extras, nombre],
    }));
  }

  const paquete = SERVICES.find((s) => s.id === form.paqueteId);
  const extrasSeleccionados = EXTRAS.filter((e) => form.extras.includes(e.nombre));
  const total = (paquete?.precio || 0) + extrasSeleccionados.reduce((sum, e) => sum + e.precio, 0);

  function buildMessage() {
    const lines = [
      "✂️ *Nueva reserva — Barbería Calle Ocho*",
      "",
      `👤 *Nombre:* ${form.nombre}`,
      `💈 *Barbero:* ${form.barbero}`,
    ];
    if (paquete) lines.push(`📦 *Paquete:* ${paquete.nombre} (S/${paquete.precio})`);
    if (form.corte) lines.push(`✨ *Corte o estilo:* ${form.corte}`);
    if (extrasSeleccionados.length) {
      lines.push(`➕ *Extras:* ${extrasSeleccionados.map((e) => `${e.nombre} (S/${e.precio})`).join(", ")}`);
    }
    if (form.fecha) lines.push(`📅 *Día preferido:* ${formatFecha(form.fecha)}`);
    if (form.hora) lines.push(`🕒 *Hora preferida:* ${form.hora}`);
    if (total > 0) {
      lines.push("", `💰 *Total estimado:* S/ ${total}`);
    }
    lines.push("", "¿Está disponible ese día y hora? 🙌");
    return lines.join("\n");
  }

  function triggerError(message) {
    setError("");
    requestAnimationFrame(() => setError(message));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.nombre.trim()) {
      triggerError("Escribe tu nombre completo.");
      return;
    }
    if (!form.fecha) {
      triggerError("Elige el día que prefieres.");
      return;
    }
    if (form.fecha < today) {
      triggerError("Elegiste un día anterior a hoy. Por favor selecciona una fecha válida.");
      return;
    }
    if (!form.hora) {
      triggerError("Elige la hora que prefieres.");
      return;
    }
    setError("");
    window.open(whatsappLink(buildMessage()), "_blank", "noreferrer");
  }


  return (
    <section id="reserva" className="relative py-24 px-5 overflow-hidden">
      <div className="animate-breathe pointer-events-none absolute top-0 right-1/4 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative max-w-3xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="eyebrow uppercase text-gold text-xs md:text-sm mb-4">Reserva</p>
          <h2 className="font-display text-5xl md:text-6xl">AGENDA TU CITA</h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold" />
          <p className="text-white/50 mt-5 max-w-lg mx-auto text-sm">
            Cuéntanos qué corte quieres, con quién y cuándo prefieres venir. Te confirmamos disponibilidad por WhatsApp.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`rounded-[2rem] border border-line bg-panel p-7 md:p-10 [color-scheme:dark] transition-all duration-700 ease-out hover:border-gold/30 ${
            formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Field inView={formInView} delay={0}>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.15em] text-white/50">
                Nombre completo
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) => update("nombre", e.target.value)}
                  placeholder="Tu nombre"
                  className={inputClass}
                />
              </label>
            </Field>

            <Field inView={formInView} delay={70}>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.15em] text-white/50">
                Paquete
                <select
                  value={form.paqueteId}
                  onChange={(e) => update("paqueteId", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Elige un paquete</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.nombre} — S/{s.precio}
                    </option>
                  ))}
                </select>
              </label>
            </Field>

            <Field inView={formInView} delay={140} className="sm:col-span-2">
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.15em] text-white/50">
                Corte o estilo deseado
                <input
                  type="text"
                  value={form.corte}
                  onChange={(e) => update("corte", e.target.value)}
                  placeholder="Ej: Fade bajo con diseño"
                  className={inputClass}
                />
              </label>
            </Field>

            <Field inView={formInView} delay={210}>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.15em] text-white/50">
                Día preferido
                <input
                  type="date"
                  min={today}
                  value={form.fecha}
                  onChange={(e) => update("fecha", e.target.value)}
                  className={inputClass}
                />
              </label>
            </Field>

            <Field inView={formInView} delay={280}>
              <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.15em] text-white/50">
                Hora preferida
                <select value={form.hora} onChange={(e) => update("hora", e.target.value)} className={inputClass}>
                  <option value="">Elige una hora</option>
                  {HORAS_DISPONIBLES.map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
              </label>
            </Field>
          </div>

          <Field inView={formInView} delay={350} className="mt-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.15em] text-white/50">Barbero</span>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => update("barbero", "Sin preferencia")}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-3 transition-all duration-300 active:scale-95 ${
                    form.barbero === "Sin preferencia"
                      ? "border-gold bg-gold/10 animate-pop"
                      : "border-line hover:border-white/40 hover:-translate-y-0.5"
                  }`}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full border text-lg transition-colors ${
                      form.barbero === "Sin preferencia" ? "border-gold text-gold" : "border-line text-white/30"
                    }`}
                  >
                    ?
                  </span>
                  <span
                    className={`text-[11px] text-center leading-tight ${
                      form.barbero === "Sin preferencia" ? "text-gold" : "text-white/70"
                    }`}
                  >
                    Sin preferencia
                  </span>
                </button>

                {BARBEROS.map((b) => {
                  const active = form.barbero === b.nombre;
                  return (
                    <button
                      type="button"
                      key={b.id}
                      onClick={() => update("barbero", b.nombre)}
                      className={`relative flex flex-col items-center gap-2 rounded-xl border p-3 transition-all duration-300 active:scale-95 ${
                        active
                          ? "border-gold bg-gold/10 animate-pop"
                          : "border-line hover:border-white/40 hover:-translate-y-0.5"
                      }`}
                    >
                      <span
                        className={`h-14 w-14 rounded-full overflow-hidden ring-2 transition-colors ${
                          active ? "ring-gold" : "ring-transparent"
                        }`}
                      >
                        <img src={b.foto} alt={b.nombre} className="h-full w-full object-cover" />
                      </span>
                      <span className={`text-[11px] text-center leading-tight ${active ? "text-gold" : "text-white/70"}`}>
                        {b.nombre.split(" ")[0]}
                      </span>
                      {active && (
                        <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] text-ink">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </Field>

          <Field inView={formInView} delay={420} className="mt-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.15em] text-white/50">Extras (opcional)</span>
              <div className="grid sm:grid-cols-2 gap-2">
                {EXTRAS.map((ex) => {
                  const active = form.extras.includes(ex.nombre);
                  return (
                    <button
                      type="button"
                      key={ex.nombre}
                      onClick={() => toggleExtra(ex.nombre)}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 active:scale-95 ${
                        active
                          ? "border-gold bg-gold/10 animate-pop"
                          : "border-line hover:border-white/40"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] transition-colors ${
                          active ? "border-gold bg-gold text-ink" : "border-white/25 text-transparent"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={`flex-1 text-sm ${active ? "text-gold" : "text-white/70"}`}>{ex.nombre}</span>
                      <span className={`shrink-0 text-sm font-semibold ${active ? "text-gold" : "text-white/40"}`}>
                        S/{ex.precio}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Field>

          {error && (
            <p key={error} className="animate-shake text-red-400 text-xs mt-6 text-center">
              {error}
            </p>
          )}

          <div
            className={`grid overflow-hidden transition-all duration-500 ease-out ${
              total > 0 ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="relative flex justify-between items-baseline border-t border-line pt-6">
                <span className="pointer-events-none absolute top-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                <span className="text-white/60 text-sm">Total estimado</span>
                <span key={total} className="font-display text-3xl text-gold animate-pop">
                  S/ {total}
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={`group/submit relative overflow-hidden w-full rounded-full bg-gold py-4 text-xs uppercase tracking-[0.2em] font-semibold text-ink transition-all duration-300 hover:bg-gold-light active:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-20px_rgba(184,147,90,0.7)] active:scale-[0.98] ${
              total > 0 ? "mt-6" : "mt-8"
            }`}
          >
            <span className="relative z-10">Enviar reserva por WhatsApp</span>
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-white/30 skew-x-[-15deg] transition-transform duration-700 group-hover/submit:translate-x-[320%]" />
          </button>
          <p className="text-white/30 text-xs text-center mt-4">
            Tu reserva queda sujeta a confirmación del barbero según disponibilidad real.
          </p>
        </form>
      </div>
    </section>
  );
}
