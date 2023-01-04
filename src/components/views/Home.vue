<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisaVaga />
      </div>

      <ListaVagas >
      </ListaVagas>

    

      <div class="row mt-4">
        <div class="col-4">
          <Indicador
            titulo="Vagas abertas"
            bg="bg-dark"
            color="text-white"
            indicador="10"
          />
        </div>

        <div class="col-4">
          <Indicador
            titulo="Profissionais cadastrados"
            bg="bg-dark"
            color="text-white"
            indicador="65"
          />
        </div>

        <div class="col-2">
          <Indicador
            titulo="Visitantes online"
            bg="bg-light"
            color="text-dark"
            :indicador="usuariosOnline"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Indicador from "../comuns/Indicador.vue";
import ListaVagas from '../comuns/ListaVagas.vue'
import PesquisaVaga from "../comuns/PesquisarVaga.vue";
export default {
  name: "Home",
  components: {
    PesquisaVaga,
    Indicador,
    ListaVagas
  },
  data: () => ({
    usuariosOnline: 0
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101); //entre 0 e 100
    },
  },
  created() {
    setInterval(this.getUsuariosOnline, 2000); // a cada 2 segundos
  },

};

//:titulo="vaga.titulo"
          //:descricao="vaga.descricao"
          //:salario="vaga.salario"
          //:modalidade="vaga.modalidade"
          //:tipo="vaga.tipo"
          //:publicacao="vaga.publicacao"


          //v-slot:default="slotProps"
</script>
