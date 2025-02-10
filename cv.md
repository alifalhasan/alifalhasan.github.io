---
layout: cv
title: "CV"
---

[Download CV](assets/docs/cv.pdf)  
_Last updated: <span id="cv-last-updated">Loading...</span>_

<script>
  fetch('assets/docs/cv.pdf', { method: 'HEAD' })
    .then(response => {
      let lastModified = response.headers.get('Last-Modified');
      if (lastModified) {
        let date = new Date(lastModified);
        document.getElementById('cv-last-updated').textContent = 
          date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      } else {
        document.getElementById('cv-last-updated').textContent = 'Unknown';
      }
    })
    .catch(() => {
      document.getElementById('cv-last-updated').textContent = 'Error fetching date';
    });
</script>