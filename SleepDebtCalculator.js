const getSleepHours = day => {
    if (day === 'monday') {return 5} /* Enter real sleep hours pr. day here */
    else if (day === 'tuesday') {return 7} /* Enter real sleep hours pr. day here */
    else if (day === 'wednesday') {return 8} /* Enter real sleep hours pr. day here */
    else if (day === 'thursday') {return 9} /* Enter real sleep hours pr. day here */
    else if (day === 'friday') {return 8} /* Enter real sleep hours pr. day here */
    else if (day === 'saturday') {return 8} /* Enter real sleep hours pr. day here */
    else if (day === 'sunday') {return 8} /* Enter real sleep hours pr. day here */
    else {return 'Write a real day dumbass'}
  };
  
  const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  
    console.log(`You are getting ${getActualSleepHours()} hours of sleep per week`)
  
  const getIdealSleepHours = () => {
    const idealHours = 8; /* Enter ideal hours here */
    return idealHours * 7;
  };
  
  console.log(`You should optimally be getting ${getIdealSleepHours()} of sleep per week`);
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours===idealSleepHours) { console.log(`You are getting the exact amount of sleep you need`)}
    else if(actualSleepHours < idealSleepHours) { console.log (`You are not getting enough sleep - you need ${idealSleepHours - actualSleepHours} more hours...`)}
    else { console.log(`You are getting more than enough`)};
  };
  
  calculateSleepDebt();