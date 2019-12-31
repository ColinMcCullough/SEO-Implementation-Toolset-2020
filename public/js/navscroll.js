$('#dropdownMenuButton').click(function(){
  $('.dropdown-item').click(function(){
    $('#dropdownMenuButton').text($(this).text());
    $('#dropdownMenuButton').val($(this).val());
  });
});