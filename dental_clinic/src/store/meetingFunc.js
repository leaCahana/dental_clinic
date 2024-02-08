export const getColor = (dateTime) => {
    const currentDate = new Date();
    const meetingDate = new Date(dateTime);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const meetingYear = meetingDate.getFullYear();
    const meetingMonth = meetingDate.getMonth();
    const meetingDay = meetingDate.getDate();
    const differenceInDays = Math.floor((meetingDate - currentDate) / (1000 * 60 * 60 * 24));

    if (currentYear === meetingYear && currentMonth === meetingMonth && currentDay === meetingDay) {
      return 'red';
    } else if (meetingDate < currentDate) {
      return 'red';
    } else if (differenceInDays <= 7) {
      return 'orange';
    } else {
      return 'green';
    }
  };
 export const getCurrentDateTime = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

export const handleKeyPress = (event) => {
    const { value } = event.target;
    const regex = /^[0-9\b]+$/; // Regular expression to allow only digits
    if (value.length >= 10 || !regex.test(event.key)) {
      alert("A phone number can contain up to 10 digits and should only include numbers");
      event.preventDefault();
    }
  };
