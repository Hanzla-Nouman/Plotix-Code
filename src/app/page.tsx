import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine, CalendarIcon, Check, CheckCircle, ClockIcon, CreditCardIcon, Leaf, PaintbrushIcon, Star, StarIcon, UserIcon } from "lucide-react";
import CoachReel from "@/components/CoachReel";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? we offer a 30-day refund guarantee",
  },
  {
    name: "For the planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of our sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
    {/* Hero */}
     <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Unlock Your Creative Potential with Plotix.
            </h2>
            <p className="mt-4 text-gray-600">
              Plotix connects passionate creatives with top-tier coaches for personalized guidance and skill enhancement. With our innovative platform, managing your creative business and community has never been easier.
            </p>
            <div className="mt-6 space-x-2 flex flex-wrap">
              <Badge className="flex items-center space-x-1" variant="secondary">
                <Check className="h-4 w-4" />
                <span>Live Video Coaching</span>
              </Badge>
              <Badge className="flex items-center space-x-1" variant="secondary">
                <Check className="h-4 w-4" />
                <span>Easy Management</span>
              </Badge>
              <Badge className="flex items-center space-x-1" variant="secondary">
                <Check className="h-4 w-4" />
                <span>Personalised Packages</span>
              </Badge>
            </div>
            <div className="flex">
              <Button className="mt-6 bg-[#ff6546] text-white">Get Started</Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Book Package Card */}
              <Card className="w-80 drop-shadow-xl mb-8 p-4 bg-white rounded-lg z-1">
                  <Image
                    alt="Comic Writing Fundamentals"
                    className="rounded-md"
                    height={400}
                    src="/comic1.jpg"
                    width={300}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-semibold">Comic Writing Fundamentals</h2>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="secondary" className="text-orange-700">Visual Storytelling</Badge>
                      <Badge variant="secondary" className="text-orange-700">Dialogue</Badge>
                      <Badge variant="secondary" className="text-orange-700">Character Building</Badge>
                      <Badge variant="secondary" className="text-orange-700">Plot Structure</Badge>
                      <Button className="mt-2 mb-4 bg-[#0d050d]">Book Package</Button>

                    </div>
                  </div>
                </Card>

              {/* Coach Profile Card */}
              <Card className="w-64 drop-shadow-xl p-4 bg-white rounded-lg absolute top-0 right-0 transform translate-x-40 -translate-y-8 z-10">
              <div className="flex justify-center">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src="/lam3.jpeg"
            alt="Leanne Coach Profile"
            className="rounded-full"
            style={{
              objectFit: "cover",
            }}
          />
          <AvatarFallback>LL</AvatarFallback>
        </Avatar>
      </div>
  <div className="p-4 text-center">
    <h2 className="text-lg font-semibold">Leanne Lam</h2>
    <p className="text-gray-600 text-sm">Journalist & Podcast Host </p>
    <div className="flex flex-wrap justify-center gap-2 mt-2">
      <div className="flex gap-2 ">
        <Badge variant="secondary" className="text-orange-700">Script Writing</Badge>
        <Badge variant="secondary" className="text-orange-700">Interview Techniques</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="secondary" className="text-orange-700">Social Media</Badge>
        <Badge variant="secondary" className="text-orange-700">Content Writing</Badge>
      </div>
    </div>
  </div>
</Card>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/*How it works section */}

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Our platform helps you unlock your full potential through personalized coaching and accountability.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                <UserIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Find your Coach</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Explore and choose the right creative professional for you.</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                <CalendarIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Engage & Learn</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Book and attend live 1:1 video coaching sessions easily.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                <Star className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Succeed Creatively</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Track progress and grow with professional creative support.                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/*Packages section */}

