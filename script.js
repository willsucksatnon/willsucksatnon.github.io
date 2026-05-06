function downloadFile(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/markdown;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById("text-val");
    const exportTxtBtn = document.getElementById("export-btn");
    const exportMdBtn = document.getElementById("export-md-btn");

    // TXT Export
    exportTxtBtn.addEventListener("click", () => {
        downloadFile("export.txt", textArea.value);
    });

    // MD Export
    exportMdBtn.addEventListener("click", () => {
        downloadFile("export.md", textArea.value);
    });
});
