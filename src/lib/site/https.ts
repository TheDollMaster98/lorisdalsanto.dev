// Porta su https chi arriva in http, prima che la pagina venga mostrata.
// Rete di sicurezza finché "Enforce HTTPS" non è attivo nelle impostazioni di
// GitHub Pages; in locale (localhost, 127.0.0.1) non fa niente.
export const httpsRedirectScript = `if(location.protocol==="http:"&&!/^(localhost|127\\.0\\.0\\.1)$/.test(location.hostname))location.replace("https:"+location.href.slice(5));`;
