import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-pink-800">Welcome to Arab Sweets</h1>
        <p className="text-xl text-pink-600">Discover the rich flavors of Middle Eastern desserts</p>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white">Shop Now</Button>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Our Popular Sweets</h2>
          <ul className="space-y-2">
            <li>Baklava</li>
            <li>Kunafa</li>
            <li>Maamoul</li>
            <li>Qatayef</li>
          </ul>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="/placeholder.svg"
            alt="Assorted Arab Sweets"
            width={400}
            height={300}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto">
          Arab Sweets brings you the authentic taste of Middle Eastern desserts. Our recipes have been passed down through generations, ensuring that each bite is a journey through rich cultural traditions.
        </p>
      </section>
    </div>
  )
}