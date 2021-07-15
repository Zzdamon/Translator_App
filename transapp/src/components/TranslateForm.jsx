import React, { Component } from 'react'
import * as DeepL from '../APIs/DeepL';

export default class TranslateForm extends Component {
        
    constructor(){
        super();
        this.state={
            textToTranslate:null,
            languages:[]
        }
    }

    componentDidMount(){
        DeepL.getListOfLanguages()
        .then(languages=>
            {this.setState({languages:languages})
            // console.log(this.state.languages)

            }

        )
    }

    render() {
        return (
            <form className="translate-form"
                onSubmit={(event) =>
                { event.preventDefault(); } } >

                <textarea id="textToTranslate" name="textToTranslate" rows="4" cols="50"
                    onChange={(event)=>this.changeHandler(event)}
                    placeholder="Type here what you want to translate..." >
                </textarea>     
                
                <label htmlFor="language">Choose a language</label>
                <select name="language">
                    {/* { this.state.languages.map( (language) => {
                        
                            <option key={language.language}>{language.language}</option>
                        
                    }) } */}
                </select>

                <input 
                    className="btn btn-secondary m-1 mt-2"
                    type="submit" value="Translate"/>

            </form>
        )
    }
    
    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state)
    }
}

