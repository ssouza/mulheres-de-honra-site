export default function GoogleMapEmbed() {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382.9372528347999!2d-46.85654024103196!3d-23.484250175448864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf024e551fdb09%3A0xde321bfca44e7a93!2sAv.%20Ipanema%2C%20165%20-%20Empresarial%2018%20do%20Forte%2C%20Barueri%20-%20SP%2C%2006472-002!5e0!3m2!1spt-BR!2sbr!4v1753114636556!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
