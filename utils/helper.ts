export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRadians = (degrees: number): number => degrees * (Math.PI / 180);

  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in kilometers
}

export function getCurrentLocation(): Promise<{ latitude: number; longitude: number }> {
  return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
              (position) => {
                  const { latitude, longitude } = position.coords;
                  resolve({ latitude, longitude });
              },
              (error) => {
                  reject(new Error("Unable to retrieve location: " + error.message));
              }
          );
      } else {
          reject(new Error("Geolocation is not supported by this browser."));
      }
  });
}