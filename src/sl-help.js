import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class SLHelp extends PolymerElement {
    static get template() {
        return html`
        <div class="SLHelp">
            <h1>Pomoc</h1>
            <ol>
                <li>O aplikacji</li>
                <p>Aplikacja powstaje w ramach chellengu <a href="https://www.lastminute.com" target="_blank">lastminute.com</a></p>
                <li>Jak używać</li>
            </ol>
        </div>`;
    }
}

window.customElements.define('sl-help', SLHelp);