// eslint-disable-next-line import/prefer-default-export
export const DASHBOARD_CARD_CONTENT = [{
  head: 'Pierwsze logowanie',
  content: 'Wygląda na to, że jesteś tu po raz pierwszy!',
  content1: 'Uzupełnij profil o swoje podstawowe dane',
  button: 'Uzupełnij profil',
  key: 'userProfile',
  title: 'Podstawowe dane do konta',
  inputs: ['imię', 'nazwisko', 'kraj', 'miasto', 'ulica', 'numer domu', 'numer mieszkania', 'kod pocztowy'],
  handleInputs: ['userName', 'surname', 'country', 'city', 'street', 'number', 'flatNnumer', 'postCode'],
},
{
  head: 'Dodaj Psiaka',
  content: 'Pozwól, że poznamy Twojego Pupila',
  content1: 'Uzupełnił informację o swoim podopiecznym',
  button: 'Dodaj Psiaka',
  key: 'dogProfile',
  title: 'Informacje o Pupilu',
  inputs: ['imię Psa', 'rasa', 'wiek'],
  handleInputs: ['dogName', 'dogRace', 'dogAge'],

},
{
  head: 'Dodaj Obrożę',
  content: 'Tutaj powinieneś dodać informację o swojej obroży',
  content1: 'Sparujesz ją ze swoim profilem',
  button: 'Dodaj obrożę',
  key: 'collarProfile',
  title: 'Numer seryjny posiadanej obroży',
  inputs: ['numer seryjny obroży'],
  handleInputs: ['serialNumber'],
}];

export const HERO_CONTENT = {
  title: 'Jedyna skuteczna obroża antyszczekowa',
  tooltip: 'Testowy dostęp do aplikacji bez logowania!',
  button: 'przetestuj',
};

export const FAQ_SITE_CONTENT = {
  title: 'Najczęstrze pytania:',
  subtitle: 'Sprawdź najczęsciej zadawane pytania, jeśli nie znajdujesz tu odpowiedzi napisz do nas! formularz kontaktowy znajdziesz poniżej.',
};

export const FAQ_ACCORDION_CONTENT = [
  {
    key: '0',
    question: 'Czy obroża barki jest elektryczna?',
    answer: 'Obroża barki jest elektryczna ;) ale nie razi pieska prądem, do wyciszania zachowań używamy wyłącznie wibracji',
  },
  {
    key: '1',
    question: 'Czy wysyłacie do uk?',
    answer: 'możemy zlecić wysyłkę do krajów zagranicznych',
  },
  {
    key: '2',
    question: 'Czy poradzę sobie z konfiguracją?',
    answer: 'Obroża jest przygotowana do używania, bateria jest naładowana - jedyne co trzeba to zarejestrować się w aplikacji oraz połączyć obroże z internetem domowym co jest wyjaśnione w dołączonej instrukcji obsługi',
  },
  {
    key: '3',
    question: 'Czy to pieska boli?',
    answer: 'Zdecydowanie NIE! obroża barki jest wibracyjna, jej działania mają rozproszyć uwagę szczekającego lub wyjącego psa co czyni bradzo skutecznie ;)',
  },
  {
    key: '4',
    question: 'Jak długo pies oducza się szczekania?',
    answer: 'Tego niestety nikt nie wie, wywnioskujesz to po statystykach w aplikacji',
  },
];

export const PRICES = [{ id: 1, price: ' 30zł', content: ' Dzięki Twojemu datkowi jesteśmy w stanie sfonansować karmę dla psiaków w schroniskach Dziękujemy!' },
{ id: 2, price: ' 50zł', content: ' Dzięki Twojemu datkowi jesteśmy w stanie sfonansować karmę dla psiaków oraz maty termiczne na długie zimowe wieczory!' }];
