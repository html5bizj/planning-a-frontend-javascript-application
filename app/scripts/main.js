(function() {
	'use strict';

	$('.tracking').on('click', function(){
		ga('send', 'event', 'link', 'click', $(this)[0].href);
	});

})();