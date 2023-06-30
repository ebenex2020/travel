/** @format */

const Stats = ({ items }) => {
  if (items.length === 0)
    return <p className="stats">Ready for your Trip?, then start Packing 🚮</p>;

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You're all set for your journey✈️"
          : `🛍️ You have ${numItem} items in your list and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
