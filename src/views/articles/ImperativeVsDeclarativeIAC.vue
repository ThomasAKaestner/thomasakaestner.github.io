<script>
export default {
  name: "ImperativeVsDeclarativeIAC.vue"
}
</script>

<template>
  <div id="imperativevsdeclarativeiac">
    <div class="bg-black">
      <div class="text-white text-left max-w-3xl mx-auto py-12 md:py-24 px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <ArticleHeader
            :date="articleHeaderDate"
            :title="articleHeaderTitel"
            :text="articleHeaderText"></ArticleHeader>
        <div>
          <h3 class="text-4xl font-bold text-white my-4">Imperative IAC</h3>
          <div>

            Imperative Infrastructure as Code (IAC) ist ein Ansatz, bei dem die Infrastruktur durch explizite,
            sequenzielle Anweisungen definiert wird, die in einer bestimmten Reihenfolge ausgeführt werden, um das
            gewünschte Systemzustand zu erreichen.


          </div>
          <div class="font-bold text-xl">Code Beispiel:</div>
          <div class="font-bold text-xl">Die bekanntesten imperativen Infrastructure as Code(IAC)-Tools sind</div>
          <ul>
            <li><a class="font-bold" href="https://docs.ansible.com">Ansible</a> (obwohl es auch deklarative Elemente
              hat, ist es größtenteils imperativ, da es explizite Schritte und Aufgaben beschreibt, die in einer
              bestimmten Reihenfolge ausgeführt werden)
            </li>
            <li><a class="font-bold" href="https://www.chef.io/">Chef</a> (arbeitet mit einem imperativen Ansatz, bei
              dem spezifische Anweisungen zur Infrastrukturverwaltung und Konfiguration gegeben werden)
            </li>
            <li><a class="font-bold" href="https://www.puppet.com/">Puppet</a> (ähnlich wie Chef, wobei auch hier
              imperativ definierte Anweisungen zur Verwaltung von Infrastruktur und Konfiguration verwendet werden)
            </li>
          </ul>

        </div>
        <div class="flex items-center py-8">
          <div class="flex-grow border-b border-gray-300"></div>
        </div>
        <div>
          <h3 class="text-4xl font-bold text-white my-4">Declarative IAC</h3>
          <div></div>
          <div>Example:</div>
        </div>
        <div class="flex items-center py-8">
          <div class="flex-grow border-b border-gray-300"></div>
        </div>
        <div>
          <h3 class="text-4xl font-bold text-white my-4">Imperative Vs Declarative IAC</h3>
          <div class="font-bold font-xl">
            Was sollte ich wann verwenden?
          </div>
          <div>
            Imperative IAC-Tools eignen sich, wenn du präzise Steuerung über den gesamten Bereitstellungsprozess
            benötigst und die genauen Schritte zur Infrastrukturkonfiguration definieren möchtest. Deklarative IAC-Tools
            sind besser, wenn du dich auf den gewünschten Endzustand konzentrieren und das System die Details der
            Implementierung automatisch verwalten lassen möchtest, um mehr Flexibilität und weniger Komplexität zu
            erreichen.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleHeader from "../../components/articleHeader/ArticleHeader.vue";

export default {
  components: {
    ArticleHeader
  },
  data() {
    return {
      articleHeaderDate: '2024-12-11',
      articleHeaderTitel: 'Imperative VS Declarative IAC',
      articleHeaderText: 'Imperative Infrastructure-as-Code (IaC) beschreibt, wie Infrastruktur erstellt wird, indem spezifische Schritte und Anweisungen definiert werden, während deklarative IaC beschreibt, was die gewünschte Infrastruktur ist, ohne sich um die konkreten Schritte zu kümmern.'
    }
  }
};
</script>
<style scoped>

</style>