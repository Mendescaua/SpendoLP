import Header from "@/components/Header";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            This page is a placeholder. Continue prompting to add contact content here!
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <p className="text-purple-700">
              💡 Ask me to create a contact form, add company information, or include support details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
