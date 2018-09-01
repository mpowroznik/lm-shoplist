import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import './shared-styles.js';

class SLView extends PolymerElement {
    static get template() {
        return html`
        <div class="SLView">
            <h1>Lista zakupów</h1>
            <ul>
                <paper-checkbox> pomidory</paper-checkbox>
                <paper-checkbox> bułki</paper-checkbox>
            </ul>
        </div>`;
    }
}

window.customElements.define('sl-view', SLView);