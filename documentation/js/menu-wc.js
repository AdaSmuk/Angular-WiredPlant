'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">wired-plant documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddNewPlantModule.html" data-type="entity-link">AddNewPlantModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddNewPlantModule-0077dccfa261a1545e7d93511907f754"' : 'data-target="#xs-components-links-module-AddNewPlantModule-0077dccfa261a1545e7d93511907f754"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddNewPlantModule-0077dccfa261a1545e7d93511907f754"' :
                                            'id="xs-components-links-module-AddNewPlantModule-0077dccfa261a1545e7d93511907f754"' }>
                                            <li class="link">
                                                <a href="components/AddNewPlantComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddNewPlantComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AlertsHubModule.html" data-type="entity-link">AlertsHubModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AlertsHubModule-ada55f35ebe0c743785fe70d57f9b8f8"' : 'data-target="#xs-components-links-module-AlertsHubModule-ada55f35ebe0c743785fe70d57f9b8f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlertsHubModule-ada55f35ebe0c743785fe70d57f9b8f8"' :
                                            'id="xs-components-links-module-AlertsHubModule-ada55f35ebe0c743785fe70d57f9b8f8"' }>
                                            <li class="link">
                                                <a href="components/AlertsHubComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertsHubComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8d26dfcc7391bf913d222bbebca710c8"' : 'data-target="#xs-components-links-module-AppModule-8d26dfcc7391bf913d222bbebca710c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8d26dfcc7391bf913d222bbebca710c8"' :
                                            'id="xs-components-links-module-AppModule-8d26dfcc7391bf913d222bbebca710c8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GraphsHubModule.html" data-type="entity-link">GraphsHubModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GraphsHubModule-08f95614b606a4705fcd9ba7c93b16dd"' : 'data-target="#xs-components-links-module-GraphsHubModule-08f95614b606a4705fcd9ba7c93b16dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GraphsHubModule-08f95614b606a4705fcd9ba7c93b16dd"' :
                                            'id="xs-components-links-module-GraphsHubModule-08f95614b606a4705fcd9ba7c93b16dd"' }>
                                            <li class="link">
                                                <a href="components/GraphsHubComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GraphsHubComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InformationHubModule.html" data-type="entity-link">InformationHubModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InformationHubModule-29e7600662d9e0a73dce63bf5e75bb13"' : 'data-target="#xs-components-links-module-InformationHubModule-29e7600662d9e0a73dce63bf5e75bb13"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InformationHubModule-29e7600662d9e0a73dce63bf5e75bb13"' :
                                            'id="xs-components-links-module-InformationHubModule-29e7600662d9e0a73dce63bf5e75bb13"' }>
                                            <li class="link">
                                                <a href="components/InformationHubComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InformationHubComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainHubModule.html" data-type="entity-link">MainHubModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainHubModule-d9249441718859a4cf91a3cf5f693e8b"' : 'data-target="#xs-components-links-module-MainHubModule-d9249441718859a4cf91a3cf5f693e8b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainHubModule-d9249441718859a4cf91a3cf5f693e8b"' :
                                            'id="xs-components-links-module-MainHubModule-d9249441718859a4cf91a3cf5f693e8b"' }>
                                            <li class="link">
                                                <a href="components/MainHubAlertComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainHubAlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainHubButtonsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainHubButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainHubComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainHubComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainHubGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainHubGraphComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Alert.html" data-type="entity-link">Alert</a>
                            </li>
                            <li class="link">
                                <a href="classes/ArtificialLight.html" data-type="entity-link">ArtificialLight</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrentLogs.html" data-type="entity-link">CurrentLogs</a>
                            </li>
                            <li class="link">
                                <a href="classes/Log.html" data-type="entity-link">Log</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogsRequest.html" data-type="entity-link">LogsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/Plant.html" data-type="entity-link">Plant</a>
                            </li>
                            <li class="link">
                                <a href="classes/RewireRequest.html" data-type="entity-link">RewireRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/SunlightLog.html" data-type="entity-link">SunlightLog</a>
                            </li>
                            <li class="link">
                                <a href="classes/TemperatureLog.html" data-type="entity-link">TemperatureLog</a>
                            </li>
                            <li class="link">
                                <a href="classes/WateringLog.html" data-type="entity-link">WateringLog</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertsControlService.html" data-type="entity-link">AlertsControlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArtificialLightControlService.html" data-type="entity-link">ArtificialLightControlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogsControlService.html" data-type="entity-link">LogsControlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlantControlService.html" data-type="entity-link">PlantControlService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Serializable.html" data-type="entity-link">Serializable</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});