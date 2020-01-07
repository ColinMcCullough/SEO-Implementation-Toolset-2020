$("#format-redirects").on('click', function() { buildRedirectTable() });

const buildRedirectTable = () => {
    const locName = $("select[id='select-location']").val();
    const strategy = $("select[id='redirect-menu']").val();
    const redirects = $('#redirects-text').val()
    if (!(checkRedirectState(locName,strategy,redirects))) {
        window.alert('Select a location, strategy and enter redirects before continuing')
    }
    else {
        const existingNumRows = $('.redirects-table-body tr').length;
        const tablehtml = generateRedirectTable(locName,strategy,redirects);
        $(".redirects-table-body").append( tablehtml );
        //loops through all rows if no rows initially
        if(existingNumRows === 0) {
            $('.redirects-table-body tr').each(function (i, row) {
                $(row).find(`#${strategy}`).prop('selected',true)
            })
        //loops through newly added rows existing rows in table
        } else {
            $(`.redirects-table-body tr:gt(${existingNumRows-1})`).each(function (i, row) {
                $(row).find(`#${strategy}`).prop('selected',true);
            });
        }
        addDeleteEventHndlr();
    }
}

//checks to make sure location, strategy & redirects entered
const checkRedirectState = (name,dropDown,text) => {
    return name && dropDown && text ? true : false;   
}

//generates redirects table
const generateRedirectTable = (name, strategy, redirects) => {
    //filters falsy values, removes duplicates
    const array = redirects.split(/\n|,/g);
    const redirectsArr = array.filter((item,index) => array.indexOf(item) === index)
                            .filter(item => Boolean(item.trim())); //need to filter out redirects that have image files
    return buildHtmlTable(redirectsArr,strategy,name)
}

//builds string of all rows
const buildHtmlTable = (arr,strategy,name) => {
    let table = ``
    arr.forEach((redirect) => {
        const cloudRedirect = formatRedirect(strategy,redirect)
        table += tblrow(name,redirect,cloudRedirect)
    })
    return table;
}

//formats redirects
const formatRedirect = (strategy,redirect) => {
    let formatted = 'N/A'
    if(strategy === 'same-dom' && validURL(redirect)) {
        formatted = redirect.split(/\.com\/|\.com|\.net\/|\.org\/|\.co\//)[1]     //strips everthing left of the TLD (ex: www.myapartments.com/units -> units)
        .split(/\.html|[?]/)[0];                //strips everything to the right of .html or ? 
        formatted.substr(-1) === '/' ? formatted.pop() : '';
        formatted = formatted.replace(/%20|\s/g,'\\s')
            .replace(/[[\]{}()*+?.,^$|#]/g, '\\$&')            //escapes special characters with \
            .replace(/\/\//g,'/+')                               //replaces // with /+
            .replace(/%5B|%5b/g,'\\[')                                   
            .replace(/%5D|%5d/g,'\\]')
            .replace(/%7C/g,'\\|');   
        formatted = formatted.length === 1 ? `[${formatted}]` : `${formatted}$`                 
    }
    return formatted
}

//checks for a valid url
const validURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

const tblrow = (name,url,redirect) => {
    return `
        <tr>
            <td class="pt-3-half" contenteditable="true" id="name">${name}</td>
            <td class="pt-3-half" contenteditable="true">
                <select id="strat" class="form-control form-control-md >
                    <option id="" select>Select Strategy</option>
                    <option id="same-dom">Same Domain</option>
                    <option id="cross-dom">Cross Domain</option>
                    <option id="sec-cross-dom">Secure Cross Domain</option>
                    <option id="sec-naked" >Secure Naked - Same Domain</option>
                    <option id="no-redirects">No Redirects</option>
                </select>
            </td>
            <td class="pt-3-half" contenteditable="true" id="current-url">${url}</td>
            <td class="pt-3-half" contenteditable="true" id="cloud-formatted">${redirect}</td>
            <td class="pt-3-half" contenteditable="true">
                <select id="wildcard-stat" class="form-control form-control-md" >
                    <option >No</option>
                    <option >Yes</option>
                </select>
            </td>
            <td class="pt-3-half" contenteditable="true" id="status-code"></td>
            <td class="pt-3-half" contenteditable="true" id="redirects-to"></td>
            <td>
            <span class="table-remove"><button type="button"
                class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
            </td>
        </tr>
    `
}
