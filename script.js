$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


$("#slideshow2 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow2 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow2');
},  3000);



$("#Schoolgroups").mouseover(function(){
    document.getElementById('school-con').style.display = "block";
});


$("#Schoolgroups").mouseout(function(){
    document.getElementById('school-con').style.display = "none";
});



$("#internationalvisitors").mouseover(function(){
    document.getElementById('int-content').style.display = "block";
});

$("#internationalvisitors").mouseout(function(){
    document.getElementById('int-content').style.display = "none";
});



$("#GeneralPublic").mouseover(function(){
    document.getElementById('gen-content').style.display = "block";
});


$("#GeneralPublic").mouseout(function(){
    document.getElementById('gen-content').style.display = "none";
});