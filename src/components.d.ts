/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Journey, Person } from "./pages/results-page/results-page";
export namespace Components {
    interface AdminDelete {
    }
    interface AdminEdit {
    }
    interface AdminNew {
    }
    interface AdminPage {
        "history": any;
        "match": any;
    }
    interface CalendarWidget {
        "day": number;
        "includeLegend": boolean;
        "locales": string;
        "month": number;
        "year": number;
    }
    interface HomePage {
    }
    interface LoginPage {
        "history": any;
    }
    interface MainButton {
        "description": string;
        "icon": string;
        "title": string;
    }
    interface RenfeFooter {
    }
    interface RenfeHeader {
        "background": boolean;
    }
    interface RenfeJumbo {
    }
    interface ResultsFinish {
        "arrival": Journey;
        "departure": Journey;
        "people": Person[];
    }
    interface ResultsNav {
        "buttons": string[];
        "current": number;
        "valid": number;
    }
    interface ResultsPage {
    }
    interface ResultsPeople {
        "people": Person[];
    }
    interface ResultsTable {
        "cityA": string;
        "cityB": string;
        "data": Journey[];
        "reversed": boolean;
        "selected": Journey;
    }
    interface RootPage {
    }
    interface SearchWidget {
        "arrival": string;
        "cityA": string;
        "cityB": string;
        "departure": string;
        "people": string;
    }
    interface TypeWritter {
        "addLatency": number;
        "emptyDelay": number;
        "finishDelay": number;
        "rmLatency": number;
        "sentences": string[];
        "start": () => Promise<void>;
        "text": string;
    }
    interface WeatherContainer {
        "city": string;
    }
}
declare global {
    interface HTMLAdminDeleteElement extends Components.AdminDelete, HTMLStencilElement {
    }
    var HTMLAdminDeleteElement: {
        prototype: HTMLAdminDeleteElement;
        new (): HTMLAdminDeleteElement;
    };
    interface HTMLAdminEditElement extends Components.AdminEdit, HTMLStencilElement {
    }
    var HTMLAdminEditElement: {
        prototype: HTMLAdminEditElement;
        new (): HTMLAdminEditElement;
    };
    interface HTMLAdminNewElement extends Components.AdminNew, HTMLStencilElement {
    }
    var HTMLAdminNewElement: {
        prototype: HTMLAdminNewElement;
        new (): HTMLAdminNewElement;
    };
    interface HTMLAdminPageElement extends Components.AdminPage, HTMLStencilElement {
    }
    var HTMLAdminPageElement: {
        prototype: HTMLAdminPageElement;
        new (): HTMLAdminPageElement;
    };
    interface HTMLCalendarWidgetElement extends Components.CalendarWidget, HTMLStencilElement {
    }
    var HTMLCalendarWidgetElement: {
        prototype: HTMLCalendarWidgetElement;
        new (): HTMLCalendarWidgetElement;
    };
    interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {
    }
    var HTMLHomePageElement: {
        prototype: HTMLHomePageElement;
        new (): HTMLHomePageElement;
    };
    interface HTMLLoginPageElement extends Components.LoginPage, HTMLStencilElement {
    }
    var HTMLLoginPageElement: {
        prototype: HTMLLoginPageElement;
        new (): HTMLLoginPageElement;
    };
    interface HTMLMainButtonElement extends Components.MainButton, HTMLStencilElement {
    }
    var HTMLMainButtonElement: {
        prototype: HTMLMainButtonElement;
        new (): HTMLMainButtonElement;
    };
    interface HTMLRenfeFooterElement extends Components.RenfeFooter, HTMLStencilElement {
    }
    var HTMLRenfeFooterElement: {
        prototype: HTMLRenfeFooterElement;
        new (): HTMLRenfeFooterElement;
    };
    interface HTMLRenfeHeaderElement extends Components.RenfeHeader, HTMLStencilElement {
    }
    var HTMLRenfeHeaderElement: {
        prototype: HTMLRenfeHeaderElement;
        new (): HTMLRenfeHeaderElement;
    };
    interface HTMLRenfeJumboElement extends Components.RenfeJumbo, HTMLStencilElement {
    }
    var HTMLRenfeJumboElement: {
        prototype: HTMLRenfeJumboElement;
        new (): HTMLRenfeJumboElement;
    };
    interface HTMLResultsFinishElement extends Components.ResultsFinish, HTMLStencilElement {
    }
    var HTMLResultsFinishElement: {
        prototype: HTMLResultsFinishElement;
        new (): HTMLResultsFinishElement;
    };
    interface HTMLResultsNavElement extends Components.ResultsNav, HTMLStencilElement {
    }
    var HTMLResultsNavElement: {
        prototype: HTMLResultsNavElement;
        new (): HTMLResultsNavElement;
    };
    interface HTMLResultsPageElement extends Components.ResultsPage, HTMLStencilElement {
    }
    var HTMLResultsPageElement: {
        prototype: HTMLResultsPageElement;
        new (): HTMLResultsPageElement;
    };
    interface HTMLResultsPeopleElement extends Components.ResultsPeople, HTMLStencilElement {
    }
    var HTMLResultsPeopleElement: {
        prototype: HTMLResultsPeopleElement;
        new (): HTMLResultsPeopleElement;
    };
    interface HTMLResultsTableElement extends Components.ResultsTable, HTMLStencilElement {
    }
    var HTMLResultsTableElement: {
        prototype: HTMLResultsTableElement;
        new (): HTMLResultsTableElement;
    };
    interface HTMLRootPageElement extends Components.RootPage, HTMLStencilElement {
    }
    var HTMLRootPageElement: {
        prototype: HTMLRootPageElement;
        new (): HTMLRootPageElement;
    };
    interface HTMLSearchWidgetElement extends Components.SearchWidget, HTMLStencilElement {
    }
    var HTMLSearchWidgetElement: {
        prototype: HTMLSearchWidgetElement;
        new (): HTMLSearchWidgetElement;
    };
    interface HTMLTypeWritterElement extends Components.TypeWritter, HTMLStencilElement {
    }
    var HTMLTypeWritterElement: {
        prototype: HTMLTypeWritterElement;
        new (): HTMLTypeWritterElement;
    };
    interface HTMLWeatherContainerElement extends Components.WeatherContainer, HTMLStencilElement {
    }
    var HTMLWeatherContainerElement: {
        prototype: HTMLWeatherContainerElement;
        new (): HTMLWeatherContainerElement;
    };
    interface HTMLElementTagNameMap {
        "admin-delete": HTMLAdminDeleteElement;
        "admin-edit": HTMLAdminEditElement;
        "admin-new": HTMLAdminNewElement;
        "admin-page": HTMLAdminPageElement;
        "calendar-widget": HTMLCalendarWidgetElement;
        "home-page": HTMLHomePageElement;
        "login-page": HTMLLoginPageElement;
        "main-button": HTMLMainButtonElement;
        "renfe-footer": HTMLRenfeFooterElement;
        "renfe-header": HTMLRenfeHeaderElement;
        "renfe-jumbo": HTMLRenfeJumboElement;
        "results-finish": HTMLResultsFinishElement;
        "results-nav": HTMLResultsNavElement;
        "results-page": HTMLResultsPageElement;
        "results-people": HTMLResultsPeopleElement;
        "results-table": HTMLResultsTableElement;
        "root-page": HTMLRootPageElement;
        "search-widget": HTMLSearchWidgetElement;
        "type-writter": HTMLTypeWritterElement;
        "weather-container": HTMLWeatherContainerElement;
    }
}
declare namespace LocalJSX {
    interface AdminDelete {
    }
    interface AdminEdit {
    }
    interface AdminNew {
    }
    interface AdminPage {
        "history"?: any;
        "match"?: any;
    }
    interface CalendarWidget {
        "day"?: number;
        "includeLegend"?: boolean;
        "locales"?: string;
        "month"?: number;
        "onCalendarSelected"?: (event: CustomEvent<any>) => void;
        "year"?: number;
    }
    interface HomePage {
    }
    interface LoginPage {
        "history"?: any;
    }
    interface MainButton {
        "description"?: string;
        "icon"?: string;
        "title"?: string;
    }
    interface RenfeFooter {
    }
    interface RenfeHeader {
        "background"?: boolean;
    }
    interface RenfeJumbo {
    }
    interface ResultsFinish {
        "arrival"?: Journey;
        "departure"?: Journey;
        "people"?: Person[];
    }
    interface ResultsNav {
        "buttons"?: string[];
        "current"?: number;
        "onNavTab"?: (event: CustomEvent<any>) => void;
        "valid"?: number;
    }
    interface ResultsPage {
    }
    interface ResultsPeople {
        "onPeopleContinue"?: (event: CustomEvent<any>) => void;
        "people"?: Person[];
    }
    interface ResultsTable {
        "cityA"?: string;
        "cityB"?: string;
        "data"?: Journey[];
        "onTableSelected"?: (event: CustomEvent<any>) => void;
        "reversed"?: boolean;
        "selected"?: Journey;
    }
    interface RootPage {
    }
    interface SearchWidget {
        "arrival"?: string;
        "cityA"?: string;
        "cityB"?: string;
        "departure"?: string;
        "people"?: string;
    }
    interface TypeWritter {
        "addLatency"?: number;
        "emptyDelay"?: number;
        "finishDelay"?: number;
        "rmLatency"?: number;
        "sentences"?: string[];
        "text"?: string;
    }
    interface WeatherContainer {
        "city"?: string;
    }
    interface IntrinsicElements {
        "admin-delete": AdminDelete;
        "admin-edit": AdminEdit;
        "admin-new": AdminNew;
        "admin-page": AdminPage;
        "calendar-widget": CalendarWidget;
        "home-page": HomePage;
        "login-page": LoginPage;
        "main-button": MainButton;
        "renfe-footer": RenfeFooter;
        "renfe-header": RenfeHeader;
        "renfe-jumbo": RenfeJumbo;
        "results-finish": ResultsFinish;
        "results-nav": ResultsNav;
        "results-page": ResultsPage;
        "results-people": ResultsPeople;
        "results-table": ResultsTable;
        "root-page": RootPage;
        "search-widget": SearchWidget;
        "type-writter": TypeWritter;
        "weather-container": WeatherContainer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "admin-delete": LocalJSX.AdminDelete & JSXBase.HTMLAttributes<HTMLAdminDeleteElement>;
            "admin-edit": LocalJSX.AdminEdit & JSXBase.HTMLAttributes<HTMLAdminEditElement>;
            "admin-new": LocalJSX.AdminNew & JSXBase.HTMLAttributes<HTMLAdminNewElement>;
            "admin-page": LocalJSX.AdminPage & JSXBase.HTMLAttributes<HTMLAdminPageElement>;
            "calendar-widget": LocalJSX.CalendarWidget & JSXBase.HTMLAttributes<HTMLCalendarWidgetElement>;
            "home-page": LocalJSX.HomePage & JSXBase.HTMLAttributes<HTMLHomePageElement>;
            "login-page": LocalJSX.LoginPage & JSXBase.HTMLAttributes<HTMLLoginPageElement>;
            "main-button": LocalJSX.MainButton & JSXBase.HTMLAttributes<HTMLMainButtonElement>;
            "renfe-footer": LocalJSX.RenfeFooter & JSXBase.HTMLAttributes<HTMLRenfeFooterElement>;
            "renfe-header": LocalJSX.RenfeHeader & JSXBase.HTMLAttributes<HTMLRenfeHeaderElement>;
            "renfe-jumbo": LocalJSX.RenfeJumbo & JSXBase.HTMLAttributes<HTMLRenfeJumboElement>;
            "results-finish": LocalJSX.ResultsFinish & JSXBase.HTMLAttributes<HTMLResultsFinishElement>;
            "results-nav": LocalJSX.ResultsNav & JSXBase.HTMLAttributes<HTMLResultsNavElement>;
            "results-page": LocalJSX.ResultsPage & JSXBase.HTMLAttributes<HTMLResultsPageElement>;
            "results-people": LocalJSX.ResultsPeople & JSXBase.HTMLAttributes<HTMLResultsPeopleElement>;
            "results-table": LocalJSX.ResultsTable & JSXBase.HTMLAttributes<HTMLResultsTableElement>;
            "root-page": LocalJSX.RootPage & JSXBase.HTMLAttributes<HTMLRootPageElement>;
            "search-widget": LocalJSX.SearchWidget & JSXBase.HTMLAttributes<HTMLSearchWidgetElement>;
            "type-writter": LocalJSX.TypeWritter & JSXBase.HTMLAttributes<HTMLTypeWritterElement>;
            "weather-container": LocalJSX.WeatherContainer & JSXBase.HTMLAttributes<HTMLWeatherContainerElement>;
        }
    }
}
