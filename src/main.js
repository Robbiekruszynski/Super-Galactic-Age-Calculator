import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import { getAge } from "./space.js";
import './sass/styles.scss';


$(document).ready(function() {
  $('.dateInput').submit(function(event) {
    event.preventDefault();
    $("#field").empty();

    //
    // $funtion() {
    //   $'#mercuryAge'.submit(function(event)) {
    //     event.preventDefault();
    //     let ageYear = $('a')
    //   }
    // }
    $("#field").append("<li> Your age on Earth" + HERE + "</li>");

  });
});
