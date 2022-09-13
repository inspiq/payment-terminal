export const useHttp = () => {
  const request = async(url: string, method: string = 'GET', body: any) => {
    if (method == "POST") {
      const response = await fetch('https://payment-terminal-mu.vercel.app/api/addOperator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
      });
    } else {
      const res = await fetch(`https://payment-terminal-mu.vercel.app/${url}`);
      const data = await res.json();
      return data
    }
  }
  return { request }
}
