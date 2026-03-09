import { useState, useEffect } from "react";

export default function TemplePage() {

  const temples = [
    {
      id: 1,
      name: "Rasmancha",
      description:
        "The Rasmancha is the oldest brick temple in Bishnupur built by King Hambir Malla Dev around 1600 AD. Its pyramid-like structure and terracotta work make it one of the most unique temples in India.",
      image: "/Bishnupur_Rashmancha.jpg",
      map: "https://maps.google.com/?q=Rasmancha Bishnupur"
    },
    {
      id: 2,
      name: "Jor Bangla Temple",
      description:
        "Built in 1655 by King Raghunath Singh, the Jor Bangla temple has a twin-hut design representing Bengal village architecture.",
      image: "/jor banglo temple.jpg",
      map: "https://maps.google.com/?q=Jor Bangla Temple Bishnupur"
    },
    {
      id: 3,
      name: "Madan Mohan Temple",
      description:
        "Built in 1694 by King Durjana Singh Deva, this temple is famous for its terracotta panels depicting scenes from Hindu epics.",
      image: "/Madan mahan temple.jpg",
      map: "https://maps.google.com/?q=Madan Mohan Temple Bishnupur"
    },
    {
      id: 4,
      name: "Shyam Rai Temple",
      description:
        "The Shyam Rai temple built in 1643 features Pancha Ratna architecture with five towers and beautiful terracotta carvings.",
      image: "/Shaym rai temple.jpg",
      map: "https://maps.google.com/?q=Shyam Rai Temple Bishnupur"
    },
    {
      id: 5,
      name: "Kalachand Temple",
      description:
        "Kalachand Temple is an Ek-Ratna temple famous for its carved walls and historical significance.",
      image: "/Kalachand Temple.jpg",
      map: "https://maps.google.com/?q=Kalachand Temple Bishnupur"
    },
    {
      id: 6,
      name: "Radha Shyam Temple",
      description:
        "Built in 1758, Radha Shyam temple features a dome shaped tower and rich terracotta decoration.",
      image: "/Radha Shyam Temple.jpg",
      map: "https://maps.google.com/?q=Radha Shyam Temple Bishnupur"
    },
    {
      id: 7,
      name: "Radha Gobinda Temple",
      description:
        "Located near Lalbandh, this temple has beautiful curved roofs and decorated carvings.",
      image: "/Radha Gobinda Temple.jpg",
      map: "https://maps.google.com/?q=Radha Gobinda Temple Bishnupur"
    },
    {
      id: 8,
      name: "Lalji Temple",
      description:
        "Built in 1658, Lalji Temple is dedicated to Radha Krishna and represents classic Bishnupur temple architecture.",
      image: "/Lalji Temple.jpg",
      map: "https://maps.google.com/?q=Lalji Temple Bishnupur"
    },
    {
      id: 9,
      name: "Nandalal Temple",
      description:
        "The Nandalal Temple is a peaceful Ek-Ratna temple located near Lalbandh lake.",
      image: "/Nandalal Temple.jpg",
      map: "https://maps.google.com/?q=Nandalal Temple Bishnupur"
    }
  ];

  const [selectedTemple, setSelectedTemple] = useState(temples[0]);

  /* Auto Image Change (Slider Effect) */
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % temples.length);
      setSelectedTemple(temples[(index + 1) % temples.length]);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (

    <div
      className="min-h-screen flex"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605640840605-14ac1855827b')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      {/* Glass Overlay */}
      <div className="flex w-full bg-white/85 backdrop-blur-md">

        {/* Sidebar */}
        <div className="w-72 bg-white shadow-xl p-6">

          <h2 className="text-2xl font-bold text-orange-700 mb-6">
            🏛 Bishnupur Temples
          </h2>

          <ul className="space-y-3">
            {temples.map((temple) => (
              <li
                key={temple.id}
                onClick={() => setSelectedTemple(temple)}
                className={`cursor-pointer p-3 rounded-lg transition
                ${
                  selectedTemple.id === temple.id
                    ? "bg-orange-200 text-orange-800 font-semibold"
                    : "hover:bg-orange-100"
                }`}
              >
                {temple.name}
              </li>
            ))}
          </ul>

        </div>

        {/* Temple Details */}
        <div className="flex-1 p-10">

          <h1 className="text-4xl font-bold text-orange-800 mb-6">
            {selectedTemple.name}
          </h1>

          <img
            src={selectedTemple.image}
            alt={selectedTemple.name}
            className="w-full max-w-3xl h-80 object-cover rounded-xl shadow-xl mb-6 hover:scale-105 transition duration-300"
          />

          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            {selectedTemple.description}
          </p>

          {/* Map Button */}
          <a
            href={selectedTemple.map}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition"
          >
            📍 View on Map
          </a>

        </div>

      </div>

    </div>
  );
}