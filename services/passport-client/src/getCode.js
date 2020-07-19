export default () => {
    const url = new URL(window.location.href)
    return url.searchParams.get('code')
}