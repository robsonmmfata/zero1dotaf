"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Target,
  Users,
  Smartphone,
  CheckCircle,
  Star,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Activity,
  UserCheck,
  BarChart3,
  X,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-orange-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Logo Zero1 do TAF"
                    width={430}
                    height={430}
                    className="object-contain"
                  />
              </div>
              <span className="text-xl font-bold text-white">Zero1 do TAF</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#inicio" className="text-white hover:text-orange-500 transition-colors">
                Início
              </Link>
              <Link href="#sobre" className="text-white hover:text-orange-500 transition-colors">
                Sobre a Zero1
              </Link>
              <Link href="#produtos" className="text-white hover:text-orange-500 transition-colors">
                Produtos
              </Link>
              <Link href="#beneficios" className="text-white hover:text-orange-500 transition-colors">
                Benefícios
              </Link>
              <Link href="#depoimentos" className="text-white hover:text-orange-500 transition-colors">
                Depoimentos
              </Link>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() =>
                  window.open(
                    "https://wa.me/557592028265?text=Olá! Gostaria de saber mais sobre os treinos da Zero1 do TAF.",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </nav>

            <Button variant="ghost" size="sm" className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-20 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Transforme sua preparação física para o <span className="text-orange-500">TAF</span> com quem entende
                  do assunto
                </h1>
                <p className="text-xl text-gray-300">
                  Treinos presenciais e online, com acompanhamento técnico e nutricional.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4"
                onClick={() =>
                  window.open(
                    "https://wa.me/557592028265?text=Olá! Quero me preparar para o TAF. Gostaria de conhecer os planos disponíveis.",
                    "_blank",
                  )
                }
              >
                🔶 Quero me preparar agora
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/treinamento.jpg"
                alt="Candidatos treinando para TAF"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Zero1 */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-black">Sobre a Zero1 do TAF</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A Zero1 do TAF é especialista na preparação de candidatos para o Teste de Aptidão Física de concursos
                das áreas militar e policial. Unimos experiência, metodologia e acompanhamento individualizado para
                garantir sua aprovação no TAF.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold">Foco em corrida, barra, abdominal e flexão</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold">Treinos  online</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold">Avaliação física e plano nutricional</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <p className="font-semibold">Plataforma digital com suporte técnico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Produtos em Destaque</h2>
            <p className="text-lg text-gray-600">Escolha o plano ideal para sua preparação</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mentoria Estratégica */}
            <Card className="border-2 border-orange-500 shadow-xl">
              <CardHeader className="bg-orange-500 text-white text-center">
                <CardTitle className="text-2xl">🔸 Mentoria Estratégica</CardTitle>
                <CardDescription className="text-orange-100">
                  Para quem busca treinar com inteligência e disciplina
                </CardDescription>
                <div className="text-3xl font-bold mt-4">R$ 133,00/mês</div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Mentoria online com treinos personalizados via app MFIT</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Orientação Nutricional Personalizada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Avaliação Quinzenal + Ajustes Conforme A Evolulção</span>
                  </div>
                                    <div className="flex items-center space-x-3">
                    <CheckCircle className="w-7 h-7 text-green-500" />
                    <span>Para Quem Quer Treinar Com Inteligência,Disciplina e Acompanhamento Técnico Online.</span>
                  </div>
                  
                </div>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3"
                  onClick={() =>
                    window.open(
                      "https://wa.me/557592028265?text=Olá! Tenho interesse na *Mentoria Estratégica* (R$ 190/mês). Gostaria de mais informações sobre:%0A%0A✅ Treinos personalizados via app MFIT%0A✅ Avaliação quinzenal%0A✅ Orientação nutricional%0A%0APodemos conversar?",
                      "_blank",
                    )
                  }
                >
                  🔘 Quero essa mentoria
                </Button>
              </CardContent>
            </Card>

            {/* Plano “MANUAL DO ALUNO” */}
            <Card className="border-2 border-orange-500 shadow-xl">
              <CardHeader className="bg-orange-500 text-white text-center">
                <CardTitle className="text-2xl">🔸 MANUAL DO ALUNO</CardTitle>
                <CardDescription className="text-orange-100">
                 💬Para quem quer começar com o pé direito e entender tudo sobre o TAF, com autonomia.

                </CardDescription>
                <div className="text-3xl font-bold mt-4">R$ 133,00/mês</div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>📕 E-book E-book completo</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>💸Baixo custo, sem enrolação.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>➡️Ideal para iniciantes.</span>
                  </div>
                                    <div className="flex items-center space-x-3">
                    <CheckCircle className="w-7 h-7 text-green-500" />
                    <span>💬Para quem quer começar com o pé direito e entender tudo sobre o TAF, com autonomia.</span>
                  </div>
                  
                </div>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3"
                  onClick={() =>
                    window.open(
                      "https://wa.me/557592028265?text=Olá! Tenho interesse na *Mentoria Estratégica* (R$ 190/mês). Gostaria de mais informações sobre:%0A%0A✅ Treinos personalizados via app MFIT%0A✅ Avaliação quinzenal%0A✅ Orientação nutricional%0A%0APodemos conversar?",
                      "_blank",
                    )
                  }
                >
                  🔘 Quero essa mentoria
                </Button>
              </CardContent>
            </Card>
{/* Plano “COMANDO ONLINE” */}
            <Card className="border-2 border-orange-500 shadow-xl">
              <CardHeader className="bg-orange-500 text-white text-center">
                <CardTitle className="text-2xl">🔸 COMANDO ONLINE</CardTitle>
                <CardDescription className="text-orange-100">
                  💬Para quem busca treinar com inteligência e disciplina
                </CardDescription>
                <div className="text-3xl font-bold mt-4">R$ 133,00/mês</div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>📕 E-bookE-book</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>🍽️ Dieta personalizada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>🎯Mentoria online com ajustes e acompanhamento</span>
                  </div>
                                    <div className="flex items-center space-x-3">
                    <CheckCircle className="w-7 h-7 text-green-500" />
                    <span>💬 Pra quem quer suporte de verdade sem sair de casa.</span>
                    
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-7 h-7 text-green-500" />
                    <span>➡️ Ideal pra quem precisa de disciplina guiada.</span>
                    
                  </div>
                  
                </div>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3"
                  onClick={() =>
                    window.open(
                      "https://wa.me/557592028265?text=Olá! Tenho interesse na *Mentoria Estratégica* (R$ 190/mês). Gostaria de mais informações sobre:%0A%0A✅ Treinos personalizados via app MFIT%0A✅ Avaliação quinzenal%0A✅ Orientação nutricional%0A%0APodemos conversar?",
                      "_blank",
                    )
                  }
                >
                  🔘 Quero essa mentoria
                </Button>
              </CardContent>
            </Card>

