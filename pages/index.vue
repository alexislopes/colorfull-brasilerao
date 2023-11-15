<script lang="ts" setup>

const { data: tabela } = useLazyAsyncData(
  'tabela',
  () => $fetch('https://api.api-futebol.com.br/v1/campeonatos/10/tabela', {
    headers: {
      Authorization: "Bearer test_130d87a3c51f64a4fe91b491654396"
    }
  })
)


const { data: campeonatos } = useLazyAsyncData(
  'campeonatos',
  () => $fetch('https://api.api-futebol.com.br/v1/campeonatos', {
    headers: {
      Authorization: "Bearer test_130d87a3c51f64a4fe91b491654396"
    }
  })
)

</script>

<template>
<div class="flex items-center justify-center h-screen">

  <table class="min-w-[20%]">
    <tbody>
      <tr v-for="clube in tabela" class="border border-[#ccc] rounded">
        <td>{{ clube.posicao }}</td>
        <td class="justify-center flex">
          <img :src="clube.time.escudo" alt="" class="h-7">
        </td>
        <td>
          {{ clube.time.nome_popular }}
        </td>
        <td>
          {{ clube.jogos }}
        </td>
        <td>
          {{ clube.vitorias }}
        </td>
        <td>
          {{ clube.derrotas }}
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<style scoped></style>
