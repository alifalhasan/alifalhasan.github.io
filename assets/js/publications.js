function showBibtex(bibkey) {
    fetch(`/static/citations/${bibkey}.bib`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('bibtexContent').textContent = data;
            document.getElementById('downloadBibtex').setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(data)}`);
            document.getElementById('bibtexModal').style.display = 'flex';
        });
}

function closeModal() {
    document.getElementById('bibtexModal').style.display = 'none';
}

function copyBibtex() {
    const bibtexContent = document.getElementById("bibtexContent").innerText.trim();
    const copyButton = document.getElementById("copyBibtexBtn");
    const copyText = document.getElementById("copyBibtexText");

    if (navigator.clipboard) {
        navigator.clipboard.writeText(bibtexContent).then(() => {
            copyText.innerText = "Copied!";
            copyButton.disabled = true;

            setTimeout(() => {
                copyText.innerText = "Copy";
                copyButton.disabled = false;
            }, 1500);
        }).catch(err => {
            console.error("Failed to copy BibTeX:", err);
        });
    } else {
        const textarea = document.createElement("textarea");
        textarea.value = bibtexContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        copyText.innerText = "Copied!";
        copyButton.disabled = true;

        setTimeout(() => {
            copyText.innerText = "Copy";
            copyButton.disabled = false;
        }, 1500);
    }
}