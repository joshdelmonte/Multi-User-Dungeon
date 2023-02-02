import React, { Component } from 'react';
import races from './races';
import classes from './classes';
import './css/login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            race: 'human',
            cls: 'fighter'
        };

        this._handleLogin = this._onLogin.bind(this);
        this._handleNameChange = this._onNameChange.bind(this);
        this._handleRaceChange = this._onRaceChange.bind(this);
        this._handleClassChange = this._onClassChange.bind(this);
    }

    render() {
        const { name, race, cls } = this.state;
        const racesOptions = races.map((race) => <option value={race.id}>{race.name}</option>);
        const classesOptions = classes.map((cls) => <option value={cls.id}>{cls.name}</option>);

        return (
            <div className="row justify-content-center primeBackground">
                <div className="box col-sm-10 col-md-5">
                    <h3 className='titleMessage'>Welcome To</h3>
                    <h1 className='titleLogo'>Dark-er Forest</h1>
                </div>
                <div className="col-sm-10 col-md-4">
                    <div className="box card loginCard">
                        <div className="card-body">
                            <h4 className="card-title">Join Game</h4>
                            <form onSubmit={ this._handleLogin }>
                                <div className="form-group">
                                    {/* <label htmlFor="characterName" className='normalText'>Name</label> */}
                                    <input type="text" className="characterInputBox" id="characterName" placeholder="Enter name" value={ name } onChange={ this._handleNameChange }/>
                                </div>
                                <div className="form-group">
                                    {/* <label htmlFor="characterRace" className='normalText'>Race</label> */}
                                    <select id="characterRace" className="characterInputBox" value={ race } onChange={ this._handleRaceChange }>
                                        { racesOptions }
                                    </select>
                                </div>
                                <div className="form-group">
                                    {/* <label htmlFor="characterClass" className='normalText'>Class</label> */}
                                    <select id="characterClass" className="characterInputBox" value={ cls } onChange={ this._handleClassChange }>
                                        { classesOptions }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn  normalText" value="Join Game" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _onLogin(e) {
        const { name, race, cls } = this.state;
        e.preventDefault();

        this.props.handleLogin(name, race, cls);
    }

    _onNameChange(e) {
        this.setState({name: e.target.value});
    }

    _onRaceChange(e) {
        this.setState({race: e.target.value});
    }

    _onClassChange(e) {
        this.setState({cls: e.target.value});
    }
}

export default Login;
