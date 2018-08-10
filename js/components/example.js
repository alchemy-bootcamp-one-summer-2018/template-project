import html from '/js/html.js';

let template = function(example) {
    return html`
        <li>
            <h3>${example.name}</h3>
            <p>${example.description}</p>
        </li>
    `;
};

export default class Example {
    constructor(props) {
        this.example = props.example;
    }

    render() {
        let dom = template(this.example);
        return dom;
    }
}