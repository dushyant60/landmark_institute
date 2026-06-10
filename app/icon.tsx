import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: 'linear-gradient(135deg, #0B5ED7 0%, #0F2A5E 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          borderRadius: '8px',
          fontWeight: 900,
          fontFamily: 'sans-serif',
          boxShadow: '0 2px 8px rgba(11, 94, 215, 0.3)',
        }}
      >
      </div>
    ),
    {
      ...size,
    }
  );
}
