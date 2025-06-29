document.addEventListener("DOMContentLoaded", () => {
    const membersGrid = document.getElementById("membersGrid");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const memberCards = Array.from(membersGrid.querySelectorAll(".member-card"));

    const initialVisible = 8;
    const loadCount = 4;
    let visibleCount = initialVisible;

    // Hide all member cards beyond initialVisible
    memberCards.forEach((card, i) => {
        if (i >= initialVisible) {
            card.style.display = "none";
        }
    });

    // Hide load more button if <= initialVisible
    if (memberCards.length <= initialVisible) {
        loadMoreBtn.style.display = "none";
    }

    loadMoreBtn.addEventListener("click", () => {
        // Show next loadCount members
        const nextMembers = memberCards.slice(visibleCount, visibleCount + loadCount);

        nextMembers.forEach(card => {
            card.style.display = "flex"; // flex because your .member-card uses flex-direction
            card.style.opacity = 0;

            // Animate fade in
            setTimeout(() => {
                card.style.transition = "opacity 0.4s ease";
                card.style.opacity = 1;
            }

                , 20);
        });

        visibleCount += loadCount;

        // Hide button if no more members to show
        if (visibleCount >= memberCards.length) {
            loadMoreBtn.style.display = "none";
        }
    });
});