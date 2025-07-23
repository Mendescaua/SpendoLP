import Header from "@/components/Header";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Pricing Plans</h1>
          <p className="text-lg text-gray-600 mb-8">
            This page is a placeholder. Continue prompting to add detailed pricing content here!
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <p className="text-purple-700">
              💡 Ask me to expand this with detailed pricing tables, feature comparisons, or billing options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
