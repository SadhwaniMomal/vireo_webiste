function setActive(element) {
    // Remove 'active' class from all links
    document.querySelectorAll(".pagination a").forEach(link => {
        link.classList.remove("active");
        link.style.textDecoration = "underline"; // Restore underline
    });

    // Add 'active' class to clicked link
    element.classList.add("active");
    element.style.textDecoration = "none"; // Remove underline
}