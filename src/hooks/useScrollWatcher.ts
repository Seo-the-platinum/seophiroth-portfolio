import { useEffect, useRef, useState } from 'react';

export const useScrollWatcher = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const sections = ['about', 'experience', 'projects'];
  const intersectingEntriesRef = useRef<Map<string, IntersectionObserverEntry>>(new Map());
  useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // setActiveSection(entry.target.id);
              intersectingEntriesRef.current.set(entry.target.id, entry);
            } else {
              intersectingEntriesRef.current.delete(entry.target.id);
            }
          });
          let highestRatioEntry = '';
          let highestRatio = 0;
          let found = false;

          intersectingEntriesRef.current.forEach((entry, id) => {
            if (entry.intersectionRatio > highestRatio) {
              highestRatio = entry.intersectionRatio;
              highestRatioEntry = id;
              found = true;
            }
          });

          if (found) {
            setActiveSection(highestRatioEntry);
          } else if (intersectingEntriesRef.current.size === 0) {
            setActiveSection(''); // Reset if no sections are intersecting
          }
        },
        {
          threshold: [0.1, 0.3, 0.5, 0.7, 0.9, 1.0], // Adjust this value to change when the section is considered active
          rootMargin: '0px 0px -20% 0px', // Adjust this value to change the offset for activation
        },
      );

      const elements = sections.map(section => document.querySelector(`#${section}`));
      elements.forEach(element => {
        if (element) {
          observer.observe(element);
        }
      });
      return () => {
        elements.forEach(element => {
          if (element) {
            observer.unobserve(element);
          }
        });
      };
  }, [sections]);

  return activeSection;
};