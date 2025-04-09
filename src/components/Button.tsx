export default function Button({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="my-3 flex items-center justify-center border-2 border-black px-2 hover:cursor-pointer hover:bg-gray-300"
    >
      {text}
    </button>
  );
}
