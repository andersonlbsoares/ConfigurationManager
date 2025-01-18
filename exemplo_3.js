import fs from 'fs';
import ConfigurationManager, {loadConfigFromJSON} from './ConfigurationManager.js'; 
let configManager = ConfigurationManager.getInstance();

function guardar_arquivo(diretorio){
    let arquivo = fs.readFileSync(diretorio);
    let tamanhoArquivo = arquivo.length;
    let formatoArquivo = diretorio.split('.').pop();
    
    if(configManager.get("resources").formatsAccepted.includes(formatoArquivo) && tamanhoArquivo <= configManager.get("resources").maxSize){
        console.log(`Arquivo ${diretorio} guardado com sucesso!`);
    }else{
        console.log(`Arquivo ${diretorio} não guardado!`);
    }
}

let configData = loadConfigFromJSON(('./configs/config1.json'));
configManager.setup(configData)

console.log(`=================================================`);
guardar_arquivo('./arquivo_1.txt');
guardar_arquivo('./arquivo_2.pdf');
console.log(`=================================================`);

configData = loadConfigFromJSON(('./configs/config2.json'));
configManager.setup(configData)

console.log(``);
console.log(`=================================================`);
guardar_arquivo('./arquivo_1.txt');
guardar_arquivo('./arquivo_2.pdf');
console.log(`=================================================`);
