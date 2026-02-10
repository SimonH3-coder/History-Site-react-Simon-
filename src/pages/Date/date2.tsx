import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import eventData from "../data/events.json";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
}

const ByDate: React.FC = () => {
  const { date } = useParams<{ date: string }>();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(date || "");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    if (selectedDate) {
      const events = eventData.filter((event: Event) => event.date === selectedDate);
      setFilteredEvents(events);
    } else {
      setFilteredEvents([]);
    }
  }, [selectedDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    if (newDate) {
      navigate(`/by-date/${newDate}`);
    }
  };

  return (
    <div className="by-date-page">
      <h1>Events by Date</h1>

      <div className="date-selector">
        <label htmlFor="date-input">Select Date: </label>
        <input id="date-input" type="date" value={selectedDate} onChange={handleDateChange} className="date-input" />
      </div>
      {selectedDate && (
        <div className="events-container">
          <h2>Events on {selectedDate}</h2>
          {filteredEvents.length > 0 ? (
            <ul className="events-list">
              {filteredEvents.map((event) => (
                <li key={event.id} className="event-item">
                  <h3>{event.title}</h3>
                  <p>
                    <strong>Category:</strong> {event.category}
                  </p>
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No events found for this date.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ByDate;
