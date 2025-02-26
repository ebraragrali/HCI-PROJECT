function login() {
  alert("Redirecting to login...");
}

function register() {
  alert("Redirecting to registration...");
}

function filterHotels() {
  const hotelList = document.getElementById("hotel-list");
  hotelList.innerHTML = `
      <div>
          <h4>Seaside Hotel</h4>
          <p>Price: $100/night</p>
          <p>Features: Pool, Free Wi-Fi, Near Beach</p>
          <p>Distance to attractions: 2 miles</p>
          <p>Reviews: ★★★★☆</p>
      </div>
  `;
}

function filterCars() {
  const carList = document.getElementById("car-list");
  carList.innerHTML = `
      <div>
          <h4>Toyota Corolla</h4>
          <p>Price: $40/day</p>
          <p>Type: Sedan</p>
          <p>Reviews: ★★★★☆</p>
      </div>
  `;
}

function showHelp() {
  const helpContent = document.getElementById("help-content");
  helpContent.classList.toggle("hidden");
}

function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.classList.toggle("hidden");
}

function toggleHelp() {
  const helpContent = document.getElementById("help-content");
  helpContent.classList.toggle("hidden");
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
window.onload = function () {
  document.getElementById("help-content").classList.add("hidden");
  document.getElementById("site-explanation").classList.add("hidden");
};
