export function randomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export function removeDuplicates(array) {
    return array.filter((item, index, self) => {
      return index === self.findIndex((t) => t.id === item.id);
    });
  }
  export function removeDupes(array) {
    const uniqueArray = Array.from(new Set(array));
    return uniqueArray
  }
export function getDayOfWeek_Word(num) {
    switch (num) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 0:
            return "Sunday";
        default:
            return "Sorry";
    }
}
export function getDayOfWeek_Num(word) {
    switch (word) {
        case "Monday":
            return 1;
        case "Tuesday":
            return 2;
        case "Wednesday":
            return 3;
        case "Thursday":
            return 4;
        case "Friday":
            return 5;
        case "Saturday":
            return 6;
        case "Sunday":
            return 0;
        default:
            return -1;
    }
}
export function getMonth_Word(num) {
    switch (num) {
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "Mar";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "Jun";
        case 7:
            return "Jul";
        case 8:
            return "Aug";
        case 9:
            return "Sep";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        case 12:
            return "Dec";
        default:
            return "Sorry";
    }
}
export function getMonth_Num(word) {
    switch (word) {
        case "Jan":
            return 1;
        case "Feb":
            return 2;
        case "Mar":
            return 3;
        case "Apr":
            return 4;
        case "May":
            return 5;
        case "Jun":
            return 6;
        case "Jul":
            return 7;
        case "Aug":
            return 8;
        case "Sep":
            return 9;
        case "Oct":
            return 10;
        case "Nov":
            return 11;
        case "Dec":
            return 12;
        default:
            return 0;
    }
}
// Function to convert the provided date and time strings to a JavaScript Date object
export const getJSDate = (dateString, timeString) => {
    // Split the date string into parts (month, day, and year)
    const [month, day, year] = dateString.split('/').map(part => parseInt(part, 10));
  
    // Split the time string into parts (hours and minutes)
    const [hours, minutes] = timeString.split(':').map(part => parseInt(part, 10));
  
    // Create a new Date object with the extracted date and time values
    // The month value in JavaScript's Date object is zero-based, so we need to subtract 1 from the month.
    return new Date(year, month - 1, day, hours, minutes);
  };
