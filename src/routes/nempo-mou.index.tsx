import { createFileRoute } from "@tanstack/react-router";
import { lazyWithRetry } from "@/lib/lazy-with-retry";
import { AppShell } from "@/components/app-shell";

const Entry = lazyWithRetry(() => import("@/apps/mou/entry"));

export const Route = createFileRoute("/nempo-mou/")({
  head: () => ({
    meta: [
      { title: "Nota Kesepahaman Nempo × GGS Beauty — MoU" },
      { name: "description", content: "Nota Kesepahaman kerja sama layanan pemasaran dan produksi konten antara Nempo dan GGS Beauty, siap dicetak atau disimpan sebagai PDF." },
      { property: "og:title", content: "Nota Kesepahaman Nempo × GGS Beauty — MoU" },
      { property: "og:description", content: "Nota Kesepahaman kerja sama layanan pemasaran dan produksi konten antara Nempo dan GGS Beauty." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <AppShell app={Entry} />,
});
