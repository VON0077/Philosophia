import { Debate } from "@/lib/types";

export const mockDebates: Debate[] = [
  {
    id: "1",
    title: "Should college be free?",
    description:
      "Discuss whether higher education should be publicly funded and universally accessible.",
    category: "Education",
    tags: ["policy", "economics", "education"],
    agreeCount: 128,
    disagreeCount: 79,
    agreeTop: {
      id: "a1",
      author: "Lena",
      content:
        "A more educated population improves productivity, civic engagement, and long-term economic growth.",
      upvotes: 84,
    },
    disagreeTop: {
      id: "d1",
      author: "Marcus",
      content:
        "Free tuition can shift costs to taxpayers unfairly and reduce accountability for institutions and students.",
      upvotes: 73,
    },
    agreeReplies: [
      {
        id: "a2",
        author: "Nina",
        content:
          "Student debt traps people for years and delays family formation and entrepreneurship.",
        upvotes: 41,
      },
      {
        id: "a3",
        author: "Owen",
        content:
          "Public investment in education often pays for itself through higher lifetime earnings and tax revenue.",
        upvotes: 36,
      },
    ],
    disagreeReplies: [
      {
        id: "d2",
        author: "Paul",
        content:
          "Subsidizing all students includes wealthy families who do not need financial support.",
        upvotes: 32,
      },
      {
        id: "d3",
        author: "Sara",
        content: "Targeted aid is more efficient than universal free tuition.",
        upvotes: 29,
      },
    ],
  },
  {
    id: "2",
    title: "Is AI making people less thoughtful?",
    description:
      "Debate whether heavy AI usage reduces critical thinking and independent problem solving.",
    category: "Technology",
    tags: ["ai", "culture", "productivity"],
    agreeCount: 202,
    disagreeCount: 141,
    agreeTop: {
      id: "a4",
      author: "Jules",
      content:
        "When people outsource too much thinking, they stop practicing the mental effort needed to reason deeply.",
      upvotes: 102,
    },
    disagreeTop: {
      id: "d4",
      author: "Rina",
      content:
        "AI can free people from repetitive tasks and give them more time for higher-level reasoning.",
      upvotes: 95,
    },
    agreeReplies: [
      {
        id: "a5",
        author: "Theo",
        content:
          "Convenience often weakens skill retention when people stop doing the hard parts themselves.",
        upvotes: 47,
      },
    ],
    disagreeReplies: [
      {
        id: "d5",
        author: "Mina",
        content:
          "Calculators did not destroy math; AI may become a similar productivity tool.",
        upvotes: 51,
      },
    ],
  },
];

export function getDebateById(id: string) {
  return mockDebates.find((debate) => debate.id === id);
}
