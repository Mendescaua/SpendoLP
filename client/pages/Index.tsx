import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import ScreenshotsSection from "@/components/ui/CarousselScreen";
import { CheckCircle, Play, Star, Users, Award, Shield, Clock, Download, PieChart, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Index() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 pb-32 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 overflow-hidden" style={{ background: "#4678c0" }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse" style={{ background: "#FFFFFF" }}></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse" style={{ background: "#FFFFFF" }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-25 animate-pulse" style={{ background: "#FFFFFF" }}></div>
          <div className="absolute top-1/2 right-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{ background: "#FFFFFF" }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight" style={{ color: "#FFFFFFFF" }}>
                Controle seus gastos
                <br />
                com o Spendo.
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0" style={{ color: "#FFFFFFFF" }}>
                Spendo é um aplicativo de controle financeiro pessoal focado em simplicidade e clareza.
              </p>

              {/* Download buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download on App Store
                </Button> */}
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Baixe agora
                </Button>
              </div>

              {/* Trust indicators */}
              {/* <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                <div className="text-sm text-gray-500">Trusted by</div>
                <div className="text-sm font-medium text-gray-700">Google</div>
                <div className="text-sm font-medium text-gray-700">Apple</div>
                <div className="text-sm font-medium text-gray-700">Microsoft</div>
                <div className="text-sm font-medium text-gray-700">Amazon</div>
                <div className="text-sm font-medium text-gray-700">Netflix</div>
              </div> */}
            </div>

            {/* Right content - Phone mockups */}
            <div className="relative">
              <div className="relative mx-auto w-fit">
                {/* Center phone */}
                <div className="relative z-10">
                  <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2rem] p-4 overflow-hidden">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                          <div className="text-2xl font-bold">$34,582.64</div>
                          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="bg-purple-600 text-white p-4 rounded-2xl">
                          <div className="text-sm opacity-90">Available Balance</div>
                          <div className="text-2xl font-bold">$25,482.64</div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                              <div>
                                <div className="font-medium">Income</div>
                                <div className="text-sm text-gray-500">Today</div>
                              </div>
                            </div>
                            <div className="text-green-600 font-bold">+$1,200</div>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-red-500 rounded-full"></div>
                              <div>
                                <div className="font-medium">Expense</div>
                                <div className="text-sm text-gray-500">Today</div>
                              </div>
                            </div>
                            <div className="text-red-600 font-bold">-$320</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left phone */}
                <div className="absolute top-16 -left-20 z-0 transform rotate-12">
                  <div className="w-48 h-96 bg-black rounded-[2rem] p-2 shadow-xl opacity-80">
                    <div className="w-full h-full bg-white rounded-[1.5rem] p-3">
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-32 bg-purple-100 rounded-xl"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded"></div>
                          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right phone */}
                <div className="absolute top-16 -right-20 z-0 transform -rotate-12">
                  <div className="w-48 h-96 bg-black rounded-[2rem] p-2 shadow-xl opacity-80">
                    <div className="w-full h-full bg-white rounded-[1.5rem] p-3">
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-32 bg-blue-100 rounded-xl"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-gray-200 rounded"></div>
                          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Product We Work With */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Product We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
              Comprehensive features that help you build the perfect product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Controle Seguro</h3>
              <p className="text-gray-600">
                Armazene seus dados financeiros com segurança. O Spendo protege suas informações e garante que apenas você tenha acesso aos seus gastos.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personalização Inteligente</h3>
              <p className="text-gray-600">
                Categorize despesas, escolha cores, defina metas e torne o Spendo adaptado à sua realidade financeira com poucos cliques.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PieChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Relatórios em Tempo Real</h3>
              <p className="text-gray-600">
                Visualize gráficos e relatórios automáticos para entender onde está gastando mais e tome decisões com mais consciência.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* App Screenshots */}
       <ScreenshotsSection />
      

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white" style={{ background: "#4678c0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gostou do Spendo?
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Baixe agora!
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Tenha controle completo de suas financas pessoais com o Spendo. Baixe agora e comece a gerenciar suas financas de uma maneira simples e intuitiva.
          </p>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-3">
              <Download className="w-6 h-6" />
              Baixe agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="client/images/IconSpendo.png" alt="Spendo" className="w-8 h-8" />
                <span className="text-xl font-bold text-gray-900">Spendo</span>
              </div>
              <p className="text-gray-600 text-sm">
                Controle seus gastos com o Spendo. Uma maneira simples e intuitiva de gerenciar suas financas pessoais.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Links</h4>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-gray-600 hover:text-purple-600">Home</a></div>
                <div><a href="#" className="text-gray-600 hover:text-purple-600">About</a></div>
                <div><a href="#" className="text-gray-600 hover:text-purple-600">Services</a></div>
                <div><a href="#" className="text-gray-600 hover:text-purple-600">Contact</a></div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-gray-600 hover:text-purple-600">Privacy Policy</a></div>
                <div><a href="#" className="text-gray-600 hover:text-purple-600">Terms of Service</a></div>
                <div><a href="#" className="text-gray-600 hover:text-purple-600">Cookie Policy</a></div>
                <div><a href="#" className="text-gray-600 hover:text-purple-600">Support</a></div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Product</h4>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-gray-600 hover:text-purple-600">Features</a></div>
                <div><a href="#" className="text-gray-600 hover:text-purple-600">Pricing</a></div>
                <div><a href="#" className="text-gray-600 hover:text-purple-600">Documentation</a></div>
                <div><a href="#" className="text-gray-600 hover:text-purple-600">API</a></div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-600">
              © 2024 Frybix. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
       {/* Botão flutuante "voltar ao topo" */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50  text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${
          showScrollButton ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
        style={{ backgroundColor: "#4678c0"}}
      >
        <ArrowUp/>
      </button>
    </div>
  );
}
