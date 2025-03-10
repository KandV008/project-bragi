/**
 * Logger class provides utility methods for logging actions, results, errors, and other log levels.
 */
export class Logger {

    /**
     * Logs the start of a function execution.
     * 
     * @param context - The context where the function is executed (e.g., module or feature name).
     * @param fx - The name of the function or action being executed.
     */
    static startFunction(context: string, fx: string): void {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${context}] [ACTION] ${fx}`);
    }
  
    /**
     * Logs the result of a function execution.
     * 
     * @param context - The context where the function is executed (e.g., module or feature name).
     * @param fx - The name of the function that was executed.
     * @param value - The result of the function execution or "void" if no value is returned.
     */
    static endFunction(context: string, fx: string, value: any | "void"): void {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] [${context}] [RESULT] ${fx} -> ${value}`);
    }
  
    /**
     * Logs an error that occurred during function execution.
     * 
     * @param context - The context where the error occurred (e.g., module or feature name).
     * @param fx - The name of the function in which the error occurred.
     * @param message - The error message or details about the error.
     */
    static errorFunction(context: string, fx: string, message: any): void {
      const timestamp = new Date().toISOString();
      console.error(`[${timestamp}] [${context}] [ERROR] ${fx} -> ${message}`);
    }
  
    /**
     * Logs an informational message about a function execution.
     * 
     * @param context - The context in which the informational log is generated.
     * @param fx - The name of the function or action generating the log.
     * @param message - The informational message to be logged.
     */
    static infoFunction(context: string, fx: string, message: any): void {
      const timestamp = new Date().toISOString();
      console.info(`[${timestamp}] [${context}] [INFO] ${fx} -> ${message}`);
    }
  
    /**
     * Logs a warning message about a function execution.
     * 
     * @param context - The context in which the warning is generated.
     * @param fx - The name of the function or action generating the warning.
     * @param message - The warning message to be logged.
     */
    static warnFunction(context: string, fx: string, message: any): void {
      const timestamp = new Date().toISOString();
      console.warn(`[${timestamp}] [${context}] [WARN] ${fx} -> ${message}`);
    }
  }
  