export const useHttp = () => {
  const request = async(url: string, method: string = 'GET', body: string) => {
    if (method == "POST") {
      const response = await fetch(`${process.env.API_HOST}/addOperator`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
      });
    } else {
      const res = await fetch(`https://payment-terminal-mu.vercel.app//${url}`);
      const data = await res.json();
      return data
    }
  }
  return { request }
}
