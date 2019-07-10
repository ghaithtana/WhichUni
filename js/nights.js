 $(document).ready(function () {
	 
//night1 form	
$(function() {
  $('#night1FormBtn').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('#night1FormPopup').slideFadeToggle();
    }
    return false;
  });

  $('#night1FormClose').on('click', function() {
	$('#night1FormBG').css('display','none');
	$('.container').css('display','block');
    deselect($('#night1FormBtn'));
    return false;
  });
});
	$('#night1FormBtn').on('click', function() {
		$('#night1FormBG').css('display','block');
		$('.container').css('display','none');
	})

//night2 form	
$(function() {
  $('#night2FormBtn').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('#night2FormPopup').slideFadeToggle();
    }
    return false;
  });

  $('#night2FormClose').on('click', function() {
	$('#night2FormBG').css('display','none');
	$('.container').css('display','block');
    deselect($('#night2FormBtn'));
    return false;
  });
});
	$('#night2FormBtn').on('click', function() {
		$('#night2FormBG').css('display','block');
		$('.container').css('display','none');
	})	
	
//night3 form	
$(function() {
  $('#night3FormBtn').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('#night3FormPopup').slideFadeToggle();
    }
    return false;
  });

  $('#night3FormClose').on('click', function() {
	$('#night3FormBG').css('display','none');
	$('.container').css('display','block');
    deselect($('#night3FormBtn'));
    return false;
  });
});
	$('#night3FormBtn').on('click', function() {
		$('#night3FormBG').css('display','block');
		$('.container').css('display','none');
	})	
	
//night4 form	
$(function() {
  $('#night4FormBtn').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('#night4FormPopup').slideFadeToggle();
    }
    return false;
  });

  $('#night4FormClose').on('click', function() {
	$('#night4FormBG').css('display','none');
	$('.container').css('display','block');
    deselect($('#night4FormBtn'));
    return false;
  });
});
	$('#night4FormBtn').on('click', function() {
		$('#night4FormBG').css('display','block');
		$('.container').css('display','none');
	})		
	
//night5 form	
$(function() {
  $('#night5FormBtn').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('#night5FormPopup').slideFadeToggle();
    }
    return false;
  });

  $('#night5FormClose').on('click', function() {
	$('#night5FormBG').css('display','none');
	$('.container').css('display','block');
    deselect($('#night5FormBtn'));
    return false;
  });
});
	$('#night5FormBtn').on('click', function() {
		$('#night5FormBG').css('display','block');
		$('.container').css('display','none');
	})		

	
	
//night6 form	
$(function() {
  $('#night6FormBtn').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('#night6FormPopup').slideFadeToggle();
    }
    return false;
  });

  $('#night6FormClose').on('click', function() {
	$('#night6FormBG').css('display','none');
	$('.container').css('display','block');
    deselect($('#night6FormBtn'));
    return false;
  });
});
	$('#night6FormBtn').on('click', function() {
		$('#night6FormBG').css('display','block');
		$('.container').css('display','none');
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
	$('.container').css('display','block');
    deselect($('#reservationMenuBtn'));
    return false;
  });
});
	$('#reservationMenuBtn').on('click', function() {
		$('#reservationMenuBG').css('display','block');
		$('.container').css('display','none');
	})
	
$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'slow', easing, callback);
};



 function deselect(e) {
	var id = e.attr('id');
	if(id=="night1FormBtn"){
		$('#night1FormPopup').slideFadeToggle(function() {
		e.removeClass('selected');
		}); 
	}
	if(id=="night2FormBtn"){
		$('#night2FormPopup').slideFadeToggle(function() {
		e.removeClass('selected');
		}); 
	}
	if(id=="night3FormBtn"){
		$('#night3FormPopup').slideFadeToggle(function() {
		e.removeClass('selected');
		}); 
	}
	if(id=="night4FormBtn"){
		$('#night4FormPopup').slideFadeToggle(function() {
		e.removeClass('selected');
		}); 
	}
	if(id=="night5FormBtn"){
		$('#night5FormPopup').slideFadeToggle(function() {
		e.removeClass('selected');
		}); 
	}
	if(id=="night6FormBtn"){
		$('#night6FormPopup').slideFadeToggle(function() {
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