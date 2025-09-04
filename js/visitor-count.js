  // Increment the visitor count and update the display
    function incrementVisitorCount() {
      var visitorCountElement = document.getElementById("visitor-count");
      var visitorCount = parseInt(visitorCountElement.innerText);
      visitorCount++;
      visitorCountElement.innerText = visitorCount.toString();
    }

    // Call the incrementVisitorCount() function when the page loads
    window.onload = function() {
      incrementVisitorCount();
    };