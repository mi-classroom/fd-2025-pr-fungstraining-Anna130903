import { slideshow } from './modules/slideshow.js';
import { works } from './modules/works.js';

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
  slideshow();
  works();
});