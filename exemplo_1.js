import ConfigurationManager, {loadConfigFromJSON} from './ConfigurationManager.js'; 
let configManager = ConfigurationManager.getInstance();


let configData = loadConfigFromJSON(('./configs/config1.json'));
configManager.setup(configData)


console.log(`=================================================`);

let apiUrl = configManager.get("api_url");
let max_retries = configManager.get("max_retries", 1);

console.log(`URL da API: ${apiUrl}`);
console.log(`Número máximo de tentativas: ${max_retries}`);

console.log(`=================================================`);

configData = loadConfigFromJSON(('./configs/config2.json'));
configManager.setup(configData)

apiUrl = configManager.get("api_url");
max_retries = configManager.get("max_retries", 1);
console.log(`URL da API: ${apiUrl}`);
console.log(`Número máximo de tentativas: ${max_retries}`);
console.log(`=================================================`);