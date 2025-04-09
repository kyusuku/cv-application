export default function Result({
  formData,
}: {
  formData: { [key: string]: string };
}) {
  return (
    <div className="fixed h-[calc(100vh-64px)] w-[calc(100vh/1.414)] border-2 border-black bg-white p-8 text-black shadow-2xl">
      <h1>Results</h1>
      <br></br>
      <p>Full Name: {formData.fullName}</p>
      <br></br>
      <p>Address: {formData.address}</p>
      <br></br>
      <p>Email: {formData.email}</p>
      <br></br>
      <p>Phone: {formData.phone}</p>
      <br></br>
      <p>School: {formData.school}</p>
      <br></br>
      <p>Title: {formData.title}</p>
      <br></br>
      <p>Duration of Study: {formData.durationOfStudy}</p>
      <br></br>
      <p>Education Description: {formData.educationDescription}</p>
      <br></br>
      <p>Company: {formData.company}</p>
      <br></br>
      <p>Position: {formData.position}</p>
      <br></br>
      <p>Duration of Work: {formData.durationOfWork}</p>
      <br></br>
      <p>Experience Description: {formData.experienceDescription}</p>
    </div>
  );
}