<section className="w-full py-12 md:py-24 lg:py-32">
  <div className="container grid gap-8 px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Coaching Packages</h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Unlock your full potential with our tailored coaching services.
        </p>
      </div>
    </div>
    <div className="relative flex justify-center items-center">
      {/* First Card - Left */}
      <div className="group absolute z-10 left-1/2 transform -translate-x-[150%] w-80 overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950" style={{ filter: 'blur(5px)' }}>
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Film Package</span>
        </Link>
        <img
          src="/background2.webp"
          alt="Film Package"
          width={300}
          height={200}
          className="object-cover w-full h-32 group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <img src="/person2.jpg" alt="Coach Name" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-bold">Film Package</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">by Jane Smith</p>
            </div>
            <Badge variant="outline" className="border-orange-700 text-primary text-orange-700">
              Film
            </Badge>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
            Transform your cinematic vision into a captivating reality with expert guidance from our seasoned filmmaking coaches.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">$699</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">15 Sessions</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Cinematography
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Directing
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Editing
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Screenwriting
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="px-4 py-2 text-sm bg-black">Book Now</Button>
          </div>
        </div>
      </div>

      {/* Second Card - Center */}
      <div className="group relative z-20 w-80 overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950 mx-4">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Writing Package</span>
        </Link>
        <img
          src="/anim.jpg"
          alt="Writing Package"
          width={300}
          height={200}
          className="object-cover w-full h-32 group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <img src="/mikee.jpg" alt="Coach Name" className="object-cover" />
            </Avatar>
            <div>
              <h3 className="text-lg font-bold">How To Break Into Animation Writing</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">by Michael Beall</p>
            </div>
            <Badge variant="outline" className="border-orange-700 text-primary text-orange-700">
              Writing
            </Badge>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            New writers spend a lot of time sharpening their skills to produce quality reading material in hopes of landing jobs. But it takes more than owning a library of samples to have a successful writing career in animation. For anyone wanting to break into the industry, this means tapping into as many resources available to multiply your odds of success.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">From $125</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">5 Sessions</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Character Development
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              World Building
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Plot Structure
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Dialogue
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="px-4 py-2 text-sm bg-black">Book Now</Button>
          </div>
        </div>
      </div>

      {/* Third Card - Right */}
      <div className="group absolute z-10 right-1/2 transform translate-x-[150%] w-80 overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950" style={{ filter: 'blur(5px)' }}>
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Music Package</span>
        </Link>
        <img
          src="/bg5.png"
          alt="Music Package"
          width={300}
          height={200}
          className="object-cover w-full h-32 group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <img src="/person3.png" alt="Coach Name" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-bold">Music Package</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">by Michael Johnson</p>
            </div>
            <Badge variant="outline" className="border-orange-700 text-primary text-orange-700">
              Music
            </Badge>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
            Ignite your musical passion and unleash your creative potential with personalized guidance from our accomplished music coaches.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">$799</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">20 Sessions</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Composition
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Production
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Songwriting
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Performance
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="px-4 py-2 text-sm bg-black">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/*USER CTA section */}

<section className="bg-[#242424] py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-bold text-white">Ready to elevate?</h2>
          <p className="text-xl text-gray-300">
          Connect with top creative professionals for personalized video coaching. Share your goals, budget, and background, and we’ll find the perfect mentor for you
          </p>
          <Button className="bg-[#EE733C] text-white">Join Plotix</Button>
        </div>
      </div>
    </section>

     {/* Coaches Section */}
     <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Coaches</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Unlock your full potential with our tailored coaching services.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Writing Package</span>
            </Link>
            <div className="p-4 space-y-2">
             
              <div className="flex justify-center">
                <Avatar className="h-16 w-16">
                  <img src="/coach7.png" alt="Coach Name" className="object-cover" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold">Monique El-Faizy</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Paris, France</p>
                </div>
                <Badge variant="outline" className="order-orange-700 text-orange-700">
                  News
                </Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
              Monique El-Faizy is a Paris-based journalist and author. She has written for a wide variety of publications, including The New York Times, the Guardian, the Washington Post, the Financial Times
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                Reporting
                 </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Ethics & Standards
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Feature Writing
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Interview Techniques
                </div>
              </div>
              <Button className="w-full px-4 py-3 text-base bg-black">Work with Monique</Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Film Package</span>
            </Link>
            <div className="p-4 space-y-2">
             
              <div className="flex justify-center">
                <Avatar className="h-16 w-16">
                  <img src="/karla.png" alt="Coach Name" className="object-cover" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold">Karla Williams</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Reading, UK</p>
                </div>
                <Badge variant="outline" className="order-orange-700 text-orange-700">
                    Film & TV
                </Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
              Karla Williams is an award-winning writer and executive producer working in TV, short film, and scripted audio
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Story Telling
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Podcast Writing
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Monologue Writing
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Pitching
                </div>
              </div>
              <Button className="w-full px-4 py-3 text-base bg-black">Work with Karla</Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Music Package</span>
            </Link>
            <div className="p-4 space-y-2">
              
              <div className="flex justify-center">
                <Avatar className="h-16 w-16">
                  <img src="/amy.jpeg" alt="Coach Name" className="object-cover" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold">Amy Snook</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">California, U.S</p>
                </div>
                <Badge variant="outline" className="order-orange-700 text-orange-700">
                  Non-Fiction
                </Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">b
              Amy Snook is a book marketer, writer, and community builder.
