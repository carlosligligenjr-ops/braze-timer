import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  // Target: March 15, 2026, 12:00 PM Singapore (SGT is UTC+8)
  // 12:00 PM SGT = 04:00 AM UTC
  const targetDate = new Date('2026-03-15T04:00:00Z');
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return new ImageResponse(
      (
        <div style={{
          display: 'flex', background: 'black', width: '100%', height: '100%',
          alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 60, fontWeight: 'bold'
        }}>
          UNPACKED!
        </div>
      ),
      { width: 600, height: 200 }
    );
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return new ImageResponse(
    (
      <div style={{
        display: 'flex', flexDirection: 'column', background: 'black',
        width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center',
        color: 'white', fontFamily: 'sans-serif'
      }}>
        <div style={{ fontSize: 24, marginBottom: 10, letterSpacing: '2px' }}></div>
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 'bold' }}>
          {days}d : {hours}h : {minutes}m : {seconds}s
        </div>
      </div>
    ),
    { width: 600, height: 200 }
  );
}
