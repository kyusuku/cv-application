import Input from "./Input.tsx";

export default function Experience({
  formData,
  onInputChange,
  index
}: {
  formData: { [key: string]: string };
  onInputChange: (field: string, value: string) => void;
  index: number;
}) {
  const prefix = index === 1 ? "" : `${index}`;

  return (
    <div>
      <Input
        label="Company"
        type="text"
        value={formData[`company${prefix}`]}
        onChange={(e) => onInputChange(`company${prefix}`, e.target.value)}
      />
      <Input
        label="Position"
        type="text"
        value={formData[`position${prefix}`]}
        onChange={(e) => onInputChange(`position${prefix}`, e.target.value)}
      />
      <Input
        label="Duration of Work"
        type="text"
        value={formData[`durationOfWork${prefix}`]}
        onChange={(e) => onInputChange(`durationOfWork${prefix}`, e.target.value)}
      />
      <Input
        label="Description"
        type="text"
        value={formData[`experienceDescription${prefix}`]}
        onChange={(e) => onInputChange(`experienceDescription${prefix}`, e.target.value)}
      />
    </div>
  );
}
