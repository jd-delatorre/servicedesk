//on resize, get height and widths
function resizeChanges(){
	//getting the height for the left blue panel
	var viewportHeight = $(window).height();

	//getting the responsive width for mobile view
	var mainpanelwidth = $('.mainoptionscontainer').width();

	$('.sdleftpanel').css("height", viewportHeight);
	$('.mainsd, .servicedesk').css("width", mainpanelwidth);
};

//to move main panels to the left and show other panels.
function mainChange(section){

	//display back button
	$('.back').css('visibility', 'visible');
	

	//animate the slide to left effect
	$('#mainoptions').animate({
		marginLeft:'-681px'
	}, 250, function(){
		//hide main panel
		$('#mainoptions').hide();
		$('.mainoptionscontainer').css('overflow', 'visible');
	});

	//show section
	$(section).removeClass('hide');
};

//on load resize and responsive management for panels
$(function(){
	resizeChanges();

	//on resize update widths and heights
	$(window).resize(function(){
			resizeChanges();
	});
});

//on click of any of panels, move panel to left
$('#hardware, #printers, #permissions, #cognos, #unix, #phone').on('click', function(){
	var option = $(this).data('mainoption');
	mainChange(option);
});

//on clicking back button, move panel back
$('.back').on('click', function(){

	//hide back button
	$(this).css('visibility', 'hidden');
	$('.mainoptionscontainer').css('overflow', 'hidden');

	//animate panel from left to right and on complete, hide previous panel
	$('#mainoptions').animate({
		marginLeft:'0px'
	}, 250, function(){
	
		if( !( $('#hardwaredata').hasClass('hide') ) ){
			$('#hardwaredata').addClass('hide');
		}else if( !( $('#printerdata').hasClass('hide') ) ){
			$('#printerdata').addClass('hide');
		}else if( !( $('#permissiondata').hasClass('hide') ) ){
			$('#permissiondata').addClass('hide');
		}else if( !( $('#cognosdata').hasClass('hide') ) ){
			$('#cognosdata').addClass('hide');
		}else if ( !( $('#unixdata').hasClass('hide') ) ){
			$('#unixdata').addClass('hide');
		}else if ( !( $('#phonedata').hasClass('hide') ) ){
			$('#phonedata').addClass('hide');
		}else{}
	});

	//show main panel
	$('#mainoptions').show();

});

//getting the service title and adding it to modal, without creating 20 modals
$('#serviceModal').on('show.bs.modal', function (event) {

  var button = $(event.relatedTarget); // Button that triggered the modal
  var servicedesk = button.data('service'); // Extract info from data-* attributes

  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.

  var modal = $(this);

  modal.find('.modal-title').text(servicedesk);
});


//for up and down arrows on accordions
$('#hardwareaccordion').on('show.bs.collapse', function(event){
	$(event.target).prev('.panel-heading').addClass('active');
});

$('#hardwareaccordion').on('hide.bs.collapse', function(event){
	$(event.target).prev('.panel-heading').removeClass('active');
});

//getting the name of the invisible file input field
$('.fileinputmain').on('change', function(){

	var fileinputvalue = $(this).val();
	$('.fileinput').val(fileinputvalue);

});
