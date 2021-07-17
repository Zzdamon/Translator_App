import React, { Component } from 'react'
import * as DeepL from '../APIs/DeepL';

export default class TranslateForm extends Component {
        
    constructor(){
        super();
        this.state = {
            textToTranslate:'',
            languages:[],
            selectedLanguage:null,
            translatedText:null
        }
    }

    componentDidMount(){
        DeepL.getListOfLanguages()
        .then( languages =>
                this.setState({ languages:languages, selectedLanguage:languages[0].language })
        )
    }

    render() {
        return (
            <form className = "translate-form container d-flex flex-column align-items-center  m-5 "
                onSubmit={(event) => this.submitEventHandler(event) } >
               
                <label htmlFor = "textToTranslate"
                    className = "h6 mx-2"
                >Write any english text here and translate it into the language you want
                </label>
               
                <textarea id = "textToTranslate" name = "textToTranslate" rows = "4" cols = "50"
                    onChange = { (event) => this.changeHandler(event) }
                    placeholder = "Type here what you want to translate..." >
                </textarea>     
                
                <div className = "d-flex mt-4 mb-2 justify-content-between">
                    <label className = "h6 mx-2" 
                        htmlFor = "selectedLanguage"
                    >Choose a language:
                    </label>
                    
                    <select name = "selectedLanguage" 
                        onChange = { (event) => this.changeHandler(event) } 
                        >{ this.state.languages.map( (language) => {      
                            return (
                                <option key = {language.language} 
                                value = {language.language}
                                >{language.name}
                                </option>
                            )
                            })
                        }
                    </select>
                </div>

                <input 
                    className = "btn btn-secondary my-3"
                    type = "submit" 
                    value = "Translate"/>

                { this.state.translatedText
                  ? <div className="d-flex flex-column justify-content-center">
                        
                        <label htmlFor="textToTranslate"
                            className="h6 mx-2"
                        >Your translated text: 
                        </label>
                        
                        <textarea name="translatedText" id="translatedText"
                         cols="50" rows="4" readOnly={true}
                         value={this.state.translatedText}>
                        </textarea>
                    
                    </div>
                 :null
                }

            </form>
        )
    }
    
    submitEventHandler(event) {
        event.preventDefault(); 
        
        DeepL.translateText( this.state.textToTranslate, this.state.selectedLanguage )
            .then( translatedText => this.setState({ translatedText:translatedText.translations[0].text }))
    }

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
}

