export default  class DateCovert {

    calculateAge(userInputDate) {

        
        const birthDate = new Date(userInputDate);


        const today = new Date();
        // const birthDate = new Date(dateString);
      
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();
      
        // Check if the birth date month and day are ahead of the current month and day
        if (months < 0 || (months === 0 && days < 0)) {
          years--;
          months += 12;
        }
      
        // Adjust the days if negative
        if (days < 0) {
          const monthWith30Days = [3, 5, 8, 10];
          if (monthWith30Days.includes(today.getMonth() - 1)) {
            days += 30;
          } else if (today.getMonth() - 1 === 1) {
            // February case
            const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
            days += isLeapYear(today.getFullYear() - 1) ? 29 : 28;
          } else {
            days += 31;
          }
          months--;
        }
      
        return { years, months, days };
        
    }
}



  
// function calculateAge(dateString) {
//     const today = new Date();
//     const birthDate = new Date(dateString);
  
//     let years = today.getFullYear() - birthDate.getFullYear();
//     let months = today.getMonth() - birthDate.getMonth();
//     let days = today.getDate() - birthDate.getDate();
  
//     // Check if the birth date month and day are ahead of the current month and day
//     if (months < 0 || (months === 0 && days < 0)) {
//       years--;
//       months += 12;
//     }
  
//     // Adjust the days if negative
//     if (days < 0) {
//       const monthWith30Days = [3, 5, 8, 10];
//       if (monthWith30Days.includes(today.getMonth() - 1)) {
//         days += 30;
//       } else if (today.getMonth() - 1 === 1) {
//         // February case
//         const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//         days += isLeapYear(today.getFullYear() - 1) ? 29 : 28;
//       } else {
//         days += 31;
//       }
//       months--;
//     }
  
//     return { years, months, days };
//   }