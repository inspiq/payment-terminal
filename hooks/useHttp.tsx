type Nullable<T> = T | null;

export const useHttp = () => {
  const request = async(url: string, method: string = 'GET', body: string | {} | Nullable<number>) => {
    if (method == "POST") {
      const response = await fetch('https://gleaming-horse-8f4804.netlify.app/api/addOperator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(body)
      });
    } else {
      const res = await fetch(`https://gleaming-horse-8f4804.netlify.app/${url}`);
      const data = await res.json();
      return data
    }
  }
  return { request }
}
