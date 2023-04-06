// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

$(".btn").click(function (){
  var txtUserDescription = $(this).siblings("textarea");
  var userDescriptrion = txtUserDescription.val();
  var hourX = $(this).parent().attr('id');
  console.log(hourX + "  " + userDescriptrion); // "" + coverts to words and doesnt do the math 
  window.localStorage.setItem("" + hourX, "" + userDescriptrion);
})

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  const time = dayjs().format('hhA');

classChanger();

function classChanger() {

  var hourX = $(this).parent().attr('id');
  $(".hour").each(function(i,obj){
  var dVal = $(obj).text();
  var tArea = $(obj).siblings("textarea").first();
  console.log(dVal);
 
     
      if (time.includes('PM') && dVal.includes('AM')){
        $(tArea).addClass("past");
      }
      var tDigit = parseInt(time);
      var dDigit = parseInt(dVal);

      if (time.includes('AM') && dVal.includes('AM')){
        if (tDigit>dVal){
          $(tArea).addClass("future");
        } else {
          $(tArea).addClass("past");
        }
        if (tDigit == dVal) {
          $(tArea).addClass("present");
        }
      } 
      if (time.includes('PM') && dVal.includes('PM')){
        if (tDigit>dVal){
          $(tArea).addClass("future");
        } else {
          $(tArea).addClass("past");
        }
        if (tDigit == dVal) {
          $(tArea).addClass("present");
        }
      } 


  });
}


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
getStorage();

  function getStorage() {
    $('.row').each(function(i,obj){
      var dId = $(obj).attr("id");
      var notes = window.localStorage.getItem(dId) || "";
      $(obj).children("textarea").text(notes);
    });
  }

  // TODO: Add code to display the current date in the header of the page.~DONE~
  var headerDate = dayjs().format('MMMM DD YYYY'); 
  $(currentDay).text(headerDate);
});
