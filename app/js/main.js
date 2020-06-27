$(function () {

	$('.about__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow: '<i class="icon-chevron-left slider-arrow__left"></i>',
		nextArrow: '<i class="icon-chevron-right slider-arrow__right"></i>',
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					variableWidth: true,
					centerMode: true,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					variableWidth: true,
					centerMode: true,
					arrows: false
				}
			}
		]
	});

	$('.mobile-slider').slick({
		slidesToShow: 2,
		variableWidth: true,
		slidesToScroll: 1,
		arrows: false

	});


	$('.works-content .works-content__btn').on('click', function () {
		let id = $(this).attr('data-id');

		$('.works-content').find('.works-content__items').removeClass('active').hide();
		$('.works-content').find('.works-content__btn').removeClass('active');

		$(this).addClass('active');

		$('#' + id).addClass('active').fadeIn();
		return false;
	});


	$('.works__mobile .works-content__btn').on('click', function () {
		let id = $(this).attr('data-name');

		$('.works__mobile').find('.works-content__items .mobile-slider').removeClass('active').hide();
		$('.works__mobile').find('.works-content__btn').removeClass('active');

		$(this).addClass('active');

		$('#' + id).addClass('active').fadeIn();
		return false;
	});


	$('.review-slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1500,
		autoplay: true,
	});


	$('.header__button').on('click', function () {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active').slideDown('600');
	});


	$("[data-scroll]").on('click', function () {
		event.preventDefault();

		let elementId = $(this).data('scroll');

		let elementOffset = $(elementId).offset().top;


		$("html, body").animate({
			scrollTop: elementOffset

		},
			700
		);
	});


	let menu = $('.header__top');
	let header = $('#top');
	let headerH = header.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on('scroll load resize', function () {
		headerH = header.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > headerH) {
			menu.addClass('fixed');

		} else { menu.removeClass('fixed'); }

	});


	$('.menu__line').on('click', function () {

		$('.menu').removeClass('active');
		$('.header__button').removeClass('active');
		$('.menu__list').find('.menu__line').removeClass('active');

		$(this).addClass('active');
	});

});