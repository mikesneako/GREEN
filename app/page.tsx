import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import moon from "@/components/asset/moon.png"
import logo from "@/components/asset/logo.png"
import pump from "@/components/asset/logo.webp"
import CopyAddressBox from "@/components/copy-address"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex items-center justify-between p-6 border-b-4 border-primary">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary text-black font-black text-xl flex items-center justify-center neo-border neo-shadow transform rotate-3">
            <Image src={logo} width={100} height={100} alt="logo" />
          </div>
          <span className="text-3xl font-black text-white glitch-text">GREEN</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Button className="bg-accent text-black font-black text-lg px-6 py-3 neo-border-yellow neo-shadow-yellow neo-hover transform rotate-1">
            BUY GREEN!
          </Button>
        </nav>
      </header>

      <section className="relative overflow-hidden py-20">
        <div className="matrix-bg absolute inset-0 opacity-20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="bg-secondary text-green-500 font-black text-2xl px-8 py-4 neo-border-pink neo-shadow-pink inline-block transform -rotate-2 mb-8">
            $GREEN — THE MEME CANDLESTICK OF SOLANA
          </div>

          <div className="flex justify-center items-center glitch-text">
            <Image src={moon} alt="pepe" width={300} height={300} />
          </div>
          <div className="bg-black border-4 border-primary p-8 neo-shadow max-w-4xl mx-auto mb-12 transform rotate-1">
            <p className="text-2xl md:text-3xl font-bold mb-4">Where Charts Explode & Money Rains.</p>
            <CopyAddressBox address={"618686GJSGUGSDUTT16USGU"} />
            <p className="text-xl font-bold text-white mt-4">LIVE ON PUMP.FUN</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-white font-black md:text-2xl px-12 py-6 neo-border neo-shadow neo-hover transform -rotate-2 bounce-crazy"
            >
              GET GREEN NOW! <Image src={pump} alt="green" width={24} height={24} className="inline-block ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-green-500 mb-6 transform -rotate-1">
              INSIDE THE <span className="text-primary">GREEN</span> ECOSYSTEM
            </h2>
            <div className="bg-accent text-black font-bold text-xl px-8 py-4 neo-border-yellow neo-shadow-yellow inline-block transform rotate-2">
              FEATURES THAT MAKE TRADERS FOAM AT THE MOUTH!
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black border-4 border-primary p-8 neo-shadow neo-hover transform rotate-1">
              <div className="text-6xl mb-6 bounce-crazy">💵</div>
              <h3 className="text-2xl font-black mb-4 text-primary">CASH RAIN</h3>
              <p className="text-white font-bold">
                Every pump showers the community with bags of GREEN.
              </p>
            </Card>

            <Card className="bg-black border-4 border-secondary p-8 neo-shadow-pink neo-hover transform -rotate-1">
              <div className="text-6xl mb-6 bounce-crazy">📈</div>
              <h3 className="text-2xl font-black mb-4 text-secondary">CANDLE KING</h3>
              <p className="text-white font-bold">Big green candles that send charts into orbit.</p>
            </Card>

            <Card className="bg-black border-4 border-accent p-8 neo-shadow-yellow neo-hover transform rotate-2">
              <div className="text-6xl mb-6 bounce-crazy">🤣</div>
              <h3 className="text-2xl font-black mb-4 text-accent">MEME FACTORY</h3>
              <p className="text-white font-bold">Daily meme drops that make your bags heavier.</p>
            </Card>

            <Card className="bg-black border-4 border-primary p-8 neo-shadow neo-hover transform -rotate-2">
              <div className="text-6xl mb-6 bounce-crazy">🚀</div>
              <h3 className="text-2xl font-black mb-4 text-primary">MOON MISSIONS</h3>
              <p className="text-white font-bold">Community-led pumps to break the ATH again and again.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6 glitch-text">
                <span className="text-green-500">GREEN</span> PRICE TRAJECTORY & MARKET SENTIMENT
              </h2>
              <div className="bg-secondary text-green-500 font-bold text-xl px-8 py-4 neo-border-pink neo-shadow-pink inline-block transform -rotate-1">
                Where predictions meet hype: the journey of $GREEN!
              </div>
          </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-black border-4 border-primary p-6 neo-shadow transform rotate-1">
                  <div className="font-black text-2xl mb-2 text-green-500">Initial Launch</div>
                  <div className="text-white font-bold">Early adopters ignite the chart, sending $GREEN on its first moon mission.</div>
                </div>
                <div className="bg-black border-4 border-accent p-6 neo-shadow-yellow transform -rotate-1">
                  <div className="font-black text-2xl mb-2 text-accent">Growth Phase</div>
                  <div className="text-white font-bold">Community hype and utility fuel a steady climb, with memes and milestones driving momentum.</div>
                </div>
                <div className="bg-black border-4 border-secondary p-6 neo-shadow-pink transform rotate-2">
                  <div className="font-black text-2xl mb-2 text-secondary">Market Corrections</div>
                  <div className="text-white font-bold">Dips and volatility test diamond hands, but the GREEN army rallies for the next leg up.</div>
                </div>
                <div className="bg-black border-4 border-primary p-6 neo-shadow transform -rotate-2">
                  <div className="font-black text-2xl mb-2 text-green-500">Long-Term Outlook</div>
                  <div className="text-white font-bold">With every new partnership and meme drop, $GREEN aims for sustainable growth and legendary status.</div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-80 h-80 mx-auto bg-primary border-8 border-black flex items-center justify-center neo-shadow transform rotate-3 bounce-crazy">
                  <div className="text-9xl">

                    <Image src={logo} alt="moon" width={400} height={400} />
                  </div>
                </div>
                <div className="bg-accent text-black font-black text-xl px-8 py-4 neo-border-yellow neo-shadow-yellow inline-block transform -rotate-2 mt-8">
                  The future is bright, the candles are green, and the sentiment is bullish!
                </div>
              </div>
            </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black text-green-500 mb-8 glitch-text">
            READY TO RIDE THE <span className="text-primary">CANDLE</span>?
          </h2>

          <div className="bg-black border-4 border-secondary p-8 neo-shadow-pink max-w-4xl mx-auto mb-12 transform rotate-1">
            <p className="text-2xl md:text-3xl font-bold text-white">JOIN THE ARMY OF CHART DESTROYERS</p>
            <p className="text-xl font-bold text-accent mt-4">TURNING MEMES INTO MOONSHOTS!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-green-500 font-black md:text-3xl px-16 py-8 neo-border neo-shadow neo-hover transform -rotate-2 bounce-crazy"
            >
              BUY GREEN NOW! 💵📈
            </Button>
            <Button
              size="lg"
              className="bg-accent text-black font-black md:text-3xl px-16 py-8 neo-border-yellow neo-shadow-yellow neo-hover transform rotate-2"
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
                <Image src={logo} width={100} height={100} alt="logo" />
              </div>
              <span className="text-4xl font-black text-white glitch-text">GREEN</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-white hover:text-primary font-black text-xl transition-colors transform hover:scale-110">
                TWITTER
              </a>
              <a href="#" className="text-white hover:text-secondary font-black text-xl transition-colors transform hover:scale-110">
                DISCORD
              </a>
              <a href="#" className="text-white hover:text-accent font-black text-xl transition-colors transform hover:scale-110">
                TELEGRAM
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-secondary text-green-500 font-bold text-lg px-8 py-4 neo-border-pink neo-shadow-pink inline-block transform -rotate-1">
              © 2024 GREEN TOKEN • MAKING CHARTS GREENER ONE CANDLE AT A TIME! 📈
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
