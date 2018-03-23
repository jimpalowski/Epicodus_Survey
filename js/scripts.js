//BUSINESS LOGIC

function EpicodusSurvey(genres, location, time, role, idea) {
    var result1 = "python2";
    var result2 = "ruby2";
    var result3 = "cplus";
    var result4 = "csharp";
    var result5 = "java";
    var result6 = "javascript";
    var result7 = "php";
    var result8 = "swift";
    var result9 = "NONE";

  if (genres == "Complex") {
    if (location == "CA") {
        if(time == "Weekend" || "M-F")
            if(role == "begin")
                if(idea="front" || "back")
        {
          return result1;
        }
       }    
      }
    if (genres == "Hard") {
        if (location == "WA") {
            if(time == "24-7")
                if(role == "advanced")
                    if(idea="full")
            {
                return result4;
            }
            }    
            }

    if (genres == "Universal") { 
        if (location == "NY") {
            if(time == "M-F")
                if(role == "intermediate")
                    if(idea="back")
            {
                return result5;
            }
            }    
            }

    if (genres == "Complex") { 
        if (location == "WA") {
            if(time == "24-7")
                if(role == "advanced")
                    if(idea="full")
            {
                return result3;
            }
            }    
            }

    if (genres == "Hard") { 
        if (location == "CA") {
            if(time == "Weekend" || "M-F")
                if(role == "intermediate")
                    if(idea="front")
            {
                return result7;
            }
            }    
            }
    if (genres == "Hard") { 
        if (location == "CA") {
            if(time == "Weekend" || "M-F")
                if(role == "intermediate")
                    if(idea="front")
            {
                return result7;
            }
            }    
            }

    if (genres == "Hard") { 
        if (location == "NY") {
            if(time == "Weekend" || "24-7")
                if(role == "advanced")
                    if(idea="full")
            {
                return result8;
            }
            }    
            }
    if (genres == "Complex") { 
        if (location == "NY") {
            if(time == "Weekend" || "24-7")
                if(role == "begin")
                    if(idea="front")
            {
                return result5;
            }
            }    
            }
                    
    if (genres == "Hard") { 
            if (location == "NY") {
                if(time == "Weekend" || "24-7")
                    if(role == "advanced")
                        if(idea="full")
                {
                    return result8;
                }
                }    
                }                   

    if (genres == "Hard") { 
        if (location == "NY") {
            if(time == "M-F" || "Weekend")
                if(role == "intermediate")
                    if(idea="back")
            {
                return result6;
            }
            }    
            }

    if (genres == "Universal") { 
        if (location == "CA") {
            if(time == "M-F" || "24-7")
                if(role == "intermediate")
                    if(idea="full")
            {
                return result7;
            }
            }    
            }

    if (genres == "Hard") { 
        if (location == "WA") {
            if(time == "M-F" || "24-7")
                if(role == "advanced")
                    if(idea="back")
            {
                return result4;
            }
            }    
            }

    if (genres == "Universal") { 
        if (location == "WA") {
            if(time == "M-F" || "Weekend")
                if(role == "begin")
                    if(idea="front" || "back")
            {
                return result1;
            }
            }    
            }


    if (genres == "Hard") { 
        if (location == "WA") {
            if(time == "M-F" || "24-7")
                if(role == "begin")
                    if(idea="back" || "full")
            {
                return result3;
            }
            }    
            }




    if (genres == "Hard") { 
        if (location == "WA") {
            if(time == "M-F" || "24-7")
                if(role == "advanced")
                    if(idea="back")
            {
                return result4;
            }
            }    
            }

    if (genres == "Universal") { 
        if (location == "NY") {
            if(time == "Weekend")
                if(role == "intermediate")
                    if(idea="back")
            {
                return result2;
            }
            }    
            }

    if (genres == "Complex") { 
        if (location == "NY") {
            if(time == "24-7" || "M-F")
                if(role == "advanced")
                    if(idea="back" || "full")
            {
                return result6;
            }
            }    
            }
    if (genres == "Hard") { 
        if (location == "WA") {
            if(time == "M-F" || "24-7")
                if(role == "intermediate")
                    if(idea="front")
            {
                return result3;
            }
            }    
            }


    if (genres == "Universal") { 
        if (location == "CA") {
            if(time == "M-F" || "24-7")
                if(role == "begin")
                    if(idea="back")
            {
                return result2;
            }
            }    
            }       

    if (genres == "Universal") { 
        if (location == "NY") {
            if(time == "Weekend" || "M-F")
                if(role == "begin")
                    if(idea="back")
            {
                return result7;
            }
            }    
            }
    if (genres == "Hard") { 
        if (location == "CA") {
            if(time == "Weekend" || "M-F")
                if(role == "advanced")
                    if(idea="back")
            {
                return result8;
            }
            }    
            }

    else{
        return result9;
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
  
        $("#"+userResult).show(); //be showing the image of the chosen language
  

  
    });
  
  });