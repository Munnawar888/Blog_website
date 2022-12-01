
   const reply = (res) => {
    var res = document.getElementById(res)
    if(res.className == "replies"){
       res.className = "moon_show"
    }else if( res.className == "moon_show"){
      res.className = "replies"
    }
   }

   const like = document.getElementById('like_btn');
   const singleClick = () => {
      like.style.fontWeight = 'bold';
      like.style.background = '#bbe1fa';
      like.style.color = '#1b262c';
      like.innerHTML = 'Liked';
   }
   const doubleClick = () => {
      like.style.fontWeight = 'normal';
      like.style.background = '#3282b8';
      like.style.color = '#fff';
      like.innerHTML = 'Like';
   }

   var clickcount = 0;
like.addEventListener('click', function(){
   clickcount++;
   if(clickcount === 1){
      singleclickTimer = setTimeout(function(){
         clickcount = 0;
         singleClick();
      }, 400);
    } else if (clickcount === 2){
         clearTimeout(singleclickTimer);
         clickcount = 0;
         doubleClick();
      }
   }, false);
