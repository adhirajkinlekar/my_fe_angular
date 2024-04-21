import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    // Handle the error (e.g., log it, display a friendly message to the user)
    console.log('An error occurred:', error);
    // Optionally, rethrow the error to propagate it further
  }
}
