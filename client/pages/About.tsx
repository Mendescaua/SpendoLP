import Header from "@/components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Frybix</h1>
          <p className="text-lg text-gray-600 mb-8">
            This page is a placeholder. Continue prompting to add content here!
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <p className="text-purple-700">
              💡 Ask me to fill in this page with actual about content, team information, company history, or any other details you'd like to include.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
