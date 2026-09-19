import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  // Target: September 22, 2026, 12:00 PM Singapore (SGT is UTC+8) -> 04:00 AM UTC
  const targetDate = new Date('2026-09-22T04:00:00Z');
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  const bgUrl = 'https://braze-images.com/appboy/communication/assets/image_assets/images/6aae3539569b21008fd3cee3/original.png?1789801785';

  if (diff <= 0) {
    return new ImageResponse(
      (
        <div style={{
          display: 'flex',
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: '100% 100%',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justify: 'center',
          color: 'white',
          fontSize: 32,
          fontWeight: 'bold',
        }}>
          DEAL IS LIVE!
        </div>
      ),
      { width: 600, height: 200 }
    );
  }

  // Formatting hours to account for days (e.g., 2 days 3 hours = 51 hours)
  const totalHours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Zero-padding digits (e.g., 05:09:02)
  const pad = (n: number) => String(n).padStart(2, '0');
  const timeString = `${pad(totalHours)}:${pad(minutes)}:${pad(seconds)}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: '100% 100%',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '20px',
        }}
      >
        {/* Header Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#FFFFFF',
            fontSize: 20,
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: 16,
            lineHeight: 1.25,
          }}
        >
          <span>Watch out for more Postpaid-exclusive</span>
          <span>deals on the GlobeOne app!</span>
        </div>

        {/* White Rounded Badge Box */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 14,
            padding: '8px 36px',
            boxShadow: '0 0 20px rgba(100, 150, 255, 0.6)', // Soft blue glow around the pill
          }}
        >
          {/* Countdown Numbers */}
          <div
            style={{
              color: '#000000',
              fontSize: 38,
              fontWeight: 800,
              letterSpacing: '1px',
            }}
          >
            {timeString}
          </div>
        </div>
      </div>
    ),
    { width: 600, height: 200 }
  );
}
