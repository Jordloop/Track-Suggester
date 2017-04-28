$(function(){
  $("form#user-input").submit(function(event){
    event.preventDefault();

//----------BUSINESS LOGIC----------
    var cSharp = 0
    var cssDesign = 0
    var rubyRails = 0

    var firstAnswer = $("#firstQuestion").val();
    var secondAnswer = $("#secondQuestion").val();
    var thirdAnswer = $("#thirdQuestion").val();
    var fourthAnswer = $("#fourthQuestion").val();
    var fifthAnswer = $("#fifthQuestion").val();

//EACH _QUESTION WILL GIVE WILL AWARD THE CORRESPONDING VALUE ONE POINT
    // FIRSTQUESTION LOGIC
    if (
      firstAnswer === "Design") {
        cssDesign ++
    } else if (
      firstAnswer === "C#") {
        cSharp ++
    } else if (
      firstAnswer === "Ruby") {
        rubyRails ++
    } else {
      $(console.log("Error in if code"))
    };
    $(console.log("C#: "+cSharp, "CSS: "+cssDesign, "Ruby: "+rubyRails));
    // SECONDQUESTION LOGIC
    if (
      secondAnswer === "Design") {
        cssDesign ++
    } else if (
      secondAnswer === "C#") {
        cSharp ++
    } else if (
      secondAnswer === "Ruby") {
        rubyRails ++
    } else {
      $(console.log("Error in if code"))
    };
    $(console.log("C#:: "+cSharp, "CSS:: "+cssDesign, "Ruby:: "+rubyRails));
    // THIRDQUESTION LOGIC
    if (
      thirdAnswer === "Design") {
        cssDesign ++
    } else if (
      thirdAnswer === "C#") {
        cSharp ++
    } else if (
      thirdAnswer === "Ruby") {
        rubyRails ++
    } else {
      $(console.log("Error in if code"))
    };
    $(console.log("C#: "+cSharp, "CSS: "+cssDesign, "Ruby: "+rubyRails));
    // FOURTHQUESTION LOGIC
    if (
      fourthAnswer === "Design") {
        cssDesign ++
    } else if (
      fourthAnswer === "C#") {
        cSharp ++
    } else if (
      fourthAnswer === "Ruby") {
        rubyRails ++
    } else {
      $(console.log("Error in if code"))
    };
    $(console.log("C#: "+cSharp, "CSS: "+cssDesign, "Ruby: "+rubyRails));
    // FIFTHQUESTION LOGIC
    if (
      fifthAnswer === "Design") {
        cssDesign ++
    } else if (
      fifthAnswer === "C#") {
        cSharp ++
    } else if (
      fifthAnswer === "Ruby") {
        rubyRails ++
    } else {
      $(console.log("Error in if code"))
    };
    $(console.log("C#: "+cSharp, "CSS: "+cssDesign, "Ruby: "+rubyRails));
//----------INTERFACE LOGIC----------

//FINDS VALUE WITH THE MOST POINTS, THEN RESPONDS ACCORDINGLY
    if (
      cSharp > cssDesign && cSharp > rubyRails) {
        $(console.log("C# wins"))
        $(".output").hide();
        $("#cSharpWin").fadeIn();

    } else if (
      cssDesign > cSharp && cssDesign > rubyRails) {
        $(console.log("cssDesign wins"))
        $(".output").hide();
        $("#cssWin").fadeIn();
    } else if (
      rubyRails > cSharp && rubyRails > cssDesign) {
        $(console.log("cssDesign wins"))
        $(".output").hide();
        $("#rubyWin").fadeIn();
    } else {
      //IF THERE IS A TIE IT WILL BE FOUND HERE, THEN RESPONDS ACCORDINGLY
      if (
        cSharp === cssDesign && cSharp != rubyRails) {
          $(console.log("C# and CSS tie"))
          $(".output").hide();
          $("#cSharpCssTie").fadeIn();
      } else if (
        cssDesign === rubyRails && cssDesign != cSharp) {
          $(console.log("CSS and Ruby tie"))
          $(".output").hide();
          $("#cssRubyTie").fadeIn();
      } else if (
        rubyRails === cSharp && rubyRails != cssDesign) {
          $(console.log("Ruby and C#"))
          $(".output").hide();
          $("#cSharpRubyTie").fadeIn();
      };
    };
  })
})
