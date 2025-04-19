export default function Input({
  label,
  type,
  value,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}) {
  let fieldHeight = "";
  let isFilled = "";

  if (label === "Description") {
    fieldHeight = "h-24";
  }

  if (value !== "") {
    isFilled = "bg-blue-50";
  }

  return (
    <label className="my-2 flex flex-col">
      {label}
      {label === "Description" ? (
        <textarea
          className={`border-1 border-black px-2 py-0.5 ${fieldHeight} ${isFilled} hover:border-teal-700 focus:border-teal-800 focus:ring-0 focus:outline-none rounded-md`}
          rows={3}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type={type}
          className={`border-1 border-black px-2 py-0.5 hover:border-teal-700 focus:border-teal-800 focus:ring-0 focus:outline-none rounded-md ${isFilled}`}
          value={value}
          onChange={onChange}
        ></input>
      )}
    </label>
  );
}
