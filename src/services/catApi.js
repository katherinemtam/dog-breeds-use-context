export const fetchCats = async() => {
  const res = await fetch(`https://api.thecatapi.com/v1/breeds`)
  const json = await res.json();

  const mungedCats = json.map(cat => ({
    name: cat.name,
    url: cat?.image?.url || "Image Unavailable",
    origin: cat.origin || "Unknown",
    lifespan: cat.life_span || "Unknown"
  }))

  return mungedCats;
}
