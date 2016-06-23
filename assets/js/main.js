$(function() {

	$("#btn_menu").click(function(event) {
		$("#nav_small").toggle('slow');
	});

	/* 	Efecto Hover
	================================================================*/

	$('#inicio').hover(
		function dentro() {
			$('#esp_1').css('background-color' , '#519BDA');
			$('#esp_1').css('transition' , '0.3s');
			$('#inicio').css('color' , '#519BDA');
		},
		function fuera() {
			$('#esp_1').css('background-color' , '#70001A');
			$('#esp_1').css('transition' , '0.3s');
			$('#inicio').css('color' , '#6E6E70');
		}
	);

	$('#iced').hover(
		function dentro() {
			$('#esp_2').css('background-color' , '#519BDA');
			$('#esp_2').css('transition' , '0.3s');
			$('#sub_iced').removeClass('hidden');
			$('#iced').css('color' , '#519BDA');
		},
		function fuera() {
			$('#esp_2').css('background-color' , '#70001A');
			$('#esp_2').css('transition' , '0.3s');
			$('#sub_iced').addClass('hidden');
			$('#iced').css('color' , '#6E6E70');
		}
	);

	$('#posgrado').hover(
		function dentro() {
			$('#esp_3').css('background-color' , '#519BDA');
			$('#esp_3').css('transition' , '0.3s');
			$('#sub_pos').removeClass('hidden');
			$('#posgrado').css('color' , '#519BDA');
		},
		function fuera() {
			$('#esp_3').css('background-color' , '#70001A');
			$('#esp_3').css('transition' , '0.3s');
			$('#sub_pos').addClass('hidden');
			$('#posgrado').css('color' , '#6E6E70');
		}
	);

	$('#diplomados').hover(
		function dentro() {
			$('#esp_4').css('background-color' , '#519BDA');
			$('#esp_4').css('transition' , '0.3s');
			$('#sub_diplomados').removeClass('hidden');
			$('#diplomados').css('color' , '#519BDA');
		},
		function fuera() {
			$('#esp_4').css('background-color' , '#70001A');
			$('#esp_4').css('transition' , '0.3s');
			$('#sub_diplomados').addClass('hidden');
			$('#diplomados').css('color' , '#6E6E70');
		}
	);

	$('#seminarios').hover(
		function dentro() {
			$('#esp_5').css('background-color' , '#519BDA');
			$('#esp_5').css('transition' , '0.3s');
			$('#seminarios').css('color' , '#519BDA');
		},
		function fuera() {
			$('#esp_5').css('background-color' , '#70001A');
			$('#esp_5').css('transition' , '0.3s');
			$('#seminarios').css('color' , '#6E6E70');
		}
	);

	$('#publicaciones').hover(
		function dentro() {
			$('#esp_6').css('background-color' , '#519BDA');
			$('#esp_6').css('transition' , '0.3s');
			$('#sub_publicaciones').removeClass('hidden');
			$('#publicaciones').css('color' , '#519BDA');
		},
		function fuera() {
			$('#esp_6').css('background-color' , '#70001A');
			$('#esp_6').css('transition' , '0.3s');
			$('#sub_publicaciones').addClass('hidden');
			$('#publicaciones').css('color' , '#6E6E70');
		}
	);

	/* 	Efecto Sub-Menu
	================================================================*/

	$('#sub_iced').hover(
		function dentro() {
			$('#esp_2').css('background-color' , '#519BDA');
			$('#esp_2').css('transition' , '0.3s');
			$('#sub_iced').removeClass('hidden');
			$('#iced').css('color' , '#519BDA');
		},
		function fuera() {
			$('#esp_2').css('background-color' , '#70001A');
			$('#esp_2').css('transition' , '0.3s');
			$('#sub_iced').addClass('hidden');
			$('#iced').css('color' , '#6E6E70');
		}
	);

		/* Efecto Sub_menu de investigaciones
   		   ––––––––––––––––––––––––––––––––––––––––––– */

		$('#investigaciones').hover(
			function dentro() {
				$('#sub_investigaciones').removeClass('hidden');
				$('#investigaciones').css('color' , '#519BDA');
			},
			function fuera() {
				$('#sub_investigaciones').addClass('hidden');
				$('#investigaciones').css('color' , '#6E6E70');
			}
		);

		$('#sub_investigaciones').hover(
			function dentro() {
				$('#sub_investigaciones').removeClass('hidden');
				$('#sub_investigaciones').css('color' , '#519BDA');
			},
			function fuera() {
				$('#sub_investigaciones').addClass('hidden');
				$('#sub_investigaciones').css('color' , '#6E6E70');
			}
		);

		/* Fin Sub_menu de investigaciones
   		   ––––––––––––––––––––––––––––––––––––––––––– */

		/* Efecto Sub_menu de egresados
   		   ––––––––––––––––––––––––––––––––––––––––––– */

		$('#egresados').hover(
			function dentro() {
				$('#sub_egresados').removeClass('hidden');
				$('#egresados').css('color' , '#519BDA');
			},
			function fuera() {
				$('#sub_egresados').addClass('hidden');
				$('#egresados').css('color' , '#6E6E70');
			}
		);

		$('#sub_egresados').hover(
			function dentro() {
				$('#sub_egresados').removeClass('hidden');
				$('#sub_egresados').css('color' , '#519BDA');
			},
			function fuera() {
				$('#sub_egresados').addClass('hidden');
				$('#sub_egresados').css('color' , '#6E6E70');
			}
		);

		/* Fin Sub_menu de egresados
   		   ––––––––––––––––––––––––––––––––––––––––––– */


	$('#sub_pos').hover(
		function dentro() {
			$('#esp_3').css('background-color' , '#519BDA');
			$('#esp_3').css('transition' , '0.3s');
			$('#sub_pos').removeClass('hidden');
			$('#posgrado').css('color' , '#519BDA');
		},
		function fuera() {
			$('#esp_3').css('background-color' , '#70001A');
			$('#esp_3').css('transition' , '0.3s');
			$('#sub_pos').addClass('hidden');
			$('#posgrado').css('color' , '#6E6E70');
		}
	);

	$('#sub_diplomados').hover(
		function dentro() {
			$('#esp_4').css('background-color' , '#519BDA');
			$('#esp_4').css('transition' , '0.3s');
			$('#sub_diplomados').removeClass('hidden');
			$('#diplomados').css('color' , '#519BDA');
		},
		function fuera() {
			$('#esp_4').css('background-color' , '#70001A');
			$('#esp_4').css('transition' , '0.3s');
			$('#sub_diplomados').addClass('hidden');
			$('#diplomados').css('color' , '#6E6E70');
		}
	);

	$('#sub_publicaciones').hover(
		function dentro() {
			$('#esp_6').css('background-color' , '#519BDA');
			$('#esp_6').css('transition' , '0.3s');
			$('#sub_publicaciones').removeClass('hidden');
			$('#publicaciones').css('color' , '#519BDA');
		},
		function fuera() {
			$('#esp_6').css('background-color' , '#70001A');
			$('#esp_6').css('transition' , '0.3s');
			$('#sub_publicaciones').addClass('hidden');
			$('#publicaciones').css('color' , '#6E6E70');
		}
	);

});
