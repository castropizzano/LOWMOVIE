import screenplay from "@/assets/lowmovie-roteiro.pdf.asset.json";
import emblem from "@/assets/lowmovie-estudo-emblema.pdf.asset.json";
export const primaryAccess = [
  { key: "filme", url: "/filme" }, { key: "coletivo", url: "/coletivo" },
  { key: "livro", url: "/livro" }, { key: "arquivo", url: "/arquivo" },
] as const;
export const bookState = { status: "editorial-preparation", author: "Castro Pizzano", brandbookPages: 26 } as const;
export const videoPublications = {
  film: { id: "wcYBh6_DqO8", uploadDate: "2023-04-19T16:00:07-07:00" },
  premiere: { id: "RbsSyBhSHFg", uploadDate: "2023-01-23T06:00:11-08:00" },
  blackView: { id: "YJEW5YB59Ws", uploadDate: "2023-04-28T07:00:11-07:00" },
} as const;
export const inPersonPremiere = { date: "2022-12-16", venue: "Vila Ida", city: "Curitiba", source: "https://www.sympla.com.br/evento/lowmovie-premiere-16-12-22/1816088" } as const;
export const circulationRecords = [
  { key: "lowcard", outlet: "Lowcard", date: "2023-05-03", href: "https://www.lowcardmag.com/video/low-pressure-lowmovie/" },
  { key: "pocket", outlet: "Pocket", date: "2023-05-04", href: "https://pocketskatemag.com/lowmovie/" },
  { key: "blackmedia", outlet: "Black Media", date: "2023-01-23", href: "https://blackmediaskate.com/secoes/eventos/premiere-do-lowmovie-em-curitiba/" },
  { key: "dose", outlet: "Dose Skateboarding", date: "2023-04-28", href: "https://doseskateboarding.com/articles/augusto-akio-interview" },
] as const;
export const harpiaPublication = { authors: ["Castro Pizzano", "Fabiana Pelinson"], year: 2025, issue: 16, pages: "26–48", issueMonth: "2025-07", pagePublished: "2025-08-11", institution: "ISULPAR", page: "https://repositorio.isulpar.edu.br/harpia/article/view/80", pdf: "https://repositorio.isulpar.edu.br/harpia/article/download/80/78" } as const;
export const bookReadingPaths = [
  [{ key: "timeline", href: "/timeline#trajetoria" }, { key: "apresentacao", href: "/apresentacao" }],
  [{ key: "coletivo", href: "/coletivo" }, { key: "zine", href: "/coletivo#lowzine" }],
  [{ key: "conceitos", href: "/conceitos" }, { key: "filme", href: "/filme" }],
  [{ key: "frames", href: "/filme#frames" }, { key: "soundtrack", href: "/filme#trilhas" }],
  [{ key: "emblem", href: new URL(emblem.url, "https://lowmovie.lovable.app").href }, { key: "artbook", href: "/docs/LowMovie_brandbook.pdf" }, { key: "brandbook", href: "/docs/LowPressure_brandbook.pdf" }],
  [{ key: "premiere", href: "/filme#premiere" }, { key: "circulation", href: "/arquivo#circulacao" }, { key: "publications", href: "/conclusao#publicacoes" }],
] as const;
export type ArchiveMaterial = { key: string; href: string; date?: string; dateKey?: string; state: string; image?: string; action?: string };
export const archiveMaterials: ArchiveMaterial[] = [
  { key: "film", href: "/filme", date: "2023", state: "filmState", image: "/images/stills/001.jpg" },
  { key: "ep", href: "https://open.spotify.com/album/74vGlNUZCHtuycS2DR3wXv", state: "filmState", image: "/images/lowbyrinth-ep-cover.jpg", action: "listen" },
  { key: "album", href: "https://open.spotify.com/album/61vLb0sa98Xjr5ZGtDEEiZ", state: "filmState", image: "/images/like-rats-cover.jpg", action: "listen" },
  { key: "zine", href: "/coletivo#lowzine", state: "process", image: "/images/lowzine.png" },
  { key: "artbook", href: "/docs/LowMovie_brandbook.pdf", date: "2022", state: "process", action: "open" },
  { key: "brandbook", href: "/docs/LowPressure_brandbook.pdf", date: "2022", state: "process", action: "open" },
  { key: "script", href: new URL(screenplay.url, "https://lowmovie.lovable.app").href, dateKey: "noDate", state: "proposal", action: "open" },
  { key: "emblem", href: new URL(emblem.url, "https://lowmovie.lovable.app").href, dateKey: "noDate", state: "study", action: "open" },
  { key: "research", href: "/conclusao", date: "2026", state: "process" },
];
export type Interview = { id: string; tKey: string; youtubeId?: string; transcript: string; image?: string; publication?: string; researchRelated?: boolean };
export const interviews: Interview[] = [
  { id: "skate-punk", tKey: "skatePunk", youtubeId: "rOoUJyzGkDY", transcript: "/docs/transcricoes/Skate_Punk_Interview_Transcript.pdf" },
  { id: "black-media", tKey: "blackMedia", youtubeId: videoPublications.blackView.id, publication: videoPublications.blackView.uploadDate, researchRelated: true, transcript: "/docs/transcricoes/Black_Media_Skate_LowMovie_Interview.pdf" },
  { id: "gabriel-peralta", tKey: "peralta", youtubeId: "n7Vu89PzMLE", transcript: "/docs/transcricoes/Gabriel_Peralta_Photos_Interview.pdf" },
  { id: "rafao-vm", tKey: "rafao", youtubeId: "t89iwhuAOjU", transcript: "/docs/transcricoes/Rafao_VM_Skate_Marginal_Interview.pdf" },
  { id: "herzog", tKey: "herzog", youtubeId: "EQLInlnfWUc", transcript: "/docs/transcricoes/Werner_Herzog_Skateboarding_Interview.pdf" },
  { id: "lowzine", tKey: "lowzine", image: "/images/lowzine.png", transcript: "/docs/transcricoes/Entrevista-Transcrita_PIZZANO_Castro_LEITE_Rafael_Auto_Rafao_VM_METRI_Caio_LowZine_LowMovie_LowPressure.pdf" },
];
