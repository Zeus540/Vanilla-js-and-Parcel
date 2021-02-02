import Header from './components/Header'
import './scss/app.scss'

const app = () =>{
  document.getElementById("root").innerHTML = `
  ${Header()}

  `;
}

app();