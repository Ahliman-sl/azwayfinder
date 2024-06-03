export async function geocodeCity(city, setLoading) {
  setLoading(true); // Loading spinner'ı göster
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?city=${city}&countrycodes=az&format=json&limit=1`
  );
  const data = await response.json();
  setLoading(false); // Loading spinner'ı gizle
  if (data.length > 0) {
    const { lat, lon } = data[0];
    return { lat: parseFloat(lat), lng: parseFloat(lon) };
  } else {
    throw new Error(`Coordiantions doesn't find ${city}, try another`);
  }
}

// export async function geocodeCity(city) {
//   const response = await fetch(
//     `https://nominatim.openstreetmap.org/search?city=${city}&countrycodes=az&format=json&limit=1`
//   );
//   const data = await response.json();
//   if (data.length > 0) {
//     const { lat, lon } = data[0];
//     return { lat: parseFloat(lat), lng: parseFloat(lon) }; // Değişiklik yapıldı
//   } else {
//     throw new Error(`Coordiantions doesn't find ${city}, try another`);
//   }
// }
