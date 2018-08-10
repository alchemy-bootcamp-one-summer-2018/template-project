import data from './data.js';

// default data initialization
function createChannels() {
    return [{
        name: 'html.js',
        description: 'function for turing template literal into DOM'
    }, {
        name: 'data.js',
        description: 'persistent, localStorage based data store',
    }, {
        name: 'examples-api.js',
        description: 'api pattern for reading and storing data',
    }, {
        name: 'app.js',
        description: 'top-level app component'
    }, {
        name: 'example.js',
        description: 'child component used many times by app'
    }];
}

// create if does not exist
if(!data.examples) {
    data.examples = createChannels();
}

// these are the api methods used by components 
// to work with this data
export default {
    get: function() {
        return data.examples;
    }
};