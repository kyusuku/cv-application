import Title from "./Title.tsx";
import Input from "./Input.tsx";
import Education from "./Education.tsx";
import Experience from "./Experience.tsx";

export default function Intro({
  formData,
  onInputChange,
}: {
  formData: { [key: string]: string };
  onInputChange: (field: string, value: string) => void;
}) {
  return (
    <div className="h-full border-2 border-black bg-white p-8 text-black shadow-2xl">
      <Title name="Personal Information" />
      <Input
        label="Full Name"
        type="text"
        value={formData.fullName}
        onChange={(e) => onInputChange("fullName", e.target.value)}
      />
      <Input
        label="Address"
        type="text"
        value={formData.address}
        onChange={(e) => onInputChange("address", e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => onInputChange("email", e.target.value)}
      />
      <Input
        label="Phone"
        type="tel"
        value={formData.phone}
        onChange={(e) => onInputChange("phone", e.target.value)}
      />
      <br />
      <Education formData={formData} onInputChange={onInputChange} />
      <br />
      <Experience formData={formData} onInputChange={onInputChange} />
    </div>
  );
}
