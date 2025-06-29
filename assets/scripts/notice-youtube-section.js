document.addEventListener("DOMContentLoaded", () => {
    const noticeList = document.getElementById("noticeList");
    const videoWrapper = document.querySelector(".video-wrapper");

    function syncVideoHeight() {
        const noticeHeight = noticeList.offsetHeight;
        videoWrapper.style.height = noticeHeight + "px";
    }

    syncVideoHeight();
    window.addEventListener("resize", syncVideoHeight);
});