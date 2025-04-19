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
    <div className="flex min-h-dvh min-w-dvw justify-center max-tablet:flex-col">
      <div className="flex-1 overflow-y-scroll h-dvh" id="leftSection">
        <section className="p-8 max-sm:p-4">
          <Intro formData={formData} onInputChange={handleInputChange} />
        </section>
      </div>
      <div className="flex-1 bg-gray-700 flex items-center justify-center h-dvh">
        <section className="flex flex-col items-center justify-center w-full h-full p-8 gap-4 max-sm:p-4" id="printSection">
          <Result formData={formData}/>
          <button
                  type="button"
                  className="rounded-sm bg-blue-500 px-4 py-2 hover:cursor-pointer hover:bg-blue-600 text-white flex flex-row gap-2 items-center justify-center font-bold"
                  onClick={() => window.print()}
                >
                  Download
                  <span><Icon path={mdiDownload} size={1} /></span>
                </button>
        </section>
      </div>
    </div>
  );
}

export default App;
