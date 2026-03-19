document.addEventListener('DOMContentLoaded', () => {
    var navigationContainer = document.getElementById("menuNavigationId");
    navigationContainer.addEventListener("click", () => {
        window.location.href = navigationContainer.dataset.url;
    });
    if (window.location.pathname.includes("catalogue")) {
        var cars = document.querySelectorAll("div.car-common, div.car-premium");
        cars.forEach(
            (car) => {
                car.addEventListener("click", () => {
                    window.location.href = car.dataset.url;
                })
            }
        )
    }
});