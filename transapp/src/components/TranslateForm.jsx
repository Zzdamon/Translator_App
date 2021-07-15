import React, { Component } from 'react'
import * as DeepL from '../APIs/DeepL';

export default class TranslateForm extends Component {
        
    constructor(){
        super();
        this.state={
            textToTranslate:null,
            languages:[],
            selectedLanguage:null,
            translatedText:null
        }
    }

    componentDidMount(){
        DeepL.getListOfLanguages()
        .then(languages=>
            {this.setState({languages:languages, selectedLanguage:languages[0].language})
            // console.log(this.state.languages)
            }
        )
    }

    render() {
        return (
            <form className="translate-form"
                onSubmit={(event) =>
                { 
                    event.preventDefault(); 
                    DeepL.translateText(this.state.textToTranslate,this.state.selectedLanguage)
                    .then( translatedText => this.setState({translatedText:translatedText.translations[0].text}) )
                    console.log(this.state);
                } } >

                <textarea id="textToTranslate" name="textToTranslate" rows="4" cols="50"
                    onChange={(event)=>this.changeHandler(event)}
                    placeholder="Type here what you want to translate..." >
                </textarea>     
                
                <label htmlFor="selecteLanguage">Choose a language</label>
                <select name="selectedLanguage" 
                placeholder="Select..."
                onChange = { (event) => this.changeHandler(event) } >
                    { this.state.languages.map( (language) => {
                            return(
                                <option key={language.language} value={language.language}> 
                                    {language.language}
                                </option>
                            )
                        })
                    }
                </select>

                <input 
                    className="btn btn-secondary m-1 mt-2"
                    type="submit" value="Translate"/>

                { this.state.translatedText
                  ? <textarea name="translatedText" id="translatedText" cols="30" rows="10" readOnly="true"
                   value={this.state.translatedText}></textarea>
                 :null
                }

            </form>
        )
    }
    
    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state)
    }
}

