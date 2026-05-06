/**
 * Universal Download Function
 */
function downloadFile(filename, text) {
    const element = document.createElement('a');
    // Using 'data:attachment/text' helps some browsers force a download dialog
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

/**
 * Main Logic - Runs once the page is loaded
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Map the elements from your index.html
    const textArea = document.getElementById("text-val");
    const txtBtn = document.getElementById("export-btn");
    const mdBtn = document.getElementById("export-md-btn");

    // 2. Handle Text Export
    if (txtBtn) {
        txtBtn.addEventListener("click", () => {
            const content = textArea.value;
            downloadFile("my-file.txt", content);
        });
    }

    // 3. Handle Markdown Export
    if (mdBtn) {
        mdBtn.addEventListener("click", () => {
            const content = textArea.value;
            // .md files are just text files with a different extension
            downloadFile("my-file.md", content);
        });
    }
});
