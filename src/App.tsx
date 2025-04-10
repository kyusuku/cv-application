import "./App.css";
import Intro from "./components/Intro.tsx";
import Result from "./components/Result.tsx";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
    school: "",
    title: "",
    durationOfStudy: "",
    educationDescription: "",
    school2: "",
    title2: "",
    durationOfStudy2: "",
    educationDescription2: "",
    school3: "",
    title3: "",
    durationOfStudy3: "",
    educationDescription3: "",
    company: "",
    position: "",
    durationOfWork: "",
    experienceDescription: "",
    company2: "",
    position2: "",
    durationOfWork2: "",
    experienceDescription2: "",
    company3: "",
    position3: "",
    durationOfWork3: "",
    experienceDescription3: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="flex min-h-dvh min-w-dvw justify-center">
      <section className="flex-1/2 border-r-2 border-gray-300 p-8">
        <Intro
          formData={formData}
          onInputChange={handleInputChange}
        />
      </section>
      <section className="flex flex-1/2 justify-center border-l-2 border-gray-300 p-8">
        <Result formData={formData} />
      </section>
    </div>
  );
}

export default App;
