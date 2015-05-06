
$(document).ready(function(){
               $(".music").hover(
                   function(){
                       $(this).fadeOut(function () {
                           var temp = $(this).attr('src');
                           $(this).attr('src', $(this).attr('data-alt-src'));
                           $(this).attr('data-alt-src', temp);
                        });
                        $(this).fadeIn();
     });
           });