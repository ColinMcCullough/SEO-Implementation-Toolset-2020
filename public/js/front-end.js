//update amenity text fields based on vertical
$("select[id='vertical']").change( function() {
  const vertical = $(this).val()
  const toggleCols = $('.amenity-keywords-col,.amenity-phrases-col');
  if(vertical) {
    if(vertical === 'mf' && toggleCols.is(":hidden")) {
      $('.amenity-keywords-col,.amenity-phrases-col').toggle();
    } 
    else if(vertical != 'mf' && toggleCols.is(":visible")){
      $('.amenity-keywords-col,.amenity-phrases-col').hide();
    }
  }
  
});

//Event handler to delete table row
const addDeleteEventHndlr = () => {
  $('.table-remove').on('click', function () {
    $(this).parents('tr').detach();
  });
}

$( "#locations" ).change(function() {
  //stepper hidden and valid selection
  if( $(this).children("option:selected").val()) {
    if($('.stepper-container').is(":hidden"))
      $('.stepper-container').toggleClass('d-none');
      showWizard()
  } 
  else {
    //stepper visible and invalid selection
    if($('.stepper-container').is(":visible"))
      $('.stepper-container').toggleClass('d-none');
  }
});

const showWizard = () => {
  $('#stepwizard').smartWizard({
    theme: 'arrows',
    transition: 'fade',
    transitionSpeed: '400',
    toolbarSettings: {
      toolbarPosition: 'top'
    }
  });
}

$("#stepwizard").on("leaveStep", function (e, anchorObject, stepNumber, stepDirection) {
  let valid = true;
  const elmForm = $("#form-step-" + stepNumber).find('.col');
  if (stepDirection === 'forward' && elmForm) {
    elmForm.validator('validate');
    const elmErr = elmForm.children('.has-error');
    if (elmErr && elmErr.length > 0) {
      // Form validation failed
      valid = false;
    }
  }
  return valid;
});