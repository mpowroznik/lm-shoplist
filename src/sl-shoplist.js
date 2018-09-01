import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import './shared-styles.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

class SLView extends PolymerElement {
    static get template() {
        return html`
        <div class="SLView">
            <h1>Lista zakupów</h1>
            <ul>
                <template is="dom-repeat" items="{{shoppinglist}}">
                    <li>[[item.sl]]</li>
                </template>
            </ul>
        </div>`;
    }
    static get properties() {
        return {
            shoppinglist:{
                type: Array,
                value() {
                    return [
                        {sl: 'bułki'},
                        {sl: 'mleko'}
                    ]
                }
            }
        }
    }
}

window.customElements.define('sl-view', SLView);