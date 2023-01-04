
<template>
  <div>
    <VagasFavoritas/>
    <Topo @navegar="componente = $event" />
    <Alerta v-if="exibirAlerta" :tipo="alerta.tipo">
       <template v-slot:titulo>
        <h1>{{alerta.titulo}}</h1>
       </template>
        <p>{{alerta.descricao}}</p>
    </Alerta>
    <Conteudo v-if="visibilidade" :conteudo="componente"/>
  </div>
</template>

<script>
  import Alerta from './components/comuns/Alerta.vue'
  import Conteudo from './components/layouts/Conteudo.vue'
  import VagasFavoritas from './components/comuns/VagasFavoritas.vue'
  import Topo from './components/layouts/Topo.vue'
  export default {
    name: 'App',
    data: () => ({
      visibilidade: true,
      componente: 'Home',
      exibirAlerta: false,
      alerta: {titulo: '', descricao: '', tipo: ''}
    }),

     components: {
      Topo,
      VagasFavoritas,
      Conteudo,
      Alerta
    },
    mounted() {
      this.emitter.on('alerta', (a) => {

        this.alerta = a
        console.log(this.alerta)
        this.exibirAlerta = true
        setTimeout(() => this.exibirAlerta = false, 3000)
      })
    }
  }
</script>


