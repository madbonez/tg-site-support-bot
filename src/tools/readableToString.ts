export async function readableToString(readable) {
    let result = '';
    for await (const chunk of readable) {
        result += chunk;
    }
    return result;
}
