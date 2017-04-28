$(function(){
  $("form#user-input").submit(function(event){
    event.preventDefault();

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

    $(console.log(firstAnswer))
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
    $(console.log(firstAnswer))
    $(console.log("C# "+cSharp, "CSS "+cssDesign, "Ruby "+rubyRails));

  })
})
