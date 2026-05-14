const customTryCatch = async <T>(
  // callback: Promise<T>,
  method: FetchMethod,
  apiUrl: string,
  options: RequestInit,
): Promise<ReturnType<T>> => {
  try {
    const request = await fetch(apiUrl, { ...options, method });
    if (!request.ok) {
      const message = await request.text();
      throw new Error('An error occured' + message);
    }
    const data = (await request.json()) as T;
    return { data, error: null, success: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Unexpected error, try again.';
    return { success: false, error: message, data: null };
  }
};

export default customTryCatch;

type ReturnType<T = null> = ErrorResponse | SuccessResponse<T>;

type ErrorResponse = {
  success: false;
  data: null;
  error: string;
};

type SuccessResponse<T> = {
  success: true;
  data: T;
  error: null;
};

type FetchMethod = 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE';
