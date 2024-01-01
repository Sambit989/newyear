$(document).ready(function () {

  function handleFormSubmission(event) {
      event.preventDefault(); 
      var userName = $('#myName').val();
      if (userName.trim() !== '') {
          $('#prompt').addClass('hidden');
          $('#result').removeClass('hidden');
          $('#nameToDisplay').text('Hello, ' + userName + '');
      }
  }
  $('form').submit(handleFormSubmission);
});