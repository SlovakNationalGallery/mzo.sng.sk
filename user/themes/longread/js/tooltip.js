/* Insert tooltips to explain features to user */

/* call this after anchors.js */
document.addEventListener("DOMContentLoaded", function(event) {
  // insert tooltip on first anchorjs-link element
  $('.anchorjs-link').attr('data-tooltip', 'odkaz na túto sekciu').addClass('tooltip-right')
  
  // add margin right equal to tooltip width to anchorjs-link element to ensure it fits within line width
  var tooltipWidth = '130px';
  $('.anchorjs-link').css('margin-right', tooltipWidth);
});
