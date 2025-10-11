'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Leader {
  id: string;
  name: string;
  Image: string;
}

export default function LeadersList() {
  const [leaders, setLeaders] = useState<Leader[]>([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const res = await fetch(
          'https://68e7dd2b10e3f82fbf411431.mockapi.io/tajik-culture/leaders/leaders'
        );
        const data = await res.json();
        setLeaders(data);
      } catch (error) {
        console.error('Ошибка при загрузке:', error);
      }
    };

    fetchLeaders();
  }, []);

  return (
    <section className="w-full bg-[#ede9e0] py-10 flex flex-col items-center">
         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-xl mb-8 text-gray-800 text-center">
  Таджикские Лидеры
</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-5">
        {leaders.map((leader) => (
          <div
            key={leader.id}
            className="flex items-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative w-40 h-40 flex-shrink-0">
              <Image
                src={leader.Image}
                alt={leader.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-5">
              <h2 className="text-2xl font-semibold text-gray-800">
                {leader.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
