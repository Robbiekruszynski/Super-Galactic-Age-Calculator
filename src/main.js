import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import { Birthtime } from "./aliveTimer.js";
import { AliveTimer } from "./planetAge.js";
import './sass/styles.scss';


$(document).ready(function() {
  $('#space-form').submit(function(event) {
    event.preventDefault();
    $("#field").empty();
    let year = $("#year").val();
    let day = $("#date").val();
    let month = $("#month").val();
    let birthday =  month.conact( " ", day, ", "," year, ");
    
    let yourBirthday = new Birthtime(birthday);
    let yourNumber = Math.round(yourBirthday.findAge());



    $("#field").append("<li> Your age on Earth" + yourNumber + "</li>");
    console.log(yourNumber);

  });
});






//
// $funtion() {
//   $'#mercuryAge'.submit(function(event)) {
//     event.preventDefault();
//     let ageYear = $('a')
//   }
// }
