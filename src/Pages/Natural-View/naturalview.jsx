import React, { useState } from "react";

export default function Naturalview() {
  const [showMore, setShowMore] = useState(false);

  const places = [
    {
      name: "Joypur Forest",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Joypur_Forest_Bankura.jpg",
      description: "A beautiful dense forest near Bishnupur famous for sal trees and wildlife."
    },
    {
      name: "Mukutmanipur Dam",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Mukutmanipur_Dam.jpg",
      description: "The second largest dam in West Bengal with scenic hills and sunset views."
    },
    {
      name: "Lalbandh Lake",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Lalbandh_Bishnupur.jpg",
      description: "Historic lake built by the Malla kings offering peaceful surroundings."
    },
    {
      name: "Dalmadal Cannon Area",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Dalmadal_Cannon.jpg",
      description: "Historic place surrounded by greenery and open landscape."
    },
    {
      name: "Susunia Hill",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Susunia_Hill.jpg",
      description: "A famous hill for trekking, rock climbing and natural springs."
    },
    {
      name: "Bishnupur Deer Park",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Deer_Park_Bankura.jpg",
      description: "A calm park where visitors can see deer and enjoy nature."
    },
    {
      name: "Kangsabati River",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Kangsabati_River.jpg",
      description: "A peaceful river flowing near Mukutmanipur creating beautiful landscapes."
    },
    {
      name: "Rasmancha Garden",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Rasmancha_Bishnupur.jpg",
      description: "Historic Rasmancha temple area surrounded by green gardens."
    }
  ];

  const visiblePlaces = showMore ? places : places.slice(0, 4);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.85)",
          padding: "40px",
          borderRadius: "15px"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
            color: "#1b5e20"
          }}
        >
          🌿 Natural Beauty of Bishnupur
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
            gap: "25px"
          }}
        >
          {visiblePlaces.map((place, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 18px rgba(0,0,0,0.2)",
                transition: "0.3s"
              }}
            >
              <img
                src={place.image}
                alt={place.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3 style={{ color: "#2e7d32" }}>{place.name}</h3>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              style={{
                padding: "12px 30px",
                fontSize: "16px",
                borderRadius: "30px",
                border: "none",
                background: "linear-gradient(45deg,#2e7d32,#66bb6a)",
                color: "white",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
              }}
            >
              🌿 Explore More Places
            </button>
          )}
        </div>
      </div>
    </div>
  );
}