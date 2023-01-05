import { Component } from 'react';
import Tekst from './Tekst';

class App extends Component {
    state = {
        korisnici: [
            {
                ime: 'Branko',
                prezime: 'Branković',
                dob: 32,
            },
            {
                ime: 'Janko',
                prezime: 'Janković',
                dob: 42,
            },
            {
                ime: 'Stanko',
                prezime: 'Stanković',
                dob: 52,
            },
        ],

        tekst: 'Ja sam tekst',
    };
    render() {
        const { tekst } = this.state;
        const { korisnici } = this.state;

        const listaKorisnika = korisnici.map((korisnik) => {
            return (
                <div>
                    <h2>ime: {korisnik.ime}</h2>
                    <h2>prezime: {korisnik.prezime}</h2>
                    <h2>dob: {korisnik.dob}</h2>
                </div>
            );
        });

        return (
            <div>
                {listaKorisnika}
                <Tekst tekst={tekst} />
            </div>
        );
    }
}

export default App;
