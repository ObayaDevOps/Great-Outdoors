import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

const SCRIPT_URLS = [
  'https://www.reserveport.com/media/api5/jquery.min.js',
  'https://www.reserveport.com/media/api5/popper.min.js',
  'https://www.reserveport.com/media/api5/bootstrap.min.js',
  'https://reservations.reserveport.com/checkavailability/static/js/manifest.js',
  'https://reservations.reserveport.com/checkavailability/static/js/vendor.js',
  'https://reservations.reserveport.com/checkavailability/static/js/app.js',
];

export default function Home() {
  useEffect(() => {
    let cancelled = false;

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[data-reserveport-src="${src}"]`);
        if (existing) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.dataset.reserveportSrc = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });

    (async () => {
      try {
        for (const src of SCRIPT_URLS) {
          if (cancelled) return;
          await loadScript(src);
        }
      } catch {
        // Keep page functional even if third-party widget scripts fail.
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Box
      width={{ base: '80%', md: '76%' }} // Responsive width
      margin="0 auto"
      marginTop={{ base: '0rem', md: '-10rem' }} // Responsive margin
      position="absolute"
      left="0"
      right="0"
      background="none"
      display="block"
      // Additional styles can be added here if needed
    >
      {/* <search-availability id="1687"></search-availability>  */}
      <search-availability id="1687" clientemail="true"></search-availability>

    </Box>
  );
}
