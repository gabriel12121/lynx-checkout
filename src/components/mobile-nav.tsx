import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  Bell,
  Home,
  LineChart,
  Package2,
  ShoppingCart,
  Users,
  ChevronDown,
  Menu,
  GitPullRequest,
  Watch,
  CircleUserRound,
  Puzzle
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

export default function  MobileNav(){
  return(
<Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <span className="sr-only">Lynx Checkout</span>
                </Link>
                <Link
                  href="/dashboard"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/cliente"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <CircleUserRound  className="h-5 w-5" />
                  Clientes
                  
                </Link>
                <Link
                  href="/pedido"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                <Watch className="h-5 w-5" />
                  Pedidos
                </Link>
                <Link
                  href="/produto"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5"/>
                  Produtos
                </Link>
                <Link
                  href="/cupon"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Puzzle className="h-5 w-5" />
                  Cupon
                </Link>

                <Link
                  href="/app"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Integrações
                </Link>
                <Link
                  href="/leds"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Leads
                </Link>
                    <Collapsible className="group">
            <CollapsibleTrigger className="mx-[-0.65rem] flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted group-[.open]:bg-muted">
              <Link href="#" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-primary" >
               <GitPullRequest className="h-5 w-5" />
                Recuperação
              </Link>
              <ChevronDown className="h-4 w-4 transition-transform group-[.open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 pl-6">
              <Link
                href="/recover/pix"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-primary">
                Pix
              </Link>
              <Link
                href="/recover/billet"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-primary">
                Boleto
              </Link>
              <Link
                href="/recover/carts"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-primary">
                Carrinho
              </Link>
            </CollapsibleContent>
          </Collapsible>
              </nav>
            </SheetContent>
          </Sheet>
    )
}