export function escapeDeezScripts(str: string) {
    return str.replace(/<script(.*?)>(.*?)<\/script>/gi, "&lt;script$1&gt;$2&lt;/script&gt;");
}
