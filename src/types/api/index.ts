import { NextRequest, NextResponse } from "next/server";

export type TAuthRequest = NextRequest & {
  user: {
    id: string;
  };
};

export type TNextHandler = (req: TAuthRequest) => Promise<NextResponse>;
