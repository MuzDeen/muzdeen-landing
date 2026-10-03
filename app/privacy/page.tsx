import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment Mweema collecte, utilise et protège vos données personnelles.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Responsable du traitement",
    paragraphs: [
      "Le responsable du traitement des données personnelles est [NOM DE LA SOCIÉTÉ], [FORME JURIDIQUE], immatriculée sous le numéro [SIRET], dont le siège social est situé [ADRESSE]. Contact : contact@mweema.com.",
      "Lorsque Mweema est en phase de développement, de test ou de bêta, certains traitements peuvent être limités à des finalités de validation technique, d'amélioration du service et de sécurisation de l'application.",
    ],
  },
  {
    heading: "2. Données collectées",
    paragraphs: ["Mweema peut collecter les catégories de données suivantes :"],
    list: [
      "Données d'identification : nom, prénom, adresse email, téléphone éventuel.",
      "Données de compte : identifiants, rôle, préférences, statut du compte.",
      "Données relatives aux dons : montant, date, organisation bénéficiaire, statut du paiement, historique de dons.",
      "Données de paiement traitées par Stripe : identifiants de transaction, statut du paiement, informations nécessaires au traitement et à la prévention de la fraude.",
      "Données relatives aux organisations et managers : informations de l'organisme, coordonnées, documents justificatifs, informations de validation, statut Stripe Connect.",
      "Données techniques : adresse IP, logs techniques, type d'appareil, version de l'application, évènements de sécurité, erreurs techniques.",
      "Données de support : messages envoyés à Mweema, demandes d'assistance, pièces jointes éventuelles.",
    ],
  },
  {
    heading: "3. Finalités",
    paragraphs: ["Les données sont traitées pour les finalités suivantes :"],
    list: [
      "Création et gestion des comptes utilisateurs (donateurs, managers, administrateurs).",
      "Vérification et validation des organisations.",
      "Exécution, suivi et sécurisation des dons.",
      "Intégration et suivi des paiements via Stripe Connect.",
      "Affichage de l'historique des dons et support utilisateur.",
      "Prévention de la fraude, des abus et des incidents de sécurité.",
      "Amélioration, test et maintenance de l'application.",
      "Respect des obligations légales, comptables et administratives applicables.",
    ],
  },
  {
    heading: "4. Bases légales",
    list: [
      "Exécution d'un contrat ou de mesures précontractuelles, pour fournir le service demandé.",
      "Intérêt légitime, notamment pour sécuriser l'application, prévenir la fraude et améliorer le service.",
      "Obligation légale, lorsque la conservation ou la transmission de certaines informations est imposée par la loi.",
      "Consentement, lorsqu'il est requis, notamment pour certains traceurs ou communications non essentielles.",
    ],
  },
  {
    heading: "5. Destinataires",
    paragraphs: ["Les données peuvent être accessibles, dans la limite de leurs attributions, aux personnes et entités suivantes :"],
    list: [
      "Équipes habilitées de Mweema et administrateurs de la plateforme.",
      "Prestataires techniques, d'hébergement, de maintenance, d'analyse, de support et de sécurité.",
      "Stripe et ses entités affiliées, pour les paiements et la vérification Stripe Connect.",
      "Organisations bénéficiaires, uniquement pour les informations nécessaires au suivi des dons les concernant.",
      "Autorités administratives ou judiciaires, lorsque la loi l'exige.",
    ],
  },
  {
    heading: "6. Stripe et prestataires techniques",
    paragraphs: [
      "Les paiements sont traités par Stripe, notamment via Stripe Connect. Stripe peut agir comme responsable de traitement indépendant ou sous-traitant selon les opérations concernées.",
      "Mweema invite les utilisateurs à consulter les politiques de confidentialité et conditions applicables de Stripe pour comprendre le traitement des données liées aux paiements, à la lutte contre la fraude et à la vérification des comptes connectés.",
    ],
  },
  {
    heading: "7. Transferts hors UE",
    paragraphs: [
      "Certaines données peuvent être traitées en dehors de l'Union européenne lorsque des prestataires, notamment Stripe, disposent d'infrastructures internationales.",
      "Dans ce cas, Mweema veille à ce que les garanties appropriées soient mises en place lorsque la réglementation l'exige, par exemple des clauses contractuelles types ou tout autre mécanisme reconnu.",
    ],
  },
  {
    heading: "8. Durées de conservation",
    paragraphs: [
      "Les données sont conservées pendant la durée nécessaire aux finalités décrites, puis supprimées, anonymisées ou archivées de manière sécurisée. Les durées précises (compte, historique de dons, documents, logs, support) sont fixées avant la mise en production et tiennent compte des obligations légales et comptables applicables.",
    ],
  },
  {
    heading: "9. Sécurité",
    paragraphs: [
      "Mweema met en œuvre des mesures techniques et organisationnelles raisonnables pour protéger les données contre la perte, l'accès non autorisé, l'altération, la divulgation ou la destruction : chiffrement des communications, gestion des droits d'accès, journalisation, surveillance des incidents et sauvegardes.",
      "Aucun service numérique ne pouvant garantir une sécurité absolue, les utilisateurs sont invités à choisir un mot de passe robuste et à signaler toute activité suspecte.",
    ],
  },
  {
    heading: "10. Vos droits (RGPD)",
    paragraphs: ["Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :"],
    list: [
      "Droit d'accès, de rectification et de suppression.",
      "Droit d'opposition et droit à la limitation du traitement.",
      "Droit à la portabilité de vos données.",
      "Droit de retirer votre consentement à tout moment lorsque le traitement repose sur celui-ci.",
      "Droit d'introduire une réclamation auprès de la CNIL.",
    ],
  },
  {
    heading: "11. Cookies et traceurs",
    paragraphs: [
      "L'application peut utiliser des traceurs strictement nécessaires à son fonctionnement, ainsi que, le cas échéant, des traceurs de mesure d'audience ou de marketing soumis au consentement lorsque la loi l'exige. Les détails sont présentés dans la Politique de cookies.",
    ],
  },
  {
    heading: "12. Contact",
    paragraphs: [
      "Pour exercer vos droits ou pour toute question relative à la protection des données personnelles, vous pouvez contacter Mweema à l'adresse : contact@mweema.com. Une preuve d'identité peut être demandée lorsque cela est nécessaire pour éviter une usurpation.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      updated="Dernière mise à jour : juin 2026"
      intro="Ce document est un modèle à adapter à la situation exacte de Mweema et à faire relire par un professionnel du droit avant toute mise en production ou ouverture officielle au public."
      sections={sections}
    />
  );
}
