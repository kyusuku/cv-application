import Title from "./Title.tsx";
import Input from "./Input.tsx";

export default function Education({
  formData,
  onInputChange,
}: {
  formData: { [key: string]: string };
  onInputChange: (field: string, value: string) => void;
}) {
  return (
    <div>
      <Title name="Education" />
      <Input
        label="School"
        type="text"
        value={formData.school}
        onChange={(e) => onInputChange("school", e.target.value)}
      />
      <Input
        label="Title"
        type="text"
        value={formData.title}
        onChange={(e) => onInputChange("title", e.target.value)}
      />
      <Input
        label="Duration of Study"
        type="text"
        value={formData.durationOfStudy}
        onChange={(e) => onInputChange("durationOfStudy", e.target.value)}
      />
      <Input
        label="Description"
        type="text"
        value={formData.educationDescription}
        onChange={(e) => onInputChange("educationDescription", e.target.value)}
      />
    </div>
  );
}
