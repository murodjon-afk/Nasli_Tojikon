'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton'; // <- shadcn skeleton
import Link from "next/link";
interface Empire {
  id: string;
  name: string;
  flag: string;
}

export default function EmpiresList() {
  const [empires, setEmpires] = useState<Empire[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmpires = async () => {
      try {
        const res = await fetch('https://68e7dd2b10e3f82fbf411431.mockapi.io/tajik-culture/leaders');
        const data = await res.json();

        const formatted = data.slice(0, 6).map((item: any) => ({
          id: item.id,
          name: item.name,
          flag: item.images?.[2] || item.images?.[0] || '',
        }));

        setEmpires(formatted);
      } finally {
        setLoading(false);
      }
    };

    fetchEmpires();
  }, []);

  return (
    <section className="w-full bg-[#ede9e0] py-10 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-xl mb-8 text-gray-800 text-center">
        Исторические Империи
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-5">
        {loading
          ? // 🔥 Skeleton блоки от shadcn/ui
            [...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex items-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:scale-[1.02] cursor-pointer"
              >
                <Skeleton className="w-40 h-40 rounded-xl flex-shrink-0" />
                <div className="flex flex-col justify-center p-5 w-full gap-3">
                  <Skeleton className="h-6 w-40 rounded-md" />
                  <Skeleton className="h-5 w-32 rounded-md" />
                </div>
              </div>
            ))
          : // 🔥 Реальные карточки
            empires.map((empire) => (
              <div
                key={empire.id}
                className="flex items-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:scale-[1.02] cursor-pointer"
              >
                <div className="relative w-40 h-40 flex-shrink-0">
                  {empire.flag ? (
                    <Image src={empire.flag} alt={empire.name} fill className="object-cover" />
                  ) : (
                    <div className="bg-gray-300 w-full h-full flex items-center justify-center text-gray-600">
                      Нет изображения
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-center p-5">
                  <h2 className="text-2xl font-semibold text-gray-800">{empire.name}</h2>
                </div>
              </div>
            ))}
      </div>
     <Link href={"/history"} className='w-[150px] h-[50px] bg-[#f7f6f0] rounded-[7px] flex items-center justify-center font-extrabold drop-shadow-xl mt-[30px]  hover:shadow-lg
        transition
        duration-300
        transform
        hover:-translate-y-1'>Подробнее</Link>
    </section>
  );
}
