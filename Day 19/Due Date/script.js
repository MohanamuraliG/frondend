// Event Manager Logic
const eventForm = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");
const filterUpcoming = document.getElementById("filterUpcoming");
const filterPast = document.getElementById("filterPast");
const showAll = document.getElementById("showAll");

let events = [];

// Helper function to get status
const getEventStatus = (eventDate) => {
  const today = new Date().toISOString().split("T")[0];
  return eventDate >= today ? "Upcoming" : "Past";
};

// Render events
const renderEvents = (filter = "All") => {
  eventList.innerHTML = "";
  const filteredEvents =
    filter === "Upcoming"
      ? events.filter((event) => event.status === "Upcoming")
      : filter === "Past"
      ? events.filter((event) => event.status === "Past")
      : events;

  filteredEvents.forEach((event, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
      <div>
        <span>${event.title}</span>
        <span class="ms-2 text-muted">${event.date}</span>
        <span class="event-status ${event.status.toLowerCase()}">(${event.status})</span>
      </div>
      <div>
        <button class="btn btn-sm btn-warning me-2" onclick="editEvent(${index})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteEvent(${index})">Delete</button>
      </div>
    `;
    eventList.appendChild(li);
  });
};

// Add event
eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("eventTitle").value;
  const date = document.getElementById("eventDate").value;

  if (title && date) {
    events.push({ title, date, status: getEventStatus(date) });
    renderEvents();
    eventForm.reset();
  }
});

// Edit event
const editEvent = (index) => {
  const event = events[index];
  document.getElementById("eventTitle").value = event.title;
  document.getElementById("eventDate").value = event.date;
  deleteEvent(index);
};

// Delete event
const deleteEvent = (index) => {
  events.splice(index, 1);
  renderEvents();
};

// Filter events
filterUpcoming.addEventListener("click", () => renderEvents("Upcoming"));
filterPast.addEventListener("click", () => renderEvents("Past"));
showAll.addEventListener("click", () => renderEvents());

// Initial render
renderEvents();
