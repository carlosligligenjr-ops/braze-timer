1. import { ImageResponse } from 'next/og';
2. 
3. export const runtime = 'edge';
4. 
5. export async function GET() {
6.   // Target: Septmember 20, 2026, 12:00 PM Singapore (SGT is UTC+8)
7.   // 12:00 PM SGT = 04:00 AM UTC
8.   const targetDate = new Date('2026-09-22T04:00:00Z');
9.   const now = new Date();
10.   const diff = targetDate.getTime() - now.getTime();
11. 
12.   if (diff <= 0) {
13.     return new ImageResponse(
14.       (
15.         <div style={{
16.           display: 'flex', background: 'black', width: '100%', height: '100%',
17.           alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 60, fontWeight: 'bold'
18.         }}>
19.           TEST!
20.         </div>
21.       ),
22.       { width: 600, height: 200 }
23.     );
24.   }
25. 
26.   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
27.   const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
28.   const minutes = Math.floor((diff / 1000 / 60) % 60);
29.   const seconds = Math.floor((diff / 1000) % 60);
30. 
31.   return new ImageResponse(
32.     (
33.       <div style={{
34.         display: 'flex', flexDirection: 'column', background: 'black',
35.         width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center',
36.         color: 'white', fontFamily: 'sans-serif'
37.       }}>
38.         <div style={{ fontSize: 24, marginBottom: 10, letterSpacing: '2px' }}></div>
39.         <div style={{ display: 'flex', fontSize: 64, fontWeight: 'bold' }}>
40.           {days}d : {hours}h : {minutes}m : {seconds}s
41.         </div>
42.       </div>
43.     ),
44.     { width: 600, height: 200 }
45.   );
46. }
