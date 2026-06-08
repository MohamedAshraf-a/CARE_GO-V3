"use client";

export default function BookingPage() {
  const formURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSf9QFkklTlMa9fNNXLp2mHE48yE2WpgxVfewuFkWWvTS2E2Og/viewform";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="text-center max-w-xl">
        
        <h1 className="text-5xl font-black text-slate-900">
          Book CareGo Deployment
        </h1>

        <p className="mt-6 text-slate-500">
          Reserve your AI Medical Robot
        </p>

        <a
          href={formURL}
          target="_blank"
          className="mt-10 inline-block px-8 py-4 bg-purple-600 text-white rounded-2xl font-semibold hover:bg-purple-700 transition"
        >
          Open Google Form
        </a>

      </div>
    </div>
  );
}