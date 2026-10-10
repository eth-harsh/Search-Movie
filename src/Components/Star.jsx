import { useState } from "react";
export default function Star() {
  const [rating, setRating] = useState(0);
  const [temRating, setTempRating] = useState(0);

  return (
    <div className="flex items-center w-fit  gap-3">
      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            onClick={() => setRating(i + 1)}
            onMouseEnter={() => setTempRating(i + 1)}
            onMouseLeave={() => setTempRating(0)}
            className="cursor-pointer text-3xl transition-transform duration-150 hover:scale-110"
          >
            {i < (temRating || rating) ? "⭐" : "☆"}
          </span>
        ))}
      </div>

      <span className="text-xl font-semibold text-gray-700">
        {temRating || rating}
      </span>
    </div>
  );
}