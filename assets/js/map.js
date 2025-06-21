document.addEventListener("DOMContentLoaded", function () {
  // Check if the map container exists
  const mapContainer = document.getElementById("map");
  if (!mapContainer) {
    console.error("Map container not found");
    return;
  }

  // Initialize the map
  const map = L.map("map").setView([-26.2032, 28.0876], 15); // Location: Johannesburg

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add marker
  L.marker([-26.2032, 28.0876])
    .addTo(map)
    .bindPopup("Emik Auto Spares - Johannesburg")
    .openPopup();
});
