import Image from "next/image";

export default function ContentModes() {
  return (
    <section className="bg-[#ebd682] w-full flex flex-col items-center px-5 py-20 sm:px-8 md:px-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-xl mb-8 text-gray-800 text-center">
  Спецфишки
</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl w-full">
       
<div className="relative group w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg cursor-pointer" >
      {/* Фоновое изображение */}
      <Image
        src="/tajik-adabiyot.png"
        alt="Самарканд"
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

      {/* Полупрозрачный блок снизу */}
      <div className="absolute bottom-0 w-full h-[30%] bg-[#f8b74a] flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold tracking-wide transition-all duration-500 group-hover:scale-105">
        Читать
        </h2>
      </div>
    </div>

     <div className="relative group w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg cursor-pointer" >
      {/* Фоновое изображение */}
      <Image
        src="/tajik-srud.png"
        alt="Самарканд"
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

      {/* Полупрозрачный блок снизу */}
      <div className="absolute bottom-0 w-full h-[30%] bg-[#297789] flex items-center justify-center">
        <h2 className="text-white text-3xl font-bold tracking-wide transition-all duration-500 group-hover:scale-105">
        Слушать
        </h2>
      </div>
    </div>
      </div>
    </section>
  );
}
