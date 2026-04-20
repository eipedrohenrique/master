function toggleMenu() { document.getElementById('menu').classList.toggle('active') }
function scrollContato() { document.getElementById('contato').scrollIntoView({ behavior: 'smooth' }) }
function enviarDenuncia(e) { e.preventDefault(); alert('Denúncia enviada! (Integre com Firebase depois)') }