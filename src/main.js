import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import { YourBirthday } from "./aliveTimer.js";
import { AliveTimer } from "./planetAge.js";
import './sass/styles.scss';


$(document).ready(function() {
  $('#space-form').submit(function(event) {
    event.preventDefault();
    $("#field").empty();
    const month = $("#month").val();
    const day = $("#date").val();
    const year = $("#year").val();
    const birthday =  month.conact( " ", day, year, " ");



    // $("#field").append("<li> Your age on Earth" + HERE + "</li>");

  });
});






//
// $funtion() {
//   $'#mercuryAge'.submit(function(event)) {
//     event.preventDefault();
//     let ageYear = $('a')
//   }
// }
