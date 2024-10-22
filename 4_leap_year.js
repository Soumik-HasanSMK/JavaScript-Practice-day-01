const year = 1900;
if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0))
    console.log("This year is leap year");
else
    console.log("This year is not leap year");