<script setup lang="ts">
import {
    BadgeCent,
    Bell,
    BriefcaseMedical,
    CircleUser,
    Copy,
    CreditCard,
    File,
    Headset,
    Home,
    LineChart,
    ListFilter,
    Locate,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Pill,
    Search,
    Settings,
    ShoppingCart,
    Star,
    TestTube2,
    Truck,
    Users,
    Users2,
    Vegan,
} from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'


</script>

<template>

    <nav class="grid items-start px-2 text-sm font-medium lg:px-4 overflow-y-auto">
        <!-- <NavItem :is-active="true" label="HOME" :icon="Home" /> -->

        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <Home class="h-4 w-4" />
            Dashboard
        </RouterLink>

        <Separator />

        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <Home class="h-4 w-4" />
            Pharmacy
        </RouterLink>

        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <Home class="h-4 w-4" />
            Categories
        </RouterLink>
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <Package class="h-4 w-4" />
            Products
        </RouterLink>
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <ShoppingCart class="h-4 w-4" />
            Orders
            <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                6
            </Badge>
        </RouterLink>
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <Locate class="h-4 w-4" />
            Delivery Zones
        </RouterLink>
        <Separator class="my-3" />
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <ShoppingCart class="h-4 w-4" />
            Doctors
        </RouterLink>
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <Users class="h-4 w-4" />
            Patients
        </RouterLink>
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <ShoppingCart class="h-4 w-4" />
            Nurses
        </RouterLink>
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <Vegan class="h-4 w-4" />
            Deiticians
        </RouterLink>
        <Separator class="my-3" />
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <BriefcaseMedical class="h-4 w-4" />
            Consultations
        </RouterLink>
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <TestTube2 class="h-4 w-4" />
            Laboratories
        </RouterLink>
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <Pill class="h-4 w-4" />
            Medications
        </RouterLink>
        <Separator class="my-3" />
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <Star class="h-4 w-4" />
            Reviews
        </RouterLink>
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <BadgeCent class="h-4 w-4" />
            Payments
        </RouterLink>
        <RouterLink to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <Headset class="h-4 w-4" />
            Support
        </RouterLink>


        <a href="#"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
            <LineChart class="h-4 w-4" />
            Analytics
        </a>
    </nav>
</template>
