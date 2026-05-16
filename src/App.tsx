import { motion } from "framer-motion";
import { Lock, Smartphone, CreditCard } from "lucide-react";
import { ButtonLink } from "./components/ui/button";

const checkoutUrl = "https://santemascupro.mychariow.shop/friendzone";

const pillars = [
  { icon: "🧠", title: "Psychologie", text: "Comprends les dynamiques invisibles qui te bloquent." },
  { icon: "💬", title: "Scripts", text: "Répliques calibrées pour sortir des conversations stériles." },
  { icon: "✍️", title: "Exercices", text: "Actions concrètes pour transformer tes comportements." },
  { icon: "⏳", title: "30 Jours", text: "Un plan guidé pour installer une nouvelle posture." }
];

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#060606] text-white selection:bg-fire/30">
      <section className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 pb-20 pt-16 md:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(229,9,20,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(229,9,20,0.12),transparent_35%)]" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">Échappe à la Friendzone.</h1>
            <p className="max-w-xl text-lg text-zinc-300 md:text-xl">La Friendzone n&apos;est pas une prison. C&apos;est un miroir.</p>
            <ButtonLink href={checkoutUrl} target="_blank" rel="noreferrer" className="group text-lg">
              <span className="relative">
                <span className="absolute inset-0 -z-10 rounded-xl bg-fire/50 blur-xl transition-opacity group-hover:opacity-100" />
                Transforme la dynamique
              </span>
            </ButtonLink>
          </div>

          <motion.div
            className="mx-auto w-full max-w-[360px] [perspective:1200px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ rotateX: -8, rotateY: 12, scale: 1.03 }}
            whileTap={{ scale: 0.99 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="aspect-[2/3] w-full rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-20">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Le Miroir</h2>
        <div className="grid auto-rows-[180px] grid-cols-1 gap-5 md:grid-cols-6">
          {pillars.map((item, i) => (
            <motion.article
              key={item.title}
              className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ${i === 0 ? "md:col-span-4" : "md:col-span-2"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <p className="text-2xl">{item.icon}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#090909]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xl font-semibold">Prêt à inverser la dynamique ?</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2"><Lock size={16} /> Paiement 100% sécurisé</span>
              <span className="inline-flex items-center gap-2"><Smartphone size={16} /> Mobile Money</span>
              <span className="inline-flex items-center gap-2"><CreditCard size={16} /> Carte Bancaire via Chariow</span>
            </div>
          </div>
          <ButtonLink href={checkoutUrl} target="_blank" rel="noreferrer">Transforme la dynamique</ButtonLink>
        </div>
      </footer>
    </main>
  );
}
