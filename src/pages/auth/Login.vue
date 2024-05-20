<template>
  <div class="flex fle-col justify-center items-center mt-32">
    <Card class="w-full max-w-sm items-center">
      <CardHeader>
        <CardTitle class="text-2xl text-center"> Login </CardTitle>
        <!-- <CardDescription class="text-center">
          Enter your email below to login to your account.
        </CardDescription> -->
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <!-- <Label for="email">Email</Label> -->
          <Input id="email" type="email" placeholder="Email" required />
        </div>
        <div class="grid gap-2">
          <!-- <Label for="phone">Phone</Label> -->
          <Input id="phone" type="text" required placeholder="Phone" />
        </div>
        <div class="grid gap-2">
          <!-- <Label for="password">Password</Label> -->
          <Input
            id="password"
            type="password"
            required
            placeholder="Password"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button class="w-full"> Login </Button>
      </CardFooter>
    </Card>
  </div>
</template>
  
<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
</script>
  
