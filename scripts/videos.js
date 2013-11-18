var sel = false;
var html = "";

function seleccionado(){
  $('.seleccionado').draggable({
    opacity: 0.7,
    cursor: "move",
    appendTo: "body",
    containment: 'window',
    scroll: false,
    helper: 'clone',
    start: function (e, ui) {
      onDrag()
      sel = false;
      },
    stop: function (e, ui){
      $("#mensaje").hide()

      if(sel == false){
        tooltip5.pop(this, "Debes soltar el vídeo dentro del recuadro.");
        setTimeout(function(){tooltip3.hide()},3000)
      }
    }
  });
}

function cambiar_id(id){
  switch(id){
    case 1:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/13027369?v=3&amp;wmode=diect&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 2:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/13027422?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 3:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/12434958?v=3&amp;wmode=direct&amp;&autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 4:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/12434837?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 5:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/12526704?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 6:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/14879599?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 7:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/14879579?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 8:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/13027426?v=3&amp;wmode=diect&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 9:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/14225913?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 10:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/14812707?v=3&amp;wmode=direct&amp;&autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 11:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/14812715?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 12:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/13628077?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 13:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/12498820?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 14:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/14606803?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 15:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/14470015?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 16:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/13027446?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 17:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/14839273?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 18:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/13628076?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 19:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/13027427?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 20:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/14470019?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 21:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/13027441?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;

    case 22:
    html = "<iframe width='100%' height='100%' src='http://www.ustream.tv/embed/13027444?v=3&amp;wmode=direct&amp;autoplay=true' scrolling='no' frameborder='0' style='border: 0px none transparent;'></iframe>";
    break;
  }
}

$(document).on('ready', function(){
   $("#mensaje").show();
  seleccionado();
  $('#barra_lat > ul > li > a').click(function() {
    $(this).closest('li').addClass('active'); 
    var checkElement = $(this).next();

    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('active');
      checkElement.slideUp('normal');
    }
    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      checkElement.slideDown('normal');
    } 
  });

  $("#primero").show(function (e, ui){
    tooltip5.pop(this, "Arrastra y suelta el v&iacute;deo que desees ver dentro del recuadro.");
  });

  $('#capa').droppable({
    drop: function (e, ui){
      onDrop();
      seleccionado();
      
    }
  });
});

function onDrag(){
  $("#mensaje").show();
}

function onDrop(){
  document.getElementById("drop").innerHTML = html;
  sel = true;
}