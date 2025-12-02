export function localizedHref(path, locale) {
    return `/${locale}${path === "/" ? "" : path}`;
}
