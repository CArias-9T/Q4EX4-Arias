function checkMonth() {
    var inputmonth = parseInt(document.getElementById('numinput').value);

    switch (inputmonth) {
        case 1:
            document.getElementById('result').innerHTML = "January";
            break;
        case 2:
            document.getElementById('result').innerHTML = "February";
            break;
        case 3:
            document.getElementById('result').innerHTML = "March";
            break;
        case 4:
            document.getElementById('result').innerHTML = "April";
            break;
        case 5:
            document.getElementById('result').innerHTML = "May";
            break;
        case 6:
            document.getElementById('result').innerHTML = "June";
            break;
        case 7:
            document.getElementById('result').innerHTML = "July";
            break;
        case 8:
            document.getElementById('result').innerHTML = "August";
            break;
        case 9:
            document.getElementById('result').innerHTML = "September";
            break;
        case 10:
            document.getElementById('result').innerHTML = "October";
            break;
        case 11:
            document.getElementById('result').innerHTML = "November";
            break;
        case 12:
            document.getElementById('result').innerHTML = "December";
            break;
        default:
            document.getElementById('result').innerHTML = "Invalid. Please input a number from 1 to 12.";
            break;
    }
}

function checkSeason() {
    var inputmonth = parseInt(document.getElementById('numinput').value);

     switch (inputmonth) {
        case 12:
        case 1:
        case 2:
            document.getElementById('result').innerHTML = "It is winter.";
            break;
        case 3:
        case 4:
        case 5:
            document.getElementById('result').innerHTML = "It is spring.";
            break;
        case 6:
        case 7:
        case 8:
            document.getElementById('result').innerHTML = "It is summer.";
            break;
        case 9:
        case 10:
        case 11:
            document.getElementById('result').innerHTML = "It is fall.";
            break;
        default:
            document.getElementById('result').innerHTML = "Invalid. Please input a number from 1 to 12.";
    }   
}
  