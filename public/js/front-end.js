let vertical = $("select[id='vertical']")
let domainStrat = $("select[id='domain-strat']")
let chainBranding = $("select[id='chain-brand']")

//insert table headers based on vertical selection
$("select[id='vertical']").change( function() {
  const vertical = $(this).val()
  //updates table id to match vertical
  if($(".lv-table").attr('id') !== vertical) { 
    $(".lv-table").attr('id', vertical)
    //removes/adds amenity col and amenity text field based on vertial
    if(vertical != 'mf') {
      $('#apt-amen,#com-amen,.amenity-keywords-col,.amenity-phrases-col').hide();
    } else {
      $('#apt-amen,#com-amen,.amenity-keywords-col,.amenity-phrases-col').toggle();
    }
  }
});

/////Table row functions, will need to be moved eventually
//Event handler to delete table row in seo lv table
$('#table').on('click', '.table-remove', function () {
  $(this).parents('tr').detach();
});
//Change Display from table row Drop downs on selection
$(".dropdown-menu").on('click', 'a', function(){
  $(this).parents('.dropdown').find('button').text($(this).text());
});



