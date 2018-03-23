//BUSINESS LOGIC

//my function will take a genre, an age group and a season and will return a celebrity match
function EpicodusSurvey(genres, location, time, role, idea) {
    var result1 = "python";
    var result2 = "ruby";
    var result3 = "c++";
    var result4 = "csharp";
    var result6 = "java";
    var result7 = "javascript";
    var result8 = "php";
    var result9 = "swift";
  
  if (genres == 1) { //FOR COMEDY LOVERS
    if (location == "5") {
        if(time == "easy")
            if(role == "begin")
                if(idea == "front")
        {
          return result1;
        } else {
          return result2;
        }
    } else {
      if(location == "6")
      {
        return result3;
      } else {
        return result4;
      }
    }
  }
  
  if (genres == 2) { //FOR COMEDY LOVERS
    if (location == "6") {
        if(time == "easy")
            if(role == "inter")
                if(idea == "back")
        {
          return result5;
        } else {
          return result6;
        }
    } else {
      if(location == "micro")
      {
        return result7;
      } else {
        return result8;
      }
    }
  }



  if (genres == 3) { //FOR COMEDY LOVERS
    if (location == "7") {
        if(time == "micro")
            if(role == "ex")
                if(idea == "full")
        {
          return result9;
        } else {
          return result1;
        }
    } else {
      if(location == "2")
      {
        return result3;
      } else {
        return result6;
      }
    }
  }




























}
  















  //USER LOGIC
  
  $(document).ready(function(){
    $("#DevQuiz").submit(function(event){
      event.preventDefault();
  
      var userGenre = $("#genres").val();
      var userLocation = $("#location").val();
      var userTime = $("input:radio[name=language]:checked").val();
      var userRole = $("#role").val();
      var userIdea = $("input:radio[name=select]:checked").val();


      console.log("USER ENTERED: "+userGenre+" USER ENTERED: "+userLocation+" USER ENTERED: "+userTime+" USER ENTERED: "+userRole+" USER ENTERED "+userIdea);
  
      var userResult = EpicodusSurvey(userGenre, userLocation, userTime, userRole, userIdea);
  
        $("#"+userResult).show(); //be showing the image of the chosen celebrity
  
  //var radioValue = $("input[name='Celebrity']:checked").val();
  
    });
  
  });
  