"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import routes from "@/lib/routes";

const navigationLinks = [
  { title: "Home", href: "#home" },
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="z-50 w-full bg-neutral-900 text-white backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          TODOS
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationLinks.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuLink
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5"
                  )}
                  href={link.href}
                >
                  {link.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button  className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              TODOS
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10">
              <div className="flex flex-col space-y-3">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </Link>
                ))}
                <Link className="block" href={routes.LOGIN}>
                  <Button className="w-full" variant="default">
                    Login
                  </Button>
                </Link>
                <Link className="block" href={routes.REGISTER}>
                  <Button className="w-full" variant="secondary">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden lg:flex gap-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/5 hover:text-white"
          >
            Register
          </Button>
          <Button variant="outline" className="text-black">Login</Button>
        </div>
      </div>
    </header>
  );
}
