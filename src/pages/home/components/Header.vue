<script setup lang="ts">
import {
    CircleUser,
    Search,
} from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import MobileSidebar from "./MobileSidebar.vue";
</script>

<template>

    <header
        class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <MobileSidebar />


        <Breadcrumb class="hidden md:flex">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink as-child>
                        <a href="#">Dashboard</a>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink as-child>
                        <a href="#">Orders</a>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Recent Orders</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <div class="relative ml-auto flex-1 md:grow-0">
            <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..."
                class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" />
        </div>
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Button variant="secondary" size="icon" class="rounded-full">
                    <CircleUser class="h-5 w-5" />
                    <span class="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </header>
</template>
