<script setup>

</script>

<template>
  <div id="ACIDTransactions">
    <div class="bg-black text-white">
      <div class="text-left max-w-3xl mx-auto py-12 md:py-24 px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <ArticleHeader
            :date="articleHeaderDate"
            :title="articleHeaderTitel"
            :text="articleHeaderText"></ArticleHeader>
        <div>
          Im Bereich der Datenbanken und verteilten Systeme steht das Akronym ACID für Atomarität, Konsistenz, Isolation
          und Dauerhaftigkeit. Diese vier Eigenschaften beschreiben die wichtigsten Anforderungen an Transaktionen, um
          die Datenintegrität und Zuverlässigkeit zu gewährleisten.
        </div>
        <!-- Atomicity -->
        <div class="mb-4">
          <h3 class="text-xl font-bold my-4">1. Atomarität</h3>
          <div>
            Eine Transaktion ist atomar, wenn sie entweder vollständig ausgeführt wird oder gar nicht. Das bedeutet,
            dass eine Transaktion entweder alle Änderungen an der Datenbank durchführt oder keine.
          </div>
          <div>
            Beispiel: Ein Banktransfer von Konto A nach Konto B. Der Betrag wird von Konto A abgezogen und auf Konto B
            gutgeschrieben. Wenn das Guthaben von Konto A abgezogen wurde, aber nicht auf Konto B gutgeschrieben wurde,
            ist die Transaktion nicht atomar.
          </div>
        </div>
        <!-- Consistency -->
        <div class="mb-4">
          <h3 class="text-xl font-bold my-4">2. Konsistenz/ Consistency</h3>
          <div>
            Die Konsistenz beschreibt den Zustand der Datenbank vor und nach einer Transaktion. Eine Transaktion darf
            die Datenbank nicht in einen inkonsistenten Zustand versetzen.
            Einstellungen und Filter in der Datenbank können helfen, die Konsistenz zu gewährleisten.
          </div>
          <div>
            Beispiel: Nehmen wir an, ein Kontostand ist 100€. Eine Transaktion will 20€ abheben. Nach der Transaktion
            muss der Kontostand 80€ sein, und nicht 90€ oder 110€.
          </div>
        </div>
        <!-- Isolation -->
        <div class="mb-4">
          <h3 class="text-xl font-bold my-4">3. Isolation</h3>
          <div>
            Die Isolation beschreibt, wie Transaktionen gleichzeitig auf die Daten zugreifen. Transaktionen sollten so
            isoliert sein, dass sie unabhängig voneinander ausgeführt werden können.
            Beispiel: Zwei Nutzer versuchen gleichzeitig, Geld auf das gleiche Konto einzuzahlen. Die Transaktionen
            "sehen" sich nicht und bearbeiten den Kontostand unabhängig voneinander, ohne Konflikte zu verursachen.
          </div>
        </div>
        <!-- Durability -->
        <div class="mb-4">
          <h3 class="text-xl font-bold my-4">4. Dauerhaftigkeit/ Durability</h3>
          <div>
            Die Dauerhaftigkeit beschreibt, dass eine Transaktion nach dem Commit dauerhaft in der Datenbank gespeichert
            wird. Auch bei einem Systemausfall oder einem Neustart des Systems.
          </div>
          <div>
            Beispiel: Ein Nutzer hat Geld auf ein Konto eingezahlt. Nach dem Commit der Transaktion muss das Geld
            dauerhaft auf dem Konto gespeichert sein, auch wenn das System abstürzt.
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
      articleHeaderDate: '2020-03-05',
      articleHeaderTitel: 'ACID Transaktionen',
      articleHeaderText: 'Im Bereich der Datenbanken und verteilten Systeme steht das Akronym ACID für Atomarität, Konsistenz, Isolation und Dauerhaftigkeit. Diese vier Eigenschaften beschreiben die wichtigsten Anforderungen an Transaktionen, um die Datenintegrität und Zuverlässigkeit zu gewährleisten.',
    }
  }
}
</script>