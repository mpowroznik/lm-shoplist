import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class SLView extends PolymerElement {
    static get template() {
        return html`
        <div class="SLView">
            <h1>Lista zakupów</h1>
            <ul>
                <li>pomidory</li>
                <li>bułki</li>
            </ul>
        </div>`;
    }
}

window.customElements.define('sl-view', SLView);