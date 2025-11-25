'use client';

import Image from "next/image";
import Link from "next/link";

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-[#f7f6f0] flex flex-col items-center px-6 py-25">
      <section
        className="relative rounded-[20px] max-w-6xl flex items-center justify-center text-center 
        bg-[url('/registan.jpg')] bg-cover bg-center overflow-hidden my-10"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="relative z-10 max-w-6xl w-full rounded-[20px] space-y-6 
          bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg py-8 px-6"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
            🏛 Персидско-таджикская архитектура
          </h1>
          <p className="text-lg text-gray-100 leading-relaxed">

Персидско-таджикская архитектура — это душа Востока, воплощённая в камне и свете.
Она зародилась на землях древней Бактрии, Согдианы и Хорасана, где жили предки современных таджиков, и на протяжении веков развивалась как искусство гармонии между небом и землёй.

Каждое здание — будь то мавзолей Саманидов, медресе Регистана или крепость Гиссара — не просто сооружение. Это поэма о вечности, написанная в узорах кирпича и керамики.
Таджикские мастера владели секретом живого орнамента: геометрия, свет и тень создавали ощущение дыхания — будто стены сами молятся.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full auto-rows-[250px]">
        <Link
          href="/architecture/ismail-samani"
          className="relative group overflow-hidden rounded-2xl transition-transform hover:scale-105"
        >
          <Image
            src="/ismail-samani.jpg"
            alt="Мавзолей Исмаила Самани"
            fill
            className="object-cover transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 text-white font-semibold drop-shadow-md">
            Мавзолей Исмаила Самани
          </div>
        </Link>

        <Link
          href="/architecture/ark-bukhara"
          className="relative group overflow-hidden rounded-2xl transition-transform hover:scale-105"
        >
          <Image
            src="/ark.jpg"
            alt="Арк Бухары"
            fill
            className="object-cover transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 text-white font-semibold drop-shadow-md">
            Арк, Бухары
          </div>
        </Link>

        <Link
          href="/architecture/magoki-attari"
          className="relative group overflow-hidden rounded-2xl transition-transform hover:scale-105"
        >
          <Image
            src="/attari.jpg"
            alt="Магоки-Аттари"
            fill
            className="object-cover transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 text-white font-semibold drop-shadow-md">
            Магоки-Аттари
          </div>
        </Link>

        <Link
          href="/architecture/registan"
          className="relative group overflow-hidden rounded-2xl sm:col-span-2 transition-transform hover:scale-105"
        >
          <Image
            src="/registan.jpg"
            alt="Регистан"
            fill
            className="object-cover transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 text-white font-semibold drop-shadow-md">
            Регистан
          </div>
        </Link>

        {/* 5 */}
        <Link
          href="/architecture/hissar"
          className="relative group overflow-hidden rounded-2xl transition-transform hover:scale-105"
        >
          <Image
            src="/hissar.jpg"
            alt="Гиссарская крепость"
            fill
            className="object-cover transition-transform duration-500"
          />
          <div className="absolute bottom-4 left-4 text-white font-semibold drop-shadow-md">
            Гиссарская крепость
          </div>
        </Link>
      </section>
    </main>
  );
}



