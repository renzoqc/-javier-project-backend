export const ApiResponse = (message: any, body: any) => {
    return {
        message: message,
        content: body,
        extra: "",
    }
}
