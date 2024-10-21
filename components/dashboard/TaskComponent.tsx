"use client";
import { Checkbox } from "../ui/checkbox";
import { deleteTask, editTask, toggleTask } from "@/lib/actions";
import { Task } from "@prisma/client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const TaskComponent = ({ task }: { task: Task }) => {
  const [isDone, setIsDone] = useState(task.isDone);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div
      key={task.id}
      className="flex items-center justify-between p-4 my-2 bg-gray-100 rounded-md"
    >
      <div
        className={cn(
          task.isDone ? "line-through text-gray-400" : "text-black"
        )}
      >
        {task.title}
      </div>
      <div className="flex items-center gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-1" variant="destructive">
              <Trash className="w-4 h-4" />
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>This action cannot be undone</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this task ?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="destructive"
                onClick={async () => {
                  await deleteTask(task.id);
                }}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit task</DialogTitle>
              <DialogDescription>Change its name</DialogDescription>
            </DialogHeader>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsEditing(true);
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const name = formData.get("name") as string;
                await editTask(task.id, name);
                setIsEditing(false);
              }}
            >
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    defaultValue={task.title}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogTrigger asChild>
                  <Button type="submit" disabled={isEditing}>
                    Save changes
                  </Button>
                </DialogTrigger>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        <Checkbox
          checked={isDone}
          onCheckedChange={async () => {
            //optimistic update for better UX
            setIsDone((prev) => !prev);
            const taskUpdated = await toggleTask(task.id);
            if (!taskUpdated) {
              setIsDone((prev) => !prev);
            }
          }}
        />
      </div>
    </div>
  );
};

export default TaskComponent;