{/*  Plano “GUERRA FRIA” */}
            <Card className="border-2 border-orange-500 shadow-xl">
              <CardHeader className="bg-orange-500 text-white text-center">
                <CardTitle className="text-2xl">🔸GUERRA FRIA</CardTitle>
                <CardDescription className="text-orange-100">
                 ➡️Pra quem precisa de estrutura e orientação, mas sem treino.
                </CardDescription>
                <div className="text-3xl font-bold mt-4">R$ 133,00/mês</div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>🍽️Dieta personalizada</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Orientação Nutricional Personalizada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>🎯Mentoria online</span>
                  </div>
                                    <div className="flex items-center space-x-3">
                    <CheckCircle className="w-7 h-7 text-green-500" />
                    <span>💬Silencioso, estratégico e focado.</span>
                  </div>

                     <div className="flex items-center space-x-3">
                    <CheckCircle className="w-7 h-7 text-green-500" />
                    <span>➡️ Pra quem precisa de estrutura e orientação, mas sem treino.</span>
                  </div>
                  
                </div>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3"
                  onClick={() =>
                    window.open(
                      "https://wa.me/557592028265?text=Olá! Tenho interesse na *Mentoria Estratégica* (R$ 190/mês). Gostaria de mais informações sobre:%0A%0A✅ Treinos personalizados via app MFIT%0A✅ Avaliação quinzenal%0A✅ Orientação nutricional%0A%0APodemos conversar?",
                      "_blank",
                    )
                  }
                >
                  🔘 Quero essa mentoria
                </Button>
              </CardContent>
            </Card>
{/*  Plano “AÇÃO TÁTICA” */}
            <Card className="border-2 border-orange-500 shadow-xl">
              <CardHeader className="bg-orange-500 text-white text-center">
                <CardTitle className="text-2xl">🔸AÇÃO TÁTICA</CardTitle>
                <CardDescription className="text-orange-100">
                  (Presencial em Feira de Santana)
                </CardDescription>
                <div className="text-3xl font-bold mt-4">R$ 133,00/mês</div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>🎯mentoria on-line com ajustes e acompanhamento </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>💬Mão na massa, suor no rosto.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>➡️ Quem é da missão, aparece.</span>
                  </div>
                  
                </div>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3"
                  onClick={() =>
                    window.open(
                      "https://wa.me/557592028265?text=Olá! Tenho interesse na *Mentoria Estratégica* (R$ 190/mês). Gostaria de mais informações sobre:%0A%0A✅ Treinos personalizados via app MFIT%0A✅ Avaliação quinzenal%0A✅ Orientação nutricional%0A%0APodemos conversar?",
                      "_blank",
                    )
                  }
                >
                  🔘 Quero essa mentoria
                </Button>
              </CardContent>
            </Card>


