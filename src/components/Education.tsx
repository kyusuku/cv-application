import Input from "./Input.tsx";

export default function Education({
  formData,
  onInputChange,
  index,
}: {
  formData: { [key: string]: string };
  onInputChange: (field: string, value: string) => void;
  index: number;
}) {
  const prefix = index === 1 ? "" : `${index}`;

  return (
    <div>
      <Input
        label="School"
        type="text"
        value={formData[`school${prefix}`]}
        onChange={(e) => onInputChange(`school${prefix}`, e.target.value)}
      />
      <Input
        label="Title"
        type="text"
        value={formData[`title${prefix}`]}
        onChange={(e) => onInputChange(`title${prefix}`, e.target.value)}
      />
      <Input
        label="Duration of Study"
        type="text"
        value={formData[`durationOfStudy${prefix}`]}
        onChange={(e) =>
          onInputChange(`durationOfStudy${prefix}`, e.target.value)
        }
      />
      <Input
        label="Description"
        type="text"
        value={formData[`educationDescription${prefix}`]}
        onChange={(e) =>
          onInputChange(`educationDescription${prefix}`, e.target.value)
        }
      />
    </div>
  );
}
