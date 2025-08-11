import React from "react";

function DonutCard({ img, i, title, description }) {
  return (
    <div className="bg-gray-200 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[350px]">
      {i == 2 ? (
        <div className="w-full h-56 bg-pink-200 flex items-center justify-center third">

        </div>
      ) : (
        <div className="w-full h-56 bg-pink-200 flex items-center justify-center">
          <img
            src={img}
            alt={title}
            className="h-40 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-pink-600">{title}</h1>
        <p className="text-gray-600 mt-3 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default DonutCard;
