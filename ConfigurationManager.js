import fs from 'fs';

class Configuration {
    constructor(data) {
        this._data = data;
    }

    get(key, defaultValue = null) {
        return this._data[key] !== undefined ? this._data[key] : defaultValue;
    }
}

class ConfigurationManager {
    static _instance = null;
    constructor() {
        if (ConfigurationManager._instance) {
            throw new Error("Use ConfigurationManager.getInstance() para obter uma instância.");
        }
        this._config = new Configuration({});
        this.is_setup = false
    }

    static getInstance() {
        if (!ConfigurationManager._instance) {
            ConfigurationManager._instance = new ConfigurationManager();
        }
        return ConfigurationManager._instance;
    }

    setup(configData) {
        this._config = new Configuration(configData);
        this.is_setup = true
    }

    get(key, defaultValue = null) {
        if (!this.is_setup) {
            throw new Error("Configuração não inicializada.");
        }
        return this._config.get(key, defaultValue);
    }
}

export function loadConfigFromJSON(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error("Erro ao carregar arquivo de configuração:", error);
        return {};
    }
}

export default ConfigurationManager;