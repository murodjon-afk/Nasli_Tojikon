import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export default function ArchitectureDetails({ params }: Props) {
  const { slug } = params;

 const buildings: Record<
  string,
  { title: string; description: string; image: string; extra: string }
> = {
  "ismail-samani": {
    title: "Мавзолей Исмаила Самани",
    description:
      "🕌 Мавзолей Исмаила Самани — шедевр X века, возведённый в Бухаре при правлении династии Саманидов (819–999 гг.). Его построили таджикские мастера по приказу Насра ибн Ахмада в честь своего отца — эмира Исмаила Самани. Это не просто гробница, а **первое монументальное здание из обожжённого кирпича в исламском Востоке**, где каждая деталь отражает философию вечности и веры.",
    image: "/ismail-samani.jpg",
    extra:
      "✨ Архитекторы Саманидов применили уникальную систему геометрической кладки, создавая орнаменты без глазури и штукатурки. Купол мавзолея символизирует небо, а квадратное основание — землю. Именно здесь началась история таджикской национальной архитектуры.",
  },

  "ark-bukhara": {
    title: "Арк Бухары",
    description:
      "🏰 Арк — древняя крепость и сердце старой Бухары. Первые укрепления были возведены ещё в V веке таджикскими строителями эпохи Согдианы. Позже, при Саманидах и Караханидaх, цитадель обрела монументальный облик и стала резиденцией бухарских эмиров — **политическим и культурным центром Средней Азии**.",
    image: "/ark.jpg",
    extra:
      "🌅 Здесь жили учёные, поэты и зодчие — в том числе Рудаки и Абу Али ибн Сина (Авиценна). За массивными стенами Арка вершились судьбы народов, а архитектура сохранила отпечаток разных эпох — от персидско-таджикских форм до исламского орнамента XIV века.",
  },

  "magoki-attari": {
    title: "Мечеть Магоки-Аттари",
    description:
      "🕌 Мечеть Магоки-Аттари — одно из старейших культовых зданий Средней Азии, построенное в IX веке таджикскими мастерами Саманидского периода. Она возведена на месте древнего зороастрийского храма, где поклонялись Анахите — богине воды и плодородия.",
    image: "/attari.jpg",
    extra:
      "🌙 Архитектура мечети уникальна — вход расположен ниже уровня земли, откуда и название «Магоки» (в переводе — «в яме»). Орнаменты из обожжённого кирпича, геометрические узоры и гармония линий отражают **переход от доисламской традиции к исламскому искусству**. Сегодня Магоки-Аттари признана объектом Всемирного наследия ЮНЕСКО.",
  },

  registan: {
    title: "Регистан",
    description:
      "🌄 Регистан — сердце Самарканда и одно из величайших творений таджикско-персидского зодчества. Его ансамбль формировался с XV по XVII века и включал три медресе: Улугбека, Шердор и Тилля-Кори. Первое было построено в 1420 году по приказу великого астронома и правителя Улугбека — внука Амир Тимура.",
    image: "/registan.jpg",
    extra:
      "💠 В декоре Регистана переплелись таджикские, персидские и тюркские мотивы. Мастера из Самарканда и Герата создали **«камень, поющий о знаниях»** — символ науки, веры и красоты. Сегодня Регистан считается одним из самых гармоничных архитектурных ансамблей исламского мира.",
  },

  hissar: {
    title: "Гиссарская крепость",
    description:
      "🏯 Гиссарская крепость расположена недалеко от Душанбе и считается одной из древнейших в Таджикистане. Её первые укрепления датируются ещё I тысячелетием до н.э., когда эти земли входили в состав Бактрии. Позже крепость перестраивалась при Сасанидaх, Саманидах и Бухарском эмирате.",
    image: "/hissar.jpg",
    extra:
      "🔥 Ворота крепости с двойными арками, мечеть XIX века и караван-сарай — всё это свидетельства **величия таджикской архитектуры**, которая соединяет античные и исламские традиции. Гиссар был не только военным, но и культурным центром региона, хранящим память тысячелетий.",
  },
};


  const building = buildings[slug];
  if (!building) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7f6f0] to-[#e7e3d7] flex flex-col items-center justify-center px-6 pt-30 pb-16">
      <article className="max-w-5xl mx-auto w-full bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40 transition hover:shadow-[0_0_40px_rgba(0,0,0,0.1)]">
        {/* Верхнее фото с эффектом */}
        <div className="relative group">
          <Image
            src={building.image}
            alt={building.title}
            width={1200}
            height={700}
            className="w-full h-[460px] object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center px-6 pb-8">
              {building.title}
            </h1>
          </div>
        </div>

        {/* Текстовая часть */}
        <div className="p-10 md:p-14 space-y-10">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center">
            {building.description}
          </p>

          {/* 🌫️ Стеклянный блок */}
          <div className="relative bg-white/30 backdrop-blur-lg border border-white/40 shadow-lg p-8 rounded-2xl">
            <blockquote className="text-gray-900 text-lg italic text-center drop-shadow-sm">
              “{building.extra}”
            </blockquote>
          </div>

          <div className="border-t border-gray-200 my-10" />

          <p className="text-gray-600 italic text-center text-base">
            🌸 Эти памятники — не просто камень и кирпич.  
            Это **память, искусство и душа таджикской цивилизации**,  
            отражённые в архитектуре, которая до сих пор говорит с нами языком красоты.
          </p>
        </div>
      </article>
    </main>
  );
}
