import Image from "next/image";
import Categories  from "./components/categories";
import LeadersList  from "./components/Leaders";
import CovertComunism from "./components/covert-comunism";
import ContentModes  from "./components/ContentModes";
export default function Home() {
  return (
 <>
     <main className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden">

      <section>
        {/* Фон — адаптивное изображение */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/tajik.png"
          alt="Фон о культуре Таджиков"
          fill
          priority
          className="object-cover sm:object-center md:object-top lg:object-center"
        />
      </div>

      {/* Контент с блюром */}
      <div className="relative z-10 flex flex-col items-center justify-center backdrop-blur-lg rounded-2xl p-10 shadow-2xl bg-black/30 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl mb-6">
          Культура Таджиков 
        </h1>

        <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-gray-100 drop-shadow-lg">
          Добро пожаловать в проект, посвящённый богатой истории, искусству и традициям таджикского народа.
          Здесь вы узнаете о древних обычаях, национальной музыке, одежде и архитектуре, сохранивших
          уникальную красоту Востока.
        </p>
      </div>
      </section>


      
    </main>
          <Categories></Categories>
          <LeadersList></LeadersList>
          <CovertComunism></CovertComunism>
          <ContentModes></ContentModes>

</>
  );
}
