document.addEventListener("DOMContentLoaded", function () {
    // Attach click event to all Cite buttons
    document.querySelectorAll(".cite-btn").forEach(button => {
        button.addEventListener("click", function () {
            const bibkey = this.getAttribute("data-bibkey");
            showBibtex(bibkey);
        });
    });

    // Close modal when clicking outside the content box
    window.addEventListener("click", function (event) {
        const modal = document.getElementById('bibtexModal');
        if (event.target === modal) {
            closeModal();
        }
    });
});

function showBibtex(bibkey) {
    const modal = document.getElementById('bibtexModal');
    const contentBox = document.getElementById('bibtexContent');

    // Reset content to loading state
    contentBox.textContent = "Loading citation...";

    // Display flex to calculate layout, but keep opacity 0 initially
    modal.style.display = 'flex';

    // Small timeout to allow the browser to register 'display: flex' before fading in
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    fetch(`/static/citations/${bibkey}.bib`)
        .then(response => {
            if (!response.ok) throw new Error("File not found");
            return response.text();
        })
        .then(data => {
            contentBox.textContent = data;
            document.getElementById('downloadBibtex').setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(data)}`);
        })
        .catch(error => {
            console.error("Error loading BibTeX:", error);
            contentBox.textContent = "Error: Could not load citation file.";
        });
}

function closeModal() {
    const modal = document.getElementById('bibtexModal');

    // Remove the class to trigger fade-out animation
    modal.classList.remove('show');

    // Wait for the transition (300ms matches CSS) before hiding the element
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

document.getElementById("copyBibtexBtn").addEventListener("click", function () {
    const bibtexContent = document.getElementById("bibtexContent").innerText.trim();
    const copyText = document.getElementById("copyBibtexText");

    navigator.clipboard.writeText(bibtexContent).then(() => {
        // Visual feedback
        const originalText = copyText.innerText;
        copyText.innerText = "Copied!";

        // Reset button text after 2 seconds
        setTimeout(() => {
            copyText.innerText = "Copy";
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy BibTeX:", err);
        copyText.innerText = "Error";
    });
});