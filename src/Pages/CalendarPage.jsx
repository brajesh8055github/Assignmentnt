import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const handleDateClick = (value) => {
    alert(`Clicked date: ${value.toDateString()}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>
      <div className="bg-white p-4 shadow-md rounded-md">
        <Calendar
          onClickDay={handleDateClick}
          tileClassName={({ date, view }) =>
            view === "month" && date.getDate() === new Date().getDate()
              ? "bg-yellow-200"
              : null
          }
        />
      </div>
    </div>
  );
};

export default CalendarPage;
