export type DebateReply = {
  id: string;
  author: string;
  content: string;
  upvotes: number;
};

export type Debate = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  agreeCount: number;
  disagreeCount: number;
  agreeTop: DebateReply;
  disagreeTop: DebateReply;
  agreeReplies: DebateReply[];
  disagreeReplies: DebateReply[];
};
