<script lang="ts" setup>
import { UserMatters } from '../src'

ref: show = true
</script>

<template>
  <div class="mx-auto max-w-3xl">
    <button @click="show = !show">toggle!!</button>
    <div v-if="show">
      <UserMatters project="xxx" v-slot="{ handleClick }">
        <button @click="handleClick">a</button>
      </UserMatters>

      <UserMatters project="PROJECT_ID" v-slot="{ handleClick }">
        <button class="ml-20" @click="handleClick">feedback</button>
      </UserMatters>

      <div class="mt-20">
        <UserMatters project="xxx" />
      </div>
    </div>
  </div>
</template>
