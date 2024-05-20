<script setup lang="ts">
import {
    PanelLeft,
} from 'lucide-vue-next'

import { Button } from '@/components/ui/button'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import NavigationItems from "./NavigationItems.vue";
</script>

<template>
    <Sheet>
        <SheetTrigger as-child>
            <Button size="icon" variant="outline" class="sm:hidden">
                <PanelLeft class="h-5 w-5" />
                <span class="sr-only">Toggle Menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left" class="sm:max-w-xs">
            <NavigationItems />
        </SheetContent>
    </Sheet>
</template>
