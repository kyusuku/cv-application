import Title from "./Title.tsx";
import Input from "./Input.tsx";
import Education from "./Education.tsx";
import Experience from "./Experience.tsx";
import Button from "./Button.tsx";
import { useState } from "react";

export default function Intro({
  formData,
  onInputChange,
}: {
  formData: { [key: string]: string };
  onInputChange: (field: string, value: string) => void;
}) {
  const [educationCount, setEducationCount] = useState(1);
  const [experienceCount, setExperienceCount] = useState(1);

  const handleAddEducation = () => {
    if (educationCount < 3) {
      setEducationCount(educationCount + 1);
    }
  };

  const handleAddExperience = () => {
    if (experienceCount < 3) {
      setExperienceCount(experienceCount + 1);
    }
  };

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
      <Title name="Education (up to 3)" />
      {[...Array(educationCount)].map((_, index) => (
        <Education
          key={index + 1}
          formData={formData}
          onInputChange={onInputChange}
          index={index + 1}
        />
      ))}
      {educationCount < 3 && (
        <div>
          <Button text={"Add Education"} onButtonClick={handleAddEducation} />
        </div>
      )}
      <br />
      <Title name="Experience (up to 3)" />
      {[...Array(experienceCount)].map((_, index) => (
        <Experience
          key={index + 1}
          formData={formData}
          onInputChange={onInputChange}
          index={index + 1}
        />
      ))}
      {experienceCount < 3 && (
        <div>
          <Button text={"Add Experience"} onButtonClick={handleAddExperience} />
        </div>
      )}
    </div>
  );
}
