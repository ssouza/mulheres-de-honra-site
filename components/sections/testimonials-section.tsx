export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4 font-serif">Depoimentos</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Confira os relatos inspiradores de mulheres que participaram das edições anteriores do evento e tiveram suas
            vidas transformadas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Depoimento 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_1?shorts=1"
                title="Depoimento de Ana Luiza"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-burgundy">Ana Luiza</h3>
              <p className="text-gray-600">Empresária</p>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_2?shorts=1"
                title="Depoimento de Beatriz"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-burgundy">Beatriz</h3>
              <p className="text-gray-600">Professora</p>
            </div>
          </div>

          {/* Depoimento 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_3?shorts=1"
                title="Depoimento de Carolina"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-burgundy">Carolina</h3>
              <p className="text-gray-600">Médica</p>
            </div>
          </div>

          {/* Depoimento 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_4?shorts=1"
                title="Depoimento de Daniela"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-burgundy">Daniela</h3>
              <p className="text-gray-600">Advogada</p>
            </div>
          </div>

          {/* Depoimento 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_5?shorts=1"
                title="Depoimento de Elisa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-burgundy">Elisa</h3>
              <p className="text-gray-600">Psicóloga</p>
            </div>
          </div>

          {/* Depoimento 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[9/16] relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_6?shorts=1"
                title="Depoimento de Fernanda"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-burgundy">Fernanda</h3>
              <p className="text-gray-600">Engenheira</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
