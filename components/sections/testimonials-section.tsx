export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-burgundy mb-4 font-serif">Depoimentos</h2>
          <p className="text-gray-700 mx-auto">
            Confira os relatos inspiradores de mulheres que participaram das edições anteriores do evento e tiveram suas vidas transformadas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">
          {/* Depoimento 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/AOMS7CuQVYk?shorts=1"
                title="Depoimento de Sonia Santos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-2">
              <h3 className="text-lg lg:text-sm md:text-md font-bold text-burgundy">Sonia Santos</h3>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/myVRBwaMjwY?shorts=1"
                title="Depoimento de "
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-2">
              <h3 className="text-lg lg:text-sm md:text-md font-bold text-burgundy">Nome</h3>
            </div>
          </div>

          {/* Depoimento 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/KgrzhFOaN3E?shorts=1"
                title="Depoimento de "
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-2">
              <h3 className="text-lg lg:text-sm md:text-md font-bold text-burgundy">Nome</h3>
            </div>
          </div>

          {/* Depoimento 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ksgW4psCi9M?shorts=1"
                title="Depoimento de Amanda Primola"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-2">
              <h3 className="text-lg lg:text-sm md:text-md font-bold text-burgundy">Amanda Primola</h3>
            </div>
          </div>

          {/* Depoimento 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/AXAtjLxX9O8?shorts=1"
                title="Depoimento de Erika Oliveira"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-2">
              <h3 className="text-lg lg:text-sm md:text-md font-bold text-burgundy">Erika Oliveira</h3>
            </div>
          </div>

          {/* Depoimento 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/LsW0E7gIx9k?shorts=1"
                title="Depoimento da Pra. Vera Souza"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-2">
              <h3 className="text-lg lg:text-sm md:text-md font-bold text-burgundy">Pra. Vera Souza</h3>
            </div>
          </div>

          {/* Depoimento 7 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/oNPw48fxaOc?shorts=1"
                title="Depoimento de Melina Carneiro"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-2">
              <h3 className="text-lg lg:text-sm md:text-md font-bold text-burgundy">Melina Carneiro</h3>
            </div>
          </div>

          {/* Depoimento 8 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/pTw81K6XWuI?shorts=1"
                title="Depoimento de Dany Fernandes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-2">
              <h3 className="text-lg lg:text-sm md:text-md font-bold text-burgundy">Dany Fernandes</h3>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
