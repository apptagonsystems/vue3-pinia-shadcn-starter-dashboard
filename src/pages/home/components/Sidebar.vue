<template>
    <aside class="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex">
        <div class="flex h-14 items-center border-b px-4 py-5 lg:h-[60px] lg:px-6 ">
            <a href="/" class="flex items-center gap-2 font-semibold">
                <Package2 class="h-6 w-6" />
                <span class="">eDok</span>
            </a>
            <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
                <Bell class="h-4 w-4 " />
                <span class="sr-only">Toggle notifications</span>
            </Button>
        </div>
        <NavigationItems />
    </aside>

</template>

<script setup lang="ts">
import {
    Bell,
    Package2,
} from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import NavigationItems from './NavigationItems.vue';
</script>
