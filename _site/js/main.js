$(document).ready(function () {

  $(".collab-button").click(function(){
    $(".findable").addClass("none");
    $(".active").removeClass("active")
    $(".collab-button").addClass("active");
    $(".collab-description").removeClass("none");
   });
 $(".improv-button").click(function(){
   $(".findable").addClass("none");
   $(".active").removeClass("active")
   $(".improv-button").addClass("active");
    $(".improv-description").removeClass("none");
  });
  $(".confid-button").click(function(){
    $(".findable").addClass("none");
    $(".active").removeClass("active")
    $(".confid-button").addClass("active");
     $(".confid-description").removeClass("none");
   });
 $(".ec-button").click(function(){
   $(".findable").addClass("none");
   $(".active").removeClass("active")
   $(".ec-button").addClass("active");
    $(".ec-description").removeClass("none");
  });
  $(".devel-button").click(function(){
    $(".findable").addClass("none");
    $(".active").removeClass("active")
    $(".devel-button").addClass("active");
     $(".devel-description").removeClass("none");
   });
 $(".enthu-button").click(function(){
   $(".findable").addClass("none");
   $(".active").removeClass("active")
   $(".enthu-button").addClass("active");
    $(".enthu-description").removeClass("none");
  });
  $(".resil-button").click(function(){
    $(".findable").addClass("none");
    $(".active").removeClass("active")
    $(".resil-button").addClass("active");
     $(".resil-description").removeClass("none");
   });
 $(".activator-button").click(function(){
   $(".findable").addClass("none");
   $(".active").removeClass("active")
   $(".activator-button").addClass("active");
    $(".activator-description").removeClass("none");
    });
  $(".achiever-button").click(function(){
    $(".findable").addClass("none");
    $(".active").removeClass("active")
    $(".achiever-button").addClass("active");
     $(".achiever-description").removeClass("none");
   });
 $(".individ-button").click(function(){
   $(".findable").addClass("none");
   $(".active").removeClass("active")
   $(".individ-button").addClass("active");
    $(".individ-description").removeClass("none");
  });
  $(".empathy-button").click(function(){
    $(".findable").addClass("none");
    $(".active").removeClass("active")
    $(".empathy-button").addClass("active");
     $(".empathy-description").removeClass("none");
   });
   $(".learner-button").click(function(){
     $(".findable").addClass("none");
     $(".active").removeClass("active")
     $(".learner-button").addClass("active");
      $(".learner-description").removeClass("none");
    });
    $('.bob').masonry({
      // options
      itemSelector: '.bob-thing',
      columnWidth: 200,
      gutter: 10,
    });
});
