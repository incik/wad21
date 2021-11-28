const TAG_COLORS = [
  "bg-pink-600",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-yellow-300",
];

const Tags = ({ tags }) => {
  return tags.length > 0 && tags[0] !== "" ? (
    <div className="mt-2 flex flex-wrap">
      {tags.map((tag, index) => (
        <span
          className={`text-xs font-medium mr-2 text-white p-1 px-2 rounded-lg mb-2 ${
            TAG_COLORS[index % TAG_COLORS.length]
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  ) : null;
};

export default Tags;
