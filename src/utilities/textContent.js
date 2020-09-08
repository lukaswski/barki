// eslint-disable-next-line import/prefer-default-export
export const DASHBOARD_CARD_CONTENT = [{
  head: 'Pierwsze logowanie',
  content: 'Wygląda na to, że jesteś tu po raz pierwszy!',
  content1: 'Uzupełnij profil o swoje podstawowe dane',
  button: 'Uzupełnij profil',
  key: 'first',
  title: 'Podstawowe dane do konta',
  inputs: ['imię', 'nazwisko', 'kraj', 'miasto', 'ulica', 'numer domu', 'numer mieszkania', 'kod pocztowy'],
  handleInputs: ['userName', 'surname', 'country', 'city', 'street', 'number', 'flatNnumer', 'postCode'],
},
{
  head: 'Dodaj Psiaka',
  content: 'Pozwól, że poznamy Twojego Pupila',
  content1: 'Uzupełnił informację o swoim podopiecznym',
  button: 'Dodaj Psiaka',
  key: 'second',
  title: 'Informacje o Pupilu',
  inputs: ['imię Psa', 'rasa', 'wiek'],
  handleInputs: ['dogName', 'race', 'age'],

},
{
  head: 'Dodaj Obrożę',
  content: 'Tutaj powinieneś dodać informację o swojej obroży',
  content1: 'Sparujesz ją ze swoim profilem',
  button: 'Dodaj obrożę',
  key: 'third',
  title: 'Numer seryjny posiadanej obroży',
  inputs: ['numer seryjny obroży'],
  handleInputs: ['serialNumber'],
}];
