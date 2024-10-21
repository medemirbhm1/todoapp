"use client";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { editUser } from "@/lib/actions";
import routes from "@/lib/routes";
import { useUser } from "@/providers/UserProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const editUserFormSchema = z.object({
  email: z
    .string({
      message: "Email is required",
    })
    .email({
      message: "Invalid email address",
    }),
  name: z
    .string({
      message: "Name is required",
    })
    .min(2, {
      message: "Name must be at least 2 characters long",
    })
    .max(20, {
      message: "Name must be at most 20 characters long",
    }),
});

export type editUserForm = z.infer<typeof editUserFormSchema>;

export default function Page() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const form = useForm<z.infer<typeof editUserFormSchema>>({
    resolver: zodResolver(editUserFormSchema),
    defaultValues: {
      email: user?.email ?? "",
      name: user?.name ?? "",
    },
  });
  async function onSubmit(values: z.infer<typeof editUserFormSchema>) {
    try {
      setLoading(true);
      await editUser(values);
    } catch (err: unknown) {
      form.setError("root", {
        message: (err as { message: string }).message,
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen container flex items-center justify-center">
      <div className="w-full md:min-w-96 ">
        <h1 className="text-2xl mb-8 font-semibold lg:text-4xl">
          Edit your info
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              disabled={loading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Youba" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={loading}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="todos@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormMessage className="mt-2">
              {form.formState.errors.root?.message}
            </FormMessage>
            <Button type="submit" className="w-full" disabled={loading}>
              Save
            </Button>
            <Link href={routes.DASHBOARD}>
              <Button
                type="button"
                variant="secondary"
                className="w-full block mt-4"
                disabled={loading}
              >
                go back
              </Button>
            </Link>
          </form>
        </Form>
      </div>
    </div>
  );
}
