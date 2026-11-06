function StatCard({ title, count, color }) {
  return (
    <div className={`${color} text-white p-6 rounded-lg shadow`}>
      <h2 className="text-lg">{title}</h2>

      <p className="text-3xl font-bold mt-2">
        {count}
      </p>
    </div>
  );
}

export default StatCard;