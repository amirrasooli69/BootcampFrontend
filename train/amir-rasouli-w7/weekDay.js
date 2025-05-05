function getWeekday(date) {
  const numberOfDay = new Date(date).getDay()+1;
  switch (numberOfDay) {
    case 0: {
      return "شنبه";
    }
    case 1: {
      return "یکشنبه";
    }
    case 2: {
      return "دوشنبه";
    }
    case 3: {
      return "سه شنبه";
    }
    case 4: {
      return "چهارشنبه";
    }
    case 5: {
      return "پنجشنبه";
    }
    case 6: {
      return "جمعه";
    }
  }
}
console.log(getWeekday(new Date())); // "Sunday”

console.log(getWeekday(new Date("2012-10-10"))); // 'wednesday'
