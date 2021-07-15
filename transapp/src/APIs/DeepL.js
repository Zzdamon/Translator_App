const DeepL="https://api-free.deepl.com/v2/";
const key="5652c0b9-adcf-7f2e-f6a2-3a577f700dc9:fx";

export default getListOfLanguages = () => {
   const langaugesList = await fetch(`${DeepL}Languages/${key}`) 
    return langaugesList.json();
}
