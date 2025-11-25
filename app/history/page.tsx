'use client';

import Image from "next/image";
import Link from "next/link";

export default function TimelinePage() {
  const timeline = [
    { id: 4, slug: "sogd-baktria", title: "🏺 I тыс. до н.э — VI в. н.э — Согдиана и Бактрия", text: "Согдийцы — торговцы Шелкового пути, создатели собственной письменности, росписи и музыки. Бактрийцы развивали городскую цивилизацию и государственность." },
    { id: 6, slug: "kushan", title: "👑 I–III вв — Кушанское царство", text: "Кушаны — восточно-иранская держава. Развитие монетного дела, живописи и буддийской культуры Балха и Тохаристана." },
    { id: 1, slug: "samanids", title: "🏛 IX–X вв — Саманидская империя", text: "Золотой век таджикской культуры: наука, литература, архитектура. Таджикско-персидский язык как государственный." },
    { id: 7, slug: "taherids", title: "🏛️ IX в — Тахариды", text: "Тахариды — первая независимая таджикско-персидская династия после арабского завоевания, правившая в Хорасане и Трансоксании. Они возродили персидскую бюрократию и придворную культуру." },
    { id: 2, slug: "ghurids", title: "🏹 XII–XIII вв — Гуридская империя", text: "Таджикская династия правит от Гиндукуша до Индии. Гуриды закладывают основы Дели." },
    { id: 8, slug: "bukhara", title: "🌙 XVI–XIX вв — Таджики в Бухарском ханстве", text: "Таджики — основа городской культуры Бухары и Самарканда. Их язык — язык науки, религии и поэзии." },
    { id: 9, slug: "soviet-era", title: "🏭 XX в — Советское время", text: "В советский период таджики пережили индустриализацию, коллективизацию и потерю двух городов 🏫. Формировались новые города, образование и литература получили развитие, но сохранялись ограничения национальной идентичности и потеря центров всей культуры." },
    { id: 10, slug: "modern", title: "🌟 XX–XXI вв — Современная таджикская культура", text: "Возрождение традиций, развитие искусства, литературы, языка. Душанбе становится центром культуры." },
  ];

  return (
    <main className="min-h-screen bg-[#f7f6f0] flex flex-col items-center px-6 py-24">
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
            восточную цивилизацию.<br /><br />

            Таджикская культура — это язык, поэзия, музыка, орнаменты, эпосы и 
            империи, которые оставили след от Амударьи до Гиндукуша.  
            От согдийских торговцев до Саманидов и Гуридов — каждая эпоха стала 
            кирпичом в величественной истории таджикского народа.<br /><br />

            Сегодня культура таджиков продолжает жить в городах Бухара, Самарканд, Душанбе, 
            в музыке, ремёслах и языке, сохраняя связь с великим прошлым.<br /><br />

            (В нашем проекте показана часть культуры — самые важные даты в истории)
          </p>
        </div>
      </section>

      {/* Таймлайн блок */}
      <section className="w-full max-w-5xl my-16">
        <h2 className="text-4xl font-extrabold text-center text-[#2c2a25] mb-12">
          🕰 Таймлайн таджикской культуры и государств
        </h2>

        <div className="relative border-l-4 border-[#c9b27a] pl-8 space-y-14">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-5 top-1 w-3 h-3 bg-[#c9b27a] rounded-full"></span>
              <h3 className="text-2xl font-bold text-[#3d3a33]">{item.title}</h3>
              <p className="text-[#4d4a44] mt-2 leading-relaxed">{item.text}</p>
              <Link
                href={`/history/${item.slug}`}
                className="inline-block mt-3 px-5 py-2 rounded-lg bg-[#c9b27a] text-white font-semibold hover:bg-[#b89f69] hover:shadow-md transition"
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
