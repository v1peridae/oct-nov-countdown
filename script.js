const countdown = () => {
  const countDate = new Date("October 2, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const weeks = days * 7;
  const averageDaysPerMonth = 30.44; 
  const averageDaysPerYear = 365.25; 

  const yearsText = Math.floor(gap / (averageDaysPerYear * days));
  const monthsText = Math.floor((gap % (averageDaysPerYear * days)) / (averageDaysPerMonth * days));
  const weeksText = Math.floor((gap % (averageDaysPerMonth * days)) / weeks);
  const daysText = Math.floor((gap % weeks) / days);
  const hoursText = Math.floor((gap % days) / hours);
  const minsText = Math.floor((gap % hours) / minutes);
  const secsText = Math.floor((gap % minutes) / seconds);

  document.querySelector('.secs').innerText = secsText;
  document.querySelector('.mins').innerText = minsText;
  document.querySelector('.hours').innerText = hoursText;
  document.querySelector('.days').innerText = daysText;
  document.querySelector('.weeks').innerText = weeksText;
  document.querySelector('.months').innerText = monthsText;
  document.querySelector('.years').innerText = yearsText;
};

setInterval(countdown, 1000);
