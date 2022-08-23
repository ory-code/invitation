$(document).ready(function()
{
  $('#plus-info').click(function()
  {
    
    $('#more-content').toggleClass('shown');

    $('#plus-info').hide();

    if( $('#more-content').hasClass('shown') )
    {
      $('#plus-info').text(`Ce sera tout merci Alfred`);
      $('#more-content').fadeIn('slow', function()
      {
        $('#plus-info').fadeIn('slow');
      });
    }
    else
    {
      $('#plus-info').text(`Alfred j'aurais besoin de quelque information s'il vous plaît`);
      $('#more-content').fadeOut('slow', function()
      {
        $('#plus-info').fadeIn('slow');
      });
    }
  });
});