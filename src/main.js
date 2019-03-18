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

    let expectedMercury = homeAge.expectedMercury(yourAge);
    let expectedVenus = homeAge.expectedVenus(yourAge);
    let expectedMars = homeAge.expectedMars(yourAge);
    let expectedJupiter = homeAge.expectedJupiter(yourAge);
    // let expectedHome = homeage.expectedHome(yourAge);

    // $("#field").append("<li> On Earth you're " + yourAge + " and your expected age to die on Earth is when you're " + expectedHome + " years old</li>");

    $("#field").append("<li> On Mercury you're " + mercuryAge + " and your expected age to die on Mercury is when you're " + expectedMercury + " years old</li>");

    $("#field").append("<li> On Venus you're " + venusAge + " and your expected age to die on Venus is when you're " + expectedVenus + " years old</li>");

    $("#field").append("<li> On Mars you're " + marsAge + " and your expected age to die on Mars is when you're " + expectedMars + " years old</li>");

    $("#field").append("<li> On Jupiter you're " + jupiterAge + " and your expected age to die on Jupiter is when you're " + expectedJupiter + " years old</li>");
  });
});
