export default function Result({
  formData,
}: {
  formData: { [key: string]: string };
}) {
  return (
    <div className="fixed h-[calc(100vh-64px)] w-[calc(100vh/1.414)] border-2 border-black bg-white p-16 text-black shadow-2xl font-serif">
      <h1 className="text-center font-bold text-md">{formData.fullName}</h1>
      <br />
      <p className="text-center text-[11px]">
        {formData.address} | {formData.email} | {formData.phone}
      </p>
      <br />
      <h1 className="font-bold text-md border-b-2 border-black">Education</h1>
      <div className="grid grid-cols-4 gap-x-2">
        <h2 className="font-bold text-[12px] col-span-3">{formData.title}</h2>
        <h2 className="font-bold text-[12px] flex justify-end">{formData.durationOfStudy}</h2>
        <h2 className="font-bold text-[12px] col-span-3">{formData.school}</h2>
        <ul className="my-2 col-span-4 list-disc pl-5">
          {formData.educationDescription.split("\n").map((desc, index) => (
            <li key={index} className="text-[11px]">
              {desc}
            </li>
          ))}
        </ul>
      </div>
      <h1 className="font-bold text-md border-b-2 border-black">Experience</h1>
      <div className="grid grid-cols-4 gap-x-2">
        <h2 className="font-bold text-[12px] col-span-3">{formData.position}</h2>
        <h2 className="font-bold text-[12px] flex justify-end">{formData.durationOfWork}</h2>
        <h2 className="font-bold text-[12px] col-span-3">{formData.company}</h2>
        <ul className="my-2 col-span-4 list-disc pl-5">
          {formData.experienceDescription.split("\n").map((desc, index) => (
            <li key={index} className="text-[11px]">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
