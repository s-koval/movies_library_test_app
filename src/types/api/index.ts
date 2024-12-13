import { NextRequest, NextResponse } from "next/server";

export type TAuthRequest = NextRequest & {
  user: {
    id: string;
  };
};

export type TDynamicSegments = {
  params: Promise<{ id: string }>;
};

export type TNextHandler = (
  req: TAuthRequest,
  segments: TDynamicSegments
) => Promise<NextResponse>;
