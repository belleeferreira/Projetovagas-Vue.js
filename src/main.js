import { createApp } from 'vue'
import App from './App.vue'
//importar o pacote mitt
import mitt from 'mitt'
import './assets/main.css'

//criar a instância do pacote mitt
const emitter = mitt()
//iniciar a instância do vue com bas no componente
const app = createApp(App)

//configurar a instância do pacote mitt como sendo uma propriedade global
//essa propriedade estará disponível para todas as instâncias de componentes dentro do app
app.config.globalProperties.emitter = emitter
//createApp(App).mount('#app')

//associar a instância do vue com o elemento html de id app
app.mount('#app')
