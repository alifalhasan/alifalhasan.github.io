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
    const bibtexText = document.getElementById('bibtexContent').textContent;
    navigator.clipboard.writeText(bibtexText);
    alert('Copied to clipboard!');
}
