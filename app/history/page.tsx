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
            🏛 Таджикская История
          </h1>
          <p className="text-lg text-gray-100 leading-relaxed">

Таджикская культура — одна из древнейших в мире, берущая истоки в цивилизациях 
Согдианы, Бактрии и Хорасана. На этих землях родились торговцы Великого пути, 
поэты, мыслители, учёные и зодчие, которые на протяжении тысячелетий формировали 
восточную цивилизацию.

Таджикская культура — это язык, поэзия, музыка, орнаменты, эпосы и 
империи, которые оставили след от Амударьи до Гиндукуша.  
От согдийских торговцев до Саманидов и Гуридов — каждая эпоха стала 
кирпичом в величественной истории таджикского народа.

Сегодня культура таджиков продолжает жить в городах Бухара, Самарканд, Душанбе, 
в музыке, ремёслах и языке, сохраняя связь с великим прошлым.



<br />
(В нашем проекте показанно часть культуры самые важные даты в истории)
          </p>
        </div>
      </section>



    {/* Таймлайн блок */}
<section className="w-full max-w-5xl my-16">
  <h2 className="text-4xl font-extrabold text-center text-[#2c2a25] mb-12">
    🕰 Таймлайн таджикской культуры и государств
  </h2>

  <div className="relative border-l-4 border-[#c9b27a] pl-8 space-y-14">

    {/* Template for one block */}
    {[
      {
        title: "🏺 I тыс. до н.э — VI в. н.э — Согдиана и Бактрия",
        text: "Согдийцы — торговцы Шелкового пути, создатели собственной письменности, росписи и музыки. Бактрийцы развивали городскую цивилизацию и государственность.",
        slug: "sogd-baktria",
      },
      {
        title: "👑 I–III вв — Кушанское царство",
        text: "Кушаны — восточно-иранская держава. Развитие монетного дела, живописи и буддийской культуры Балха и Тохаристана.",
        slug: "kushan",
      },
      {
        title: "🏛 IX–X вв — Саманидская империя",
        text: "Золотой век таджикской культуры: наука, литература, архитектура. Таджикско-персидский язык как государственный.",
        slug: "samanids",
      },
      {
        title: "⚔️ X–XI вв — Газневиды",
        text: "Газневиды продолжают таджикскую традицию придворной культуры. Фирдоуси завершает «Шахнаме».",
        slug: "ghaznavids",
      },
      {
        title: "🏹 XII–XIII вв — Гуридская империя",
        text: "Таджикская династия правит от Гиндукуша до Индии. Гуриды закладывают основы Дели.",
        slug: "ghurids",
      },
      {
        title: "🌙 XVI–XIX вв — Таджики в Бухарском ханстве",
        text: "Таджики — основа городской культуры Бухары и Самарканда. Их язык — язык науки, религии и поэзии.",
        slug: "bukhara",
      },
      {
        title: "🌟 XX–XXI вв — Современная таджикская культура",
        text: "Возрождение традиций, развитие искусства, литературы, языка. Душанбе становится центром культуры.",
        slug: "modern",
      },
    ].map((item, i) => (
      <div key={i} className="relative">
        <span className="absolute -left-5 top-1 w-3 h-3 bg-[#c9b27a] rounded-full"></span>

        <h3 className="text-2xl font-bold text-[#3d3a33]">{item.title}</h3>

        <p className="text-[#4d4a44] mt-2 leading-relaxed">
          {item.text}
        </p>

        {/* Кнопка «Подробнее» */}
        <Link
          href={`/culture/${item.slug}`}
          className="inline-block mt-4 px-5 py-2 rounded-lg bg-[#c9b27a] text-white font-semibold 
          hover:bg-[#b89f69] transition shadow-md"
        >
          Подробнее →
        </Link>
      </div>
    ))}

  </div>
</section>

    </main>
  );
}
