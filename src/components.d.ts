/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import 'ionicons';


import {
  AdminNew as AdminNew
} from './pages/admin-page/admin-new';

declare global {
  interface HTMLAdminNewElement extends AdminNew, HTMLElement {
  }
  var HTMLAdminNewElement: {
    prototype: HTMLAdminNewElement;
    new (): HTMLAdminNewElement;
  };
  interface HTMLElementTagNameMap {
    "admin-new": HTMLAdminNewElement;
  }
  interface ElementTagNameMap {
    "admin-new": HTMLAdminNewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "admin-new": JSXElements.AdminNewAttributes;
    }
  }
  namespace JSXElements {
    export interface AdminNewAttributes extends HTMLAttributes {
      
    }
  }
}

