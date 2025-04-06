document.addEventListener("DOMContentLoaded", function () {
    // Attach click event to all Cite buttons
    document.querySelectorAll(".cite-btn").forEach(button => {
        button.addEventListener("click", function () {
            const bibkey = this.getAttribute("data-bibkey");
            showBibtex(bibkey);
        });
    });
});

function showBibtex(bibkey) {
    fetch(`/static/citations/${bibkey}.bib`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('bibtexContent').textContent = data;
            document.getElementById('downloadBibtex').setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(data)}`);
            document.getElementById('bibtexModal').style.display = 'flex';
        })
        .catch(error => {
            console.error("Error loading BibTeX:", error);
            document.getElementById('bibtexContent').textContent = "Failed to load citation.";
        });
}

function closeModal() {
    document.getElementById('bibtexModal').style.display = 'none';
}

document.getElementById("copyBibtexBtn").addEventListener("click", function () {
    const bibtexContent = document.getElementById("bibtexContent").innerText.trim();
    const copyText = document.getElementById("copyBibtexText");

    navigator.clipboard.writeText(bibtexContent).then(() => {
        copyText.innerText = "Copied!";
        setTimeout(() => { copyText.innerText = "Copy"; }, 1500);
    }).catch(err => {
        console.error("Failed to copy BibTeX:", err);
    });
});
