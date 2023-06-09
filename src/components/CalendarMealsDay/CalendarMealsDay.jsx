import "./CalendarMealsDay.css"

const CalendarMealsDay = ({ handleInputChange }) => {

    return (
        <input className="calendar" type="date" id="start" name="trip-start"
            onChange={handleInputChange}
            min="2023-01-01" max="2025-12-31" />
    )

}

export default CalendarMealsDay