import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Informations d'édition, hébergement et responsabilité de Mweema.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Éditeur",
    paragraphs: [
      "L'application Mweema est éditée par [NOM DE LA SOCIÉTÉ], [FORME JURIDIQUE], dont le siège social est situé [ADRESSE]. SIRET : [SIRET]. Email : contact@mweema.com.",
      "Lorsque le projet est en phase de développement, de test ou de bêta, certaines informations d'édition peuvent être complétées ou mises à jour avant le lancement officiel.",
    ],
  },
  {
    heading: "2. Directeur de publication",
    paragraphs: ["Directeur de publication : [NOM DU DIRECTEUR DE PUBLICATION]."],
  },
  {
    heading: "3. Hébergeur",
    paragraphs: [
      "L'application et les services associés sont hébergés par [HÉBERGEUR], [ADRESSE HÉBERGEUR], [CONTACT HÉBERGEUR]. Les informations relatives à l'hébergement seront complétées avant la mise en production.",
    ],
  },
  {
    heading: "4. Contact",
    paragraphs: ["Pour toute question relative à Mweema, vous pouvez contacter l'éditeur à l'adresse : contact@mweema.com."],
  },
  {
    heading: "5. Propriété intellectuelle",
    paragraphs: [
      "Le nom Mweema, le logo, les textes, interfaces, éléments graphiques, templates d'affiches, QR codes générés, supports marketing et plus généralement les éléments composant l'application sont protégés par le droit de la propriété intellectuelle, sous réserve des droits appartenant à des tiers.",
      "Toute reproduction, représentation, modification, adaptation, diffusion ou exploitation non autorisée de ces éléments est interdite. Les organisations validées peuvent utiliser les QR codes et supports générés par Mweema uniquement pour promouvoir leur page ou leur collecte via la plateforme.",
    ],
  },
  {
    heading: "6. Responsabilité",
    paragraphs: [
      "Mweema agit comme intermédiaire technique entre les donateurs et les organisations bénéficiaires. L'utilisation finale des fonds collectés relève de la responsabilité des organismes bénéficiaires.",
      "Mweema s'efforce de fournir des informations exactes et à jour, mais ne peut garantir l'absence d'erreurs, d'interruptions ou d'indisponibilités temporaires du service. L'utilisateur reste responsable de l'utilisation qu'il fait de l'application et des informations qu'il transmet.",
    ],
  },
  {
    heading: "7. Signalement de contenu illicite",
    paragraphs: [
      "Tout utilisateur peut signaler un contenu, une fiche organisation, un comportement ou une utilisation suspecte, frauduleuse ou illicite de Mweema à l'adresse : contact@mweema.com.",
      "Le signalement doit, si possible, contenir les informations permettant d'identifier le contenu ou le compte concerné, la raison du signalement et les éléments utiles à son examen. Mweema peut suspendre ou supprimer tout contenu, compte ou organisme en cas de violation des conditions applicables, de fraude, de faux documents ou de comportement abusif.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Mentions légales"
      updated="Dernière mise à jour : juin 2026"
      intro="Ce document est un modèle à adapter à la situation exacte de Mweema et à faire relire par un professionnel du droit avant toute mise en production ou ouverture officielle au public."
      sections={sections}
    />
  );
}
