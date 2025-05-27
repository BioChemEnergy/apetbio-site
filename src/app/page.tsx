export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">ApetBio Project</h1>
      <p className="mb-4 max-w-2xl">The aim of the ApetBio project is to develop and verify technology for the preparation of protein hydrolysates from fly larvae as natural biostimulants and to assess their biological effects.</p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Basic Information</h2>
        <ul className="list-disc list-inside">
          <li><strong>Project Code:</strong> 09I04-03-V2-00025</li>
          <li><strong>Call Code:</strong> 09I04-03-V2</li>
          <li><strong>Main Applicant:</strong> Technical University of Košice</li>
          <li><strong>Partner:</strong> MEPS s.r.o.</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <a href="/outputs" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Outputs</a>
        <a href="/news" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">News</a>
        <a href="/about" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">About the Project</a>
      </div>
    </main>
  );
}