import {
  wifiIcon, wibrationIcon, houseIcon, calendarIcon,
} from '../img/iconsSVG/iconsSvg';

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
    answer: 'Zdecydowanie Tak! zarejestruj się w aplikacji oraz połącz obroże z internetem domowym co jest dokładnie wyjaśnione w dołączonej instrukcji obsługi',
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
  {
    key: '5',
    question: 'Czy samodzielnie mogę wybrać schronisko?',
    answer: 'W standardzie to my decydujemy, które schroniska otrzymają wsparcie, ale jeśli masz w swojej okolicy potrzebujące schronisko - napisz do nas o tym, z pewnością pomożemy i to nie jeden raz',
  },
  {
    key: '6',
    question: 'Skąd mam pewność, że obroża działa gdy nie ma aktywności w aplikacji',
    answer: 'Obroża monitoruje zachowanie psa, jeśli pies nie szczeka od 3 dni mając obroże - w aktywnościach pojawi się licznik dni określający od ilu dni obroża nie zarejestrowała szczeknięć ani wycia',
  },
  {
    key: '7',
    question: 'Jak włączyć obrożę?',
    answer: 'Obroża po włożeniu bateri zasilających ustawia się w trybie konfiguracji. Należy wyszukać ją jako sieć wifi - uzupełnić w niej dane ID z aplikacji Barki, określić sieć wi-fi z którą ma się łączyć i wuala! Gotowa obroża czeka na szczeknięcia',
  },
];

export const PRICES = [
  { id: 1, price: ' 50zł', content: ' Dzięki Twojemu datkowi jesteśmy w stanie sfonansować karmę dla psiaków w schroniskach Dziękujemy!' },
  { id: 2, price: ' 100zł', content: ' Dzięki Twojemu datkowi jesteśmy w stanie sfonansować karmę dla psiaków oraz maty termiczne na długie zimowe wieczory!' }];

export const DIFFERENCE_CONTENT = [
  { name: 'Tylko wibracje', icon: wibrationIcon, paragraph: 'Gdy pies zaczyna szczekać lub wyć, jego zachowanie korygują silne wibracje, które są w 100% bezpieczne' },
  { name: 'Spokój sąsiadów', icon: houseIcon, paragraph: 'Otrzymywanie listów do skrzynki, skarżenie się na Twojego psa we wspólnocie/spółdzielni to już przeszłość' },
  { name: 'Kalendarz zdarzeń', icon: calendarIcon, paragraph: 'Pełna historia zdarzeń w kalendarzu, nic Ci nie umknie - wiesz ile razy i o której godzinie nastąpiło uspokajanie psa' },
  { name: 'Dostęp online', icon: wifiIcon, paragraph: 'Jedyna obroża, łącząca się z domowąsiecią Wi-fi do przekazywania tobie informacji na żywo o zachowaniu psa'}];
