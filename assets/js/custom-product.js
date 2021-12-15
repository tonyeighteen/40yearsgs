/* Portfolio Sorting */
	
			(function ($) {
				var container = $('.grid-wraper');
	
				function getNumbColumns() {
					var winWidth = $(window).width(),
						columnNumb = 1;
	
					if (winWidth > 1500) {
						columnNumb = 4;
					} else if (winWidth > 1200) {
						columnNumb = 3;
					} else if (winWidth > 900) {
						columnNumb = 2;
					} else if (winWidth > 600) {
						columnNumb = 1;
					} else if (winWidth > 300) {
						columnNumb = 1;
					}
	
					return columnNumb;
				}
				function setColumnWidth() {
					var winWidth = $(window).width(),
						columnNumb = getNumbColumns(),
						postWidth = Math.floor(winWidth / columnNumb);
	
				}
				$('.grid-filter .filter a').click(function () {
					var selector = $(this).attr('data-filter');
	
					$(this).parent().parent().find('a').removeClass('current');
					$(this).addClass('current');
	
					container.isotope( {
						filter : selector
					});
	
					setTimeout(function () {
						reArrangeProjects();
					}, 300);
	
	
					return false;
				});
				function reArrangeProjects() {
					setColumnWidth();
					container.isotope('layout');
				}
				container.imagesLoaded(function () {
					setColumnWidth();
	
	
					container.isotope( {
						itemSelector : '.grid-box',
						layoutMode : 'masonry',
						resizable : false
					} );
				} );
				$(window).on('debouncedresize', function () {
					reArrangeProjects();
	
				} );
	
			} )(jQuery);