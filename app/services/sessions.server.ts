import {createCookieSessionStorage} from "@remix-run/node";

export type SessionData = {};

const {getSession, commitSession, destroySession} =
  createCookieSessionStorage<SessionData>(
    {
      cookie: {
        name: "__session",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
        sameSite: "lax",
        secrets: ["very secret string"],
        secure: true,
      },
    }
  );

export {getSession, commitSession, destroySession};