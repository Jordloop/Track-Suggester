$(function(){
  $("form#user-input").submit(function(event){
    event.preventDefault();

//----------BUSINESSLOGIC----------
    var cSharp = 0
    var cssDesign = 0
    var rubyRails = 0
    var phpDrupal = 0
    var javaAndroid = 0

    var firstAnswer = $("#firstQuestion").val();
    var secondAnswer = $("#secondQuestion").val();
    var thirdAnswer = $("#thirdQuestion").val();
    var fourthAnswer = $("#fourthQuestion").val();
    var fifthAnswer = $("#fifthQuestion").val();
    // FIRSTQUESTIONLOGIC
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
    $(console.log("C# "+cSharp, "CSS "+cssDesign, "Ruby "+rubyRails));
    // SECONDQUESTIONLOGIC
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
    $(console.log("C# "+cSharp, "CSS "+cssDesign, "Ruby "+rubyRails));
    // THIRDQUESTIONLOGIC
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
    $(console.log("C# "+cSharp, "CSS "+cssDesign, "Ruby "+rubyRails));
    // FOURTHQUESTIONLOGIC
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
    $(console.log("C# "+cSharp, "CSS "+cssDesign, "Ruby "+rubyRails));
    // FIFTHQUESTIONLOGIC
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
    $(console.log("C# "+cSharp, "CSS "+cssDesign, "Ruby "+rubyRails));
//----------INTERFACELOGIC----------
    if (
      cSharp > cssDesign && cSharp > rubyRails) {
        $(console.log("C# wins"))
    } else if (
      cssDesign > cSharp && cssDesign > rubyRails) {
        $(console.log("cssDesign wins"))
    } else if (
      rubyRails > cSharp && rubyRails > cssDesign) {
        $(console.log("cssDesign wins"))
    } else {
      $(console.log("Error in if code"))
    };
  })
})
