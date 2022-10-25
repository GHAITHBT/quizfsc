import React, { useState,useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";
import GaugeChart from 'react-gauge-chart'


function About() {
  var now  = " 15:00:00";
var then = " 14:20:00";

var ms = moment(now," HH:mm:ss").diff(moment(then," HH:mm:ss"));
var d = moment.duration(ms);
var s = d.minutes();
  const current = new Date();

  const [timeStart, settimeStart] = useState("");
  const [timeFinish, settimeFinish] = useState("");
  const [timer, settimer] = useState(0);

   const [repo, setRepo] = useState("");
   const [QST, setQST] = useState([]);
const handledata = () => {
    const url = `http://localhost:5001/add_data`
    const Credentials = { Poste,QST,score,timer}
    axios.post(url, Credentials)
        .then(response => {
            const result = response.data;
            const { status, message, data } = result;
           
        })
        .catch(err => {
            console.log(err)
        })
      }
      const handletimer = () => {
        settimeStart(`${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`)
        var ms = moment(timeFinish,"HH:mm:ss").diff(moment(timeStart,"HH:mm:ss"));
        var d = moment.duration(ms);
        var s = d.minutes();
        settimer(s)
        console.log(timer)

          }
      
  // Properties
  const [showResults, setShowResults] = useState(false);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [Poste, setPoste] = useState("");
 
  useEffect(() => {
    console.log('test tijngsdfsd',s)
    
    console.log("start time",timeStart);
    console.log("finishc time",timeFinish);
    console.log("timer",timer)
    settimeFinish(`${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`)
    console.log(repo)
    console.log(Poste)
    console.log(QST)
    setPoste(localStorage.getItem("Poste"))
  }, [timeStart,timeFinish,repo,Poste,QST,timer]);

  const questions = [
    {
      text: "Le message et/ou la  communication sur les aspects santé et sécurité des aliments de nos produits finis se définit comme :",
      options: [
        { id: 0, text: "Innovant, utilisation des méthodes et outils modernes  (réseaux sociaux internes , intranet , implication de tous dans la diffusion du message) , s'appuie sur les leaders d'opinion internes, va au déla de la vie d'entreprise en intégrant des valeurs 'responsables' de l'entreprise et des parties intéressées", isCorrect: false },
        { id: 1, text: "Evolutif : Affichage général ,rappel des consignes en cas de réclamations ", isCorrect: false },
        { id: 2, text: "Participatif : en plus de l'affichage ,réunions d'équipe regulieres avec les rappels des faits marquants et suivi par l'encadrement terrain", isCorrect: false },
        { id: 3, text: "Classique : Affichage , déclaration 'qualité' comme demandé par les normes", isCorrect: true },
        { id: 4, text: "Adapté : Diffusion par plusieurs canaux officiels et informels ,explicite concernant les objectifs / valeur et les indicateurs de terrain ", isCorrect: true },
      ],
    },
    {
      text: "En quoi consiste la formation des employés sur les dangers et les risques en matière des sécurités des aliments ?",
      options: [
        { id: 0, text: "Au déla des bases sur les bonnes pratiques , des cas concrets sont abordés et des mises en situations permettant d'évaluer la bonne compréhension des risques, les employés apportent eux-mêmes des éléments supplémentaires pour alimenter les formations en y intégrant de nouveaux risques détectés", isCorrect: true },
        { id: 1, text: "Tous les membres du personnel ne sont pas obligés d'assister et il existe peu d'enregistrements sur les formations réaliséses (Pas de test formel de compétence et de la compréhension)", isCorrect: false },
        { id: 2, text: "Un système formel de formation existe (formation initiale et de recyclage ), les employés comprennent les règles générales de la sécurité des aliments ,mais ne les respectent pas toujours.", isCorrect: false },
        { id: 3, text: "les programmes de formation sont adaptés en continu en fonction de l'évolution de l'équipe .Les bonnes pratiques sont largement suivies (selon des indicateurs documentés)", isCorrect: false },
        { id: 4, text: "Pas de formation ou formation à la conformité uniquement (BPH,principes généraux HACCP ,etc.)", isCorrect: false },
      ],
    },
    {
      text: "En terme de système d'alerte , laquelle des propositions suivantes serait la plus adaptée ?",
      options: [
        { id: 0, text: "Il est vivement encourgé de faire remonter les déviations à tous les niveaux de la hièarchie et des revues réguliéires sont assurées pour démontrer le bon suivi de ces actions , le système anonyme ou non en fonction du degré est en place et fonctionnel.", isCorrect: true },
        { id: 1, text: "Un système d'alerte a été mis en place à la demande de clients mais reste peu utilisé et plutôt formel.", isCorrect: false },
        { id: 2, text: "Un outil d'alerte a été mis en place et un affichage en attente,toutefois il n'est pas bien vu dans l'entreprise de faire de la délation.", isCorrect: false },
        { id: 3, text: "Le personnel a pris l'habititude de remonter a ses responsables hiérarchiques ,toutes les activités déviantes de manière informelle et leur fait confiance pour le suivi.", isCorrect: false },
        { id: 4, text: "Pas de système de lanceur d'alerte en place les employés ne sont pas informés.", isCorrect: false },
      ],
    },
    {
      text: "Les indicateurs liés à la bonne application des pratiques de sécurité des aliments par le personnel sont : ",
      options: [
        { id: 0, text: "Evolitifs et adaptés à la collecte des données liés aux résultats en matière d'hygiène , de recurrence des écarts , des évaluations des personnes sur la base d'entretienet des questionnaires d'evaluations permettant de mesurer 'application des procédures mais également l'agilité.", isCorrect: false },
        { id: 1, text: "Décrits et suivis sur la base des inspections hygiène en atelier, des audits , réclamations.", isCorrect: true },
        { id: 2, text: "Essentiellement suivis via la réalisation des formations internes et évaluations sur base des grilles de compétences.", isCorrect: false },
        { id: 3, text: "Clairement établis sur un ensemble de mesures du comportement et des résultats en matière d'hygiène d'éfficacité des bonnes pratiques.", isCorrect: false },
        { id: 4, text: "Vagements définis , inclus dans les indicateurs de réclamations et d'hygène", isCorrect: false },
      ],
    },
    {
      text: "En matière de formation des encadrants de terrain et des opérateurs , laquelle de ces affirmations serait la plus représentative de votre situation :",
      options: [
        { id: 0, text: "La formation en matière sécurité des aliments fait partie intégrante des rôles de supervision et s'est adaptée à des domaines spécifiques, mais tous les superviseurs sont en mesures d'expliquer les principaux domaines de risque .Les formations sont intèressantes etv stimulent leur personnel à participer. Ils agissent toujours comme de bons exemples  en tant que 'multiplicateurs' de connissances en matière de sécurité des aliments et encouragent leurs équipes opérationnels à agir de manière proactive.", isCorrect: false },
        { id: 1, text: "Aucun système de formations formel n'existe : certaines sessions ad hoc sont organisnées ,tous les superviseurs ne sont pas présents et peu d'enregistrements formels. Pas de test documente de compétence et de compréhension", isCorrect: true },
        { id: 2, text: "La société reste en  mode réactif , mais à mis en place un système formel de formation et de dèveloppement du personnel , le système reste en général sans rôle ni responsabilités spécifiés en matière de sécurité sanitaire des aliments. Le matèriel de formation couvre les bases mais ne traite toujours pas des risques et des conséquences possibles. ", isCorrect: true },
        { id: 3, text: "Des messages proactifs sur la sécurité sanitaire des aliments sont intégrés aux communications régulière de la haute direction et diffusés .Système formel de formation à la gestion en place et mis en œuvre. Le matèriel de formation souligne l'importance de la sécurité des aliments pour le personnel ainsi que pour l'équipement et les pratiques de base en mettant sur les risques et leurs conséquences éventuelles ", isCorrect: false },
        { id: 4, text: "Matèriels de formation inexistants ou mal produits , contenus faibles ou non adaptés à l'entreprise .Accent éducatif limité aux compétences techniques ou se concentre uniquement ou principalement sur l'hygiène du personnel .On considère la sécurité des aliments comme une pratique qui ne nécissite pas de formation théorique.", isCorrect: false },
      ],
    },
    {
      text: "Comment décrirez vous le niveau de connaissance de la mission / vision de l'entreprise en matière de sécurité des aliments ?",
      options: [
        { id: 0, text: "Tous les membres de l'encadrement et l'ensemble du personnel à tous les niveaux sont capables de placer leurs propres objectifs dans le cadrec des missions et vision de l'entreprise en matière de sécurité des aliments ,hygiène , amélioration de la santé du consommateur.", isCorrect: false },
        { id: 1, text: "La vision / politique de l'entreprise sont diffusées ,des objectifs généraux sont disponibles , L'encadrement connait ses propres objectifs sans focus particulier sur la sécurité des aliments .", isCorrect: true },
        { id: 2, text: "Les objectifs de sécurité des aliments sont clairement décrites dans la politique / engagements diffusés et compris : référence par exemple à la santé des consommateurs ,à l'engagement dans l'amélioration nutritionnelle, etc….", isCorrect: false },
        { id: 3, text: "La sécurité des aliments est une valeur fondamentale de l'entreprise : des actions en matière d'amélioration sont menées , L'encadrement et le personnel peuvent les énoncer clairement (dernier investissement en la metière ou décision prise).", isCorrect: false },
        { id: 4, text: "Le personnel et l'encadrement ont connaissances qu'une politique existe sans plus de détail.", isCorrect: false },
      ],
    },{
      text: "En tenant compte des disparités et de l'historique de chacun . Comment définirez vous l'engagement du personnel de production?",
      options: [
        { id: 0, text: "Personnel hautement engagé et motivé ,les employés s'inspirent les uns des autres pour faire de leur mieux et souhaitent identifier ce qu'ils peuvent faire pour les uatres, Interet actif manifeste pour l'amélioration continue de la sécurité des aliments :-incitations récompenses pour la conformité et application cohérente des normes internes , encouragements des suggestions d'amélioration ", isCorrect: false },
        { id: 1, text: "Assez neutre : n'apprécie pas vraiment ses taches mais s'en accomode .Les agents de maitrise sont responsables de l'élaboration et de l'application des procédures . Le personnel fait ce qu'il pense etre approprié en fonction de ce qui lui est imposé.", isCorrect: true },
        { id: 2, text: "Relativement engagé : fier de travailler dans l'entreprise sans toutefois en parler aux autres .Doute de l'importance du risque posé par la sécurité des aliments et de l'éfficacité des réglementations et des exigences en matière d'hygiène des aliments sur le mode 'On a toujours fait comme ça'", isCorrect: false },
        { id: 3, text: "Engagé: ressent entre une partie vitale de l'entreprise ;sentiment d'accomplissement dans ses taches . L'engagement des employés est accepté pour aider à se conformer à la réglementation .elaboration des procédures en matière de sécurité des aliments avec la participation du personnel à qui on offre la possibilité de commenter une fois terminée", isCorrect: false },
        { id: 4, text: "Principalement désengagé : travaillant principalement par crainte de perdre son emploi : pas particulierement satisfait ni enthousiasmé par ses tâches.", isCorrect: false },
      ],
    },{
      text: "D'après vous l'engagement de la direction en matière de sécurité des aliments est il:",
      options: [
        { id: 0, text: "En Cohérence avec les valeurs de l'entreprise et ses diregeants depuis une longue pèriode en allant au déla des attentes clients ", isCorrect: false },
        { id: 1, text: "Adapté et évolitif en fonction des demandes des clients et des possibilités financières ", isCorrect: true },
        { id: 2, text: "Encore limité pour des multiples raisons de moyens financiers ,de marchés , techniques ", isCorrect: false },
        { id: 3, text: "en nette amélioration s'appyant sur des décisions successives et des projets qui ne sont pas directement demandés par les clients", isCorrect: false },
        { id: 4, text: "Conforme aux demandes explicites des clients et des autorités ", isCorrect: false },
      ],
    },{
      text: "Au regard de la sécurité des aliments , comment la relation entre les parties prenentes (fournisseurs ,Agences d'inérime….) est-elle gérée?",
      options: [
        { id: 0, text: "Analyse de performance des prestataires est mise en place des plans d'amélioration continue sont établis et des collaborations pour améliorer les objectifs communs ", isCorrect: false },
        { id: 1, text: "Les parties prenentes / prestataires cherchent uniquement à se conformer aux exigences minimales (légales)", isCorrect: true },
        { id: 2, text: "La sélection et l'évaluation des parties prenentes /prestataires intégrent des indicateurs en matière de SA et sont revus quant cela est possible . Les connissances de certains prestataires / fournissuers des problèmes liés à la sécurité des aliments sont faibles .Confusion fréquente entre problème qualité et problème lié à la sécurité des aliments.", isCorrect: false },
        { id: 3, text: "Les objectifs communs en matière de sécurité des aliments sont discutés afin d'étre en cohérence aussi bien sur des aspects pratiques (tenues , corps étrangers,….) que sur les valeurs.", isCorrect: false },
        { id: 4, text: "Aucun outil ou mécanisme n'est mis en place pour la surveillance de la conformité des accords avec les prestataires en matière de SA", isCorrect: false },
      ],
    },{
      text: "Sur la dernière année; pourriez vous identifier le nombre de signalement de risque produits / non-conformité identifiée en production par les opérateurs?",
      options: [
        { id: 0, text: "Quasi systématiquement lors de chaque réunion de production / d'équipe des retours d'informations et des propositions sont fatales et suivies", isCorrect: false },
        { id: 1, text: "à  liés à des problèmes de production / qualité également ", isCorrect: true },
        { id: 2, text: "Plus d'une dizaine de différentes importances (indiquant des propositions d'amélioration)", isCorrect: false },
        { id: 3, text: "plus d'une vingtaine et ou très régulierement ", isCorrect: false },
        { id: 4, text: "Aucun signalement (malgré des NC identifiées lors d'audits internes / externes )", isCorrect: false },
      ],
    },{
      text: "A quel stade de l'approche managériale des RH serez vous concernant la composante mission et adaptabilitré:",
      options: [
        { id: 0, text: "Il existe des stratégies très sophostiquées et intrégrés à court et à long terme  RH. La stratégie est continuellement examinée pour s'assurer qu'elle est en phase avec l'entreprise et qu'elle évite le risque . Les employés sont attirés par cette organisation en raison de sa réputation de culture de ressources humaines diversifiée. Les employées reçoivent des informations en temps réel sur les performances afin de pouvoir des mesures immédiates pour s'adapter.", isCorrect: false },
        { id: 1, text: "Les stratégies concernant les talents critiques et les fonctions d'apprentissage (acquisition de talents , developpement et gestion de la performance ) sont gérées par des projets mais ne sont pas intégrés. Les RH commencent à s'engader de manière plus proactive dans l'entreprise , mais les efforts ne sont pas cohérents et le changement tend à se faire lentement . Une plus grande appréciation de la participation des employés au developpement et à la carrière commence à émerger.", isCorrect: true },
        { id: 2, text: "Les processus clés d'apprentissage et de gestion des talents commencent à s'intégrer au fur et à mesure que l'organisation reconnait la nécéssité d'une plus grande adaptabilité . La cascade d'objectifs organisationnels comme moyen de guider les objectifs individuels ou d'équipe et le développement commence à devenir omniprésente . Les employés sont plus responsables de diriger leur développement et leur carrière avec l'appui des RH", isCorrect: false },
        { id: 3, text: "Tous les aspects (attraction des talents ,développement , promotion ,mobilités, engagement et récompenses) sont liés les uns aux autres afin d'accroitre le rendement de l'entreprise . L'exploitationde talents interne devient plus faible . Les employés font preuve d'une grande responsabilité pour tirer part de ce que l'organisation fournit au travesr des RH", isCorrect: false },
        { id: 4, text: "Une stratégie globale d'apprentissage 'a minima' oriente les efforts de l'équipe des ressources humaines ,L'équipe des ressources humaines est en grande partie en mode 'réactif' pour les processus (recrutement , formation, intégration, conformité ,etc…) . Les RH sont perçues par les employés comme passifs pour faire progresser leur développement et leur carrière . Une grande partie des besoins en formation sont obligatoires.", isCorrect: false },
      ],
    },{
      text: "En matière de sécurité des aliments ,quel serait le niveau de compréhension des risques par la direction et l'encadrement ?",
      options: [
        { id: 0, text: "Des messages proactifs sur la sécurité des aliments sont intégrés aux communications régulières de la direction. La direction est impliquée dans toute discussion liée à des risques et des mesures de contrôle. L'organisation dispose d'un système pour évaluer la compréhension et les performances des employés", isCorrect: false },
        { id: 1, text: "L'encadrement peut comprendre les sujets liés à la SA, mais considère que cela relève de la responsabilité des équipes qualité,.Les discussions liées aux actions en cas de risques émergnts doivent etre validées par la direction.", isCorrect: true },
        { id: 2, text: "Tout les cadres sont formés à l'HACCP ,Formation suplémentaire sur les risques critiques pour la sécurité sanitaire des aliments ?Mécanisme de communication mis en place pour tenir les dirigents informés des problemes liés à la SA", isCorrect: false },
        { id: 3, text: "La directio et l'encadrement sont impliqués dans l'analyse de risque et la prise de décision concernant la SA. L'encadrement participe à toutes les sessions de formation liées aux risques et aux réunions de suivi des plans d'actions", isCorrect: false },
        { id: 4, text: "Le concept de la sécurité des aliments n'est pas intégré par la direction qui délégue entièrement au service qualité ", isCorrect: false },
      ],
    },{
      text: "Comment placez vous l'implication des ressources humaines dans le processus de sécurité des aliments:",
      options: [
        { id: 0, text: "Sont intégrées au processus dans son ensemble et ont une démarche active dans la sélection et l'accompagnement des ressources ", isCorrect: false },
        { id: 1, text: "Peu de relations , le service qualité assure la gestion de l'hygiène", isCorrect: true },
        { id: 2, text: "Gérent de manière proactive , dans le respect des valeurs et des missions de l'entreprise ,afin de détecter les défaillances et adapter les postes / personnes .Organisent de manière globale la communication , les évaluations et la coordination pour mettre en confiance le personnel ", isCorrect: false },
        { id: 3, text: "Participent aux réunions pour l'évaluation des compétences et les retours d'information de la production / service qualité", isCorrect: false },
        { id: 4, text: "Assurant le suivi documentaire des formations hygiène ,font un suivi avec les agences d'intèrim et gérent la budget formation ", isCorrect: false },
      ],
    },{
      text: "En matière d'implication du management et de l'encadrement , lequelle de ces affirmations serait la plus proche de la situation actuelle ?",
      options: [
        { id: 0, text: "Les dirigents donnent l'exemple et encouragent les comportements souhaites de la part de leur personnel en matière de sécurité des aliments conformément à la réglementation . Les dirigéants contestent et punissent les mauvaises pratiques d'hygiène ", isCorrect: false },
        { id: 1, text: "Le minimum d'investissement est assuré pour respecter la réglementation en mode réactif", isCorrect: true },
        { id: 2, text: "Le personnel est encouragé fréquement à appliquer les procédures de sécurité des aliments par la direction qui ne manque pas d'expliquer pourquoi cela est necessaire et met en avant les bonnes pratiques .Par exemple :intêret actif évident pour la sécurité des aliments ; leadership des ressources humaines à travers de bons exemples", isCorrect: false },
        { id: 3, text: "Les dirigents ont du mal à incarner des comportements modèles en matière de sécurité des aliments . Les mauvaises pratiques en matière de sécurité des aliments restent incontestées et aucun commentaire n'est fourni concernant les comportements en matière d'hygiène . par exemple la direction ne respecte pas les règles relatives aux vetements de protection.", isCorrect: false },
        { id: 4, text: "Manque d'initiative et de motivation de la part de l'entreprise -faible présence / direction de l'entreprise sur le lieu de travail en ce qui concerne la sécurité des aliments,sauf lors d'inspections ou d'audits externes ", isCorrect: false },
      ],
    },{
      text: "Comment percevez-vous de manière globale,la capacité de vos employés dans la gestion des changements , des crises et dans la résolution des problèmes liés à la sécurité des aliments:",
      options: [
        { id: 0, text: "Les cas de gestion de crises ou tests réalisés par le passé ont montré une bonne volonté de la part des employés. Bien qu'un manque d'initiative soit constaté cela sans freiner les changement qu'il sont suivis", isCorrect: false },
        { id: 1, text: "L'encadrement assure la gestion , le personnel n'est pas en mesure de prendre les décisions en cas de changements ", isCorrect: true },
        { id: 2, text: "Le système en place permet à tout le personnel de prendre les initiatives et de s'adapter de manière cohérente aux changements induits. Des exemples récentes permettent de le démontrer ", isCorrect: false },
        { id: 3, text: "Les agents de maitrise assurent de manière réactive les adaptations ou les gestions de crises mais pas au niveau personnel de production", isCorrect: false },
        { id: 4, text: "Certains employés ont montré des capacités à s'adapter aux changements rapides mais une majorité (encadrement de terrain inclus ) évitent les initiatives", isCorrect: false },
      ],
    },{
      text: "Comment qualifieriez vous la compréhension par les employés des responsabilités et des autorités en matière de sècurité des aliments?",
      options: [
        { id: 0, text: "La description des tâches et des responsabilitrés sont assez claires, tout écart est identifié et enregistré . L'autorité de blocage est assurée mais les décisions restent à la charge de la hièrarchie", isCorrect: false },
        { id: 1, text: "Les tâches unitaires en terme de production ont été transmises ,la sécurité des aliments est assurée par le contrôle qualité ", isCorrect: true },
        { id: 2, text: "responsabilités et autorités sont suffisament décrites dans la documentation mais elles sont completes par la coordination avec les uatres services en interface et la communication transversale est également suurée par la pro-activité ", isCorrect: false },
        { id: 3, text: "Les fiches des postes indiquent les étapes à assurer pour la bonne conduite des opérations et les controles spécifiques (HACCP,Hygiène ). En cas de déviations , il y a devoir d'informations à la hiérarchie", isCorrect: false },
        { id: 4, text: "Les controles et les opérations à effectuer ont été définis , l'encadrement et le service qualité orienter en cas de besoins .Si les activités ne sont pas décrites aucune action / intervention ne doit etre assurée.", isCorrect: false },
      ],
    },{
      text: "Combien pourriez vous citer d'actions / décisions confirmant les valeurs en matière de sécurité des aliments (investissement, changement , organisation , relations clients , gammes de produits….)?",
      options: [
        { id: 0, text: "plus de 5", isCorrect: false },
        { id: 1, text: "Aucune (ou pas clairement liée)", isCorrect: true },
        { id: 2, text: "Toutes ( ou presque = la composante santé santé consommateur est toujours liée)", isCorrect: false },
        { id: 3, text: "3 à 5", isCorrect: false },
        { id: 4, text: "1 ou 2", isCorrect: false },
      ],
    },{
      text: "Quel serait le niveau d'agilité de votre système en place ?",
      options: [
        { id: 0, text: "Adaptatif : le système et les supports prévoient des niveaux de tolérences pour les modifications ponctuelles et les autorités sont définies", isCorrect: false },
        { id: 1, text: "Evolutif : Affichage général ,rappel des consignes en cas de réclamations ", isCorrect: true },
        { id: 2, text: "Participatif : en plus de l'affichage ,réunions d'équipe regulieres avec les rappels des faits marquants et suivi par l'encadrement terrain", isCorrect: false },
        { id: 3, text: "Classique : Affichage , déclaration 'qualité' comme demandé par les normes", isCorrect: false },
        { id: 4, text: "Adapté : Diffusion par plusieurs canaux officiels et informels ,explicite concernant les objectifs / valeur et les indicateurs de terrain ", isCorrect: false },
      ],
    },{
      text: "Parmi ces indicateurs quels sont ceux dont vous disposez pour le suivi de la Culture du risque ?",
      options: [
        { id: 0, text: "Nombre de presqu'incidents déchets/ non conformités internes détectées / conformité dés la première fois", isCorrect: false },
        { id: 1, text: "Conformité inspection hygiène / réalisation des formations", isCorrect: true },
        { id: 2, text: "Conformité dés la première fois / niveau de récurrence / nombre de rapports de consignes", isCorrect: false },
        { id: 3, text: "Conformité inspection hygiène / réclamations / nombre de presqu'incidents / lames de surfaces ", isCorrect: false },
        { id: 4, text: "Conformité inspection hygiène / réalisation formation / non conformités interne / réclamations ", isCorrect: false },
      ],
    },{
      text: "Quelle est la position au regard du système de récompense concernant les bonnes pratiques en sécurité des aliments?",
      options: [
        { id: 0, text: "Le bon état d'esprit de la mjorité du personnel ne nécissite pas une réconnaissance spéciale pour les comportements conformes", isCorrect: false },
        { id: 1, text: "Pas de système de récompense ou d'encouragement ", isCorrect: true },
        { id: 2, text: "Un système de récompense ou d'encouragement nuirait à l'ambiance générale et se justifie pas pour l'accomplissement de taches prèvues dans les fiches de poste", isCorrect: false },
        { id: 3, text: "Une politique de reconnaissance reconnue comme juste et transparente est mise en place vaec un volet spécifique pour la SA", isCorrect: false },
        { id: 4, text: "Ploitique de reconnaissance très générale sur plusieurs aspects (productivités, réclamation….) mais assez transparente ( non individialisée)", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    
  };
  const previous=()=> {
    
    

    if (currentQuestion>0) {
      setCurrentQuestion(currentQuestion -1);
    } 
    
  };
  const next=()=> {
    
    

    if (currentQuestion<20) {
      setCurrentQuestion(currentQuestion +1);
    } 
    
    if(currentQuestion==18){
      BT()
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  function BT() {
    var x = document.getElementById("BT");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
  }
  

  return (
    <div  style={{backgroundImage: 
      "url('images/cheese3.jpg')",
             height:'100%',
             marginTop:'0px',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
             overflowX:"scroll",
             position:"absolute",
             width:"100%"}}>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div style={{backgroundImage: 
          "url('images/cheese3.jpg')",
                 height:'100%',
                 marginTop:'0px',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 overflowX:"scroll",
                 position:"absolute",
                 width:"100%"}}>
                  <table   style={{width:"100 %",marginLeft:'20%'}}> <center><tr><td><h1 style={{color:"white",backgroundColor:"grey"}}>Resultats Finale</h1>
          <h2 style={{color:"white",backgroundColor:"grey"}}>
            {score} corrects sur {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2></td><td>  <td style={{width:"200px",height:'200px'}} rowSpan={5}> <GaugeChart id="gauge-chart2" 
                           colors={['#FF5F6D', '#FFC371','#25CF00']}
                           
  nrOfLevels={20} 
  percent={  score / questions.length} 
  needleColor="grey"
  textColor="blue"
/>               </td></td></tr></center></table>
          
          <div >
                    <Table className=' responsivetable table-striped table-hover table-bordered' style={{backgroundColor:"#EDEDED",width:"95%",marginLeft:"2%"}}>
                        <thead>
                            <tr>
                                <th style={{width:"50%"}}>Question
                               
                                
                                </th>
                                <th style={{width:"50%"}}>Votre réponce 
                                </th>
                              
                            </tr>
                        </thead>
                        <tbody>
              <tr> 
                
                <td colSpan={3} style={{backgroundColor:"blue"}}>cat1</td></tr>
                          <tr>
                           
                            
                          <td>{QST[1]}</td><td>{QST[0]}</td></tr>
                          <tr><td>{QST[3]}</td><td>{QST[2]}</td></tr>
                          <tr><td>{QST[5]}</td><td>{QST[4]}</td></tr>
                          <tr><td>{QST[7]}</td><td>{QST[6]}</td></tr>
                          <tr> <td colSpan={3} >cat1</td></tr>
                          <tr>
                           
                            
                            
                          <td>{QST[9]}</td><td>{QST[8]}</td></tr>
                          <tr><td>{QST[11]}</td><td>{QST[10]}</td></tr>
                          <tr><td>{QST[13]}</td><td>{QST[12]}</td></tr>
                          <tr><td>{QST[15]}</td><td>{QST[14]}</td></tr>
                          <tr> <td colSpan={3} >cat1</td></tr>
                          <tr>
                           
                           
                          <td>{QST[17]}</td><td>{QST[16]}</td></tr>
                          <tr><td>{QST[19]}</td><td>{QST[18]}</td></tr>
                          <tr><td>{QST[21]}</td><td>{QST[20]}</td></tr>
                          <tr><td>{QST[23]}</td><td>{QST[22]}</td></tr>
                          <tr> <td colSpan={3} >cat1</td></tr>
                          <tr>
                           
                            
                            
                          <td>{QST[25]}</td><td>{QST[24]}</td></tr>
                          <tr><td>{QST[27]}</td><td>{QST[26]}</td></tr>
                          <tr><td>{QST[29]}</td><td>{QST[28]}</td></tr>
                          <tr><td>{QST[31]}</td><td>{QST[30]}</td></tr>
                          <tr> <td colSpan={3} >cat1</td></tr>
                          <tr>
                           
                            
                           
                          <td>{QST[33]}</td><td>{QST[32]}</td></tr>
                          <tr><td>{QST[35]}</td><td>{QST[34]}</td></tr>
                          <tr><td>{QST[37]}</td><td>{QST[36]}</td></tr>
                          <tr><td>{QST[39]}</td><td>{QST[38]}</td></tr>
                                     
                        </tbody>
                        
                    </Table>
                   
                </div>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="quiz_box" style={{marginTop:"0%"}} >
          {/* Current Question  */}
          <header>
          <div class="title">Auto-évaluation Food safety Culture</div>
          </header>
          <h3 className="question-text"style={{textAlign: 'center'}}>{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                style={{background: "aliceblue",
                  border: "1px solid #84c5fe",borderRadius:"5px", padding:" 8px 15px",
                  fontSize: "17px",
                  marginBottom: "15px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  hover:"backgroundColor:red"
                }}
                  key={option.id}
                  //onClick={() => optionClicked(option.isCorrect)}
                  onClick={()=>(setQST(current => [...current, option.text,questions[currentQuestion].text]))+console.log("QST",QST)+optionClicked(option.isCorrect)}
                  
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          <footer>
          <div class="total_que">
          Question: {currentQuestion + 1} sur {questions.length}

            </div>

          <Button variant="primary" style={{backgroundColor:"#2596be",marginLeft:"60%"}} onClick={() =>previous()}>Précédent</Button>

          <Button variant="success"  onClick={() =>next()}>Suivant</Button>
          <div id="BT" style={{display: 'none' }}>

          <Button variant="warning"  onClick={() => setShowResults(true)+handletimer()+handledata()}>Terminer</Button>
          </div>
          </footer>
        </div>
        
      )}
    </div>
    
  );
}

export default About;
