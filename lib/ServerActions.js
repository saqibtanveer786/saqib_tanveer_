"use server"


export async function submitForm(data) {
    if (!data?.name || !data?.email || !data?.message) return { message: "Please enter all credentials", status: false };
    const url = process.env.HOST + '/api/sendemail'
    const response = await fetch(url, {
        method: 'post',
        cache: 'no-cache',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    const jsonResponse = await response.json()
    return jsonResponse
}
