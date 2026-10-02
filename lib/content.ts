import {
  BadgeCheck,
  BanknoteArrowUp,
  BarChart3,
  Building2,
  Clock3,
  CreditCard,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Landmark,
  LockKeyhole,
  type LucideIcon,
  Megaphone,
  MonitorSmartphone,
  Moon,
  QrCode,
  ReceiptText,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navItems = [
  { label: "Comment ça marche", href: "/#fonctionnement" },
  { label: "Pour qui", href: "/#pour-qui" },
  { label: "Confiance", href: "/#confiance" },
  { label: "Tarif", href: "/#tarif" },
  { label: "FAQ", href: "/#faq" },
];

/** Téléchargement de l'application (badges stores + QR code). */
export const download = {
  qr: "/assets/qr-download.svg",
  appStore: { src: "/appstore.png", href: "https://www.apple.com/app-store/", alt: "Télécharger dans l'App Store" },
  googlePlay: { src: "/googleplay.png", href: "https://play.google.com/store", alt: "Disponible sur Google Play" },
};

/* ------------------------------------------------------------------ */
/* 1. Hero                                                             */
/* ------------------------------------------------------------------ */

export const hero = {
  badge: "Les dons, dignes du XXIᵉ siècle",
  // Découpé en lignes pour l'animation séquencée (slide-up ligne par ligne).
  titleLines: ["Pour ici", "et l'au-delà."],
  subtitle:
    "Muz'Deen permet à chacun de soutenir une mosquée ou une association en quelques secondes, et à chaque organisation de collecter plus, gérer mieux et rendre des comptes en toute transparence.",
  primaryCta: { label: "Je suis donateur", href: "#fonctionnement" },
  secondaryCta: { label: "Inscrire mon organisation", href: "#demo" },
  stats: [
    { value: "2€", label: "Don minimum, pour rester accessible à tous" },
    { value: "5%", label: "De commission, uniquement sur les dons reçus" },
    { value: "0€", label: "Qui transite par Muz'Deen : tout va à l'organisation" },
  ],
};

/* ------------------------------------------------------------------ */
/* 2. Le problème — Avant / Après                                      */
/* ------------------------------------------------------------------ */

type ComparisonItem = { title: string; text: string };

export const beforeItems: ComparisonItem[] = [
  { title: "Boîte à dons & espèces", text: "L'argent liquide se raréfie, et une partie de la générosité ne se transforme jamais en don." },
  { title: "Virements manuels", text: "RIB recopié, libellés approximatifs, rapprochements interminables." },
  { title: "QR codes statiques épars", text: "Des codes non centralisés, sans suivi, impossibles à mettre à jour." },
  { title: "Excel & WhatsApp", text: "Des outils éparpillés, aucune visibilité en temps réel, aucun reçu pour le donateur." },
];

export const afterItems: ComparisonItem[] = [
  { title: "Don en quelques secondes", text: "Carte, Apple Pay ou Google Pay, depuis le téléphone du fidèle." },
  { title: "Reçu instantané", text: "Chaque donateur reçoit la confirmation de son don, immédiatement." },
  { title: "Tout centralisé", text: "QR codes, campagnes, écrans TV et statistiques dans une seule application." },
  { title: "Comptes transparents", text: "Des objectifs en temps réel à montrer à toute la communauté." },
];

/* ------------------------------------------------------------------ */
/* 3. Comment ça marche — parcours de bout en bout                    */
/* ------------------------------------------------------------------ */

type JourneyStep = { actor: string; title: string; text: string; icon: LucideIcon };

export const journeySteps: JourneyStep[] = [
  { actor: "Organisation", title: "Demande d'inscription", text: "La mosquée ou l'association soumet sa demande depuis l'application.", icon: Building2 },
  { actor: "Muz'Deen", title: "Vérification & validation", text: "Notre équipe contrôle et approuve l'organisation sur le dashboard.", icon: BadgeCheck },
  { actor: "Manager", title: "Activation Stripe Connect", text: "Onboarding, identité et RIB : l'organisation est prête à recevoir.", icon: LockKeyhole },
  { actor: "Organisation", title: "QR codes générés", text: "Affichés sur la porte, le comptoir, une affiche ou un écran TV.", icon: QrCode },
  { actor: "Donateur", title: "Scan & don", text: "Il choisit son montant et paie en carte, Apple Pay ou Google Pay.", icon: ScanLine },
  { actor: "Organisation", title: "Réception directe", text: "L'argent arrive sur son compte Stripe. Reçu envoyé instantanément.", icon: HeartHandshake },
];

/* ------------------------------------------------------------------ */
/* 4. Pour qui — types d'organisations                                */
/* ------------------------------------------------------------------ */

type Organization = { title: string; text: string; icon: LucideIcon };

export const organizations: Organization[] = [
  { title: "Mosquées", text: "Collecte des dons du quotidien, du vendredi et des grandes occasions.", icon: Landmark },
  { title: "Cours de Coran", text: "Associations d'enseignement qui financent leurs classes et leurs locaux.", icon: GraduationCap },
  { title: "Associations musulmanes", text: "Structures communautaires qui animent et soutiennent leur quartier.", icon: HeartHandshake },
  { title: "Associations humanitaires", text: "Campagnes d'urgence et de solidarité, suivies en temps réel.", icon: HandHeart },
  { title: "Associations culturelles", text: "Projets, événements et transmission au service de la communauté.", icon: Sparkles },
];

/* ------------------------------------------------------------------ */
/* 5. Confiance & sécurité — flux d'argent                            */
/* ------------------------------------------------------------------ */

type FlowNode = { title: string; text: string; icon: LucideIcon };

export const moneyFlow: FlowNode[] = [
  { title: "Donateur", text: "Paie en toute sécurité, carte ou wallet mobile.", icon: HandHeart },
  { title: "Stripe", text: "Traite le paiement. Aucune donnée de carte chez Muz'Deen.", icon: CreditCard },
  { title: "Organisation", text: "Reçoit directement les fonds sur son compte Stripe.", icon: Landmark },
];

export const trustItems: FlowNode[] = [
  { icon: ShieldCheck, title: "Double vérification", text: "L'organisation est validée par l'équipe Muz'Deen, puis par Stripe (identité, RIB) avant de pouvoir recevoir le moindre don." },
  { icon: BanknoteArrowUp, title: "L'argent ne transite jamais", text: "Les fonds vont directement de Stripe au compte de l'organisation. Muz'Deen ne détient jamais l'argent des donateurs." },
  { icon: LockKeyhole, title: "Paiements sécurisés", text: "Stripe gère l'intégralité des paiements selon les standards bancaires les plus exigeants." },
  { icon: ReceiptText, title: "Transparence totale", text: "Reçu instantané pour le donateur, suivi en temps réel et objectifs affichés pour la communauté." },
];

/* ------------------------------------------------------------------ */
/* 6. Modèle économique                                               */
/* ------------------------------------------------------------------ */

export const pricing = {
  example: {
    donation: 10,
    // Répartition illustrative pour un don de 10€.
    breakdown: [
      { label: "Frais Stripe", amount: 0.4, note: "Traitement du paiement", tone: "muted" as const },
      { label: "Commission Muz'Deen", amount: 0.5, note: "5% du don", tone: "accent" as const },
      { label: "Reçu par l'organisation", amount: 9.1, note: "Versé directement", tone: "primary" as const },
    ],
  },
  points: [
    { title: "Aucun abonnement", text: "Pas de frais fixes, pas d'engagement. Vous ne payez que si vous collectez." },
    { title: "5% de commission", text: "Uniquement sur les dons reçus. C'est notre seule source de revenus." },
    { title: "Don minimum 2€", text: "Un choix délibéré et militant : un don de 2€ est aussi noble qu'un don de 200€." },
  ],
};

/* ------------------------------------------------------------------ */
/* 7. Pour les organisations (B2B)                                    */
/* ------------------------------------------------------------------ */

export const orgBenefits = [
  { icon: MonitorSmartphone, title: "Gestion 100% mobile", text: "Profil, campagnes, QR codes et écrans TV pilotés depuis l'application." },
  { icon: QrCode, title: "QR codes & écrans TV", text: "Des points de don partout dans le lieu, mis à jour en un geste." },
  { icon: BarChart3, title: "Statistiques en temps réel", text: "Dons, tendances et objectifs de campagne, à jour à la seconde." },
  { icon: ShieldCheck, title: "Zéro risque financier", text: "Pas d'avance, pas d'abonnement. L'argent va directement à l'organisation." },
];

export const dashboardStats = [
  { label: "Collecté ce mois", value: "12 480 €", trend: "+38%" },
  { label: "Donateurs", value: "342", trend: "+19%" },
  { label: "Dons récurrents", value: "87", trend: "+12%" },
];

/* ------------------------------------------------------------------ */
/* 8. Ramadan                                                          */
/* ------------------------------------------------------------------ */

export const ramadan = {
  eyebrow: "Le mois béni",
  title: "Le Ramadan, votre plus grand moment de collecte.",
  text: "Pendant le Ramadan, les dons sont multipliés par 5 à 10. Muz'Deen vous accompagne avec des campagnes spéciales, des objectifs affichés en temps réel et des notifications quotidiennes pour mobiliser votre communauté.",
  highlights: [
    { value: "×5 à ×10", label: "L'intensité des dons pendant le mois" },
    { value: "30–40%", label: "Des dons annuels concentrés sur cette période" },
    { value: "Temps réel", label: "Objectifs de campagne affichés à la communauté" },
  ],
};

/* ------------------------------------------------------------------ */
/* 9. Témoignages — placeholders honnêtes (à remplacer)               */
/* ------------------------------------------------------------------ */

export const testimonials = [
  { role: "Responsable de mosquée", placeholder: "Témoignage à venir — recueilli auprès d'une organisation pilote." },
  { role: "Trésorier d'association", placeholder: "Témoignage à venir — recueilli auprès d'une organisation pilote." },
  { role: "Donateur régulier", placeholder: "Témoignage à venir — recueilli auprès d'un donateur." },
];

/* ------------------------------------------------------------------ */
/* 10. FAQ                                                             */
/* ------------------------------------------------------------------ */

export const faqs = [
  {
    question: "Les paiements sont-ils sécurisés ?",
    answer:
      "Oui. L'intégralité des paiements est traitée par Stripe, l'un des standards mondiaux du paiement en ligne. Aucune donnée de carte bancaire n'est stockée par Muz'Deen.",
  },
  {
    question: "Comment fonctionne la commission ?",
    answer:
      "Muz'Deen prélève 5% sur chaque don reçu, automatiquement. Il n'y a aucun abonnement ni frais fixe : vous ne payez que si vous collectez. Les frais Stripe s'appliquent en plus, comme pour tout paiement par carte.",
  },
  {
    question: "Muz'Deen détient-il l'argent des dons ?",
    answer:
      "Jamais. Les fonds vont directement de Stripe au compte de l'organisation. Muz'Deen n'est ni une banque ni un établissement de paiement : l'argent ne transite jamais par nos comptes.",
  },
  {
    question: "Quelles organisations peuvent rejoindre Muz'Deen ?",
    answer:
      "Les mosquées, les associations de cours de Coran, les associations musulmanes, humanitaires et culturelles. Chaque organisation est vérifiée par notre équipe avant d'être mise en ligne.",
  },
  {
    question: "Combien de temps pour activer mon organisation ?",
    answer:
      "Après votre demande, notre équipe vérifie votre organisation, puis vous activez Stripe Connect (identité et RIB). Une fois ces étapes validées, vos QR codes sont générés et vous pouvez recevoir des dons.",
  },
  {
    question: "Le donateur doit-il créer un compte ?",
    answer:
      "Non. Un don se fait en quelques secondes, sans friction. Le donateur peut ensuite, s'il le souhaite, suivre son historique et activer un don récurrent.",
  },
];

/* ------------------------------------------------------------------ */
/* 11. CTA final                                                       */
/* ------------------------------------------------------------------ */

export const finalCta = {
  donor: {
    title: "Je suis donateur",
    text: "Soutenez votre mosquée ou votre association en quelques secondes, depuis votre téléphone.",
    cta: { label: "Découvrir l'application", href: "#fonctionnement" },
    icon: HandHeart,
  },
  organization: {
    title: "Je représente une organisation",
    text: "Modernisez votre collecte, gérez tout depuis l'app et rendez des comptes transparents.",
    cta: { label: "Inscrire mon organisation", href: "#demo" },
    icon: Building2,
  },
};

/* ------------------------------------------------------------------ */
/* Icônes utilitaires (mockups & app)                                 */
/* ------------------------------------------------------------------ */

export const appIcons = { QrCode, ReceiptText, Wallet, Moon, Megaphone, Clock3 };
