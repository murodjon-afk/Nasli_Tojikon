import Image from "next/image";

export default function CovertComunism() {
  return (
    <section className="bg-[#f7f6f0] w-full flex flex-col items-center px-5 py-10 sm:px-8 md:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-xl mb-8 text-gray-800 text-center">
  Кража Комунизма
</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Бухара */}
        <div className="relative group w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          <Image
            src="/bukhara.jpg"
            alt="Скрытая идеология"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
          <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-lg">
            Краденная Столица Бухара
          </h2>
        </div>

        {/* Самарканд */}
        <div className="relative group w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          <Image
            src="/samarqand.jpg"
            alt="Тайные операции"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
          <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-lg">
            Утраченный Язык Самарканд
          </h2>
        </div>
      </div>
    </section>
  );
}
