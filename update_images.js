const fs = require('fs');
let html = fs.readFileSync('c:/Users/lenovo/Desktop/portfolio/index.html', 'utf8');

html = html.replace('<style>', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/viewerjs/1.11.6/viewer.min.css">\n  <style>');

html = html.replace(
  '.modal-img img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      border-radius: 8px;\n    }',
  '.modal-img img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      border-radius: 8px;\n      cursor: zoom-in;\n    }'
);

html = html.replace(
  '.modal-img img {\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n      border-radius: 8px;\r\n    }',
  '.modal-img img {\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n      border-radius: 8px;\r\n      cursor: zoom-in;\r\n    }'
);

html = html.replace(/<div class="modal-img-placeholder">Add screenshot: replace this div content with<br>&lt;img src="gkwebtech\.png"\s*alt="GKWebTech"&gt;<\/div>/, '<img class="zoomable" src="gkwebtech.png" alt="GKWebTech">');
html = html.replace(/<div class="modal-img">\s*<div class="modal-img">\s*<img src="blog-pipeline\.png"\s*alt="Blog Pipeline Workflow"\s*\/>\s*<\/div>\s*<\/div>/, '<div class="modal-img">\n        <img class="zoomable" src="blog-pipeline.png" alt="Blog Pipeline Workflow">\n      </div>');
html = html.replace(/<div class="modal-img-placeholder">Add screenshot of Dokploy dashboard or terminal:<br>&lt;img\s*src="vps-recovery\.png" alt="VPS Recovery"&gt;<\/div>/, '<img class="zoomable" src="vps-recovery.png" alt="VPS Recovery">');
html = html.replace(/<div class="modal-img-placeholder">Add screenshot of Odoo dashboard:<br>&lt;img src="odoo-dashboard\.png"\s*alt="Odoo ERP Dashboard"&gt;<\/div>/, '<img class="zoomable" src="odoo-dashboard.png" alt="Odoo ERP Dashboard">');
html = html.replace(/<div class="modal-img-placeholder">Add screenshot of institute website:<br>&lt;img src="institute\.png" alt="GK\s*Institute"&gt;<\/div>/, '<img class="zoomable" src="institute.png" alt="GK Institute">');
html = html.replace(/<div class="modal-img-placeholder">Add screenshot of n8n LinkedIn workflow:<br>&lt;img\s*src="linkedin-workflow\.png" alt="LinkedIn Automation Workflow"&gt;<\/div>/, '<img class="zoomable" src="linkedin-workflow.png" alt="LinkedIn Automation Workflow">');

const scriptStr = `  </script>

  <!-- Viewer.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/viewerjs/1.11.6/viewer.min.js"></script>
  <script>
    document.querySelectorAll('.zoomable').forEach(img => {
      new Viewer(img, {
        inline: false,
        button: true,
        navbar: false,
        title: false,
        toolbar: true,
        tooltip: false,
        movable: true,
        zoomable: true,
        rotatable: false,
        scalable: false,
        transition: true,
        fullscreen: true,
        keyboard: true
      });
    });
  </script>
</body>

</html>`;
html = html.replace('  </script>\n</body>\n\n</html>', scriptStr).replace('  </script>\r\n</body>\r\n\r\n</html>', scriptStr);

fs.writeFileSync('c:/Users/lenovo/Desktop/portfolio/index.html', html);
console.log("Done");
