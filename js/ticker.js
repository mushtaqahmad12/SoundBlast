 function getCurrentDateTime() {
      var now = new Date();
      var date = now.toLocaleDateString();
      var time = now.toLocaleTimeString();
      return date + ' ' + time;
    }

    // Function to get the current location using geolocation
    function getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          var location = latitude + ', ' + longitude;
          updateTicker(location);
        });
      }
    }

    // Function to update the ticker content
    function updateTicker(location) {
      var ticker = document.getElementById('ticker');
      ticker.innerText = getCurrentDateTime() + ' | Location: ' + location;
    }

    // Call the functions to start the ticker and geolocation
    updateTicker('Loading...');
    getCurrentLocation();