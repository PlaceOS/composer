import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    PlaceOS,
    EngineAuthService,
    EngineBindingService,
    EngineWebsocket,
    EngineApplicationsService,
    EngineDriversService,
    EngineModulesService,
    EngineSystemsService,
    EngineZonesService,
    EngineUsersService,
    EngineHttpClient,
    EngineDomainsService,
    PlaceOSOptions,
    EngineTriggersService,
    EngineSystemTriggersService,
    EngineSettingsService,
    EngineRepositoriesService,
    EngineOAuthSourcesService,
    EngineSAMLSourcesService,
    EngineLDAPSourcesService,
    EngineClustersService
} from '@placeos/ts-client';

@Injectable({
    providedIn: 'root'
})
export class ComposerService {
    /** Initialise PlaceOS API */
    public setup(options: PlaceOSOptions) {
        PlaceOS.init(options);
    }

    /** Observable for the intialised state of composer */
    public get initialised(): Observable<boolean> {
        return PlaceOS.initialised;
    }

    /** Observable for the intialised state of composer */
    public get is_initialised(): boolean {
        return PlaceOS.is_initialised;
    }

    /** HTTP Client for making request with composer credentials */
    public get http(): EngineHttpClient {
        return PlaceOS.http;
    }

    /** Authentication service for Composer */
    public get auth(): EngineAuthService {
        return PlaceOS.auth;
    }

    /** Service for binding to engine's realtime API */
    public get bindings(): EngineBindingService {
        return PlaceOS.bindings;
    }
    /** HTTP service for engine applications */
    public get applications(): EngineApplicationsService {
        return PlaceOS.applications;
    }

    /** HTTP service for engine auth sources */
    public get oauth_sources(): EngineOAuthSourcesService {
        return PlaceOS.oauth_sources;
    }

    /** HTTP service for engine auth sources */
    public get saml_sources(): EngineSAMLSourcesService {
        return PlaceOS.saml_sources;
    }

    /** HTTP service for engine auth sources */
    public get ldap_sources(): EngineLDAPSourcesService {
        return PlaceOS.ldap_sources;
    }

    /** HTTP service for engine domains */
    public get domains(): EngineDomainsService {
        return PlaceOS.domains;
    }

    /** Interface for engine realtime API communications */
    public get realtime(): EngineWebsocket {
        return PlaceOS.realtime;
    }

    /** HTTP service for engine drivers */
    public get drivers(): EngineDriversService {
        return PlaceOS.drivers;
    }

    /** HTTP service for engine modules */
    public get modules(): EngineModulesService {
        return PlaceOS.modules;
    }

    /** HTTP service for engine repositories */
    public get repositories(): EngineRepositoriesService {
        return PlaceOS.repositories;
    }

    /** HTTP service for engine systems */
    public get systems(): EngineSystemsService {
        return PlaceOS.systems;
    }

    /** HTTP service for engine triggers */
    public get triggers(): EngineTriggersService {
        return PlaceOS.triggers;
    }

    /** HTTP service for engine system triggers */
    public get system_triggers(): EngineSystemTriggersService {
        return PlaceOS.system_triggers;
    }

    /** HTTP service for engine auth sources */
    public get users(): EngineUsersService {
        return PlaceOS.users;
    }

    /** HTTP service for engine auth sources */
    public get settings(): EngineSettingsService {
        return PlaceOS.settings;
    }

    /** HTTP service for engine auth sources */
    public get zones(): EngineZonesService {
        return PlaceOS.zones;
    }

    /** HTTP service for engine auth sources */
    public get clusters(): EngineClustersService {
        return PlaceOS.clusters;
    }
}
