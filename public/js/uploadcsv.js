$("#upload-csv-btn").on('click', function() { openCSVModal() });

	const openCSVModal = () => {
	if (requiredCSVFieldsSelected()) {
		$('#uploadcsv').modal('toggle');
	} 
	else {
		$('#error-modal').modal('toggle');
		$('#modal-error-mess').text('Please ensure the vertical, domain strategy, and chain branding drop downs have been selected')
	}
}

function handleFileSelect(evt) {
  const file = evt.target.files[0];
  Papa.parse(file, {
	header: true,
	dynamicTyping: true,
	complete: function(results) {
		buildSeoTable(results)
	}
  });
}

$(document).ready(function(){
  $("#csv-file").change(handleFileSelect);
});

const buildSeoTable = (data) => {
	//code below sends data to back end
	//socket.emit('csv', results)
}

//returns true if vertical, domainstrat, and chain branidng drop downs have selections
const requiredCSVFieldsSelected = () => {
	return getVertical() && getDomainStrat() && getChainBranding() ?
			true : false;
}

const getVertical = () => {
	return $("select[id='vertical']").val();
}

const getDomainStrat = () => {
	return $("select[id='domain-strat']").val();
}

const getChainBranding = () => {
	return $("select[id='chain-brand']").val();
}