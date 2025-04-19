import "./App.css";
import Intro from "./components/Intro.tsx";
import Result from "./components/Result.tsx";
import Icon from "@mdi/react";
import { mdiDownload } from "@mdi/js";
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
    <div className="max-tablet:flex-col flex min-h-dvh min-w-dvw justify-center">
      <div className="h-dvh flex-1 overflow-y-scroll" id="leftSection">
        <section className="p-8 max-sm:p-4">
          <Intro formData={formData} onInputChange={handleInputChange} />
        </section>
      </div>
      <div className="flex h-dvh flex-1 items-center justify-center bg-gray-700">
        <section
          className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 max-sm:p-4"
          id="printSection"
        >
          <Result formData={formData} />
          <button
            type="button"
            className="flex flex-row items-center justify-center gap-2 rounded-sm bg-blue-500 px-4 py-2 font-bold text-white hover:cursor-pointer hover:bg-blue-600"
            onClick={() => window.print()}
          >
            Download
            <span>
              <Icon path={mdiDownload} size={1} />
            </span>
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
