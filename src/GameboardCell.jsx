import { cn } from "./lib/utils.js";

function getNumberColor(value) {
  switch (value) {
    case "1":
      return "text-blue-600";
    case "2":
      return "text-green-600";
    case "3":
      return "text-red-600";
    case "4":
      return "text-indigo-700";
    case "5":
      return "text-rose-700";
    case "6":
      return "text-teal-600";
    case "7":
      return "text-slate-600";
    case "8":
      return "text-zinc-400";
    default:
      return "text-current";
  }
}

export function GameboardCell({ value, onClick }) {
  let display = "";
  if (value === "X") {
    display = "💣";
  } else if ("12345678".includes(value)) {
    display = value;
  } else if (value.endsWith("F")) {
    display = "🚩";
  }

  return (
    <div
      className={cn(
        "flex justify-center items-center",
        "border border-white font-bold transition-all duration-75",
        value === "_" || value === "M"
          ? "cursor-pointer hover:bg-slate-100"
          : "cursor-default",
        value === "0" || "12345678".includes(value)
          ? `bg-slate-200 ${getNumberColor(value)}`
          : "bg-slate-300",
      )}
      onClick={onClick}
      onContextMenu={onClick}
    >
      {display}
    </div>
  );
}
