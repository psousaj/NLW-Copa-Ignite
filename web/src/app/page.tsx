import Image from "next/image"
import {getCounters} from '@/hooks/getCounters'

export default async function Home() {

  const counters =  await getCounters()

  return (
    <div className="max-w-[1124px] h-full mx-auto grid grid-cols-2 gap-28 items-center my-10">
      <main className="text-gray-100">
        <Image src='/assets/images/logo.svg' alt="logo" width={213} height={41} />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">Crie seu próprio Bolão da copa e compartilhe entre amigos!</h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src='/assets/images/avatares.png' alt="Avatar de usuários" width={158} height={57} />
          <strong className="text-xl">
            <span className="text-ignite-500">+{counters.countUsers ?? 0}</span> pessoas já estão usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
            type="text"
            required
            placeholder="Qual o nome do seu bolão"
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
          />
          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit">Crie meu bolão</button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar o seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src='/assets/images/icon-check.png' alt="Check" width={40} height={41} />
            <div>
              <span className="text-ignite-500">+{counters.countPools ?? 0}</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600" />

          <div className="flex items-center gap-6">
            <Image src='/assets/images/icon-check.png' alt="Check" width={40} height={41} />
            <div>
              <span className="text-ignite-500">+{counters.countGuesses ?? 0}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>

      </main>
      <Image src='/assets/images/preview-app.png' alt="Foto do preview do app" width={518} height={605} />
    </div>
  )
}
