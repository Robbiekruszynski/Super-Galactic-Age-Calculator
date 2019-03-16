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

    let expectedMercury = homeAge.expectedMercury();
    let expectedVenus = homeAge.expectedVenus();
    let expectedMars = homeAge.expectedMars();
    let expectedJupiter = homeAge.expectedJupiter();

    $("#field").append("<li> On Earth you're " + yourAge + " years old</li>");
    $("#field").append("<li> On Mercury you're " + mercuryAge + " years old</li>");
    $("#field").append("<li> On Venus you're " + venusAge + " years old</li>");
    $("#field").append("<li> On Mars you're " + marsAge + " years old</li>");
    $("#field").append("<li> On Jupiter you're " + jupiterAge + " years old</li>");
  });
});
