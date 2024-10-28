export class Logger{

    static startFunction(context: string, fx: string):void {
        console.log(`[${context}] [ACTION] ${fx}`)
    }

    static endFunction(context: string, fx: string, value: any | "void"):void {
        console.log(`[${context}] [RESULT] ${fx} -> ${value}`)
    }

    static errorFunction(context: string, fx: string, message: any):void {
        console.error(`[${context}] [ERROR] ${fx} -> ${message}`)
    }
}