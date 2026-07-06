import { AccessControlEntry } from '/lib/xp/node';

declare const APP_EXPLORER = "com.enonic.app.explorer";
declare const Repo: {
    readonly EXPLORER: "com.enonic.app.explorer";
    readonly JOURNALS: "com.enonic.app.explorer.journals";
};
declare const BRANCH_ID_EXPLORER = "master";
declare const COLLECTION_REPO_PREFIX = "com.enonic.app.explorer.collection.";
declare enum Folder {
    API_KEYS = "api-keys",
    COLLECTIONS = "collections",
    COLLECTORS = "collectors",
    DOCUMENT_TYPES = "documentTypes",
    FIELDS = "fields",
    INTERFACES = "interfaces",
    NOTIFICATIONS = "notifications",
    STOPWORDS = "stopwords",
    THESAURI = "thesauri"
}
declare const FOLDERS: readonly [Folder.API_KEYS, Folder.COLLECTIONS, Folder.COLLECTORS, Folder.DOCUMENT_TYPES, Folder.FIELDS, Folder.INTERFACES, Folder.NOTIFICATIONS, Folder.STOPWORDS, Folder.THESAURI];
declare const Path: {
    readonly API_KEYS: "/api-keys";
    readonly COLLECTIONS: "/collections";
    readonly COLLECTORS: "/collectors";
    readonly DOCUMENT_TYPES: "/documentTypes";
    readonly FIELDS: "/fields";
    readonly INTERFACES: "/interfaces";
};
declare const NodeType: {
    readonly API_KEY: "com.enonic.app.explorer:api-key";
    readonly COLLECTION: "com.enonic.app.explorer:collection";
    readonly DOCUMENT: "com.enonic.app.explorer:document";
    readonly DOCUMENT_TYPE: "com.enonic.app.explorer:documentType";
    readonly FIELD: "com.enonic.app.explorer:field";
    readonly FOLDER: "com.enonic.app.explorer:folder";
    readonly INTERFACE: "com.enonic.app.explorer:interface";
    readonly JOURNAL: "com.enonic.app.explorer:journal";
    readonly STOP_WORDS: "com.enonic.app.explorer:stop-words";
    readonly SYNONYM: "com.enonic.app.explorer:synonym";
    readonly THESAURUS: "com.enonic.app.explorer:thesaurus";
};
declare const Role: {
    readonly EXPLORER_ADMIN: "com.enonic.app.explorer.admin";
    readonly EXPLORER_READ: "com.enonic.app.explorer.read";
    readonly EXPLORER_WRITE: "com.enonic.app.explorer.write";
    readonly SYSTEM_ADMIN: "system.admin";
    readonly SYSTEM_EVERYONE: "system.everyone";
};
declare const Principal: {
    readonly EXPLORER_READ: "role:com.enonic.app.explorer.read";
    readonly EXPLORER_WRITE: "role:com.enonic.app.explorer.write";
    readonly EVERYONE: "role:system.everyone";
    readonly SYSTEM_ADMIN: "role:system.admin";
};
declare const FieldPath: {
    readonly GLOBAL: "global";
    readonly META: "document_metadata";
    readonly META_COLLECTION: "document_metadata.collection";
    readonly META_DOCUMENT_TYPE: "document_metadata.documentType";
    readonly META_LANGUAGE: "document_metadata.language";
    readonly META_STEMMING_LANGUAGE: "document_metadata.stemmingLanguage";
};
declare const PERMISSION_SYSTEM_ADMIN: AccessControlEntry;
declare const RootPermission: {
    readonly EXPLORER_READ: AccessControlEntry;
    readonly EXPLORER_WRITE: AccessControlEntry;
    readonly SYSTEM_ADMIN: AccessControlEntry;
};
declare const ROOT_PERMISSIONS_EXPLORER: any[];
declare const EVENT_TYPE_PREFIX_CUSTOM = "custom";
declare const EVENT_SEND_TYPE_CUSTOM_EXPLORER_DOCUMENTTYPE_CREATED = "explorer.documentType.created";
declare const EVENT_SEND_TYPE_CUSTOM_EXPLORER_DOCUMENTTYPE_UPDATED = "explorer.documentType.updated";
declare const EVENT_LISTEN_TYPE_CUSTOM_EXPLORER_DOCUMENTTYPE_CREATED: "custom.explorer.documentType.created";
declare const EVENT_LISTEN_TYPE_CUSTOM_EXPLORER_DOCUMENTTYPE_UPDATED: "custom.explorer.documentType.updated";
declare enum HTTP_HEADERS {
    EXPLORER_INTERFACE_NAME = "explorer-interface-name"
}

export { APP_EXPLORER, BRANCH_ID_EXPLORER, COLLECTION_REPO_PREFIX, EVENT_LISTEN_TYPE_CUSTOM_EXPLORER_DOCUMENTTYPE_CREATED, EVENT_LISTEN_TYPE_CUSTOM_EXPLORER_DOCUMENTTYPE_UPDATED, EVENT_SEND_TYPE_CUSTOM_EXPLORER_DOCUMENTTYPE_CREATED, EVENT_SEND_TYPE_CUSTOM_EXPLORER_DOCUMENTTYPE_UPDATED, EVENT_TYPE_PREFIX_CUSTOM, FOLDERS, FieldPath, Folder, HTTP_HEADERS, NodeType, PERMISSION_SYSTEM_ADMIN, Path, Principal, ROOT_PERMISSIONS_EXPLORER, Repo, Role, RootPermission };
