


<template>
  <TooltipProvider>

  <body
    class="menu-position-side menu-side-left full-screen with-content-panel"
    v-if="true"
  >
    <Home />
  </body>

  <body v-else>
    <router-view></router-view>
  </body>
</TooltipProvider>

</template>

<script setup lang="ts">
import Login from "./pages/auth/Login.vue";
import Home from "./pages/home/Home.vue";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
</script>
