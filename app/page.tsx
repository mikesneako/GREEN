import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex items-center justify-between p-6 border-b-4 border-primary">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary text-black font-black text-xl flex items-center justify-center neo-border neo-shadow transform rotate-3">
            G
          </div>
          <span className="text-3xl font-black text-primary glitch-text">GREEN</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className="text-white hover:text-primary font-bold text-lg transition-colors transform hover:scale-110"
          >
            ABOUT
          </a>
          <a
            href="#tokenomics"
            className="text-white hover:text-primary font-bold text-lg transition-colors transform hover:scale-110"
          >
            TOKENOMICS
          </a>
          <a
            href="#roadmap"
            className="text-white hover:text-primary font-bold text-lg transition-colors transform hover:scale-110"
          >
            ROADMAP
          </a>
          <Button className="bg-accent text-black font-black text-lg px-6 py-3 neo-border-yellow neo-shadow-yellow neo-hover transform rotate-1">
            BUY GREEN!
          </Button>
        </nav>
      </header>

      <section className="relative overflow-hidden py-20">
        <div className="matrix-bg absolute inset-0 opacity-20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="bg-secondary text-white font-black text-2xl px-8 py-4 neo-border-pink neo-shadow-pink inline-block transform -rotate-2 mb-8">
            🌱 THE FUTURE IS GREEN AF! 🌱
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="text-primary glitch-text block">JOIN THE</span>
            <span className="text-accent block transform rotate-1">GREEN</span>
            <span className="text-secondary block transform -rotate-1">REVOLUTION!</span>
          </h1>

          <div className="bg-black border-4 border-primary p-8 neo-shadow max-w-4xl mx-auto mb-12 transform rotate-1">
            <p className="text-2xl md:text-3xl font-bold mb-4">FUELING THE CRYPTO MOVEMENT WITH</p>
            <p className="text-4xl md:text-5xl font-black text-accent">ECO-CONSCIOUSNESS!</p>
            <p className="text-xl font-bold text-primary mt-4">MEME IT • GREEN IT • OWN IT!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-black font-black text-2xl px-12 py-6 neo-border neo-shadow neo-hover transform -rotate-2 bounce-crazy"
            >
              GET GREEN NOW! 🚀
            </Button>
            <Button
              size="lg"
              className="bg-secondary text-white font-black text-2xl px-12 py-6 neo-border-pink neo-shadow-pink neo-hover transform rotate-2"
            >
              READ WHITEPAPER 📄
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 transform -rotate-1">
              INSIDE THE <span className="text-primary">GREEN</span> ECOSYSTEM
            </h2>
            <div className="bg-accent text-black font-bold text-xl px-8 py-4 neo-border-yellow neo-shadow-yellow inline-block transform rotate-2">
              REVOLUTIONARY FEATURES THAT MAKE US LEGENDARY!
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black border-4 border-primary p-8 neo-shadow neo-hover transform rotate-1">
              <div className="text-6xl mb-6 bounce-crazy">🌱</div>
              <h3 className="text-2xl font-black mb-4 text-primary">CARBON NEGATIVE</h3>
              <p className="text-white font-bold">
                Every transaction plants a virtual tree and offsets carbon emissions!
              </p>
            </Card>

            <Card className="bg-black border-4 border-secondary p-8 neo-shadow-pink neo-hover transform -rotate-1">
              <div className="text-6xl mb-6 bounce-crazy">🚀</div>
              <h3 className="text-2xl font-black mb-4 text-secondary">MEME ENGINE</h3>
              <p className="text-white font-bold">AI-powered meme generation with GREEN rewards for creators!</p>
            </Card>

            <Card className="bg-black border-4 border-accent p-8 neo-shadow-yellow neo-hover transform rotate-2">
              <div className="text-6xl mb-6 bounce-crazy">💎</div>
              <h3 className="text-2xl font-black mb-4 text-accent">DIAMOND HANDS</h3>
              <p className="text-white font-bold">Staking rewards that grow over time for true believers!</p>
            </Card>

            <Card className="bg-black border-4 border-primary p-8 neo-shadow neo-hover transform -rotate-2">
              <div className="text-6xl mb-6 bounce-crazy">🌍</div>
              <h3 className="text-2xl font-black mb-4 text-primary">GLOBAL IMPACT</h3>
              <p className="text-white font-bold">Real environmental projects funded by our community!</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 glitch-text">
              <span className="text-primary">GREEN</span> TOKENOMICS
            </h2>
            <div className="bg-secondary text-white font-bold text-xl px-8 py-4 neo-border-pink neo-shadow-pink inline-block transform -rotate-1">
              1 BILLION TOKENS OF PURE GREEN ENERGY!
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-black border-4 border-primary p-6 neo-shadow transform rotate-1">
                <div className="flex justify-between items-center">
                  <span className="font-black text-xl">TOTAL SUPPLY</span>
                  <span className="text-primary font-black text-2xl">1B GREEN</span>
                </div>
              </div>

              <div className="bg-black border-4 border-accent p-6 neo-shadow-yellow transform -rotate-1">
                <div className="flex justify-between items-center">
                  <span className="font-black text-xl">LIQUIDITY POOL</span>
                  <span className="text-accent font-black text-2xl">40%</span>
                </div>
              </div>

              <div className="bg-black border-4 border-secondary p-6 neo-shadow-pink transform rotate-2">
                <div className="flex justify-between items-center">
                  <span className="font-black text-xl">COMMUNITY REWARDS</span>
                  <span className="text-secondary font-black text-2xl">30%</span>
                </div>
              </div>

              <div className="bg-black border-4 border-primary p-6 neo-shadow transform -rotate-2">
                <div className="flex justify-between items-center">
                  <span className="font-black text-xl">ECO FUND</span>
                  <span className="text-primary font-black text-2xl">20%</span>
                </div>
              </div>

              <div className="bg-black border-4 border-accent p-6 neo-shadow-yellow transform rotate-1">
                <div className="flex justify-between items-center">
                  <span className="font-black text-xl">TEAM & DEV</span>
                  <span className="text-accent font-black text-2xl">10%</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-80 h-80 mx-auto bg-primary border-8 border-black flex items-center justify-center neo-shadow transform rotate-3 bounce-crazy">
                <div className="text-9xl">🌱</div>
              </div>
              <div className="bg-accent text-black font-black text-xl px-8 py-4 neo-border-yellow neo-shadow-yellow inline-block transform -rotate-2 mt-8">
                BUILT FOR SUSTAINABILITY, DESIGNED FOR GROWTH!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-8 glitch-text">
            READY TO GO <span className="text-primary">GREEN</span>?
          </h2>

          <div className="bg-black border-4 border-secondary p-8 neo-shadow-pink max-w-4xl mx-auto mb-12 transform rotate-1">
            <p className="text-2xl md:text-3xl font-bold text-white">JOIN THOUSANDS OF ECO-CONSCIOUS CRYPTO LEGENDS</p>
            <p className="text-xl font-bold text-accent mt-4">BUILDING A SUSTAINABLE FUTURE, ONE MEME AT A TIME!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-black font-black text-3xl px-16 py-8 neo-border neo-shadow neo-hover transform -rotate-2 bounce-crazy"
            >
              BUY GREEN NOW! 🌱💰
            </Button>
            <Button
              size="lg"
              className="bg-accent text-black font-black text-3xl px-16 py-8 neo-border-yellow neo-shadow-yellow neo-hover transform rotate-2"
            >
              JOIN COMMUNITY! 🚀
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-primary py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <div className="w-16 h-16 bg-primary text-black font-black text-2xl flex items-center justify-center neo-border neo-shadow transform rotate-3">
                G
              </div>
              <span className="text-4xl font-black text-primary glitch-text">GREEN</span>
            </div>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-white hover:text-primary font-black text-xl transition-colors transform hover:scale-110"
              >
                TWITTER
              </a>
              <a
                href="#"
                className="text-white hover:text-secondary font-black text-xl transition-colors transform hover:scale-110"
              >
                DISCORD
              </a>
              <a
                href="#"
                className="text-white hover:text-accent font-black text-xl transition-colors transform hover:scale-110"
              >
                TELEGRAM
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-secondary text-white font-bold text-lg px-8 py-4 neo-border-pink neo-shadow-pink inline-block transform -rotate-1">
              © 2024 GREEN TOKEN • MAKING CRYPTO GREENER, ONE MEME AT A TIME! 🌱
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
