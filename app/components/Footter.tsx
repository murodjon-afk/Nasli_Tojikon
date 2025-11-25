'use client';
import Link from "next/link"; 
import Image from 'next/image';
export default function Footer() {
  return (
    <footer
      className="relative w-full text-white py-10 border-t border-white/20 overflow-hidden"
      style={{
        backgroundImage: "url('/tajik-footer.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

      <div className="absolute top-0 left-0 w-full h-1  blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl font-bold tracking-wide drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] flex items-center gap-[10px]">
             <Image
                    src="/logo.png" // картинка в папке public
                    alt="Логотип"
                    width={50} // обязательно число
                    height={50} // обязательно число
                  />
            <span className="text-yellow-400">Darvesh</span> 
          </h2>
          <p className="text-sm text-white max-w-xs leading-relaxed">
            Платформа, посвящённая сохранению и популяризации культуры таджикского народа —
            музыке, литературе, архитектуре и истории.
          </p>
        </div>

      <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
      <Link href="/music" className="hover:text-yellow-400 transition-colors">
        Музыка
      </Link>
      <Link href="/history" className="hover:text-yellow-400 transition-colors">
        История
      </Link>
      <Link href="/architecture" className="hover:text-yellow-400 transition-colors">
        Архитектура
      </Link>
      <Link href="/literature" className="hover:text-yellow-400 transition-colors">
        Литература
      </Link>
    </nav>
        <div className="flex justify-center md:justify-end gap-5">
          <a
            href="https://www.instagram.com/kulturatajikistana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            aria-label="Instagram"
            className="hover:text-yellow-400 transition-all hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.75 2.75h8.5A5.75 5.75 0 0 1 22 8.5v7a5.75 5.75 0 0 1-5.75 5.75h-8.5A5.75 5.75 0 0 1 2 15.5v-7A5.75 5.75 0 0 1 7.75 2.75zM16.5 7h.008v.008H16.5V7zM12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z"
              />
            </svg>
          </a>
    <a
            href="https://www.instagram.com/sumanaab?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            aria-label="Instagram"
            className="hover:text-yellow-400 transition-all hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.75 2.75h8.5A5.75 5.75 0 0 1 22 8.5v7a5.75 5.75 0 0 1-5.75 5.75h-8.5A5.75 5.75 0 0 1 2 15.5v-7A5.75 5.75 0 0 1 7.75 2.75zM16.5 7h.008v.008H16.5V7zM12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z"
              />
            </svg>
          </a>    <a
            href="https://www.instagram.com/tajiks___04?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            aria-label="Instagram"
            className="hover:text-yellow-400 transition-all hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.75 2.75h8.5A5.75 5.75 0 0 1 22 8.5v7a5.75 5.75 0 0 1-5.75 5.75h-8.5A5.75 5.75 0 0 1 2 15.5v-7A5.75 5.75 0 0 1 7.75 2.75zM16.5 7h.008v.008H16.5V7zM12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z"
              />
            </svg>
          </a>
         
        </div>
      </div>

      <div className="relative z-10 mt-8 text-center text-white text-xs border-t border-white/20 pt-4">
        © 2025 <span className="text-yellow-400">Darvesh</span> — Все права защищены.
        <br className="sm:hidden" />
        <span className="text-white">
          Сделано чтобы улучшить культурное наследия таджиков
        </span>
      </div>
    </footer>
  );
}



