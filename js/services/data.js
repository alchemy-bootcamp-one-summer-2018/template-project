// load data "at the start"
let stored = window.localStorage.getItem('data');

let data;
// did we find something?
if(stored && stored !== 'undefined') {
    // the turn json into data with "parse"
    data = JSON.parse(stored);
}
else {
    // initialize to an empty object (dictionary)
    data = {};
}

// make accessible (export the data object).
// other services files will read and store data
// as a "property" of data 
export default data;

// save data "at the end",
// special browser event for when window is about to unload
window.addEventListener('beforeunload', () => {
    // turn data back into a string (of json)
    let json = JSON.stringify(data);
    console.log('window unload, json is', json);
    // store in localStorage
    window.localStorage.setItem('data', json);
});

// handy function for resetting data, in the console, type:
// > resetData() 
window.resetData = function() {
    window.localStorage.removeItem('data');
    data = undefined;
    window.location.reload();
};