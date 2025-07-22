import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="md:hidden text-burgundy font-serif text-lg md:text-2xl font-bold">Mulheres de Honra</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#sobre" className="text-burgundy hover:text-burgundy-dark font-medium">
              Sobre
            </Link>
            <Link href="#palestrantes" className="text-burgundy hover:text-burgundy-dark font-medium">
              Palestrantes
            </Link>
           {/* <Link href="#programacao" className="text-burgundy hover:text-burgundy-dark font-medium">
              Programação
            </Link>*/}
            <Link href="#depoimentos" className="text-burgundy hover:text-burgundy-dark font-medium">
              Depoimentos
            </Link>
            <Link href="#apoiadores" className="text-burgundy hover:text-burgundy-dark font-medium">
              Apoiadores
            </Link>
            {/*<Link href="#fotos" className="text-burgundy hover:text-burgundy-dark font-medium">
              Fotos
            </Link>*/}
            <Link href="#local" className="text-burgundy hover:text-burgundy-dark font-medium">
              Local
            </Link>
            <Link href="#faq" className="text-burgundy hover:text-burgundy-dark font-medium">
              FAQ
            </Link>
          </div>
          <div>
            <Link href="/inscricao">
              <button className="bg-burgundy text-white px-6 py-2 rounded-md hover:bg-burgundy-dark transition duration-300">
                Inscreva-se
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
