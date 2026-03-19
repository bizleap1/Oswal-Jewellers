import { useEffect } from 'react';

const useFadeIn = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Remove delays once visible to avoid re-triggering delays on subsequent entries
            if (entry.target.classList.contains('delay-1')) entry.target.classList.remove('delay-1');
            if (entry.target.classList.contains('delay-2')) entry.target.classList.remove('delay-2');
            if (entry.target.classList.contains('delay-3')) entry.target.classList.remove('delay-3');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-up');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
};

export default useFadeIn;
