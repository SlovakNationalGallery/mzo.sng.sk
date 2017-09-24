/* 
Reading progress bar
Based on Reading Position Indicator @ CCS Tricks https://css-tricks.com/reading-position-indicator/
*/

$(document).ready(function() {
  /* configuration */
  var elementToReadSelector      = '.chapter';
  var progressBarSelector        = '#reading-progress progress';
  var progressActiveSelector     = '#reading-progress progress.uk-active';
  var fallbackBarSelector        = '.progress-bar';
  var getWidthFromSelector       = '.chapter';
  var getOffsetLeftFromSelector  = '.chapter';
  var getOffsetTopFromSelector   = 'nav.uk-navbar';
  var sticky;

  var initSticky = function(){
    var progressElement = $(progressBarSelector)[0];
    sticky = UIkit.sticky(progressElement, {
      top: getOffsetTop(),
      getWidthFrom: getWidthFromSelector
    });
  };
    
  var getMax = function(){
    return $(elementToReadSelector).height() - $(window).height();
  };
    
  var getValue = function(){
    return $(window).scrollTop();
  };

  var setReadingProgressOffsetLeft = function(){
    var offsetLeft = $(getOffsetLeftFromSelector).offset().left;
    $(progressActiveSelector).css('left', offsetLeft+'px');
  };

  var getOffsetTop = function (){
    return $(getOffsetTopFromSelector).outerHeight() -1; // move up 1 px to counter 1px gap on Safari
  };

  var setReadingProgressOffsetTop = function(){
    var offsetTop = getOffsetTop();
    if (sticky.options.top !== offsetTop) {
      sticky.options.top = offsetTop;
      $(progressActiveSelector).css('top', offsetTop+'px');
    }
  };
  
  initSticky();
  setReadingProgressOffsetTop();

  $(document).on('active.uk.sticky', function () {  
    setReadingProgressOffsetLeft();
  });
    
  if ('max' in document.createElement('progress')) {
    // Browser supports progress element
    var progressBar = $(progressBarSelector);
        
    // Set the Max attr for the first time
    progressBar.attr({ max: getMax() });

    $(document).on('scroll', function(){
      // set value
      // edit: also set max to ensure accurate scroll ratio
      progressBar.attr({ max: getMax(), value: getValue() });
    });
      
    $(window).resize(function(){
      // On resize, both Max/Value attr needs to be calculated
      progressBar.attr({ max: getMax(), value: getValue() });
      setReadingProgressOffsetLeft();
      setReadingProgressOffsetTop();
    }); 
  
  } else {

    var progressBar = $(fallbackBarSelector), 
        max = getMax(), 
        value, width;
        
    var getWidth = function() {
      // Calculate width in percentage
      value = getValue();            
      width = (value/max) * 100;
      width = width + '%';
      return width;
    }
        
    var setWidth = function(){
      progressBar.css({ width: getWidth() });
    };
        
    $(document).on('scroll', setWidth);
    $(window).on('resize', function(){
      // Need to reset the Max attr
      max = getMax();
      setWidth();
    });
  }
});