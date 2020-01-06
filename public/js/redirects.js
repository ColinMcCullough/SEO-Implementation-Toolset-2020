$("#format-redirects").on('click', function() {
    const locName = $("select[id='select-location']").val();
    const strategy = $("select[id='redirect-menu']").val();
    const redirects = $('#redirects-text').val()
    if (!(checkRedirectState(locName,strategy,redirects))) {
        window.alert('Select a location, strategy and enter redirects before continuing')
    }
    else {
        const tablehtml = generateRedirectTable(locName,strategy,redirects)
        $(".redirects-table-head").after( tablehtml )
    }
  });

//checks to make sure location, strategy & redirects entered
const checkRedirectState = (name,dropDown,text) => {
    return name && dropDown && text ? true : false;   
}

//generates redirects table
const generateRedirectTable = (name, strategy, redirects) => {
    //filters falsy values, removes duplicates
    const array = redirects.split(/\n|,/g);
    const redirectsArr = array.filter((item,index) => array.indexOf(item) === index)
                            .filter(item => Boolean(item.trim()));
    return buildTableHtml(redirectsArr,strategy,name)

}

const buildTableHtml = (arr,strategy,name) => {
    let table = ``
    arr.forEach((redirect) => {
        table += tblrow(name,redirect)
    })
    return table;
}

const tblrow = (name,url,strategy) => {
    return `
        <tbody>
            <tr>
                <td class="pt-3-half" contenteditable="true" id="name">${name}</td>
                <td class="pt-3-half" contenteditable="true">
                    <select id="strat" class="form-control form-control-lg" >
                        <option value="same-dom">Same Domain</option>
                        <option value="cross-dom">Cross Domain</option>
                        <option value="sec-cross-dom">Secure Cross Domain</option>
                        <option value="sec-naked" >Secure Naked - Same Domain</option>
                        <option value="no-redirects">No Redirects</option>
                    </select>
                </td>
                <td class="pt-3-half" contenteditable="true" id="current-url">${url}</td>
                <td class="pt-3-half" contenteditable="true" id="cloud-formatted"></td>
                <td class="pt-3-half" contenteditable="true">
                    <select id="wildcard-stat" class="form-control form-control-lg" >
                        <option value="same-dom">Yes</option>
                        <option value="cross-dom">No</option>
                    </select>
                </td>
                <td class="pt-3-half" contenteditable="true" id="status-code"></td>
                <td class="pt-3-half" contenteditable="true" id="redirects-to"></td>
                <td>
                    <span class="table-remove">
                        <button type="button" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button>
                    </span>
                </td>
            </tr>
        </tbody>`
    }