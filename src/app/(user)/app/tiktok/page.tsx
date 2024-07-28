import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export default function Tiktok(){
	return(
          <div className="flex min-h-screen w-full flex-col">

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Tiktok</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
          >
            <Link href="#" className="font-semibold text-primary">
              
            </Link>
            <Link href="#"></Link>
            <Link href="#"></Link>
            <Link href="#"></Link>
            <Link href="#"></Link>
            <Link href="#"></Link>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              
              <CardContent>

               <div className="grid gap-4">

          <div className="grid gap-2">
            <Label htmlFor="email">Nome do pixel *
</Label>
            <Input
              id="email"
              type="text"
            />
          </div>
                    <div className="grid gap-2">
            <Label htmlFor="email">ID do pixel *
</Label>
            <Input
              id="email"
              type="text"
            />
          </div>
      
   
		        </div>
              </CardContent>

            </Card>

          </div>
        </div>
      </main>
    </div>
	)
}