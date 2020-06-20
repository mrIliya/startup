$(function () {

	$('.about__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow: '<i class="icon-chevron-left slider-arrow__left"></i>',
		nextArrow: '<i class="icon-chevron-right slider-arrow__right"></i>',
	});


	$('.works-content .works-content__btn').on('click', function () {
		let id = $(this).attr('data-id');

		$('.works-content').find('.works-content__items').removeClass('active').hide();
		$('.works-content').find('.works-content__btn').removeClass('active');

		$(this).addClass('active');

		$('#' + id).addClass('active').fadeIn();
		return false;
	});


	$('.review-slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000
	});
});