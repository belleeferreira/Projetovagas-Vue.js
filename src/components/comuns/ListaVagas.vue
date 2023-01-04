<template>
  <div>
    <slot :vagas="vagas">
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <Vaga v-bind="vaga" />
      </div>
    </div>
    </slot>
  </div>
</template>

<script>
import Vaga from "../comuns/Vaga.vue";
export default {
  name: "ListaVaga",
  data: () => ({
    vagas: []
  }),
    
  components: {
    Vaga
  },

  activated() {
    this.vagas = JSON.parse(localStorage.getItem('vagas'));
  },
  mounted() {
    this.emitter.on('filtrarVagas', (vaga) => {
      const vagas = JSON.parse(localStorage.getItem('vagas'));
      //recuperar vagas
      this.vagas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      ); // essa condição tem que ser true ou false: o metodo filter cria um novo array com todos os elementos que passaram no teste implementado na função
    });
  },
};
</script>
