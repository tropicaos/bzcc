$(function () {
	'use strict';

	window.onpageshow = function(event) {
		if (event.persisted) {
			setTimeout(() => {
				window.location.reload();
			}, 100);
		}
	};

	/* Set full height in blocks */
	var width = $(window).width();
	var height = $(window).height();
	$('.section.started').css({'height': height-60});

	/* Typed preload text */
	$('.typed-load').typed({
		stringsElement: $('.typing-load'),
		loop: true
	});
	
	/* Preloader */
	function initPage() {
		if ($('.preloader').hasClass('done')) return;
	
		$(".preloader .pre-inner").fadeOut(300, function () {
			$('.preloader').fadeOut();
			$('body').addClass('loaded').removeClass('scroll_hidden');
			$('.preloader').addClass('done');
	
			/* Typed subtitle */
			$('.typed-subtitle').typed({
				stringsElement: $('.typing-subtitle'),
				loop: true
			});
			/* Typed breadcrumbs */
			$('.typed-bread').typed({
				stringsElement: $('.typing-bread'),
				showCursor: false
			});
	
			/* One Page Nav */
			const url_hash = location.hash;
			const sectionElem = $(url_hash);
			if (url_hash.indexOf('#section-') === 0 && sectionElem.length) {
				$('html, body').animate({ scrollTop: sectionElem.offset().top - 70 }, 300);
			}
		});
	}

	$(window).on('load', initPage);

	setTimeout(function () {
		if (!$('body').hasClass('loaded')) {
			initPage();
		}
	}, 300); 
	
	/*Menu mobile*/
	$('header').on('click', '.menu-btn', function(){
		if($('header').hasClass('active')){
			$('header').removeClass('active');
			$('body').addClass('loaded');
		} else {
			$('header').addClass('active');
			$('body').removeClass('loaded');
		}
		
		return false;
	});
	
	/* Hide mouse button on scroll */
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 1 /*$('#blue_bor').offset().top*/) {
			$('.mouse_btn').fadeOut();
		}
		else {
			$('.mouse_btn').fadeIn();
		}
	});
	
	/* On click mouse button, page scroll down */
	$('.section').on('click', '.mouse_btn', function(){
		$('body,html').animate({
			scrollTop: height - 150
		}, 800);
	});
	
	$('body').on({
		mouseenter: function () {
			$(this).addClass('glitch-active');
		},
		mouseleave: function () {
			$(this).removeClass('glitch-active');
		}
	}, '.saibamais-button.glitch-effect');
	
	/* Validate contact form */
	$("#cform").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		success: "valid",
		submitHandler: function() {
			return true;
			$("#cform").find('input[type="text"], input[type="email"], input[type="tel"], textarea').val('');
		}
	});
	
	/* Initialize masonry items */
	var $container_clients = $('.section.clients .box-items');
	$container_clients.imagesLoaded(function() {
		$container_clients.isotope({
			itemSelector: '.box-item'
		});
	});

	/* Initialize masonry items */
	var $container_blog = $('.section.blog .box-items');
	$container_blog.imagesLoaded(function() {
		$container_blog.isotope({
			itemSelector: '.box-item'
		});
	});
	
	/*
		Initialize portfolio items
	*/
	var $container = $('.section.works .box-items');
	$container.imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.box-item'
		});
	});

	/*
		Filter items on button click
	*/
	$('.filters').on( 'click', '.btn-group', function() {
		var filterValue = $(this).find('input').val();
		$container.isotope({ filter: filterValue });
		$('.filters .btn-group label').removeClass('glitch-effect');
		$(this).find('label').addClass('glitch-effect');
	});
	
	/*
		Gallery popup
	*/
	if(/\.(?:jpg|jpeg|gif|png)$/i.test($('.gallery-item:first a').attr('href'))){
		$('.gallery-item a').magnificPopup({
			gallery: {
				enabled: true
			},
			type: 'image',
			closeBtnInside: false,
			mainClass: 'mfp-fade'
		});
	}

	/*
		Media popup
	*/
	$('.has-popup-media').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'mfp-fade'
	});

	/*
		Image popup
	*/
	$('.has-popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-fade',
		image: {
			verticalFit: true
		}
	});
	
	/*
		Video popup
	*/
	$('.has-popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		iframe: {
            patterns: {
                youtube_short: {
                  index: 'youtu.be/',
                  id: 'youtu.be/',
                  src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        },
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'mfp-fade',
		callbacks: {
			markupParse: function(template, values, item) {
				template.find('iframe').attr('allow', 'autoplay');
			}
		}
	});
	
	/*
		Music popup
	*/
	$('.has-popup-music').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'mfp-fade'
	});

	/*
		Gallery popup
	*/
	$('.has-popup-gallery').on('click', function() {
        var gallery = $(this).attr('href');
    
        $(gallery).magnificPopup({
            delegate: 'a',
            type:'image',
            closeOnContentClick: false,
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');

        return false;
	});
	
		/*
    Documentos/Writing popup
*/
	$('.has-popup-writing').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'mfp-fade',
		callbacks: {
			open: function() {
				$('.ion').addClass('ion-document-text'); // Ícone de documento
			}
		}
	});
	
	/*
		Games popup
	*/
	$('.has-popup-game').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		iframe: {
			patterns: {
				itch_io: {
					index: 'itch.io/',
					id: 'itch.io/',
					src: 'https://%id%?autoplay=true'
				}
			}
		},
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		mainClass: 'mfp-fade',
		callbacks: {
			open: function() {
				$('.ion').addClass('ion-joystick'); // Ícone de jogo
			}
		}
	});
	
	/* Resize function */
	$(window).resize(function() {
		var width = $(window).width();
		var height = $(window).height();
		
		$('.section.started').css({'height': height-60});

		/* Dotted Skills Line On Resize Window */
		var skills_dotted = $('.skills-list.dotted .progress');
		var skills_dotted_w = skills_dotted.width();
		if(skills_dotted.length){
			skills_dotted.find('.percentage .da').css({'width':skills_dotted_w+1});
		}
	});
	
	if(width < 840) {
		$('.section.started').css({'height': height-30});
	}

	/*
		Dotted Skills Line
	*/

	function skills(){
		var skills_dotted = $('.skills.dotted .progress');
		var skills_dotted_w = skills_dotted.width();
		if(skills_dotted.length){
			skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			skills_dotted.find('.percentage .da').css({'width':skills_dotted_w});
		}
	}
	setTimeout(skills, 1000);

	/*
		Circle Skills Line
	*/

	var skills_circles = $('.skills.circles .progress');
	if(skills_circles.length){
		skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
	}

	/*
		Social Share
	*/
	$('.social-share').rrssb({
		title: $('.social-share').data('title'),
		url: $('.social-share').data('url'),
	});
	
	/*
		Sidebar Show/Hide
	*/
	$('header').on('click', '.sidebar_btn', function(){
		$('.s_overlay').fadeIn();
		$('.content-sidebar').addClass('active');
		$('body').addClass('scroll_hidden');
		
		return false;
	});
	$('.content-sidebar, .container').on('click', '.close, .s_overlay', function(){
		$('.s_overlay').fadeOut();
		$('.content-sidebar').removeClass('active');
		$('body').removeClass('scroll_hidden');
		// Restaurar a barra de rolagem quando a sidebar é fechada
		$('html, body').css({
			overflow: '',
			height: ''
		});
	});

	/*
		Widget Title
	*/
	$('.widget-title').wrapInner('<span class="widget-title-span"></span>');

	/*
		Search
	*/
	var sjs = SimpleJekyllSearch({
	  searchInput: document.getElementById('search-input'),
	  resultsContainer: document.getElementById('results-container'),
	  json: '/search.json'
	});


	document.addEventListener("scroll", function () {
		let scrollTop = window.scrollY;
		let heroImage = document.querySelector(".hero-image.parallax");
	  
		if (heroImage) {
		  heroImage.style.transform = `translateY(${scrollTop * 0.3}px)`;
		}
	  });

	  $('.has-popup-music').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade',
		removalDelay: 300,
		closeBtnInside: true,
		fixedContentPos: true
	  });

	  $('.has-popup-media').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade',
		removalDelay: 600, // Deve corresponder ao tempo da animação
		callbacks: {
		  beforeClose: function() {
			this.content.addClass('dematerialize');
		  },
		  close: function() {
			this.content.removeClass('dematerialize');
		  }
		}
	  });
	  
});

	/*Fade-out animation between load pages*/
	$('header .top-menu, .typed-bread').on('click', 'a', function(){
		var link = $(this).attr('href');
		if(link.indexOf('#section-') == 0){
			if(!$('body').hasClass('home')){
				location.href = '/'+link;
			}

			$('body, html').animate({scrollTop: $(link).offset().top - 110}, 400);
			if($('header').hasClass('active')){
				$('.menu-btn').trigger('click');
			}
		} else {
			$('body').removeClass('loaded');
			setTimeout(function() {
				location.href = "" + link;
			}, 500);
		}
		return false;
	});

	document.addEventListener('DOMContentLoaded', () => {
		const sidebar = document.querySelector('.content-sidebar');
		const sidebarOverlay = document.querySelector('.s_overlay');
		const sidebarToggle = document.querySelector('.sidebar_btn');
		const sidebarClose = sidebar.querySelector('.close');
	
		if (sidebarToggle && sidebar && sidebarOverlay) {
			sidebarToggle.addEventListener('click', () => {
				sidebar.classList.add('active');
				sidebarOverlay.classList.add('active');
			});
		}
	
		if (sidebarClose && sidebar && sidebarOverlay) {
			sidebarClose.addEventListener('click', () => {
				sidebar.classList.remove('active');
				sidebarOverlay.classList.remove('active');
			});
		}
	
		if (sidebarOverlay && sidebar) {
			sidebarOverlay.addEventListener('click', () => {
				sidebar.classList.remove('active');
				sidebarOverlay.classList.remove('active');
			});
		}
	});