const DeepL="https://api-free.deepl.com/v2/";
const key="5652c0b9-adcf-7f2e-f6a2-3a577f700dc9:fx";

export const getListOfLanguages = () => {
    
    const formData = new FormData();
    formData.append("auth_key",key);
    formData.append("type","target");
    
   return fetch(`${DeepL}languages`, 
   {
        method: 'POST', 
        body:  formData
    })
    .then( (data) => data.json() )
}

export const translateText = ( text, language ) => {
    
    const formData = new FormData();
    formData.append("auth_key",key);
    formData.append("type","target");
    formData.append("text",text);
    formData.append("target_lang",language);
    formData.append("source_lang","EN");
        
   return fetch( `${DeepL}translate`,
    {
        method: 'POST',     
        body:  formData
    })
    .then( (data) => data.json() )
}

