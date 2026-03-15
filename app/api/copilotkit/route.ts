import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "disabled",
    message:
      "CopilotKit runtime endpoint is intentionally disabled in this build. Use /api/chat for mentor and lesson interactions.",
  });
}
