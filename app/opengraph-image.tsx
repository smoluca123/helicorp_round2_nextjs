import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'ASUS ROG Zephyrus G14';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: 40,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(255,255,255,0.1)',
            borderRadius: 20,
            padding: 60,
            background: 'rgba(0,0,0,0.5)',
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 900,
              letterSpacing: '0.05em',
              marginBottom: 20,
              textAlign: 'center',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
          >
            ROG Zephyrus G14
          </h1>
          <p
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#a1a1aa',
              textAlign: 'center',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Đỉnh Hiệu Năng. Bậc Phong Cách
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
