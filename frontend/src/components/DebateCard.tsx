"use client";

import NextLink from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Button,
} from "@heroui/react";
import { Debate } from "@/lib/types";

export default function DebateCard({ debate }: { debate: Debate }) {
  return (
    <Card className="border border-white/10 bg-white/5">
      <CardHeader className="flex items-center justify-between gap-3">
        <Chip size="sm" variant="flat">
          {debate.category}
        </Chip>

        <div className="text-xs text-zinc-400">
          {debate.agreeCount} agree · {debate.disagreeCount} disagree
        </div>
      </CardHeader>

      <CardBody>
        <h3 className="text-xl font-semibold tracking-tight">{debate.title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-300">
          {debate.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {debate.tags.map((tag) => (
            <Chip key={tag} size="sm" variant="bordered">
              #{tag}
            </Chip>
          ))}
        </div>
      </CardBody>

      <CardFooter className="flex items-center justify-between">
        <div className="flex gap-2 text-xs">
          <Chip size="sm" className="bg-emerald-500/15 text-emerald-300">
            Agree {debate.agreeCount}
          </Chip>
          <Chip size="sm" className="bg-rose-500/15 text-rose-300">
            Disagree {debate.disagreeCount}
          </Chip>
        </div>

        <Button as={NextLink} href={`/debates/${debate.id}`} size="sm">
          Open
        </Button>
      </CardFooter>
    </Card>
  );
}
