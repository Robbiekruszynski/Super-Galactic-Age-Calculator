import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import { AgeCalc } from "./aliveTimer.js";
import { Old } from "./planetAge.js";
import './sass/styles.scss';


$(document).ready(function() {
  $('#spaceForm').submit(function(event) {
    event.preventDefault();
    $("#field").empty();
    let year = $("#year").val();
    let month = $("#month").val();
    let day = $("#day").val();
    let birthday = year.concat(month, day);

    let yourBirthday = new Old(birthday);
    let yourAge = Math.round(yourBirthday.findAge());
    let homeAge = new AgeCalc(yourAge);
    let mercuryAge = Math.round(homeAge.mercuryAlive(yourAge));
    let venusAge = Math.round(homeAge.venusAlive(yourAge));
    let marsAge = Math.round(homeAge.marsAlive(yourAge));
    let jupiterAge = Math.round(homeAge.jupiterAlive(yourAge));



    $("#field").html("<li> Your age on Earth" + yourAge + "</li>");
    // console.log(yourAge);
    // console.log("hi");

  });
});






//
// $funtion() {
//   $'#mercuryAge'.submit(function(event)) {
//     event.preventDefault();
//     let ageYear = $('a')
//   }
// }
