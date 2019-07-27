

window.addEventListener("DOMContentLoaded", () => {
    const macos = document.getElementById("option1");
    const windows = document.getElementById("option2");
    console.log(macos);
    macos.addEventListener("click", () => {
        console.log("macos");
    });

    windows.addEventListener("click", () => {
        console.log("windows");
    });
    console.log("content loaded");
});