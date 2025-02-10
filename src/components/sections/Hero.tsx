import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Build something amazing with modern tools
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Create stunning web applications with our modern stack featuring Vite, React, TypeScript, and Tailwind CSS. Get started quickly and build with confidence.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg">
              Get started
            </Button>
            <Button variant="ghost" size="lg">
              Learn more <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
        
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative w-[40rem] h-[35rem] sm:w-[57rem] md:-ml-4 lg:-ml-0">
              <div className="absolute w-full h-full rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 [mask-image:radial-gradient(closest-side,white,transparent)] sm:h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="space-y-8 text-center">
                    <div className="space-y-6">
                      <div className="flex justify-center gap-4">
                        <div className="w-24 h-24 rounded-2xl bg-primary/10 animate-pulse"></div>
                        <div className="w-24 h-24 rounded-2xl bg-primary/10 animate-pulse delay-100"></div>
                        <div className="w-24 h-24 rounded-2xl bg-primary/10 animate-pulse delay-200"></div>
                      </div>
                      <div className="flex justify-center gap-4">
                        <div className="w-24 h-24 rounded-2xl bg-primary/10 animate-pulse delay-300"></div>
                        <div className="w-24 h-24 rounded-2xl bg-primary/10 animate-pulse delay-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}