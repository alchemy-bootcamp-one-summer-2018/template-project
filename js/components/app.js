import html from '/js/html.js';
import examplesApi from '../services/examples-api.js';
import Example from './example.js';


let template = function() {
    return html`
        <header>
            <h1>Demo Project</h1>
        </header>

        <main>
            <h2>Examples</h2>
            <ul></ul>
        </main>
    `;
};

export default class App {
    render() {
        let dom = template();
        let ul = dom.querySelector('ul');
        
        let examples = examplesApi.get();
        for(let i = 0; i < examples.length; i++) {
            let example = new Example({
                example: examples[i]
            });
    
            ul.appendChild(example.render());
        }
        
        return dom;
    }
}