import ListContainer from "@/components/ListContainer";
import { Github, Instagram, Linkedin } from "lucide-react";

const socmed = [
  {
    href: "https://github.com/airlanggapradana",
    icon: <Github opacity={0.5} size={25} />,
  },
  {
    href: "https://instagram.com/iamrangga._",
    icon: <Instagram opacity={0.5} size={25} />,
  },
  {
    href: "https://linkedin.com/in/airlanggapradana",
    icon: <Linkedin opacity={0.5} size={25} />,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-7 sm:p-24">
      <section className="w-full">
        <div className="container mx-auto px-5">
          <div className="space-y-4 mb-4">
            <h1 className="text-xl sm:text-3xl font-bold text-center">
              Cari Sekolah
            </h1>
            <p className="text-base sm:text-lg font-medium text-center text-gray-400">
              Merupakan website untuk mencari sekolah berdasarkan nama sekolah
              maupun NPSN.
            </p>
          </div>
          <ListContainer />

          <div className="space-y-2 mt-4">
            <h1 className="text-sm font-medium text-center text-gray-400 leading-relaxed">
              Website ini dibuat oleh Rangga 👋 <br /> find me on social media
            </h1>

            <div className="flex items-center justify-center gap-3">
              {socmed.map((sosmed, i) => (
                <a
                  key={i}
                  href={sosmed.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-700 rounded-md hover:bg-gray-800"
                >
                  {sosmed.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
