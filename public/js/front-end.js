let vertical = $("select[id='vertical']")
let domainStrat = $("select[id='domain-strat']")
let chainBranding = $("select[id='chain-brand']")


//insert table headers based on vertical selection
$("select[id='vertical']").change( function() {
  const vertical = $(this).val()
  //remove table if it exists when changing vertical selection
  if($(".lv-table")) { $(".lv-table").remove()} 
  $( "#lv-header" ).after( getHeaders( vertical ) )
  
  //Event handler to delete table row in seo lv table
  $('#table').on('click', '.table-remove', function () {
    $(this).parents('tr').detach();
  });
  
  //Change Display from Drop downs on selection
  $(".dropdown-menu").on('click', 'a', function(){
    $(this).parents('.dropdown').find('button').text($(this).text());
  });
});


