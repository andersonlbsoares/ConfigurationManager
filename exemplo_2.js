import ConfigurationManager, {loadConfigFromJSON} from './ConfigurationManager.js'; 
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let configManager = ConfigurationManager.getInstance();
let configData = loadConfigFromJSON(('./configs/config2.json'));
configManager.setup(configData)


const log_function = () => {
    let log_level = configManager.get("log_level", "info");
    let resposta;
    if (log_level === "info") {
        resposta = `
            Code: 200
            Status: OK
        `;
    } else if (log_level === "debug") {
        resposta = `
            Code: 200
            Status: OK
            response: {
                "message": "Hello, World!",
                "timestamp": ${new Date().toISOString()}
            }
        `;
    }
    return resposta;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  rl.on('line', (input) => {
        let configData = loadConfigFromJSON((`./configs/config${input}.json`));
        configManager.setup(configData)
  });
  
  (async function main() {
    while (true) {
      console.log("================================================");
      console.log(log_function());
      await sleep(1000);
    }
  })();
  