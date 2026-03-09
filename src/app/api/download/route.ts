import { NextResponse } from "next/server";

export async function GET() {
  const api = await fetch(`${process.env.URL}/download`, {
    method: "GET",
  });

  const data = await api.json();
  const fileUrl = data.file.url;

  const fileResponse = await fetch(fileUrl);
  const buffer = await fileResponse.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="cafe-file.pdf"',
    },
  });
}