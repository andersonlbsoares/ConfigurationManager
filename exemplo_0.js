import ConfigurationManager, {loadConfigFromJSON} from './ConfigurationManager.js'; 
let configManager = ConfigurationManager.getInstance();

try{
	console.log(configManager);
	console.log(configManager.get("max_retries", 1));
}catch(e){
	console.log(e.message);
}


let configData = loadConfigFromJSON(('./configs/config1.json'));
configManager.setup(configData)
console.log('');
console.log('======================');
console.log('');
try{
	console.log(configManager);
	console.log(configManager.get("max_retries", 1));
}catch(e){
	console.log(e.message);
}