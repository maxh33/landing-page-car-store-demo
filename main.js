$(document).ready(function() {
    $('#imgSlick').slick({
      autoplay: true
    });

    $('.hamburgerMenu').click(function(){
      $('nav').slideToggle();
    })

    $('#phone').mask('(00) 00000-0000')

    $('form').validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true
        },
        gotInterest: {
          required: false
        },
        message: {
          required: true
        }
      },
      messages: {
        name: 'Por favor, insira o seu nome corretamente',
        email: 'Por favor, insira um email válido',
        phone: 'Por favor, insira um telefone válido',
        message: 'Por favor, insira uma mensagem'
      },
      submitHandler: function(form) {
        alert('Formulário enviado com sucesso!')
      },
      invalidHandler: function(event, validator) {
        alert('Por favor, preencha todos os campos corretamente!')
      }
    })

    $('.hamburgerMenu').on('click', 'a', function() {
      const destine = $($(this).attr('href'));

      $('html, body').animate({
        scrollTop: destine.offset().top
      }, 1000, function() {
        $('nav').slideUp();
      });
    });
});
$('.vehicleList button').click(function(){
  const destine = $('#contactForm');
  const vehicleName = ($(this).parent().find('h3').text());

  $('#gotInterest').val(vehicleName);

  $('html, body').animate({
    scrollTop: destine.offset().top
  }, 1000, function() {
    $('nav').slideUp();
  });
});