{/*  Plano “Plano “Comando on-line”” */}
            <Card className="border-2 border-orange-500 shadow-xl">
              <CardHeader className="bg-orange-500 text-white text-center">
                <CardTitle className="text-2xl">🔸AÇÃO TÁTICA</CardTitle>
                <CardDescription className="text-orange-100">
                  (Presencial em Feira de Santana)
                </CardDescription>
                <div className="text-3xl font-bold mt-4">R$ 133,00/mês</div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>🎯mentoria on-line com ajustes e acompanhamento </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>💬Mão na massa, suor no rosto.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>➡️ Quem é da missão, aparece.</span>
                  </div>
                  
                </div>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3"
                  onClick={() =>
                    window.open(
                      "https://wa.me/557592028265?text=Olá! Tenho interesse na *Mentoria Estratégica* (R$ 190/mês). Gostaria de mais informações sobre:%0A%0A✅ Treinos personalizados via app MFIT%0A✅ Avaliação quinzenal%0A✅ Orientação nutricional%0A%0APodemos conversar?",
                      "_blank",
                    )
                  }
                >
                  🔘 Quero essa mentoria
                </Button>
              </CardContent>
            </Card>
{/*  Plano “Plano “Na Mira”” */}
            <Card className="border-2 border-orange-500 shadow-xl">
              <CardHeader className="bg-orange-500 text-white text-center">
                <CardTitle className="text-2xl">🔸Na Mira</CardTitle>
                <CardDescription className="text-orange-100">
                 🎯mentoria on-line com ajustes e acompanhamento.
                </CardDescription>
                <div className="text-3xl font-bold mt-4">R$ 133,00/mês</div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>📕 E-book </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>🍽️Dieta personalizada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>💬 Alinhando alimentação com conhecimento.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>➡️ Pra quem quer afinar o foco e subir de nível.</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3"
                  onClick={() =>
                    window.open(
                      "https://wa.me/557592028265?text=Olá! Tenho interesse na *Mentoria Estratégica* (R$ 190/mês). Gostaria de mais informações sobre:%0A%0A✅ Treinos personalizados via app MFIT%0A✅ Avaliação quinzenal%0A✅ Orientação nutricional%0A%0APodemos conversar?",
                      "_blank",
                    )
                  }
                >
                  🔘 Quero essa mentoria
                </Button>
              </CardContent>
            </Card>





            {/* Presencial Tático */}
            <Card className="border-2 border-black shadow-xl">
              <CardHeader className="bg-black text-white text-center">
                <CardTitle className="text-2xl">🔸 Mentoria Tático</CardTitle>
                <CardDescription className="text-gray-300">
                  Para quem quer treinar  com especialista Online 
                </CardDescription>
                <div className="text-3xl font-bold mt-4">R$ 154,00/mês</div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Treinos Taticos (corrida, barra, abdominal, flexão)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Avaliação física inicial e acompanhamento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Especialista em TAF dedicado</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-black hover:bg-gray-800 text-white text-lg py-3"
                  onClick={() =>
                    window.open(
                      "https://wa.me/557592028265?text=Olá! Tenho interesse no *Presencial Tático* (R$ 150/mês). Gostaria de mais informações sobre:%0A%0A✅ Treinos presenciais (corrida, barra, abdominal, flexão)%0A✅ Avaliação física inicial%0A✅ Acompanhamento especializado%0A%0APodemos conversar?",
                      "_blank",
                    )
                  }
                >
                  🔘 Quero essa Mentoria
                </Button>
              </CardContent>
              
            </Card>
          </div>
        </div>
      </section>
      

      {/* Comparativo */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Comparativo Rápido</h2>
            <p className="text-lg text-gray-600">Veja as diferenças entre nossos planos</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Características</th>
                      <th className="px-6 py-4 text-center">Mentoria Estratégica</th>
                      <th className="px-6 py-4 text-center">Treinamento Tático</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium">Personalização</td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Nutrição personalizada</td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Acompanhamento técnico</td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Plataforma Online</td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Treino </td>
                      <td className="px-6 py-4 text-center">
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Avaliação Física</td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="px-6 py-4 font-bold">Preço</td>
                      <td className="px-6 py-4 text-center font-bold text-orange-500">R$ 190/mês</td>
                      <td className="px-6 py-4 text-center font-bold text-black">R$ 150/mês</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Benefícios Gerais</h2>
            <p className="text-lg text-gray-600">Por que escolher a Zero1 do TAF</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">💡 Treinos Otimizados</h3>
              <p className="text-gray-600">Treinos otimizados com foco em concursos militares</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">👨‍🏫 Equipe Experiente</h3>
              <p className="text-gray-600">Equipe experiente e qualificada</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">📊 Monitoramento</h3>
              <p className="text-gray-600">Monitoramento de evolução física</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">📲 Suporte WhatsApp</h3>
              <p className="text-gray-600">Suporte via WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Depoimentos de Alunos</h2>
            <p className="text-lg text-gray-600">Veja o que nossos alunos falam sobre nós</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="João Silva"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">João Silva</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "A metodologia da Zero1 do TAF foi fundamental para minha aprovação. Os treinos são focados e o
                  acompanhamento é excepcional!"
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Maria Santos"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Maria Santos</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Consegui melhorar meu tempo na corrida em 30% em apenas 3 meses. O plano nutricional fez toda a
                  diferença!"
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Carlos Oliveira"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Carlos Oliveira</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Treino presencial com qualidade e foco no que realmente importa. Recomendo para todos que querem
                  passar no TAF!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-600">Tire suas dúvidas sobre nossos serviços</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">Como são os treinos online?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Os treinos online são personalizados através do app MFIT, com acompanhamento quinzenal e ajustes
                  conforme sua evolução. Você recebe orientação nutricional e suporte técnico via WhatsApp.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">Os treinos são adaptados ao meu nível físico?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sim! Fazemos uma avaliação física inicial para entender seu nível atual e criamos um plano
                  personalizado. Os treinos evoluem conforme seu progresso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">Posso cancelar quando quiser?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sim, você pode cancelar a qualquer momento. Não temos fidelidade obrigatória, mas recomendamos pelo
                  menos 3 meses para ver resultados significativos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">Qual a diferença entre os dois pacotes?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A Mentoria Estratégica é 100% online com nutrição personalizada, enquanto o Treinamento Tático oferece
                  treinos focados nos exercícios do TAF. Ambos incluem acompanhamento técnico especializado.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white">Pronto para sua aprovação no TAF?</h2>
              <p className="text-xl text-orange-100">Escolha seu plano e comece a treinar com quem entende!</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-500 hover:bg-gray-100 text-lg px-8 py-4"
                onClick={() =>
                  window.open(
                    "https://wa.me/557592028265?text=Olá! Quero contratar a *Mentoria Estratégica* (R$ 190/mês). Como posso começar?",
                    "_blank",
                  )
                }
              >
                🔸 Quero a Mentoria Estratégica
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-500 text-lg px-8 py-4 bg-transparent"
                onClick={() =>
                  window.open(
                    "https://wa.me/557592028265?text=Olá! Quero contratar o * Treinamento Tático* (R$ 150/mês). Como posso começar?",
                    "_blank",
                  )
                }
              >
                🔸 Quero o  Treinamento Tático
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Logo Zero1 do TAF"
                    width={430}
                    height={430}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400">Especialistas em preparação física para concursos militares e policiais.</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Links Úteis</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">
                  Termos de Uso
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="/admin" className="block text-gray-400 hover:text-orange-500 transition-colors">
                  Painel Admin
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-400">(75)9202-8265</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-400"> atendimento.zero1dotaf@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="https://wa.me/557592028265?text=Olá!" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Zero1 do TAF. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}