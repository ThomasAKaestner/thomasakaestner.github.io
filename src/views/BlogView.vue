<script>
import {defineComponent} from 'vue'
import ListElement from "@/components/blog/ListElement.vue";
import AWSEC2NetzwerkOptionen from "@/views/articles/AWSEC2NetzwerkOptionen.vue";
import ACIDTransactions from "@/views/articles/ACIDTransactions.vue";

export default defineComponent({
  name: "BlogView",
  computed: {
    ACIDTransactions() {
      return ACIDTransactions
    },
    AWSEC2NetzwerkOptionen() {
      return AWSEC2NetzwerkOptionen
    }
  },
  components: {ListElement}
})
</script>

<template>
  <div class="bg-black">
    <div class="text-white text-left max-w-3xl mx-auto py-12 px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <h1 class="text-4xl font-bold">Tech Blog</h1>
      <p>Updates, Tips & Meinungen über PHP, Symfony, Laravel, Golang, AWS, Kubernetes, Terraform und Docker.</p>
      <ul class="divide-y divide-gray-400">
        <ListElement
            :title="ImperativeVsDeclarativeIaCTitle"
            :text="ImperativeVsDeclarativeIaCText"
            :date="ImperativeVsDeclarativeIaCDate"
            :url="ImperativeVsDeclarativeIaCUrl"
        ></ListElement>
        <ListElement
            :title="TerraformCommandsTitel"
            :text="TerraformCommandsText"
            :date="TerraformCommandsDate"
            :url="TerraformCommandsUrl"
        ></ListElement>
        <ListElement
            :title="LinuxCommandsTitle"
            :text="LinuxCommandsText"
            :date="LinuxCommandsDate"
            :url="LinuxCommandsUrl"
        ></ListElement>
        <ListElement
            :title="AWSEC2NetzwerkOptionTitel"
            :text="AWSEC2NetzwerkOptionText"
            :date="AWSEC2NetzwerkOptionDate"
            :url="AWSEC2NetzwerkOptionUrl"
        ></ListElement>
        <ListElement
            :title="EC2StorageOptionsTitel"
            :text="EC2StorageOptionsText"
            :date="EC2StorageOptionsDate"
            :url="EC2StorageOptionsUrl"
        ></ListElement>
        <ListElement
            :title="AWSCloudFormationPageTitle"
            :text="AWSCloudFormationPageText"
            :date="AWSCloudFormationPageDate"
            :url="AWSCloudFormationPageUrl"
        ></ListElement>
        <ListElement
            :title="symfonyServerlessPageTitle"
            :text="symfonyServerlessPageText"
            :date="symfonyServerlessPageDate"
            :url="symfonyServerlessPageUrl"
        ></ListElement>
        <ListElement
            :title="laravelServerlessPageTitle"
            :text="laravelServerlessPageText"
            :date="laravelServerlessPageDate"
            :url="laravelServerlessPageUrl"
        ></ListElement>
        <ListElement
            :title="phpServerlessPageTitle"
            :text="phpServerlessPageText"
            :date="phpServerlessPageDate"
            :url="phpServerlessPageUrl"
        ></ListElement>
        <ListElement
            :title="lebensZyklusVonLambdaFunktionenTitle"
            :text="lebensZyklusVonLambdaFunktionenText"
            :date="lebensZyklusVonLambdaFunktionenDate"
            :url="lebensZyklusVonLambdaFunktionenUrl"
        ></ListElement>
        <ListElement
            :title="aufrufModelleAwsTitle"
            :text="aufrufModelleAwsText"
            :date="aufrufModelleAwsDate"
            :url="aufrufModelleAwsUrl"></ListElement>
        <ListElement
            :title="statusUpdatesModelleAnLambdaTitle"
            :text="statusUpdatesModelleAnLambdaText"
            :date="statusUpdatesModelleAnLambdaDate"
            :url="statusUpdatesModelleAnLambdaUrl">
        </ListElement>
        <ListElement
            :title="AWSLambdaBerechtigungTitle"
            :text="AWSLambdaBerechtigungText"
            :date="AWSLambdaBerechtigungDate"
            :url="AWSLambdaBerechtigungUrl">
        </ListElement>
        <ListElement
            :title="perfectPHPPipeLineTitle"
            :text="perfectPHPPipeLineText"
            :date="perfectPHPPipeLineDate"
            :url="perfectPHPPipeLineUrl"
        ></ListElement>
        <ListElement
            :title="dockerXdebugTitle"
            :text="dockerXdebugTitleText"
            :date="dockerXdebugTitleDate"
            :url="dockerXdebugUrl"
        ></ListElement>
        <ListElement
            :title="ACIDTransactionsPageTitle"
            :text="ACIDTransactionsPageText"
            :date="ACIDTransactionsPageDate"
            :url="ACIDTransactionsPageUrl"
        ></ListElement>
        <ListElement
            :title="solidPrinciplesInPHPTitle"
            :text="solidPrinciplesInPHPText"
            :date="solidPrinciplesInPHPDate"
            :url="solidPrinciplesInPHPUrl"
        ></ListElement>
      </ul>
    </div>
  </div>
