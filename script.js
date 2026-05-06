/**
 * Core function to trigger a file download from the browser
 * @param {string} filename - The name of the file (e.g., 'notes.txt')
 * @param {string} text - The actual string content to save
 */
function downloadFile(filename, text) {
    // Create a temporary hidden link element
    const element = document.createElement('a');
    
    // Set the content as a data URI
    // encodeURIComponent handles spaces and special characters safely
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    
    // Tell the browser to download the file instead of opening it
    element.setAttribute('download', filename);

    // Append to body, click it, and remove it immediately
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
    const exportBtn = document.getElementById("export-btn");
    const textArea = document.getElementById("text-val");

    // Add click listener to the button
    exportBtn.addEventListener("click", () => {
        const content = textArea.value;
        const date = new Date().toISOString().slice(0, 10); // Adds a date stamp (YYYY-MM-DD)
        const filename = `export_${date}.txt`;

        if (content.trim() === "") {
            alert("Please enter some text before exporting!");
            return;
        }

        downloadFile(filename, content);
    });
});
