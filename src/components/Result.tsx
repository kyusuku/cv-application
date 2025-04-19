export default function Result({
  formData,
}: {
  formData: { [key: string]: string };
}) {
  return (
    <div
      className="aspect-[210/297] h-full max-tablet:w-full bg-white p-8 max-sm:p-4 font-serif text-black shadow-2xl text-[0.71em] overflow-auto print:text-[11pt]"
    >
      <h1 className="text-center font-bold print:text-[14pt]">{formData.fullName}</h1>
      {(formData.address || formData.email || formData.phone) && (
        <p className="my-2 text-center">
          {formData.address && <span>{formData.address}</span>}
          {formData.address && formData.email && <span> | </span>}
          {formData.email && <span>{formData.email}</span>}
          {(formData.address || formData.email) && formData.phone && (
            <span> | </span>
          )}
          {formData.phone && <span>{formData.phone}</span>}
        </p>
      )}
      {(formData.school || formData.title || formData.durationOfStudy || formData.educationDescription) &&
      <h1 className="text-md border-b-2 border-black font-bold print:text-[12pt]">Education</h1>
      }
      <div className="grid grid-cols-4 gap-x-2">
        <h2 className="col-span-3 font-bold print:text-[12pt]">{formData.school}</h2>
        <h2 className="flex justify-end font-bold print:text-[12pt]">
          {formData.durationOfStudy}
        </h2>
        <h2 className="col-span-3">{formData.title}</h2>
        {formData.educationDescription && (
          <ul className="col-span-4 mt-1 mb-2 list-disc pl-5">
            {formData.educationDescription.split("\n").map((desc, index) => (
              <li key={index} className="break-words">
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>
      {formData.school2 && (
        <div className="grid grid-cols-4 gap-x-2">
          <h2 className="col-span-3 font-bold print:text-[12pt]">
            {formData.school2}
          </h2>
          <h2 className="flex justify-end font-bold print:text-[12pt]">
            {formData.durationOfStudy2}
          </h2>
          <h2 className="col-span-3">{formData.title2}</h2>
          {formData.educationDescription2 && (
            <ul className="col-span-4 mt-1 mb-2 list-disc pl-5">
              {formData.educationDescription2.split("\n").map((desc, index) => (
                <li key={index} className="break-words">
                  {desc}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {formData.school3 && (
        <div className="grid grid-cols-4 gap-x-2">
          <h2 className="col-span-3 font-bold print:text-[12pt]">
            {formData.school3}
          </h2>
          <h2 className="flex justify-end font-bold print:text-[12pt]">
            {formData.durationOfStudy3}
          </h2>
          <h2 className="col-span-3">{formData.title3}</h2>
          {formData.educationDescription3 && (
            <ul className="col-span-4 mt-1 mb-2 list-disc pl-5">
              {formData.educationDescription3.split("\n").map((desc, index) => (
                <li key={index} className="break-words">
                  {desc}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {
        (formData.company || formData.position || formData.durationOfWork || formData.experienceDescription) &&
        <h1 className="text-md border-b-2 border-black font-bold mt-2 print:text-[12pt]">Experience</h1>
      }
      <div className="grid grid-cols-4 gap-x-2">
        <h2 className="col-span-3 font-bold print:text-[12pt]">{formData.company}</h2>
        <h2 className="flex justify-end font-bold print:text-[12pt]">
          {formData.durationOfWork}
        </h2>
        <h2 className="col-span-3">{formData.position}</h2>
        {formData.experienceDescription && (
          <ul className="col-span-4 mt-1 mb-2 list-disc pl-5">
            {formData.experienceDescription.split("\n").map((desc, index) => (
              <li key={index} className="break-words">
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>
      {formData.company2 && (
        <div className="grid grid-cols-4 gap-x-2">
          <h2 className="col-span-3 font-bold print:text-[12pt]">
            {formData.company2}
          </h2>
          <h2 className="flex justify-end font-bold print:text-[12pt]">
            {formData.durationOfWork2}
          </h2>
          <h2 className="col-span-3">{formData.position2}</h2>
          {formData.experienceDescription2 && (
            <ul className="col-span-4 mt-1 mb-2 list-disc pl-5">
              {formData.experienceDescription2.split("\n").map((desc, index) => (
                <li key={index} className="break-words">
                  {desc}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {formData.company3 && (
        <div className="grid grid-cols-4 gap-x-2">
          <h2 className="col-span-3 font-bold print:text-[12pt]">
            {formData.company3}
          </h2>
          <h2 className="flex justify-end font-bold print:text-[12pt]">
            {formData.durationOfWork3}
          </h2>
          <h2 className="col-span-3">{formData.position3}</h2>
          {formData.experienceDescription3 && (
            <ul className="col-span-4 mt-1 mb-2 list-disc pl-5">
              {formData.experienceDescription3.split("\n").map((desc, index) => (
                <li key={index} className="break-words">
                  {desc}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
