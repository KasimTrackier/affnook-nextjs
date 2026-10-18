"use client";

import { useEffect } from "react";
import { D } from "@/lib/affnook/content";
import { page, navHTML } from "@/lib/affnook/render";
import { start } from "@/lib/affnook/runtime";

// The markup is generated once (on the server for the first response, and again on the
// client so hydration matches). The runtime then takes over the DOM: scroll effects,
// animations, the audience switcher, tabs, FAQ and so on.
const NAV_HTML = navHTML();
const PAGE_HTML = page(D.operators);

export default function AffnookApp() {
  useEffect(() => start(), []);

  return (
    <>
      <div className="progress" id="progress" aria-hidden="true" />
      <header className="nav" id="nav" dangerouslySetInnerHTML={{ __html: NAV_HTML }} />
      <main id="app" dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
    </>
  );
}
