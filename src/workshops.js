// Intentionally incomplete classroom proposal.
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

// Filtre les ateliers selon le titre, le thème et les disponibilités.
export function filterWorkshops(workshops, query, onlyAvailable) {
  const search = normalizeText(query);

  return workshops.filter((item) => {
    const matchesSearch =
      normalizeText(item.title).includes(search) ||
      normalizeText(item.topic).includes(search);

    const matchesAvailability =
      !onlyAvailable || item.seats !== 0;

    return matchesSearch && matchesAvailability;
  });
}