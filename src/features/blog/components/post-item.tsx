import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

import { Post } from "@/features/blog/types/posts";

export function PostItem({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group/post flex flex-col-reverse gap-x-4 gap-y-1 p-4 sm:flex-row"
    >
      <time
        className="text-muted-foreground shrink-0 font-mono text-sm"
        dateTime={dayjs(post.metadata.createdAt).toISOString()}
      >
        {/* MMM DD, YYYY */}
        {dayjs(post.metadata.createdAt).format("YYYY-MM-DD")}
      </time>

      <h2 className="flex items-center gap-2 font-mono text-sm font-semibold text-balance underline-offset-4 group-hover/post:underline">
        {post.metadata.title}
      </h2>
    </Link>
  );
}
