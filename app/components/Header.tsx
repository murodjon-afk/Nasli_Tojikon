'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-black/30 backdrop-blur-md text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Лого */}
        <Link
      href="/"
      className="flex items-center gap-1 text-2xl font-bold tracking-wide hover:scale-105 transition-transform duration-300"
    >
      <h1>
        <span className="text-yellow-400">Nasli</span>{" "}
        <span className="text-white">Tojikon</span>
      </h1>
    </Link>
        {/* Десктоп меню */}
       <nav className="hidden md:flex gap-8 text-sm font-medium">
      <Link href="/" className="hover:text-yellow-400 transition-colors">
        Музыка
      </Link>
      <Link href="/history" className="hover:text-yellow-400 transition-colors">
        История
      </Link>
      <Link href="/architecture" className="hover:text-yellow-400 transition-colors">
        Архитектура
      </Link>
      <Link href="/" className="hover:text-yellow-400 transition-colors">
        Литература
      </Link>
    </nav>

        {/* Кнопка меню (мобильная) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white hover:text-yellow-400 transition-colors"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            // Иконка "закрыть"
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Иконка "меню"
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Мобильное меню с blur эффектом */}
      <div
        className={`md:hidden backdrop-blur-xl bg-white/10 text-center overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-60 py-4" : "max-h-0 py-0"
        }`}
      >
       <nav className="flex flex-col gap-4 text-lg font-medium">
      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400 transition-colors"
      >
        Музыка
      </Link>
      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400 transition-colors"
      >
        История
      </Link>
      <Link
        href="/architecture"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400 transition-colors"
      >
        Архитектура
      </Link>
      <Link
        href="/"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400 transition-colors"
      >
        Литература
      </Link>
    </nav>
        
      </div>
    </header>
  );
}
