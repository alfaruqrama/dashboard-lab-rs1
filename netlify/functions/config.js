exports.handler = async function(event, context) {
  // GS_URL diambil dari Netlify Environment Variable
  // Tidak pernah masuk ke GitHub, hanya ada di server Netlify
  const gsUrl = process.env.GS_URL || '';

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      // Hanya izinkan diakses dari domain yang sama (bukan dari luar)
      'Access-Control-Allow-Origin': process.env.URL || '*',
      // Jangan cache di browser — selalu ambil fresh dari server
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify({
      gsUrl: gsUrl,
    }),
  };
};
