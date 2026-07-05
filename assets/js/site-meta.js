// Fetches "last updated" dates from the GitHub API.
// To reuse this template: just update `repository` in _config.yml.

(function () {
    const REPO = document.body.dataset.repo;
    if (!REPO) return;

    const CACHE_TTL = 1000 * 60 * 30; // 30 minutes

    function getCached(key) {
        try {
            const raw = sessionStorage.getItem(key);
            if (!raw) return null;
            const { value, ts } = JSON.parse(raw);
            if (Date.now() - ts > CACHE_TTL) return null;
            return value;
        } catch (e) {
            return null;
        }
    }

    function setCached(key, value) {
        try {
            sessionStorage.setItem(key, JSON.stringify({ value, ts: Date.now() }));
        } catch (e) {
            /* sessionStorage unavailable — skip caching silently */
        }
    }

    function formatDate(iso) {
        return new Date(iso).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    async function fetchLastCommitDate(path) {
        const cacheKey = "lastCommit:" + (path || "root");
        const cached = getCached(cacheKey);
        if (cached) return cached;

        const url = path
            ? `https://api.github.com/repos/${REPO}/commits?path=${encodeURIComponent(path)}&per_page=1`
            : `https://api.github.com/repos/${REPO}/commits?per_page=1`;

        const res = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
        if (!res.ok) throw new Error("GitHub API request failed: " + res.status);
        const data = await res.json();
        if (!data.length) throw new Error("No commits found");
        const date = data[0].commit.committer.date;
        setCached(cacheKey, date);
        return date;
    }

    function applyTo(elId, path) {
        const el = document.getElementById(elId);
        if (!el) return;
        fetchLastCommitDate(path)
            .then((iso) => {
                el.textContent = formatDate(iso);
            })
            .catch(() => {
                // Fail quietly — hide the line instead of showing broken text.
                const wrapper = el.closest("[data-meta-line]");
                if (wrapper) wrapper.style.display = "none";
            });
    }

    document.addEventListener("DOMContentLoaded", function () {
        applyTo("site-last-updated"); // latest commit, whole repo
        applyTo("cv-last-updated", document.body.dataset.cvPath || ""); // latest commit touching the CV file
    });
})();