export default function Result({
  formData,
}: {
  formData: { [key: string]: string };
}) {
  return (
    <div className="h-[calc(100dvh-64px)] w-[calc((100dvh-64px)/1.414)] fixed bg-white p-16 text-black shadow-2xl font-serif border-black border-2">
      <h1 className="text-center font-bold text-md">{formData.fullName}</h1>
      {(formData.address || formData.email || formData.phone) && (
        <p className="text-center text-[11px] my-2">
          {formData.address && <span>{formData.address}</span>}
          {formData.address && formData.email && <span> | </span>}
          {formData.email && <span>{formData.email}</span>}
          {(formData.address || formData.email) && formData.phone && <span> | </span>}
          {formData.phone && <span>{formData.phone}</span>}
        </p>
      )}
      <h1 className="font-bold text-md border-b-2 border-black">Education</h1>
      <div className="grid grid-cols-4 gap-x-2">
        <h2 className="font-bold text-[12px] col-span-3">{formData.school}</h2>
        <h2 className="font-bold text-[12px] flex justify-end">{formData.durationOfStudy}</h2>
        <h2 className="text-[12px] col-span-3">{formData.title}</h2>
        <ul className="mb-2 mt-1 col-span-4 list-disc pl-5">
          {formData.educationDescription.split("\n").map((desc, index) => (
            <li key={index} className="text-[11px]">
              {desc}
            </li>
          ))}
        </ul>
      </div>
      {formData.school2 && (
        <div className="grid grid-cols-4 gap-x-2">
          <h2 className="font-bold text-[12px] col-span-3">{formData.school2}</h2>
          <h2 className="font-bold text-[12px] flex justify-end">{formData.durationOfStudy2}</h2>
          <h2 className="text-[12px] col-span-3">{formData.title2}</h2>
          <ul className="mb-2 mt-1 col-span-4 list-disc pl-5">
            {formData.educationDescription2.split("\n").map((desc, index) => (
              <li key={index} className="text-[11px]">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      )}
      {formData.school3 && (
        <div className="grid grid-cols-4 gap-x-2">
          <h2 className="font-bold text-[12px] col-span-3">{formData.school3}</h2>
          <h2 className="font-bold text-[12px] flex justify-end">{formData.durationOfStudy3}</h2>
          <h2 className="text-[12px] col-span-3">{formData.title3}</h2>
          <ul className="mb-2 mt-1 col-span-4 list-disc pl-5">
            {formData.educationDescription3.split("\n").map((desc, index) => (
              <li key={index} className="text-[11px]">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      )}
      <h1 className="font-bold text-md border-b-2 border-black">Experience</h1>
      <div className="grid grid-cols-4 gap-x-2">
      <h2 className="font-bold text-[12px] col-span-3">{formData.company}</h2>
        <h2 className="font-bold text-[12px] flex justify-end">{formData.durationOfWork}</h2>
        <h2 className="text-[12px] col-span-3">{formData.position}</h2>
        <ul className="mb-2 mt-1 col-span-4 list-disc pl-5">
          {formData.experienceDescription.split("\n").map((desc, index) => (
            <li key={index} className="text-[11px]">
              {desc}
            </li>
          ))}
        </ul>
      </div>
      {formData.company2 && (
        <div className="grid grid-cols-4 gap-x-2">
          <h2 className="font-bold text-[12px] col-span-3">{formData.company2}</h2>
          <h2 className="font-bold text-[12px] flex justify-end">{formData.durationOfWork2}</h2>
          <h2 className="text-[12px] col-span-3">{formData.position2}</h2>
          <ul className="mb-2 mt-1 col-span-4 list-disc pl-5">
            {formData.experienceDescription2.split("\n").map((desc, index) => (
              <li key={index} className="text-[11px]">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      )}
      {formData.company3 && (
        <div className="grid grid-cols-4 gap-x-2">
          <h2 className="font-bold text-[12px] col-span-3">{formData.company3}</h2>
          <h2 className="font-bold text-[12px] flex justify-end">{formData.durationOfWork3}</h2>
          <h2 className="text-[12px] col-span-3">{formData.position3}</h2>
          <ul className="mb-2 mt-1 col-span-4 list-disc pl-5">
            {formData.experienceDescription3.split("\n").map((desc, index) => (
              <li key={index} className="text-[11px]">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* <button type="button" className="top-0 right-0 border-black border-2 absolute translate-x-[calc(100%+15px)] bg-white px-2 rounded-sm">Print</button> */}
    </div>
  );
}
