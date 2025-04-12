import FoodCard from "./FoodCard";

export default function FoodList({ items }) {
  if (!items.length) return <p>No food items available.</p>;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, idx) => (
        <FoodCard key={idx} item={item} />
      ))}
    </div>
  );
}