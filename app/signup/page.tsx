"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import routes from "@/lib/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signupFormSchema = z
  .object({
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
    password: z
      .string()
      .min(6, {
        message: "Password must be at least 6 characters long",
      })
      .max(20, {
        message: "Password must be at most 20 characters long",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
  });
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof signupFormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      }
      router.push("/dashboard");
    } catch (err: unknown) {
      form.setError("root", {
        message: (err as { message: string }).message,
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription>
            Start managing your tasks and boost your productivity
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
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
              <FormField
                disabled={loading}
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="●●●●●●●" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                disabled={loading}
                control={form.control}
                name="confirmPassword"
                rules={{
                  validate: {
                    match: (value) =>
                      value === form.getValues("password") ||
                      "Passwords do not match",
                  },
                  value: form.getValues("password"),
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="●●●●●●●" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormMessage className="mt-2">
                {form.formState.errors.root?.message}
              </FormMessage>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Loading..." : "Connect"}
              </Button>
              <p className="mt-4 text-neutral-500 text-sm ">
                Already have an account ?{" "}
                <Link href={routes.LOGIN} className="hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
