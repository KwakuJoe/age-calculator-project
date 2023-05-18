export default  class DateCovert {

    calculateAge(day, month, year) {

        
        const birthDate = new Date(`${year}-${month}-${day}`);
        const currentDate = new Date();
  
        let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
        let ageMonths = currentDate.getMonth() - birthDate.getMonth();
        let ageDays = currentDate.getDate() - birthDate.getDate();
      
        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
          ageYears--;
          ageMonths += 12;
        }
      
        if (ageDays < 0) {
          const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
          ageDays += lastMonthDate.getDate();
          ageMonths--;
        }
      
        // const day = birthDate.getDate();
        // const month = birthDate.toLocaleString('default', { month: 'long' });
        // const year = birthDate.getFullYear();
      
        return { ageYears, ageMonths, ageDays, day, month, year };



        
    }
}



  