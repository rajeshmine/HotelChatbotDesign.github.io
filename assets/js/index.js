
/* div scroll to bottom fun starts */
$(document).ready(function(){
	scrolltobottom();
	$(".msg_input").focus();
	get_time();
	$('.leftside').hide();
});

function scrolltobottom(){
	var height = 0;
		$('.center_div .container').each(function(i, value){
			height += parseInt($(this).height());
		});

		height += '';

		$('.center_div').animate({scrollTop: height});
}


/* div scroll to bottom fun ends */


/* msg send click fun starts */
function send(){
		get_time();
		var msg_input=$('.msg_input').val();
		var time = new Date();
		var time_result=time.getHours() + ":" + time.getMinutes();
		
		 $(".center_div").append('<div class="container"><div class="row custom_row"><div class="sendmsg_div"><div class="send_msg">   </div></div></div></div>');
		 $('.send_msg:last').text(msg_input);
		
		scrolltobottom();
		setTimeout(recv_msg, 5000);
		$('.send_msg:last').html(msg_input+"<br/><small class='time_text'>"+time_result+"</small>");
		$('.leftside').show();
		$(".msg_input").focus();
}

/* msg send click fun ends */

/* msg send input enter fun starts */


$(document).keypress(function(event){ 
	
	var keycode = (event.keyCode ? event.keyCode : event.which); 
	if(keycode == '13'){
		send();
	}
	
});
/* msg send input enter fun ends */

/* recv msg append fun starts */


function recv_msg(){ 
	var time = new Date();
	var time_result=time.getHours() + ":" + time.getMinutes();
	scrolltobottom();
	$(".center_div").append('<div class="container"><div class="row custom_row"><div class="recvmsg_div"><div class="recv_msg">   </div></div></div></div>');
	$('.recv_msg:last').html("Welcome!. I 'm Confused.<br/><small class='time_text'>"+time_result+"</small>");
	$('.leftside').hide();
	$(".msg_input").val('');
	$(".msg_input").focus();
}

/* recv msg append fun ends */



/* horizontal scroll mouse wheel function starts */
 jQuery(function ($) {
		$.fn.hScroll = function (amount) {
			amount = amount || 120;
			$(this).bind("DOMMouseScroll mousewheel", function (event) {
				var oEvent = event.originalEvent, 
					direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
					position = $(this).scrollLeft();
				position += direction > 0 ? -amount : amount;
				$(this).scrollLeft(position);
				event.preventDefault();
			})
		};
});

$(document).ready(function() {
	$('.outer_div').hScroll(30);
	
}); 
/* horizontal scroll mouse wheel function ends */

/* get current time fun starts */
function get_time(){
	var time = new Date(); 
	console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()); 
	var time_result=time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
	console.log(time_result);
}
/* get current time fun ends */

var h_name;
/* map div show starts */
$(document).ready(function(){
	
	$('.location_icon').each(function(){
		$(this).click(function(){
			console.log($(this).parent().parent().find('.hotel_name').text());
			h_name=$(this).parent().parent().find('.hotel_name').text();
			$('.mapdetails').slideToggle();
			myMap();
		});
	});
	$('.map_close').click(function(){
		$('.mapdetails').slideToggle();
	});
});

/* map div show ends */

/* map fun starts */
/* map  */
var lat=17.8546;
var lan=77.8968;
var center;
function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(lat,lan),
    zoom: 15
   
}
 var myLatlng = new google.maps.LatLng(lat,lan);
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
var icon = {
    url: 'assets/images/mapmarker2.png', // url
    scaledSize: new google.maps.Size(80, 30) // scaled size
   
};

var marker = new google.maps.Marker({
         position:myLatlng,
			map: map,
			icon:icon,
			title: h_name,
			label: {
				text: " ₹ 1000", 
				color: "white",
				fontSize: "14px",
				fontWeight: "bold"
				}
        });
}

/* map fun ends */


/* roomtype fun starts */
$(document).ready(function(){
	$('.roomtype_row').hide();
	$('.roomtype_open').each(function(){
		$(this).click(function(){
			console.log('roomtype_row');
			$('.roomtype_row').show();
			scrolltobottom();
		});
	});
});
/* roomtype fun ends */

/* gallery div show starts */
$(document).ready(function(){
	$('.gallerydetails').hide();
	$('.gallery_icon').each(function(){
		$(this).click(function(){
			$('.gallerydetails').slideToggle();
			
		});
	});
	$('.gallery_close').click(function(){
		$('.gallerydetails').slideToggle();
	});
});

/* gallery div show ends */























