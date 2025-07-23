import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="" className="flex items-center space-x-2">
            <img src="client\images\IconSpendo.png" alt="Spendo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Spendo</span>
          </Link>


          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200" style={{ background: "#4678c0" }}>
              Baixe o App
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
