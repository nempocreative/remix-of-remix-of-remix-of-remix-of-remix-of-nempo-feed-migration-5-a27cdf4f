import { createFileRoute } from "@tanstack/react-router";
import { lazyWithRetry } from "@/lib/lazy-with-retry";
import { AppShell } from "@/components/app-shell";

const Entry = lazyWithRetry(() => import("@/apps/mou/entry-surat-art-center"));

export const Route = createFileRoute("/nempo-mou/surat-art-center")({
  head: () => ({
    meta: [
      { title: "Surat Peminjaman Gedung Art Center — Pasanggiri Road to Pasar Seni 2027" },
      { name: "description", content: "Surat permohonan Nempo kepada Kepala Dinas Pariwisata dan Kebudayaan Kabupaten Garut untuk meminjam Gedung Art Center pada 30–31 Desember 2026." },
      { property: "og:title", content: "Surat Peminjaman Gedung Art Center — Nempo" },
      { property: "og:description", content: "Permohonan peminjaman Gedung Art Center untuk Pasanggiri Jaipong Road to Pasar Seni 2027, 30–31 Desember 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <AppShell app={Entry} />,
});
