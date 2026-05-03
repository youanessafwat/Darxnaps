document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("search");
    if (search) {
        search.addEventListener("keyup", () => {
            let value = search.value.toLowerCase();
            document.querySelectorAll(".cyber-card").forEach(card => {
                let text = card.innerText.toLowerCase();
                card.style.display = text.includes(value) ? "flex" : "none";
            });
        });
    }
});
