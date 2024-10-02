// Array to store attendees
let attendees = [];

// Function to add a new attendee
function addAttendee() {
    const attendeeInput = document.getElementById('attendeeName').value.trim().toUpperCase();

    if (attendeeInput === "") {
        alert("Please enter a valid name.");
        return;
    }

    if (attendees.includes(attendeeInput)) {
        alert("Attendee is already on the list.");
    } else {
        attendees.push(attendeeInput);
        alert(attendeeInput + " has been added.");
    }
    document.getElementById('attendeeName').value = "";  // Clear the input field
}

// Function to search for an attendee
function findAttendee() {
    const searchInput = document.getElementById('searchAttendeeName').value.trim().toUpperCase();
    
    if (searchInput === "") {
        alert("Please enter a name to search.");
        return;
    }

    const index = attendees.indexOf(searchInput);
    if (index !== -1) {
        alert(searchInput + " found at position " + (index + 1));
    } else {
        alert(searchInput + " not found.");
    }
    document.getElementById('searchAttendeeName').value = "";  // Clear the search field
}

// Function to list all attendees
function listAttendees() {
    const output = document.getElementById('output');
    if (attendees.length > 0) {
        output.innerHTML = "Attendees: " + attendees.join(', ');
    } else {
        output.innerHTML = "No attendees found.";
    }
}

// Function to remove an attendee
function removeAttendee() {
    const removeInput = document.getElementById('removeAttendeeName').value.trim().toUpperCase();

    if (removeInput === "") {
        alert("Please enter a name to remove.");
        return;
    }

    const index = attendees.indexOf(removeInput);
    if (index !== -1) {
        attendees.splice(index, 1);  // Remove the attendee
        alert(removeInput + " has been removed.");
    } else {
        alert(removeInput + " not found.");
    }
    document.getElementById('removeAttendeeName').value = "";  // Clear the remove field
}

// Event listeners for button clicks
document.getElementById('addAttendeeBtn').addEventListener('click', addAttendee);
document.getElementById('searchAttendeeBtn').addEventListener('click', findAttendee);
document.getElementById('listAttendeesBtn').addEventListener('click', listAttendees);
document.getElementById('removeAttendeeBtn').addEventListener('click', removeAttendee);
