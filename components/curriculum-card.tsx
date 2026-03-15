import Link from "next/link";
import { Lesson } from "@/lib/curriculum";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CurriculumCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link href={`/lessons/${lesson.slug}`}>
      <Card className="h-full">
        <CardHeader>
          <p className="text-xs text-muted-foreground">{lesson.module}</p>
          <CardTitle>{lesson.title}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">{lesson.summary}</CardContent>
      </Card>
    </Link>
  );
}
