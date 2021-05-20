//humburger-menu
$(".burger-btn").on("click", function () {
	$(".header-nav").fadeToggle(300);
	$(".burger-btn").toggleClass("cross");
	$("body").toggleClass("noscroll");
});
//  リンク内ジャンプ時のずれ  //
jQuery(function () {
	var headerHight = 94;
	jQuery("a").click(function () {
		var speed = 50;
		var href = jQuery(this).attr("href");
		var target = jQuery(href == "#" || href == "" ? "html" : href);
		var position = target.offset().top - headerHight;
		jQuery("body,html").animate({ scrollTop: position }, speed, "swing");
		return false;
	});
});
//  aos  //
AOS.init({
	duration: 500,
	easing: "ease",
	delay: 100,
	once: "true",
});
//  swiper //
const swiper = new Swiper(".swiper-container", {
	autoplay: {
		delay: 5000,
	},
	loop: true,
	spaceBetween: 20,
	slidesPerView: 1.5,
	centeredSlides: true,
	breakpoints: {
		// 768px以上の場合
		600: {
			spaceBetween: 20,
			slidesPerView: 3,
		},
		1025: {
			slidesPerView: 4,
		},
	},
});

// accordion //
$(function () {
	$(".js-accordion-question").on("click", function () {
		$(this).next().slideToggle("copen");
	});
});

// form バリデーション //

$(document).ready(function () {
	const $submitBtn = $("#submit_btn");
	$("#form input, #form textarea").on("change", function () {
		if (
			$("#your_name").val() !== "" &&
			$("#your_email").val() !== "" &&
			$("#your_contact").val() !== "" &&
			$("#your_check").prop("checked") === true
		) {
			$submitBtn.prop("disabled", false);
			// $submitBtn.css({ opacity: "1", cursor: "pointer" });
		} else {
			$submitBtn.prop("disabled", true);
			// $submitBtn.css("cursor", "not-allowed");
		}
	});
});

//  googleform
$(document).ready(function () {
	$("#form").submit(function (event) {
		var formData = $("#form").serialize();
		$.ajax({
			url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScMIsAe3s8LyqFdykKumm_41Uc2CnaKC5347UKQYzKBIfDNMQ/formRespons",
			data: formData,
			type: "POST",
			dataType: "xml",
			statusCode: {
				0: function () {
					$(".end-message").slideDown();
					$("#submit_btn").fadeOut();
					//window.location.href = "thanks.html";
				},
				200: function () {
					$(".false-message").slideDown();
				},
			},
		});
		event.preventDefault();
	});
});
