import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="bg-[#f7f6f0] w-full flex flex-col items-center px-5 py-10 sm:px-8 md:px-10">
         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-xl mb-8 text-gray-800 text-center">
Категории</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl auto-rows-[200px] sm:auto-rows-[260px] lg:auto-rows-[320px]">
   <Link
          href="/architecture"
          className="relative group rounded-2xl overflow-hidden cursor-pointer sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
            <Image src="/historical.jpg" alt="Как читать архитектуру" fill priority className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
          <h2 className="absolute bottom-4 left-4 text-white text-2xl sm:text-3xl font-bold drop-shadow-lg">
            Как читать архитектуру
          </h2>
        </Link>

  <div className="relative group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500">
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
      <Image src="/tajik-cities.png" alt="Города" fill className="object-cover" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
    <h2 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-bold drop-shadow-lg">Города</h2>
  </div>
  <Link
          href="/history"
          className="relative group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
        >
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
      <Image src="/tajiks.png" alt="Кто такие Таджики?" fill className="object-cover" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
    <h2 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-bold drop-shadow-lg">Кто такие Таджики?</h2>
         </Link>


  <div className="relative group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500">
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
      <Image src="/tajik-literarure.png" alt="Традиции и обычаи" fill className="object-cover" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
    <h2 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-bold drop-shadow-lg">
      Литература
    </h2>
  </div>

  <div className="relative group rounded-2xl overflow-hidden cursor-pointer sm:col-span-2 transition-all duration-500">
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
      <Image src="/tajik-musician.png" alt="Праздники и фестивали" fill className="object-cover" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
    <h2 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-bold drop-shadow-lg">
      Музыка 
    </h2>
  </div>
</div>

    </section>
  );
}
