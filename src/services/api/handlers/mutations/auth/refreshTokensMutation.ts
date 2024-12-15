const refreshTokensMutation = async (cookies: string) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies,
    },
  });
};

export default refreshTokensMutation;
