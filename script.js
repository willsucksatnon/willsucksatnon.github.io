function downloadFile(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById("text-val");
    const txtBtn = document.getElementById("export-btn");
    const mdBtn = document.getElementById("export-md-btn");
    const previewBtn = document.getElementById("preview-btn");
    const previewArea = document.getElementById("preview-area");

    // 1. TXT Export
    if (txtBtn) {
        txtBtn.onclick = () => downloadFile("export.txt", textArea.value);
    }

    // 2. MD Export
    if (mdBtn) {
        mdBtn.onclick = () => downloadFile("export.md", textArea.value);
    }

    // 3. Preview Logic
    if (previewBtn && previewArea) {
        previewBtn.onclick = () => {
            // Check if preview is currently hidden
            if (previewArea.style.display === "none") {
                // Show it and fill it with text
                previewArea.textContent = textArea.value;
                previewArea.style.display = "block";
                previewBtn.textContent = "Hide Preview";
            } else {
                // Hide it
                previewArea.style.display = "none";
                previewBtn.textContent = "Show Preview";
            }
        };
    }
});
