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

  if (label === "Description") {
    fieldHeight = "h-24";
  }

  return (
    <label className="my-2 flex flex-col">
      {label}
      {label === "Description" ? (
        <textarea
          className={`border-2 border-black px-2 py-0.5 ${fieldHeight} hover:border-teal-700 focus:border-teal-800 focus:ring-0 focus:outline-none`}
          rows={3}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type={type}
          className={`border-2 border-black px-2 py-0.5 hover:border-teal-700 focus:border-teal-800 focus:ring-0 focus:outline-none`}
          value={value}
          onChange={onChange}
        ></input>
      )}
    </label>
  );
}
