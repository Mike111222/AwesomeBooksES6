// Import the necessary functions from the Luxon library
import { DateTime } from './luxon.js';

// Function to display the current date and time
const showDate = () => {
  // Get the container element for displaying the date and time
  const dateTime = document.getElementById('datetime');

  // Function to update the date and time display
  const updateTime = () => {
    setInterval(() => {
      // Create a Luxon DateTime object with the current date and time
      const currentDate = DateTime.now();

      // Format the date and time as a string with the desired format
      const formattedDateTime = currentDate.toFormat('LLL dd, yyyy hh:mm:ss a');

      // Update the date and time display in the HTML
      dateTime.innerHTML = formattedDateTime;
    }, 1000); // Update every second
  };

  // Call the updateTime function to start updating the date and time display
  updateTime();
};

export default showDate;
