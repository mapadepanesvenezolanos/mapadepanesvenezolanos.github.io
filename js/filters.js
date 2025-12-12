function filterRegion(region) {
  const items = document.querySelectorAll('.listing-item');
  items.forEach(item => {
    const itemRegion = item.getAttribute('data-region');
    item.style.display = (region === 'all' || itemRegion === region) ? 'block' : 'none';
  });
}

function filterTipo(tipo) {
  const items = document.querySelectorAll('.listing-item');
  items.forEach(item => {
    const itemTipo = item.getAttribute('data-tipo');
    item.style.display = (tipo === 'all' || itemTipo === tipo) ? 'block' : 'none';
  });
}