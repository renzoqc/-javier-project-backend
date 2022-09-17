import { IResponseCat } from "src/interfaces/cat.interface"

export const ApiResponse = (
    message: string,
    body: any,
    extra: string
    ): IResponseCat => {
    return {
        message: message,
        content: body,
        extra: extra,
    }
}
