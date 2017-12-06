// Creates a panel from an element that contains
// both an h2 heading and a .content element.
var makeToggleablePanel = function(panel) {
    // Select the children of the provided element
    var control = panel.querySelector("h2"),
        content = panel.querySelector(".content");
    
    // Function that toggles content's visibility via css.
    var toggleVisibility = function(event) {
      content.classList.toggle("closed");  
    }
    
    // When control is clicked, call our toggleVisibility function. 
    control.addEventListener( "click", toggleVisibility );
  };
  
  // Turn everything on the page with class panel into a panel.
  var panels = document.querySelectorAll(".panel"),
      i = 0;
  for( i; i < panels.length; i++ ) {
    makeToggleablePanel( panels[i] );
  }