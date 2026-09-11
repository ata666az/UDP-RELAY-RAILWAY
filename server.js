// SEBELUM
const WS_PORT = parseInt(process.env.WS_PORT || '8443', 10);

// SESUDAH
const WS_PORT = parseInt(process.env.PORT || process.env.WS_PORT || '8443', 10);