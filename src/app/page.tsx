"use client";

import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { useCallback, useEffect, useSyncExternalStore, useState } from "react";
import { NAV_LINKS, type RouteId } from "@/lib/data";
import { EASE_SNAP } from "@/components/site/anim";
import Preloader from "@/components/site/preloader";
import Cursor from "@/components/site/cursor";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import Home from "@/components/site/pages/home";
import Projects from "@/components/site/pages/projects";
import Studio from "@/components/site/pages/studio";
import Services from "@/components/site/pages/services";
import Contact from "@/components/site/pages/contact";

function parseHash(): RouteId {
  const h = window.location.hash.replace(/^#\/?/, "").replace(/\/$/, "");
  const match = NAV_LINKS.find((l) => l.id === h);
  return match ? match.id : "home";
}

function subscribeHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getRouteSnapshot(): RouteId {
  return parseHash();
}

function getServerRoute(): RouteId {
  return "home";
}

export default function MaisonElara() {
  const [loading, setLoading] = useState(true);
  const route = useSyncExternalStore(subscribeHash, getRouteSnapshot, getServerRoute);

  const goTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  useEffect(() => {
    const unsub = subscribeHash(goTop);
    return unsub;
  }, [goTop]);

  const navigate = useCallback((r: RouteId) => {
    if (parseHash() === r) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = r === "home" ? "/" : `/${r}`;
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain relative flex min-h-svh flex-col bg-background text-foreground">
        <Cursor />

        <AnimatePresence>
          {loading && <Preloader onDone={() => setLoading(false)} />}
        </AnimatePresence>

        <Navbar route={route} navigate={navigate} ready={!loading} />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={route}
              initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
              transition={{ duration: 0.55, ease: EASE_SNAP }}
            >
              {route === "home" && <Home navigate={navigate} ready={!loading} />}
              {route === "projects" && <Projects navigate={navigate} />}
              {route === "studio" && <Studio navigate={navigate} />}
              {route === "services" && <Services navigate={navigate} />}
              {route === "contact" && <Contact navigate={navigate} />}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer navigate={navigate} />
      </div>
    </MotionConfig>
  );
}
