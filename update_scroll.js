const fs = require('fs');
let html = fs.readFileSync('c:/Users/lenovo/Desktop/portfolio/index.html', 'utf8');

// 1. Remove lenis stop/start from modal functions so native modal scroll isn't frozen.
html = html.replace("if (typeof lenis !== 'undefined') lenis.stop();", "");
html = html.replace("if (typeof lenis !== 'undefined') lenis.start();", "");
html = html.replace("if (typeof lenis !== 'undefined') lenis.start();", "");

// 2. Add data-lenis-prevent to ALL modal containers so Lenis ignores them.
html = html.replace(/class="modal"/g, 'class="modal" data-lenis-prevent');
html = html.replace(/class="modal-overlay"/g, 'class="modal-overlay" data-lenis-prevent');

// 3. For Viewer.js, it injects a `.viewer-container` dynamically. We can stop Lenis while viewing fullscreen image.
html = html.replace(
  'keyboard: true',
  'keyboard: true,\n        show: function() { if (typeof lenis !== \'undefined\') lenis.stop(); },\n        hidden: function() { if (typeof lenis !== \'undefined\') lenis.start(); }'
);

fs.writeFileSync('c:/Users/lenovo/Desktop/portfolio/index.html', html);
console.log("Done");
