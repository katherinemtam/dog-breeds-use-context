export const fetchDogs = async() => {
  const res = await fetch(`https://api.thedogapi.com/v1/breeds`)
  const json = await res.json();

  const mungedDogs = json.map(dog => ({
    name: dog.name,
    url: dog.image.url || "Image Unavailable",
    origin: dog.origin || "Unknown",
    lifespan: dog.life_span || "Unknown"
  }))

  return mungedDogs;
}
