/**
 * Glitche - Scripts Personalizados
 *
 * Sumário (Table of Contents):
 * ---------------------------
 * 1. Configurações Iniciais e Polyfills (onpageshow)
 * 2. Ajuste de Altura Inicial
 * 3. Animações Typed.js (Preload, Subtitle, Breadcrumbs)
 * 4. Preloader e Inicialização da Página
 * 5. Menu Mobile (Header Toggle)
 * 6. Efeitos de Scroll (Mouse Button Fade/Click)
 * 7. Efeitos de Hover (Saibamais Button)
 * 8. Validação do Formulário de Contato (#cform)
 * 9. Inicialização Isotope/Masonry (Clientes, Blog, Portfolio)
 * 10. Filtros do Portfolio
 * 11. Inicialização Magnific Popup (Gallery, Media, Image, Video, Music, Content Popups)
 * 12. Ajustes no Resize da Janela
 * 13. Inicialização Visual das Skills (Dotted, Circles)
 * 14. Compartilhamento Social (RRSSB)
 * 15. Lógica da Sidebar (Abrir/Fechar)
 * 16. Estilização de Títulos de Widgets
 * 17. Inicialização da Busca (SimpleJekyllSearch)
 * 18. Efeito Parallax (Hero Image)
 * 19. Animação de Transição entre Páginas
 */

