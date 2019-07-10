 $(document).ready(function () {
	 
//restaurant form	
$(function() {
  $('#restaurantFormBtn').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('#restaurantFormPopup').slideFadeToggle();
    }
    return false;
  });

  $('#restaurantFormClose').on('click', function() {
	$('#restaurantFormBG').css('display','none');
	$('.container-fluid').css('display','block');
    deselect($('#restaurantFormBtn'));
    return false;
  });
});
	$('#restaurantFormBtn').on('click', function() {
		$('#restaurantFormBG').css('display','block');
		$('.container-fluid').css('display','none');
	})

//birthday form	
$(function() {
  $('#birthdaysFormBtn').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('#birthdaysFormPopup').slideFadeToggle();
    }
    return false;
  });

  $('#birthdaysFormClose').on('click', function() {
	$('#birthdaysFormBG').css('display','none');
	$('.container-fluid').css('display','block');
    deselect($('#birthdaysFormBtn'));
    return false;
  });
});
	$('#birthdaysFormBtn').on('click', function() {
		$('#birthdaysFormBG').css('display','block');
		$('.container-fluid').css('display','none');
	})	
	
//masterclass form	
$(function() {
  $('#masterclassFormBtn').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('#masterclassFormPopup').slideFadeToggle();
    }
    return false;
  });

  $('#masterclassFormClose').on('click', function() {
	$('#masterclassFormBG').css('display','none');
	$('.container-fluid').css('display','block');
    deselect($('#masterclassFormBtn'));
    return false;
  });
});
	$('#masterclassFormBtn').on('click', function() {
		$('#masterclassFormBG').css('display','block');
		$('.container-fluid').css('display','none');
	})	
	
//club form	
$(function() {
  $('#clubFormBtn').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('#clubFormPopup').slideFadeToggle();
    }
    return false;
  });

  $('#clubFormClose').on('click', function() {
	$('#clubFormBG').css('display','none');
	$('.container-fluid').css('display','block');
    deselect($('#clubFormBtn'));
    return false;
  });
});
	$('#clubFormBtn').on('click', function() {
		$('#clubFormBG').css('display','block');
		$('.container-fluid').css('display','none');
	})		
	
//friends form	
$(function() {
  $('#friendsFormBtn').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('#friendsFormPopup').slideFadeToggle();
    }
    return false;
  });

  $('#friendsFormClose').on('click', function() {
	$('#friendsFormBG').css('display','none');
	$('.container-fluid').css('display','block');
    deselect($('#friendsFormBtn'));
    return false;
  });
});
	$('#friendsFormBtn').on('click', function() {
		$('#friendsFormBG').css('display','block');
		$('.container-fluid').css('display','none');
	})		


//menu form	
$(function() {
  $('#reservationMenuBtn').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('#reservationMenuFormPopup').slideFadeToggle();
    }
    return false;
  });

  $('#reservationMenuClose').on('click', function() {
	$('#reservationMenuBG').css('display','none');
	$('.container-fluid').css('display','block');
    deselect($('#reservationMenuBtn'));
    return false;
  });
});
	$('#reservationMenuBtn').on('click', function() {
		$('#reservationMenuBG').css('display','block');
		$('.container-fluid').css('display','none');
	})
	
$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'slow', easing, callback);
};



 function deselect(e) {
	var id = e.attr('id');
	if(id=="birthdaysFormBtn"){
		$('#birthdaysFormPopup').slideFadeToggle(function() {
		e.removeClass('selected');
		}); 
	}
	if(id=="restaurantFormBtn"){
		$('#restaurantFormPopup').slideFadeToggle(function() {
		e.removeClass('selected');
		}); 
	}
	if(id=="masterclassFormBtn"){
		$('#masterclassFormPopup').slideFadeToggle(function() {
		e.removeClass('selected');
		}); 
	}
	if(id=="clubFormBtn"){
		$('#clubFormPopup').slideFadeToggle(function() {
		e.removeClass('selected');
		}); 
	}
	if(id=="friendsFormBtn"){
		$('#friendsFormPopup').slideFadeToggle(function() {
		e.removeClass('selected');
		}); 
	}
	if(id=="reservationMenuBtn"){
		$('#reservationMenuFormPopup').slideFadeToggle(function() {
		e.removeClass('selected');
		}); 
	}
	
	
	

}


	

});