Currently leading marketing for authors at Melcher Media. Founder of Parea Books
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Publishing Strategy
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Community Building
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Self-Publishing
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Book Proposals
                </div>
              </div>
              <Button className="w-full px-4 py-3 text-base bg-black">Work with Amy</Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Art Package</span>
            </Link>
            <div className="p-4 space-y-2">
            
              <div className="flex justify-center">
                <Avatar className="h-16 w-16">
                  <img src="/loui.png" alt="Coach Name" className="object-cover" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold">Louie Pearlman</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">New York, U.S</p>
                </div>
                <Badge variant="outline" className="border-orange-700 text-primary text-orange-700">
                  Theatre
                </Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                Louie is a writer for The Sesame Street Podcast with Foley and Friends and Ready Set Ride with Elmo, co-produced by Sesame Workshop and Audible
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Comedy Writing
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Childrens Media
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Comics
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Personal Brand
                </div>
              </div>
              <Button className="w-full px-4 py-3 text-base bg-black">Work with Louie</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Coach CTA */}
    
    <section className="bg-[#f7f8fa] py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#333] mb-4">Passion Meets Purpose.</h2>
        <p className="text-lg text-[#666] mb-12">
          Elevate your coaching experience with flexibility, autonomy, and increased earnings—join us today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow">
                <CreditCardIcon className="text-[#666] h-6 w-6" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#333]">More Money</h3>
                  <p className="text-sm text-[#666]">
                  During beta, keep 100% of your earnings. No fees.

</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow">
                <ClockIcon className="text-[#666] h-6 w-6" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#333]">Teach Anytime</h3>
                  <p className="text-sm text-[#666]">Teach sessions tailored to your availability.</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow">
                <PaintbrushIcon  className="text-[#666] h-6 w-6" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#333]">Your Teaching Style</h3>
                  <p className="text-sm text-[#666]">
                    Freedom to shape sessions, teaching authentically in your style.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="/person1.jpeg" alt="Coach" className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-black" >Become a Coach</Button>
        </div>
      </div>
    </section>

{/*FAQ Section */}
<div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Get answers to the most common questions about our business.
          </p>
        </div>
        <div className="space-y-4">
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex justify-between space-x-4 px-4 py-3">
                <h4 className="text-lg font-semibold">What is Plotix?</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
              Plotix is an online platform connecting individuals with skilled coaches who offer personalized guidance and support in various creative disciplines.

              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex justify-between space-x-4 px-4 py-3">
                <h4 className="text-lg font-semibold"> How do I become a coach on Plotix?</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
              To become a coach on Plotix, sign up for an account and submit a short application. Once your application is reviewed and approved, you can start offering your personalized 1:1 video sessions to clients.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <AccordionItem value="item-3">
              <AccordionTrigger className="flex justify-between space-x-4 px-4 py-3">
                <h4 className="text-lg font-semibold">How do I schedule a session?</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
              Once you’ve signed up and your application is approved, you can schedule sessions directly through the Plotix platform. Clients can book available time slots based on your calendar.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <AccordionItem value="item-4">
              <AccordionTrigger className="flex justify-between space-x-4 px-4 py-3">
                <h4 className="text-lg font-semibold">What types of sessions can I offer?</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
              Currently, Plotix supports personalized 1:1 video sessions, which are offered on an hourly rate basis. Additionally, you can build custom packages with different tiers, number of sessions, and price breakdowns to suit your clients' needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
      </div>
    </div>
    
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          
         
        </div>

    {/* Coach Reel */}
        <CoachReel href="/Coaches" title="Brand new Coaches" />
      </MaxWidthWrapper>

      
    </>
  );
}


