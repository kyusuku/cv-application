import Icon from "@mdi/react";
import { mdiDownload } from "@mdi/js";

export default function Result({
  formData,
}: {
  formData: { [key: string]: string };
}) {
  return (
    <div className="fixed h-[calc(100dvh-64px)] w-[calc((100dvh-64px)/1.414)] border-2 border-black bg-white p-16 font-serif text-black shadow-2xl">
      <h1 className="text-md text-center font-bold">{formData.fullName}</h1>
      {(formData.address || formData.email || formData.phone) && (
        <p className="my-2 text-center text-[11px]">
          {formData.address && <span>{formData.address}</span>}
          {formData.address && formData.email && <span> | </span>}
          {formData.email && <span>{formData.email}</span>}
          {(formData.address || formData.email) && formData.phone && (
            <span> | </span>
          )}
          {formData.phone && <span>{formData.phone}</span>}
        </p>
      )}
      <h1 className="text-md border-b-2 border-black font-bold">Education</h1>
      <div className="grid grid-cols-4 gap-x-2">
        <h2 className="col-span-3 text-[12px] font-bold">{formData.school}</h2>
        <h2 className="flex justify-end text-[12px] font-bold">
          {formData.durationOfStudy}
        </h2>
        <h2 className="col-span-3 text-[12px]">{formData.title}</h2>
        <ul className="col-span-4 mt-1 mb-2 list-disc pl-5">
          {formData.educationDescription.split("\n").map((desc, index) => (
            <li key={index} className="text-[11px]">
              {desc}
            </li>
          ))}
        </ul>
      </div>
      {formData.school2 && (
        <div className="grid grid-cols-4 gap-x-2">
          <h2 className="col-span-3 text-[12px] font-bold">
            {formData.school2}
          </h2>
          <h2 className="flex justify-end text-[12px] font-bold">
            {formData.durationOfStudy2}
          </h2>
          <h2 className="col-span-3 text-[12px]">{formData.title2}</h2>
          <ul className="col-span-4 mt-1 mb-2 list-disc pl-5">
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
          <h2 className="col-span-3 text-[12px] font-bold">
            {formData.school3}
          </h2>
          <h2 className="flex justify-end text-[12px] font-bold">
            {formData.durationOfStudy3}
          </h2>
          <h2 className="col-span-3 text-[12px]">{formData.title3}</h2>
          <ul className="col-span-4 mt-1 mb-2 list-disc pl-5">
            {formData.educationDescription3.split("\n").map((desc, index) => (
              <li key={index} className="text-[11px]">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      )}
      <h1 className="text-md border-b-2 border-black font-bold">Experience</h1>
      <div className="grid grid-cols-4 gap-x-2">
        <h2 className="col-span-3 text-[12px] font-bold">{formData.company}</h2>
        <h2 className="flex justify-end text-[12px] font-bold">
          {formData.durationOfWork}
        </h2>
        <h2 className="col-span-3 text-[12px]">{formData.position}</h2>
        <ul className="col-span-4 mt-1 mb-2 list-disc pl-5">
          {formData.experienceDescription.split("\n").map((desc, index) => (
            <li key={index} className="text-[11px]">
              {desc}
            </li>
          ))}
        </ul>
      </div>
      {formData.company2 && (
        <div className="grid grid-cols-4 gap-x-2">
          <h2 className="col-span-3 text-[12px] font-bold">
            {formData.company2}
          </h2>
          <h2 className="flex justify-end text-[12px] font-bold">
            {formData.durationOfWork2}
          </h2>
          <h2 className="col-span-3 text-[12px]">{formData.position2}</h2>
          <ul className="col-span-4 mt-1 mb-2 list-disc pl-5">
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
          <h2 className="col-span-3 text-[12px] font-bold">
            {formData.company3}
          </h2>
          <h2 className="flex justify-end text-[12px] font-bold">
            {formData.durationOfWork3}
          </h2>
          <h2 className="col-span-3 text-[12px]">{formData.position3}</h2>
          <ul className="col-span-4 mt-1 mb-2 list-disc pl-5">
            {formData.experienceDescription3.split("\n").map((desc, index) => (
              <li key={index} className="text-[11px]">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="button"
        className="absolute top-0 right-0 translate-x-[calc(100%+15px)] rounded-sm border-2 border-black bg-white px-2 py-1 hover:cursor-pointer hover:bg-gray-300"
        onClick={() => window.print()}
      >
        <Icon path={mdiDownload} size={1} />
      </button>
    </div>
  );
}
