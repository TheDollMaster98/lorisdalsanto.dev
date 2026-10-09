// Porta su https chi arriva in http, prima che la pagina venga mostrata.
// Rete di sicurezza finché "Enforce HTTPS" non è attivo nelle impostazioni di
// GitHub Pages. Solo su lorisdalsanto.it: in locale, da un IP di rete o con
// `npx serve` non interviene.
export const httpsRedirectScript = `if(location.protocol==="http:"&&/(^|\\.)lorisdalsanto\\.it$/.test(location.hostname))location.replace("https:"+location.href.slice(5));`;
