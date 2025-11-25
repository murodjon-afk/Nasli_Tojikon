'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

interface Leader {
  id: string;
  name: string;
  years: string;
  role: string;
  biography: string;
  images: string[];
}

export default function HistoryDetailPage() {
  const params = useParams();
  const { slug } = params as { slug: string };
  const [leader, setLeader] = useState<Leader | null>(null);
  const [loading, setLoading] = useState(true);

  const timeline = [
    { id: 4, slug: "sogd-baktria" },
    { id: 6, slug: "kushan" },
    { id: 1, slug: "samanids" },
    { id: 7, slug: "taherids" },
    { id: 2, slug: "ghurids" },
    { id: 8, slug: "bukhara" },
    { id: 9, slug: "soviet-era" },
    { id: 10, slug: "modern" }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://68e7dd2b10e3f82fbf411431.mockapi.io/tajik-culture/leaders");
        const data: Leader[] = await res.json();
        const foundTimelineItem = timeline.find(item => item.slug === slug);
        if (!foundTimelineItem) {
          setLeader(null);
          setLoading(false);
          return;
        }
        const foundLeader = data.find(l => Number(l.id) === foundTimelineItem.id);
        setLeader(foundLeader || null);
      } catch (err) {
        console.error("Ошибка при загрузке данных:", err);
        setLeader(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Загрузка...</p>;
  if (!leader) return <p className="text-center py-10">История не найдена</p>;

  return (
    <main className="min-h-screen bg-[#f7f6f0] px-6 py-16 flex flex-col items-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl p-8 flex flex-col gap-10 mt-[60px]">

        {/* Заголовок */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800">{leader.name}</h1>

        {/* Даты и роль */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#f1f0e9] p-4 rounded-xl shadow-inner">
          <p className="text-lg font-semibold text-gray-700">📅 {leader.years}</p>
          <p className="text-md text-gray-600">{leader.role}</p>
        </div>

        {/* Биография */}
        <p className="text-gray-700 leading-relaxed text-lg">{leader.biography}</p>

        {/* Квадратные блоки: Правитель | Территория | Флаг */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {leader.images.map((img, i) => {
            let label = i === 0 ? "Правитель" : i === 1 ? "Территория" : "Флаг";

            return (
              <div key={i} className="flex flex-col items-center">
                <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-all relative">
                  <Image
                    src={img}
                    alt={label}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="mt-2 text-center text-sm font-semibold text-gray-700">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
