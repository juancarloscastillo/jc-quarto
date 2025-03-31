<script>
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".quarto-listing .listing-category").forEach(tag => {
        tag.addEventListener("click", function (event) {
            event.preventDefault();
            
            let category = this.textContent.trim().toLowerCase();
            let section = this.closest(".quarto-listing-container-grid"); // Find the nearest section
            let items = section.querySelectorAll(".g-col-1");

            // Reset visibility of all items in this section
            items.forEach(item => {
                item.style.display = "none"; // Hide everything by default
            });

            // Show only matching items
            let found = false;
            items.forEach(item => {
                let encodedCategory = item.dataset.categories;

                try {
                    let decodedCategories = atob(encodedCategory).toLowerCase(); // Decode base64
                    if (decodedCategories.includes(category)) {
                        item.style.display = "block";
                        found = true;
                    }
                } catch (error) {
                    console.error("Error decoding category:", error);
                }
            });

            // Remove existing "No matching items" messages
            section.querySelectorAll(".listing-no-matching").forEach(msg => msg.remove());

            // If no items match, show "No matching items" message
            if (!found) {
                let noMatchMessage = document.createElement("div");
                noMatchMessage.classList.add("listing-no-matching");
                noMatchMessage.style.textAlign = "center";
                noMatchMessage.style.padding = "10px";
                noMatchMessage.style.color = "#888";
                noMatchMessage.innerHTML = "No matching items";
                section.querySelector(".list.grid").appendChild(noMatchMessage);
            }
        });
    });
});

</script>
