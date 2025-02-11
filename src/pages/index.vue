<template>
  <div id="app" class="scroll-smooth">
    <section
      class="text-white font-dyna realtive"
      style="background-color: #ece5d5"
    >
      <div
        class="navigation bg-white rounded-md h-32 flex items-center justify-between py-3 px-6 bg-opacity-50 backdrop-blur"
      >
        <div class="text-black font-bold text-3xl">$XING</div>
        <div class="flex items-center justify-end space-x-6 text-black">
          <nuxt-link :to="{ hash: '#about' }" class="hidden md:block">
            About</nuxt-link
          >
          <nuxt-link :to="{ hash: '#roadmap' }" class="hidden md:block">
            Roadmap
          </nuxt-link>
          <a target="_blank" href="https://x.com/XingXingonX">X</a>
          <a
            target="_blank"
            href="https://t.me/xing_xing_cto"
            class="hidden md:block"
          >
            Telegram
          </a>
          <a
            target="_blank"
            href="https://raydium.io/swap/?outputMint=5JcdnWEwuHh1v3SAARq8zH9tEwDQGpaHzBrZ81m4pump&inputMint=sol"
            class="border-2 border-black rounded-md px-4 p-1 uppercase buy-btn text-zinc-800 border-zinc-800"
          >
            Buy $xing
          </a>
        </div>
      </div>
      <div class="relative">
        <!-- <div
          class="absolute top-24 flex flex-col items-center justify-center w-full"
        >
          <h1 class="text-3xl text-zinc-800">
            The Cutest TikTok Monkey on Sol!
          </h1>
        </div> -->
        <!-- Mobile -->
        <picture>
          <source
            srcset="@/assets/img/banner_small.jpeg"
            media="(max-width: 600px)"
          />
          <!-- Tablet -->
          <!-- Default -->
          <img
            src="@/assets/img/banner.jpeg"
            alt="Responsive Image"
            class="inset-0 w-full h-[500px] md:h-full object-cover object-right md:object-center"
          />
        </picture>
        <div
          class="absolute bottom-6 md:bottom-12 flex flex-col items-center justify-center w-full"
        >
          <a
            target="_blank"
            href="https://raydium.io/swap/?outputMint=5JcdnWEwuHh1v3SAARq8zH9tEwDQGpaHzBrZ81m4pump&inputMint=sol"
            class="border-2 border-black rounded-md px-6 bg-white p-2 w-[200px] md:w-64 uppercase text-gold mt-8 md:text-xl buy-btn text-zinc-800 flex items-center"
          >
            Buy $xing
          </a>
          <!-- <a
            target="_blank"
            href="https://raydium.io/swap/?outputMint=5JcdnWEwuHh1v3SAARq8zH9tEwDQGpaHzBrZ81m4pump&inputMint=sol"
            class="border-2 border-black rounded-md px-4 p-1 uppercase buy-btn text-zinc-800 border-zinc-800 bg-white"
          >
            Buy $xing
          </a> -->
        </div>
      </div>
    </section>
    <section class="bg-white font-dyna w-full" id="about">
      <div
        class="w-full mx-auto py-24 flex items-center flex-col px-4"
        style="max-width: 780px"
      >
        <h2 class="text-zinc-800 text-4xl text-center font-semibold">
          The Lore: Story of courage and bond
        </h2>
        <p class="text-zinc-800 my-8 font-onest text-lg text-center">
          Xing, a courageous monkey who lost an arm to a bear trap, has found a
          sanctuary of care and love at a temple under the watchful eye of her
          devoted companion, "Grandma." Her incredible story has resonated
          across the globe, making her an internet sensation. Visitors come from
          far and wide to witness her resilience and share treats, drawn to her
          lively and charming personality. While she appreciates the kindness,
          Xing Xing maintains her independence, reminding everyone of the
          strength and courage that define her remarkable journey.
        </p>
        <iframe
          width="560"
          height="315"
          class="hidden md:block"
          src="https://www.youtube.com/embed/1C1yoO7jiRk?si=3B5Gt_lWBy2WXpj0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
    <section class="font-dyna w-full bg-white">
      <div
        class="w-full mx-auto p-8 md:p-16 rounded-xl"
        style="max-width: 1380px; background: rgb(208 184 134)"
      >
        <h2 class="text-zinc-800 text-4xl text-center font-semibold">
          How to Buy?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 my-8">
          <div class="p-6 border-gold rounded">
            <h4 class="text-xl text-zinc-800">1) Create a wallet</h4>
            <p class="text-zinc-800 font-onest mt-2">
              Visit <a href="phantom.app">phantom.app</a> and follow the simple
              steps to create a new account with the Phantom app or browser
              extension.
            </p>
          </div>
          <div class="p-6 border-gold rounded">
            <h4 class="text-xl text-zinc-800">2) Get some $SOL</h4>
            <p class="text-zinc-800 font-onest mt-2">
              Tap the BUY button in the app to purchase Solana, or deposit $SOL
              to your Phantom wallet from the crypto exchange of your choice.
            </p>
          </div>
          <div class="p-6 border-gold rounded">
            <h4 class="text-xl text-zinc-800">3) Swap $SOL for $Xing ‍</h4>
            <p class="text-zinc-800 font-onest mt-2">
              Tap the SWAP icon in your Phantom wallet and paste the $Xing token
              address. Swap your $SOL for $Xing.
            </p>
          </div>
          <div class="p-6 border-gold rounded">
            <h4 class="text-xl text-zinc-800">4) You're xing-xang! ‍</h4>
            <p class="text-zinc-800 font-onest mt-2">
              Welcome to the Xing family!
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center">
          <p class="text-lg text-center text-zinc-800 font-onest">
            You can now easily buy $XING using applepay on the moonshot app!
          </p>
          <button
            class="border-2 border-black rounded-md px-4 bg-white p-2 w-[300px] md:w-96 uppercase text-zinc-800 mt-8 text-xl md:text-2xl buy-btn text-zinc-800 border-zinc-800"
          >
            Ape in With moonshot
          </button>
        </div>
      </div>
    </section>

    <section class="bg-white font-dyna w-full" id="roadmap">
      <div class="w-full mx-auto py-24" style="max-width: 1380px">
        <h2 class="text-zinc-800 text-4xl text-center">Road to $1 Billion</h2>
        <div class="text-zinc-800 p-8 mt-16">
          <!-- Your content here -->
          <div
            class="mx-auto grid grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:grid-cols-4"
          >
            <div class="">
              <time
                datetime="August 2021"
                class="flex items-center text-xl font-semibold leading-6 text-gold-bright"
              >
                <svg
                  viewBox="0 0 4 4"
                  class="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                $60m
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 dark:bg-gray-500 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                ></div>
              </time>
              <p
                class="mt-6 font-medium leading-8 tracking-tight text-zinc-900"
              >
                $1m to $60m marketcap
              </p>
              <p class="mt-1 text-pretty text-zinc-900 font-onest">
                - Build a stable community and work on the initially abandoned
                project
                <br />
                - Reach holder count of 10.000
                <br />
                - Get listed on Tier 2 and 3 CEX
              </p>
            </div>
            <div>
              <time
                datetime="December 2021"
                class="flex items-center text-xl font-semibold leading-6 text-gold-bright"
              >
                <svg
                  viewBox="0 0 4 4"
                  class="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                $200m
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 dark:bg-gray-500 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                ></div>
              </time>
              <p
                class="mt-6 font-medium leading-8 tracking-tight text-zinc-900"
              >
                $100m to $200m usd marketcap
              </p>
              <p class="mt-1 text-pretty text-zinc-900 font-onest">
                - Get listed on tier 1 CEX, to ensure stabilty of the project<br />
                - Reach holder count of 30.000 holders
              </p>
            </div>
            <div>
              <time
                datetime="December 2021"
                class="flex items-center text-xl font-semibold leading-6 text-gold-bright"
              >
                <svg
                  viewBox="0 0 4 4"
                  class="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                $600m
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 dark:bg-gray-500 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                ></div>
              </time>
              <p
                class="mt-6 font-medium leading-8 tracking-tight text-zinc-900"
              >
                $200m to $600m usd marketcap
              </p>
              <p class="mt-1 text-pretty text-zinc-900 font-onest">
                - Donate a dollar amount to grandma Ye and the monastary - Reach
                <br />
                holder count of 60.000 holders
              </p>
            </div>
            <div>
              <time
                datetime="December 2021"
                class="flex items-center text-xl font-semibold leading-6 text-gold-bright"
              >
                <svg
                  viewBox="0 0 4 4"
                  class="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                </svg>
                $1 billion
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 dark:bg-gray-500 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                ></div>
              </time>
              <p
                class="mt-6 font-medium leading-8 tracking-tight text-zinc-900"
              >
                $1 billion usd martketcap
              </p>
              <p class="mt-1 text-pretty text-zinc-900 font-onest">
                - Commision a bionic arm for Xing through Elon Musk's Neuralink,
                so Xing is finally able to use both hands
              </p>
            </div>
          </div>
        </div>
        <!-- Dark Mode Toggle -->
      </div>
    </section>
    <section class="bg-white font-dyna w-full">
      <!-- <div class="w-full mx-auto py-16 grid col-span-2  bg-gold rounded-xl px-16 " style=" max-width: 1380px;" > -->

      <div
        class="w-full mx-auto py-16 grid col-span-2 bg-zinc-900 rounded-t-xl px-16"
        style="max-width: 1380px"
      >
        <h2 class="text-white text-4xl text-center">Xing on Socials</h2>
        <div class="flex space-x-8 flex items-center justify-center mt-12">
          <a
            class="border-2 border-white-700 rounded-md p-2 uppercase buy-btn cursor-pointer"
            target="_blank"
            href="https://x.com/XingXingonX"
          >
            <img class="h-8 w-8" src="@/assets/img/x.png" />
          </a>
          <a
            class="border-2 border-white-700 rounded-md p-2 uppercase buy-btn cursor-pointer"
            target="_blank"
            href="https://t.me/xing_xing_cto"
          >
            <img class="h-8 w-8" src="@/assets/img/dex_screener.png" />
          </a>
          <a
            class="border-2 border-white-700 rounded-md p-2 uppercase buy-btn cursor-pointer"
            target="_blank"
            href="https://www.instagram.com/xing.xing.monkey/"
          >
            <img class="h-8 w-8" src="@/assets/img/instagram.png" />
          </a>
          <a
            class="border-2 border-white-700 rounded-md p-2 uppercase buy-btn cursor-pointer"
            target="_blank"
            href="https://t.me/xing_xing_cto"
          >
            <img class="h-8 w-8" src="@/assets/img/telegram.png" />
          </a>
          <!-- <a
            class="border-2 border-white-700 rounded-md p-2 uppercase buy-btn cursor-pointer"
            href=""
          >
            <img class="h-8 w-8" src="@/assets/img/x.png" />
          </a> -->
          <!-- <a class="border-2 border-white-700 rounded-md p-2 uppercase buy-btn  " href="">
         <img  class="h-8 w-8" src="@/assets/img/x.png">
        </a> -->
        </div>
        <div class="flex items-center justify-center mt-8">
          <a
            target="_blank"
            href="https://raydium.io/swap/?outputMint=5JcdnWEwuHh1v3SAARq8zH9tEwDQGpaHzBrZ81m4pump&inputMint=sol"
            class="border-2 border-black rounded-md px-4 bg-white p-2 w-[300px] md:w-96 uppercase text-gold mt-8 text-xl md:text-2xl buy-btn text-zinc-800 border-gold flex items-center"
          >
            Buy $xing
          </a>
        </div>

        <p class="font-onest text-xs mt-32 text-center text-white opacity-50">
          All information presented on website and/or related social media
          platforms concerning $XING Meme Coin is not affiliated with, endorsed,
          or supported by any entity in China. Furthermore, it does not promote,
          endorse, or assume responsibility for the purchase, holding, or any
          transactions related to $XING or similar digital assets.
          <br />
          <br />

          No entity in China has ownership, involvement, or liability regarding
          $Xing Meme Coin or any related assets. Additionally, no entity in
          China has endorsed or participated in the $XING Meme Coin project.
          Furthermore, no entity in China promotes, endorses, or assumes
          responsibility for the purchase, holding, or any transactions related
          to $XING or similar digital assets. Any references to entities in
          China are for informational and/or commercial purposes only and do not
          constitute endorsement or financial recommendations.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];
</script>
<style>
.navigation {
  gap: 10px;
  height: min-content;
  left: 50%;
  max-width: 1380px;
  overflow: visible;
  position: fixed;
  top: 24px;
  transform: translate(-50%);
  width: 100%;
  z-index: 3;
}
.buy-btn {
  border-bottom-width: 5px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}
</style>
