alert('Enter Only Years starting from 1701 (Incusive)');

var YEAR = 0;
var allMonths = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
var allDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log(allMonths);

/*
document.querySelector('.Clear').addEventListener('click', function() {

  var fill = "NA";
  for (var i=0;i<12;i++) {
    for (var j=1;j<=6;j++) {
      for (var k=0;k<=6;k++) {
        document.getElementById(allMonths[i] + '-' + k + '-' + j).innerHTML=fill;
        console.log(allMonths[i] + "-" + k + "-" + j);
      }
    }
  }
});

*/
document.querySelector('.Go').addEventListener('click', function() {

  // Clearing all dates
  clearAllDates();

  var end=0;
  var month=0;
  var daysInMonth = 0;
  var leap = 0;

  YEAR = parseInt(document.getElementById('year').value, 10);
  //console.log(YEAR);
  //console.log( typeof YEAR);
  end = findStartOfTheYear(YEAR);

  if ( YEAR >= 1701 ) {

    // Implementing leap year condition
    if ((YEAR % 400 == 0) || ( YEAR % 100 != 0 && YEAR % 4 == 0) ) {
        //leap = 1;
        allDaysInMonth[1] = 29;
    } 

    // Updating data in web page
    for (var i=0;i<12;i++) {
      end = printDates(allMonths[i], allDaysInMonth[i], end);
    }

    allDaysInMonth[1] = 28;
  } else {
    alert('Entered Year is out of the range. Try within the range !');
  }
});

var printDates = function (month, daysInMonth, row) {
  var rows = 1;
  if (row == 7) rows = 0;
  for (var count_days=1;count_days<=daysInMonth;count_days++,row++) {
    if (row == 7)  {
      rows++;
      row = 0;
    }
    document.getElementById(month + "-" + row + "-" + rows).textContent=count_days;
  }
  return row;
}

var findStartOfTheYear = function (YEAR) {
  var start = 5;
  var totalOddDays = start;
  for (var i=1700;i<YEAR;i++) {
    if ((i % 400 == 0) || ( i % 100 != 0 && i % 4 == 0) ) {
        totalOddDays =totalOddDays + 2;
      } else {
        totalOddDays++;
      }
  }
  return totalOddDays % 7;
}

var clearAllDates = function() {

  var fill = " ";
  for (var i=0;i<12;i++) {
    for (var j=1;j<=6;j++) {
      for (var k=0;k<=6;k++) {
        document.getElementById(allMonths[i] + '-' + k + '-' + j).innerHTML=fill;
        //console.log(allMonths[i] + "-" + k + "-" + j);
      }
    }
  }
}