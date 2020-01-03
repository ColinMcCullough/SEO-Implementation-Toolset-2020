const getHeaders = (vertical) => {
    const mfTableHeaders = `
        <div class="table-responsive lv-table">
            <div id="table" class="table-editable">
                <table class="table table-bordered table-responsive-sm table-striped text-center">
                    <thead>
                    <tr>
                        <th scope = "col" class="text-center">Brand Name</th>
                        <th scope = "col" class="text-center">USPS Val</th>
                        <th scope = "col" class="text-center">Address</th>
                        <th scope = "col" class="text-center">City</th>
                        <th scope = "col" class="text-center">State</th>
                        <th scope = "col" class="text-center">Zip</th>
                        <th scope = "col" class="text-center">Neighborhood</th>
                        <th scope = "col" class="text-center">Neighborhood 2</th>
                        <th scope = "col" class="text-center">Landmark</th>
                        <th scope = "col" class="text-center">Apartment Amenity</th>
                        <th scope = "col" class="text-center">Community Amenity</th>
                        <th scope = "col" class="text-center">Slug</th>
                        <th scope = "col" class="text-center">Strategy</th>
                        <th scope = "col" class="text-center">GMB</th>
                        <th scope = "col" class="text-center">GA</th>
                        <th scope = "col" class="text-center">Redirects</th>
                        <th scope = "col" class="text-center">Notes</th>
                        <th scope = "col" class="text-center">Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pt-3-half" contenteditable="true">Fun Zone Apartments</td>
                            <td class="pt-3-half" contenteditable="true">
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">No</a>
                                        <a class="dropdown-item" href="#">Yes</a>
                                    </div>
                                </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">12345 Fun St</td>
                            <td class="pt-3-half" contenteditable="true">Bend</td>
                            <td class="pt-3-half" contenteditable="true">OR</td>
                            <td class="pt-3-half" contenteditable="true">97702</td>
                            <td class="pt-3-half" contenteditable="true">West</td>
                            <td class="pt-3-half" contenteditable="true"></td>
                            <td class="pt-3-half" contenteditable="true">Drake Park</td>
                            <td class="pt-3-half" contenteditable="true">Air Conditioning</td>
                            <td class="pt-3-half" contenteditable="true">Garages</td>
                            <td class="pt-3-half" contenteditable="true">fun-zone</td>
                            <td class="pt-3-half" contenteditable="true">
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">MF Corp</a>
                                        <a class="dropdown-item" href="#">MF A</a>
                                        <a class="dropdown-item" href="#">MF B</a>
                                        <a class="dropdown-item" href="#">MF C</a>
                                    </div>
                                </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Requested</a>
                                        <a class="dropdown-item" href="#">Accessed</a>
                                        <a class="dropdown-item" href="#">Create New</a>
                                        <a class="dropdown-item" href="#">Unverified</a>
                                        <a class="dropdown-item" href="#">N/A LP</a>
                                    </div>
                                </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Requested</a>
                                        <a class="dropdown-item" href="#">Accessed</a>
                                        <a class="dropdown-item" href="#">Create New</a>
                                        <a class="dropdown-item" href="#">Use Current Domain</a>
                                    </div>
                                </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">No Redirects</a>
                                        <a class="dropdown-item" href="#">Same Domain</a>
                                        <a class="dropdown-item" href="#">Cross Domain</a>
                                        <a class="dropdown-item" href="#">Secure Naked Same Domain</a>
                                        <a class="dropdown-item" href="#">Secure Cross Domain</a>
                                    </div>
                                </div>
                            </td>
                            <td class="pt-3-half notes" contenteditable="true">
                                Existing Site:<br/>Former Brand Name:<br>Neighborhood:<br/>Landmark:<br/>Amenities
                            </td>
                            <td>
                            <span class="table-remove"><button type="button"
                                class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    const ssSlTableHeaders = `
        <div class="table-responsive lv-table">
            <div id="table" class="table-editable">
                <table class="table table-bordered table-responsive-sm table-striped text-center">
                    <thead>
                    <tr>
                        <th scope = "col" class="text-center">Brand Name</th>
                        <th scope = "col" class="text-center">USPS Val</th>
                        <th scope = "col" class="text-center">Address</th>
                        <th scope = "col" class="text-center">City</th>
                        <th scope = "col" class="text-center">State</th>
                        <th scope = "col" class="text-center">Zip</th>
                        <th scope = "col" class="text-center">Neighborhood</th>
                        <th scope = "col" class="text-center">Neighborhood 2</th>
                        <th scope = "col" class="text-center">Landmark</th>
                        <th scope = "col" class="text-center">Slug</th>
                        <th scope = "col" class="text-center">Strategy</th>
                        <th scope = "col" class="text-center">GMB</th>
                        <th scope = "col" class="text-center">GA</th>
                        <th scope = "col" class="text-center">Redirects</th>
                        <th scope = "col" class="text-center">Notes</th>
                        <th scope = "col" class="text-center">Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pt-3-half" contenteditable="true">Fun Zone Apartments</td>
                            <td class="pt-3-half" contenteditable="true">
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">No</a>
                                        <a class="dropdown-item" href="#">Yes</a>
                                    </div>
                                </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">12345 Fun St</td>
                            <td class="pt-3-half" contenteditable="true">Bend</td>
                            <td class="pt-3-half" contenteditable="true">OR</td>
                            <td class="pt-3-half" contenteditable="true">97702</td>
                            <td class="pt-3-half" contenteditable="true">West</td>
                            <td class="pt-3-half" contenteditable="true"></td>
                            <td class="pt-3-half" contenteditable="true">Garages</td>
                            <td class="pt-3-half" contenteditable="true">fun-zone</td>
                            <td class="pt-3-half" contenteditable="true">
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">SS Corp</a>
                                        <a class="dropdown-item" href="#">SS A</a>
                                        <a class="dropdown-item" href="#">SS B</a>
                                        <a class="dropdown-item" href="#">SS C</a>
                                    </div>
                                </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Requested</a>
                                        <a class="dropdown-item" href="#">Accessed</a>
                                        <a class="dropdown-item" href="#">Create New</a>
                                        <a class="dropdown-item" href="#">Unverified</a>
                                        <a class="dropdown-item" href="#">N/A LP</a>
                                    </div>
                                </div>
                            </td>
                            <td class="pt-3-half" contenteditable="true">
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Requested</a>
                                        <a class="dropdown-item" href="#">Accessed</a>
                                        <a class="dropdown-item" href="#">Create New</a>
                                        <a class="dropdown-item" href="#">Use Current Domain</a>
                                    </div>
                                </div>
                            </td>
                            <td class="pt-3-half" >
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">No Redirects</a>
                                        <a class="dropdown-item" href="#">Same Domain</a>
                                        <a class="dropdown-item" href="#">Cross Domain</a>
                                        <a class="dropdown-item" href="#">Secure Naked Same Domain</a>
                                        <a class="dropdown-item" href="#">Secure Cross Domain</a>
                                    </div>
                                </div>
                            </td>
                            <td class="pt-3-half notes" contenteditable="true">
                                Existing Site:<br/>Former Brand Name:<br>Neighborhood:<br/>Landmark:
                            <td>
                            <span class="table-remove"><button type="button"
                                class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    return vertical === 'mf' ? mfTableHeaders : ssSlTableHeaders;
}