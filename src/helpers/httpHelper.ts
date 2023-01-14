export default async function httpHelper(request: RequestInfo): Promise<any> {
    const response = await fetch(request);
    return await response.json();
}