</template>

<script>
import ListElement from "@/components/blog/ListElement.vue";

export default {
  components: {
    ListElement
  },
  data() {
    return {
      ImperativeVsDeclarativeIaCTitle: 'Imperative VS Declarative IAC',
      ImperativeVsDeclarativeIaCText: '\n' +
          'Imperative Infrastructure-as-Code (IaC) beschreibt, wie Infrastruktur erstellt wird, indem spezifische Schritte und Anweisungen definiert werden, während deklarative IaC beschreibt, was die gewünschte Infrastruktur ist, ohne sich um die konkreten Schritte zu kümmern.',
      ImperativeVsDeclarativeIaCDate: '2024-12-11',
      ImperativeVsDeclarativeIaCUrl: '/blog/imperative-vs-declarative-iac',

      TerraformCommandsTitel: 'Die wichtigsten Terraform commands',
      TerraformCommandsText: 'Terraform ist ein Open-Source-Werkzeug zur Automatisierung und Verwaltung von Infrastruktur als Code (IaC). Die wichtigsten Terraform-Befehle ermöglichen es, Infrastrukturen zu planen, bereitzustellen, zu ändern und effizient zu verwalten.',
      TerraformCommandsDate: '2024-12-11',
      TerraformCommandsUrl: '/blog/terraform-commands',

      AWSCloudFormationPageTitle: 'AWS Cloudformation',
      AWSCloudFormationPageText: 'This is the text content for the Child Component.',
      AWSCloudFormationPageDate: '2023-10-08',
      AWSCloudFormationPageUrl: '/blog/aws-cloud-formation',

      AWSLambdaBerechtigungTitle: 'AWS Lambda Berechtigungen',
      AWSLambdaBerechtigungText: 'AWS Lambda Berechtigungen ermöglichen sichere und effiziente Funktionsausführung in der AWS-Cloud. Hauptberechtigungen umfassen die IAM-Ausführungsrolle, die Funktionen den Zugriff auf Ressourcen ermöglicht, und die IAM-Ressourcenrichtlinie, die den Zugriff auf die Funktion steuert. Die IAM-Ausführungsrolle gewährt Funktionen Zugriff auf AWS-Services, während die IAM-Ressourcenrichtlinie den Zugriff auf die Funktion steuert. Eine korrekte Konfiguration und Verwaltung dieser Berechtigungen ist für die Sicherheit und Effektivität von AWS Lambda entscheidend.',
      AWSLambdaBerechtigungDate: '2023-10-08',
      AWSLambdaBerechtigungUrl: '/blog/aws-lambda-berechtigungen',

      lebensZyklusVonLambdaFunktionenTitle: 'Lebens Zyklus von Lambda Funktionen',
      lebensZyklusVonLambdaFunktionenText: 'Der Lebenszyklus von Lambda-Funktionen umfasst die verschiedenen Phasen, die eine Serverless-Funktion durchläuft, von ihrer Erstellung bis zur Ausführung und schließlich zur Beendigung. Diese Zyklusphasen, wie Initialisierung, Ausführung und Aufräumarbeiten, sind entscheidend für das Verständnis und die Optimierung von Lambda-Funktionen in Cloud-basierten Anwendungen. Ein gründliches Verständnis dieses Zyklus ermöglicht Entwicklern, ihre Funktionen effizient zu gestalten und die Leistung sowie die Kosten in der Cloud-Umgebung zu optimieren.',
      lebensZyklusVonLambdaFunktionenDate: '2023-10-08',
      lebensZyklusVonLambdaFunktionenUrl: '/blog/lebens-zyklus-von-lambda-funktionen',

      aufrufModelleAwsTitle: 'Aufrufmodelle von AWS Lambda Funktionen',
      aufrufModelleAwsText: 'Die Aufrufmodelle für AWS Lambda-Funktionen bieten verschiedene Muster für die Interaktion mit Lambda. Diese Modelle, synchron und asynchron, erfüllen spezifische Anwendungs- und Entwickleranforderungen. Die Auswahl des richtigen Modells ist entscheidend für die Effizienz und Leistung der Serverless-Anwendungen.',
      aufrufModelleAwsDate: '2023-10-08',
      aufrufModelleAwsUrl: '/blog/aufrufmodelle-von-aws-lambda-funktionen',


      statusUpdatesModelleAnLambdaTitle: 'Status Updates an Lambda senden',
      statusUpdatesModelleAnLambdaText: 'In diesem Artikel erfahren Sie, wie sie status updates an AWS Lambda funktionen senden.',
      statusUpdatesModelleAnLambdaDate: '2023-10-08',
      statusUpdatesModelleAnLambdaUrl: '/blog/Statusupdates-Modelle-An-AWS-Lambda',

      symfonyServerlessPageTitle: 'Symfony Serverless',
      symfonyServerlessPageText: '\n' +
          'Symfony Serverless nutzt das bref-Framework, um Symfony-Anwendungen auf AWS Lambda serverless laufen zu lassen. Diese Kombination erlaubt eine nahtlose Integration von Symfony in die serverlose Architektur von AWS Lambda, was Entwicklern ermöglicht, Symfony-Anwendungen kosteneffizient und skalierbar zu betreiben, ohne sich um die Verwaltung von Servern kümmern zu müssen.',
      symfonyServerlessPageDate: '2023-09-11',
      symfonyServerlessPageUrl: '/blog/symfony-serverless',

      laravelServerlessPageTitle: 'Laravel Serverless mit AWS ECR',
      laravelServerlessPageText: '\n' +
          'Laravel Serverless läuft ausschließlich auf AWS Lambda unter Verwendung des bref-Frameworks. Diese Kombination ermöglicht es, Laravel-Anwendungen in einer serverlosen Umgebung zu betreiben, indem sie nahtlos in die Architektur von AWS Lambda integriert werden.',
      laravelServerlessPageDate: '2023-09-11',
      laravelServerlessPageUrl: '/blog/laravel-serverless',

      phpServerlessPageTitle: 'PHP Serverless mit Bref',
      phpServerlessPageText: 'Das Projekt PHP Serverless mit Bref bietet eine innovative Lösung für das Bereitstellen von PHP-Anwendungen in serverlosen Umgebungen. Durch die Nutzung von Bref können Entwickler PHP-Anwendungen nahtlos auf Serverless-Plattformen wie AWS Lambda ausführen. Diese effiziente und skalierbare Infrastruktur ermöglicht es Entwicklern, sich auf die Entwicklung hochwertiger PHP-Anwendungen zu konzentrieren, ohne sich um die Verwaltung von Servern kümmern zu müssen',
      phpServerlessPageDate: '2023-09-11',
      phpServerlessPageUrl: '/blog/php-serverless-mit-bref',

      perfectPHPPipeLineTitle: 'Die perfekte CI/CD Pipeline für PHP',
      perfectPHPPipeLineText: '\n' +
          'Die perfekte CI/CD Pipeline für PHP umfasst automatisierte Tests, Code-Qualitätsprüfungen, Containerisierung und automatische Bereitstellung. Durch diese Methoden können Entwickler Arbeitsabläufe verbessern und die Zuverlässigkeit ihrer Anwendungen steigern.',
      perfectPHPPipeLineDate: '2022-08-02',
      perfectPHPPipeLineUrl: '/blog/die-perfekte-CI-CD-Pipeline-fuer-php',

      dockerXdebugTitle: 'Xdebug in Docker Container laufen lassen',
      dockerXdebugTitleText: '\n' +
          'Xdebug ist ein leistungsstolles Werkzeug zur Fehlerbehebung und Profilerstellung in PHP-Anwendungen. Die Integration mit Docker-Containern ermöglicht eine effiziente Entwicklungsumgebung. Durch einfache Schritte kann Xdebug in Docker-Containern eingerichtet werden, um das Debuggen von PHP-Anwendungen zu erleichtern.',
      dockerXdebugTitleDate: '2021-05-23',
      dockerXdebugUrl: '/blog/xdebug-in-docker-container-laufen-lassen',

      EC2StorageOptionsTitel: 'AWS EC2 Speicheroptionen',
      EC2StorageOptionsText: 'Amazon Elastic Compute Cloud (EC2) bietet verschiedene Speicheroptionen, die es Benutzern ermöglichen, die Leistung, Kapazität und Kosten ihrer EC2-Instanzen zu optimieren. Zu den Speicheroptionen gehören Amazon Elastic Block Store (EBS), Instance Store und Amazon S3. Jede Option bietet unterschiedliche Vorteile und Einsatzszenarien, die es Benutzern ermöglichen, die richtige Speicherlösung für ihre Anforderungen auszuwählen. In diesem Artikel werden die verschiedenen EC2-Speicheroptionen erläutert und Empfehlungen für ihre Verwendung gegeben.',
      EC2StorageOptionsDate: '2024-04-22',
      EC2StorageOptionsUrl: '/blog/aws-ec2-speicher-optionen',


      AWSEC2NetzwerkOptionTitel: 'AWS EC2 Netzwerkoptionen',
      AWSEC2NetzwerkOptionText: 'Amazon EC2 bietet verschiedene Netzwerkoptionen, um die Anforderungen Ihrer Anwendung zu erfüllen. In diesem Artikel werden die verschiedenen Netzwerkoptionen von Amazon EC2 erläutert und wie Sie die richtige Option für Ihre Anwendung auswählen können.',
      AWSEC2NetzwerkOptionDate: '2024-04-23',
      AWSEC2NetzwerkOptionUrl: '/blog/aws-ec2-netzwerk-optionen',

      LinuxCommandsTitle: 'Linux Essentials (010-160) Cheatsheet',
      LinuxCommandsText: 'Kurze Zusammenfassung der wichtigsten Linux Befehle für die LPI Essentials (010-160) Prüfung.',
      LinuxCommandsDate: '2024-05-12',
      LinuxCommandsUrl: '/blog/linux-commands-cheat-sheet',

      solidPrinciplesInPHPTitle: 'SOLID Principles in PHP',
      solidPrinciplesInPHPText: 'Die SOLID-Prinzipien sind grundlegende Designprinzipien, die Entwicklern helfen, sauberen und wartbaren Code zu schreiben. In diesem Artikel werden die fünf SOLID-Prinzipien erläutert und anhand von Beispielen in PHP demonstriert.',
      solidPrinciplesInPHPDate: '2020-01-05',
      solidPrinciplesInPHPUrl: '/blog/solid-principles-in-php',

      ACIDTransactionsPageTitle: 'ACID Transaktionen in SQL',
      ACIDTransactionsPageText: 'Im Bereich der Datenbanken und verteilten Systeme steht das Akronym ACID für Atomarität, Konsistenz, Isolation und Dauerhaftigkeit. Diese vier Eigenschaften beschreiben die wichtigsten Anforderungen an Transaktionen, um die Datenintegrität und Zuverlässigkeit zu gewährleisten.',
      ACIDTransactionsPageDate: '2020-03-05',
      ACIDTransactionsPageUrl: '/blog/acid-transaktionen',
    };
  }
}
</script>