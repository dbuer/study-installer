function onSubmit() {
    const password = document.getElementById("inputID").value;
    const { browser, OS } = detectBrowser();
    if (password > 0) {
        alert(`Detected Browser: ${browser}, System: ${OS}`);
        window.location.replace("instructions.html");
    } else {
        alert("Mechanical Turk ID not recognized.");
    }
    return false;
}

