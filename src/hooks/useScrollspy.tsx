import * as React from 'react';

// originally based on
// https://github.com/NotionX/react-notion-x/blob/master/packages/react-notion-x/src/block.tsx#L128-L161

export default function useScrollSpy() {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const throttleMs = 100;

  const lastCall = React.useRef(0);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const actionSectionScrollSpy = React.useCallback(() => {
    const now = Date.now();
    const remaining = throttleMs - (now - lastCall.current);

    const execute = () => {
      lastCall.current = Date.now();
      const sections = document.getElementsByClassName('hash-anchor');

      let prevBBox = null;
      let currentSectionId: string | null = null;

      for (let i = 0; i < sections.length; ++i) {
        const section = sections[i];

        if (!currentSectionId) {
          currentSectionId =
            section.getAttribute('href')?.split('#')[1] ?? null;
        }

        const bbox = section.getBoundingClientRect();
        const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0;
        const offset = Math.max(200, prevHeight / 4);

        if (bbox.top - offset < 0) {
          currentSectionId =
            section.getAttribute('href')?.split('#')[1] ?? null;
          prevBBox = bbox;
          continue;
        }

        break;
      }

      setActiveSection(currentSectionId);
    };

    if (remaining <= 0) {
      if (timer.current) clearTimeout(timer.current);
      execute();
    } else if (!timer.current) {
      timer.current = setTimeout(() => {
        timer.current = null;
        execute();
      }, remaining);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', actionSectionScrollSpy);
    actionSectionScrollSpy();

    return () => {
      window.removeEventListener('scroll', actionSectionScrollSpy);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [actionSectionScrollSpy]);

  return activeSection;
}