$(function () {
	'use strict';

	/* 1. Configurações Iniciais e Polyfills */
	window.onpageshow = function(event) {
		if (event.persisted) {
			setTimeout(() => {
				window.location.reload();
			}, 100);
		}
	};

	/* 2. Ajuste de Altura Inicial */
	function adjustStartedSectionHeight() {
		var width = $(window).width();
		var height = $(window).height();
		var offset = (width < 840) ? 30 : 60;
		$('.section.started').css({'height': height - offset});
	}
	adjustStartedSectionHeight();

	/* 3. Animações Typed.js */
	if ($('.typed-load').length) {
		$('.typed-load').typed({
			stringsElement: $('.typing-load'),
			loop: true
		});
	}

	/* 4. Preloader e Inicialização da Página */
	function initPage() {
		if ($('.preloader').hasClass('done')) return;

		$(".preloader .pre-inner").fadeOut(300, function () {
			$('.preloader').fadeOut(function() {
				$(this).addClass('done');
			});
			$('body').addClass('loaded').removeClass('scroll_hidden');

			if ($('.typed-subtitle').length) {
				$('.typed-subtitle').typed({
					stringsElement: $('.typing-subtitle'),
					loop: true
				});
			}
			if ($('.typed-bread').length) {
				$('.typed-bread').typed({
					stringsElement: $('.typing-bread'),
					showCursor: false
				});
			}

			const url_hash = window.location.hash;
			if (url_hash && url_hash.indexOf('#section-') === 0) {
				const sectionElem = $(url_hash);
				if (sectionElem.length) {
					$('html, body').animate({ scrollTop: sectionElem.offset().top - 70 }, 300);
				}
			}
		});
	}

	$(window).on('load', function() {
		initPage();
		initializeSkillsVisuals(); // Mover inicialização das skills para cá
	});

	setTimeout(function () {
		if (!$('.preloader').hasClass('done')) {
			initPage();
		}
	}, 1500);

	/* 5. Menu Mobile (Header Toggle) */
	$('header').on('click', '.menu-btn', function(){
		const header = $('header');
		const body = $('body');
		const overlay = $('.s_overlay');

		header.toggleClass('active');
		overlay.toggleClass('active');
		body.toggleClass('scroll_hidden');

		return false;
	});

	/* 6. Efeitos de Scroll (Mouse Button Fade/Click) */
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 1) {
			$('.mouse_btn').fadeOut();
		} else {
			$('.mouse_btn').fadeIn();
		}
	});
	$('.section').on('click', '.mouse_btn', function(){
		var currentHeight = $(window).height();
		$('body,html').animate({
			scrollTop: currentHeight - 150
		}, 800);
		return false;
	});

	/* 7. Efeitos de Hover (Saibamais Button) */
	$('body').on({
		mouseenter: function () {
			$(this).addClass('glitch-active');
		},
		mouseleave: function () {
			$(this).removeClass('glitch-active');
		}
	}, '.saibamais-button.glitch-effect');

	/* 8. Validação do Formulário de Contato (#cform) */
	if ($("#cform").length) {
		$("#cform").validate({
			rules: {
				name: { required: true },
				message: { required: true },
				email: { required: true, email: true }
			},
			success: "valid",
			submitHandler: function(form) {
				// Placeholder para lógica AJAX, se necessário
				return true; // Permite envio padrão
			}
		});
	}

	/* 9. Inicialização Isotope/Masonry */
	function initIsotope($container) {
		if ($container.length) {
			$container.imagesLoaded(function() {
				$container.isotope({
					itemSelector: '.box-item',
					layoutMode: 'masonry'
				});
			});
		}
	}
	initIsotope($('.section.clients .box-items'));
	initIsotope($('.section.blog .box-items'));
	initIsotope($('.section.works .box-items'));

	/* 10. Filtros do Portfolio */
	$('.filters').on('click', '.btn-group', function() {
		var filterValue = $(this).find('input').val();
		var $portfolioContainer = $('.section.works .box-items');
		if ($portfolioContainer.length) {
			$portfolioContainer.isotope({ filter: filterValue });
		}
		$('.filters .btn-group label').removeClass('glitch-effect');
		$(this).find('label').addClass('glitch-effect');
	});

	/* 11. Inicialização Magnific Popup */
	function getMagnificPopupDefaults(type = 'image', extraOptions = {}) {
		let defaults = {
			type: type,
			closeBtnInside: false,
			mainClass: 'mfp-fade',
			removalDelay: 300,
			fixedContentPos: true
		};
		return { ...defaults, ...extraOptions };
	}

	$('.has-popup-image').magnificPopup(getMagnificPopupDefaults('image', {
		closeOnContentClick: true,
		image: { verticalFit: true }
	}));

	$('.has-popup-gallery').on('click', function(e) {
		e.preventDefault();
		var galleryId = $(this).attr('href');
		if ($(galleryId).length) {
			$(galleryId).magnificPopup({
				delegate: 'a',
				...getMagnificPopupDefaults('image', {
					gallery: { enabled: true },
					closeOnContentClick: false
				})
			}).magnificPopup('open');
		}
	});

	// Consolidação para .has-popup-media e .has-popup-music
	// Inclui callbacks de dematerialize para .has-popup-media
	$('.has-popup-media, .has-popup-music').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'mfp-fade',
		removalDelay: 600,
		fixedContentPos: true,
		callbacks: {
		  beforeClose: function() {
			if ($(this.st.el).hasClass('has-popup-media') && this.content && typeof this.content.addClass === 'function') {
			  this.content.addClass('dematerialize');
			}
		  },
		  close: function() {
			if ($(this.st.el).hasClass('has-popup-media') && this.content && typeof this.content.removeClass === 'function') {
			  this.content.removeClass('dematerialize');
			}
		  }
		}
	});

	// Popups específicos podem ter suas próprias configs se necessário
	$('.has-popup-writing').magnificPopup(getMagnificPopupDefaults('inline', {
		overflowY: 'auto',
		closeBtnInside: true
	}));

	$('.has-popup-video').magnificPopup(getMagnificPopupDefaults('iframe', {
		disableOn: 700,
		preloader: false,
		iframe: {
			patterns: {
				youtube_short: {
				  index: 'youtu.be/',
				  id: 'youtu.be/',
				  src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: 'https://player.vimeo.com/video/%id%?autoplay=1'
				}
			},
			 srcAction: 'iframe_src',
		},
		callbacks: {
			markupParse: function(template, values, item) {
				template.find('iframe').attr('allow', 'autoplay; fullscreen'); // Adicionado fullscreen
			}
		}
	}));

	// Não precisa mais da inicialização separada de music/media aqui
	// $('.has-popup-music').magnificPopup(...);
	// $('.has-popup-media').magnificPopup(...); // Segunda inicialização removida

	$('.has-popup-game').magnificPopup(getMagnificPopupDefaults('iframe', {
		disableOn: 700,
		preloader: false,
		iframe: {
			patterns: {
				itch_io: {
					index: 'itch.io/',
					id: function(url) {
						var match = url.match(/https?:\/\/([^.]+)\.itch\.io\/([^?#]+)/);
						return (match) ? match[1] + '.itch.io/' + match[2] : null;
					},
					src: 'https://itch.io/embed/%id%?autoplay=1'
				}
			}
		}
	}));

	/* 12. Ajustes no Resize da Janela */
	$(window).resize(function() {
		adjustStartedSectionHeight();
		var $skills_dotted = $('.skills-list.dotted .progress');
		if ($skills_dotted.length) {
			var skills_dotted_w = $skills_dotted.width();
			$skills_dotted.find('.percentage .da').css({'width': skills_dotted_w + 1});
		}
	});

	/* 13. Inicialização Visual das Skills */
	function initializeSkillsVisuals() {
		var $skills_dotted = $('.skills.dotted .progress');
		if ($skills_dotted.length && !$skills_dotted.find('.dg').length) {
			var skills_dotted_w = $skills_dotted.width();
			$skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			$skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
			$skills_dotted.find('.percentage .da').css({'width': skills_dotted_w});
		}

		var $skills_circles = $('.skills.circles .progress');
		if ($skills_circles.length && !$skills_circles.find('.slice').length) {
			$skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
		}
	}
	// A chamada foi movida para $(window).on('load', ...)

	/* 14. Compartilhamento Social (RRSSB) */
	if ($('.social-share').length && typeof $.fn.rrssb === 'function') {
		$('.social-share').rrssb({
			title: $('.social-share').data('title'),
			url: $('.social-share').data('url')
		});
	}

	/* 15. Lógica da Sidebar (Abrir/Fechar) */
	$('header').on('click', '.sidebar_btn', function(e) {
		e.preventDefault();
		$('.s_overlay').addClass('active');
		$('.content-sidebar').addClass('active');
		$('body').addClass('scroll_hidden');
	});

	function closeSidebar() {
		$('.s_overlay').removeClass('active');
		$('.content-sidebar').removeClass('active');
		$('body').removeClass('scroll_hidden');
	}

	$('.content-sidebar').on('click', '.close', function(e) {
		e.preventDefault();
		closeSidebar();
	});

	// Listener unificado para fechar overlay/menu/sidebar
	$('.s_overlay').on('click', function(e) {
		if (!$(e.target).hasClass('menu-btn') && !$(e.target).closest('.menu-btn').length) {
			if ($('.content-sidebar').hasClass('active')) {
				closeSidebar(); // Fecha a sidebar se ela estiver ativa
			} else if ($('header').hasClass('active')) {
				// Se a sidebar não está ativa, mas o header está (menu mobile), fecha o menu
				$('header').removeClass('active');
				$('.s_overlay').removeClass('active');
				$('body').removeClass('scroll_hidden');
			}
		}
	});

	$('.s_overlay').on('wheel', function(e) {
		var $sidebarScrollable = $('.content-sidebar .widget-area');
		if ($sidebarScrollable.length) {
			e.preventDefault();
			var currentScrollTop = $sidebarScrollable.scrollTop();
			$sidebarScrollable.scrollTop(currentScrollTop + e.originalEvent.deltaY);
		}
	});

	/* 16. Estilização de Títulos de Widgets */
	$('.widget-title').each(function() {
		if (!$(this).children('.widget-title-span').length) {
			$(this).wrapInner('<span class="widget-title-span"></span>');
		}
	});

	/* 17. Inicialização da Busca (SimpleJekyllSearch) */
	if ($('#search-input').length && $('#results-container').length && typeof SimpleJekyllSearch === 'function') {
		try {
			var sjs = SimpleJekyllSearch({
			  searchInput: document.getElementById('search-input'),
			  resultsContainer: document.getElementById('results-container'),
			  json: '/search.json',
			  searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
			  noResultsText: '<li>Nenhum resultado encontrado</li>'
			});
		} catch(e) {
			console.error("Erro ao inicializar SimpleJekyllSearch:", e);
			$('#results-container').html('<li>Erro ao carregar a busca.</li>');
		}
	}

	/* 18. Efeito Parallax (Hero Image) */
	$(window).on("scroll", function () {
		let scrollTop = $(this).scrollTop();
		let $heroImage = $(".hero-image.parallax");
		if ($heroImage.length) {
		  $heroImage.css('transform', `translateY(${scrollTop * 0.3}px)`);
		}
	});

	/* 19. Animação de Transição entre Páginas */
	$('header .top-menu a, .typed-bread a, .post-navigation a, .pagination a, .widget ul li a, .widget .tagcloud a')
	.not('.has-popup-gallery, .has-popup-media, .has-popup-image, .has-popup-video, .has-popup-music, .has-popup-writing, .has-popup-game, [href^="#"], [target="_blank"]')
	.on('click', function(e){
		var link = $(this).attr('href');

		if (link && link !== '#') { // Verifica se o link não é apenas '#'
			e.preventDefault();
			$('body').removeClass('loaded');
			setTimeout(function() {
				window.location.href = link;
			}, 500);
		}
	});

	// Tratamento especial para links de âncora na home page
	$('header .top-menu a[href^="#section-"]').on('click', function(e){
		if ($('body').hasClass('home')) {
			e.preventDefault();
			const targetSection = $(this).attr('href');
			const sectionElem = $(targetSection);
			if (sectionElem.length) {
				$('body, html').animate({ scrollTop: sectionElem.offset().top - 110 }, 400);
				if($('header').hasClass('active')){
					$('.menu-btn').trigger('click'); // Fecha o menu mobile
				}
			}
		}
		// Se não for a home page, deixa a animação de saída padrão tratar (irá recarregar a home)
	});

	// Remover o bloco duplicado de vanilla JS que estava aqui

}); // Fim do $(function() { ... });