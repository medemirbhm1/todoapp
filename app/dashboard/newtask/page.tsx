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
import { createTask } from "@/lib/actions";
import routes from "@/lib/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const taskFormSchema = z.object({
  task: z.string(),
});

export type TaskForm = z.infer<typeof taskFormSchema>;

function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof taskFormSchema>>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      task: "",
    },
  });
  async function onSubmit(values: TaskForm) {
    setLoading(true);
    const created = await createTask(values);
    if (created) {
      form.reset();
      router.push(routes.DASHBOARD);
    } else {
      form.setError("root", {
        message: "Failed to create task",
      });
    }
    setLoading(false);
  }
  return (
    <div className="container max-w-4xl pt-10">
      <h1 className="text-2xl lg:text-6xl text-center font-semibold mb-4">
        Add a new task
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            disabled={loading}
            control={form.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Task</FormLabel>
                <FormControl>
                  <Input placeholder="todo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormMessage>{form.formState.errors.root?.message}</FormMessage>
          <Button type="submit" className="w-full" disabled={loading}>
            Add
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Page;
