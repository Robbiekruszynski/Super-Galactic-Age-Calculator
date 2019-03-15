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
    let birthday = year.concat("", month, day);

    let yourBirthday = new AgeCalc(birthday);
    let yourAge = Math.round(yourBirthday.findAge());
    let homeAge = new Old(yourAge);

    let mercuryAge = Math.round(homeAge.aliveOnMercury(yourAge));
    let venusAge = Math.round(homeAge.aliveOnVenus(yourAge));
    let marsAge = Math.round(homeAge.aliveOnMars(yourAge));
    let jupiterAge = Math.round(homeAge.aliveOnJupiter(yourAge));



    $("#field").append("<li> Your age on Earth " + yourAge + "</li>");
    $("#field").append("<li> Your age on Mercury " + mercuryAge + "</li>");
    $("#field").append("<li> Your age on Venus " + venusAge + "</li>");
    $("#field").append("<li> Your age on Mars " + marsAge + "</li>");
    $("#field").append("<li> Your age on Jupiter " + jupiterAge + "</li>");
    console.log(yourAge);
    console.log("hi");

  });
});






//
// $funtion() {
//   $'#mercuryAge'.submit(function(event)) {
//     event.preventDefault();
//     let ageYear = $('a')
//   }
// }
