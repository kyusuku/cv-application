import Title from "./Title.tsx";
import Input from "./Input.tsx";

export default function Experience({
  formData,
  onInputChange,
}: {
  formData: { [key: string]: string };
  onInputChange: (field: string, value: string) => void;
}) {
  return (
    <div>
      <Title name="Experience" />
      <Input
        label="Company"
        type="text"
        value={formData.company}
        onChange={(e) => onInputChange("company", e.target.value)}
      />
      <Input
        label="Position"
        type="text"
        value={formData.position}
        onChange={(e) => onInputChange("position", e.target.value)}
      />
      <Input
        label="Duration of Work"
        type="text"
        value={formData.durationOfWork}
        onChange={(e) => onInputChange("durationOfWork", e.target.value)}
      />
      <Input
        label="Description"
        type="text"
        value={formData.experienceDescription}
        onChange={(e) => onInputChange("experienceDescription", e.target.value)}
      />
    </div>
  );
}
