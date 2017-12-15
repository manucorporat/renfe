/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import 'ionicons';


import {
  AdminDelete as AdminDelete
} from './pages/admin-page/admin-delete';

declare global {
  interface HTMLAdminDeleteElement extends AdminDelete, HTMLElement {
  }
  var HTMLAdminDeleteElement: {
    prototype: HTMLAdminDeleteElement;
    new (): HTMLAdminDeleteElement;
  };
  interface HTMLElementTagNameMap {
    "admin-delete": HTMLAdminDeleteElement;
  }
  interface ElementTagNameMap {
    "admin-delete": HTMLAdminDeleteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "admin-delete": JSXElements.AdminDeleteAttributes;
    }
  }
  namespace JSXElements {
    export interface AdminDeleteAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  ResultsPage as ResultsPage
} from './pages/results-page/results-page';

declare global {
  interface HTMLResultsPageElement extends ResultsPage, HTMLElement {
  }
  var HTMLResultsPageElement: {
    prototype: HTMLResultsPageElement;
    new (): HTMLResultsPageElement;
  };
  interface HTMLElementTagNameMap {
    "results-page": HTMLResultsPageElement;
  }
  interface ElementTagNameMap {
    "results-page": HTMLResultsPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "results-page": JSXElements.ResultsPageAttributes;
    }
  }
  namespace JSXElements {
    export interface ResultsPageAttributes extends HTMLAttributes {
      
    }
  }
}

