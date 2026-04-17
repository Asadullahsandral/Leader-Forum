// src/components/Spinner.jsx

function Spinner({ size = "md", variant = "border", label = "" }) {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  if (variant === "border")
    return (
      <div className="flex items-center gap-2">
        <div
          className={`${sizes[size]} rounded-full border-gray-200 border-t-green-900 animate-spin`}
        />
        {label && <span className="text-sm text-gray-500">{label}</span>}
      </div>
    );

  if (variant === "dots")
    return (
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-green-900 animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    );

  if (variant === "pulse")
    return (
      <div
        className={`${sizes[size]} rounded-full bg-green-900 animate-pulse`}
      />
    );

  if (variant === "dual")
    return (
      <div className={`relative ${sizes[size]}`}>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-green-900 animate-spin" />
        <div
          className="absolute inset-1 rounded-full border-2 border-transparent border-b-green-600 animate-spin"
          style={{ animationDuration: "1.4s" }}
        />
      </div>
    );
}

export default Spinner;
